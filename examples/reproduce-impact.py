#!/usr/bin/env python3
"""Reproduce Sangyan research arithmetic, not a tax or claim-processing engine.

All investor inputs are synthetic. --check compares against the committed JSON.
Default prints JSON; --write updates impact-examples.json beside this script.
Uses Python's standard library only.
"""
from datetime import date, timedelta
from decimal import Decimal
from pathlib import Path
import argparse
import json

D = Decimal


def money(value):
    return str(D(value).quantize(D('0.01')))


def examples():
    q, buy, sell = D('2000'), D('400'), D('600')
    proceeds, cost = q * sell, q * buy
    gain = proceeds - cost
    rate, threshold = D('0.125'), D('125000')
    tax = lambda g: max(D(0), g - threshold) * rate
    e1 = {
        'id': 'E1', 'kind': 'synthetic_conditional_tax_example',
        'inputs': {'quantity': 2000, 'buy_price_inr': '400', 'sale_price_inr': '600',
                   'annual_threshold_inr': '125000', 'rate': '0.125'},
        'outputs': {'cost_inr': money(cost), 'proceeds_inr': money(proceeds),
                    'correct_gain_inr': money(gain), 'zero_cost_gain_inr': money(proceeds),
                    'gain_overstatement_inr': money(cost),
                    'correct_tax_before_cess_inr': money(tax(gain)),
                    'incorrect_tax_before_cess_inr': money(tax(proceeds)),
                    'tax_difference_before_cess_inr': money(tax(proceeds)-tax(gain))},
        'assumptions': ['FY 2025-26 qualifying listed-equity long-term gain',
                        'No other gains/losses or basic-exemption adjustment',
                        'No cess, surcharge, fees or final statutory rounding',
                        'Zero substitution is a hypothetical downstream error, not a stated broker default'],
        'source_ids': ['S001', 'S020']}
    base = D('200000')
    parent, child = base * D('0.9532'), base * D('0.0468')
    e2 = {'id':'E2', 'kind':'synthetic_issuer_ratio_application',
          'inputs':{'original_cost_inr':'200000','parent_fraction':'0.9532','child_fraction':'0.0468'},
          'outputs':{'parent_cost_inr':money(parent),'child_cost_inr':money(child),
                     'correct_total_cost_inr':money(parent+child),
                     'duplicate_basis_overstatement_inr':money(child)},
          'assumptions':['Pure cost allocation for the specified RIL/RSIL event; no intervening transactions'],
          'source_ids':['S021']}
    original, ratio, child_q, child_sale = D('300000'), D('0.1351'), D('100'), D('200')
    child_cost, child_proceeds = original*ratio, child_q*child_sale
    e3 = {'id':'E3','kind':'synthetic_issuer_ratio_application',
          'inputs':{'parent_quantity':1000,'original_cost_inr':'300000','child_quantity':100,
                    'child_cost_fraction':'0.1351','child_sale_price_inr':'200'},
          'outputs':{'parent_cost_inr':money(original-child_cost),'child_cost_inr':money(child_cost),
                     'child_unit_cost_inr':money(child_cost/child_q),'proceeds_inr':money(child_proceeds),
                     'simple_gain_loss_inr':money(child_proceeds-child_cost),
                     'zero_cost_gain_inr':money(child_proceeds),'basis_difference_inr':money(child_cost)},
          'assumptions':['Applies ITC revised allocation to invented historical cost',
                         'Simple proceeds less allocated cost; loss tax utility not calculated'],
          'source_ids':['S022']}
    e4 = {'id':'E4','kind':'synthetic_acquisition_component_reconciliation',
          'inputs':{'quantity':100,'entitlement_unit_cost_inr':'30','subscription_unit_cost_inr':'200'},
          'outputs':{'total_outlay_inr':money(D(100)*(D(30)+D(200))),
                     'omitted_component_inr':money(D(100)*D(30))},
          'assumptions':['All purchased entitlements exercised; no charges, lapse or partial exercise',
                         'Not a legal determination of allowable tax basis'], 'source_ids':['S001','S006']}
    e5 = {'id':'E5','kind':'synthetic_simple_fifo',
          'inputs':{'first_lot_quantity':100,'first_lot_price_inr':'100',
                    'second_lot_quantity':100,'second_lot_price_inr':'500',
                    'sale_quantity':100,'sale_price_inr':'600'},
          'outputs':{'fifo_cost_inr':money(D(100)*D(100)),
                     'average_method_cost_inr':money(D(100)*(D(100)+D(500))/D(2)),
                     'fifo_gain_inr':money(D(100)*(D(600)-D(100))),
                     'average_method_gain_inr':money(D(100)*(D(600)-D(300))),
                     'gain_difference_inr':money(D(100)*D(200))},
          'assumptions':['Simple sequential purchases and sale in one account; no corporate actions',
                         'No holding-period or tax-rate computation'], 'source_ids':['S017']}
    e6 = {'id':'E6','kind':'arithmetic_difference_in_published_issuer_illustration',
          'inputs':{'revised_amount_inr':'54040','earlier_amount_inr':'50040'},
          'outputs':{'illustration_difference_inr':money(D(54040)-D(50040))},
          'assumptions':['Not an observed investor loss or recovery'], 'source_ids':['S022']}
    value, earlier, revised = D('2400000'), D('1500000'), D('3000000')
    e7 = {'id':'E7','kind':'synthetic_threshold_comparison',
          'inputs':{'claim_value_inr':str(value),'earlier_demat_threshold_inr':str(earlier),
                    'revised_demat_threshold_inr':str(revised)},
          'outputs':{'above_earlier_threshold':value>earlier,'within_revised_threshold':value<=revised},
          'assumptions':['Illustrates only value-band comparison; all route conditions still apply',
                         'Claim value is not money saved'], 'source_ids':['S057','S069','S073']}
    complete, asof = date(2026,9,1), date(2026,10,1)
    due = complete + timedelta(days=21)
    e8 = {'id':'E8','kind':'synthetic_procedural_clock',
          'inputs':{'assumed_complete_acknowledgement':complete.isoformat(),
                    'calendar_days':21,'as_of':asof.isoformat()},
          'outputs':{'calculated_date':due.isoformat(),'days_beyond_calculated_date':(asof-due).days},
          'assumptions':['Assumes an applicable rule and a verified complete-file acknowledgement',
                         'Simple date addition; professional review needed for actual legal deadline',
                         'No compensation amount inferred'], 'source_ids':['S057']}
    return {'research_cutoff':'2026-10-01','currency':'INR',
            'warning':'Research arithmetic only. No real investor savings, recoveries, or legal eligibility are established.',
            'examples':[e1,e2,e3,e4,e5,e6,e7,e8]}


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    mode=parser.add_mutually_exclusive_group()
    mode.add_argument('--check',action='store_true')
    mode.add_argument('--write',action='store_true')
    args=parser.parse_args()
    payload=examples()
    target=Path(__file__).with_name('impact-examples.json')
    if args.check:
        saved=json.loads(target.read_text())
        if saved != payload:
            raise SystemExit('FAIL: saved figures differ from recomputed examples')
        print('PASS: all 8 research examples match the saved inputs and outputs.')
    elif args.write:
        target.write_text(json.dumps(payload,indent=2,ensure_ascii=False)+'\n')
        print('Wrote',target)
    else:
        print(json.dumps(payload,indent=2,ensure_ascii=False))


if __name__ == '__main__':
    main()
