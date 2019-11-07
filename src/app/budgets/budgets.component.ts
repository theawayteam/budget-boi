import { Component, OnInit } from '@angular/core';
export interface Budget {
  category: string;
  budgeted: number;
  outflows: number;
  balance: number;
}

const ELEMENT_DATA: Budget[] = [
  {category: 'Mortgage', budgeted: 3298, outflows: 3298, balance: 0},
  {category: 'Needs', budgeted: 200, outflows: 92.61, balance: 1659.46},
  {category: '6 month payments', budgeted: null, outflows: null, balance: 19788},
  {category: 'Emergency Fund', budgeted: null, outflows: null, balance: 15000},
  {category: 'Services', budgeted: null, outflows: null, balance: 0},
  {category: 'HOA', budgeted: 35.28, outflows: null, balance: 141.12}
];

@Component({
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: string[] = ['Categories', 'Budgeted', 'Outflows', 'Balance'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    
  }
}