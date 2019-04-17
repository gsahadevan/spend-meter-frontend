import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];
  selectedTransaction: Transaction;
  error: any;
  constructor(
    private router: Router,
    private transactionService: TransactionService
  ) { }
  getTransactions() {
    this.transactionService.getTransactions().then(transactions => this.transactions = transactions);
  }
  ngOnInit() {
    console.log('ngOnInit of TransactionListComponent');
    this.getTransactions();
  }
  onSelect(transaction: Transaction) {
    this.selectedTransaction = transaction;
  }

}
