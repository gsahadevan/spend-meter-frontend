import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrl = 'api/transaction';

  constructor(private http: Http) { }

  getTransactions(): Promise<Transaction[]> {
    return this.http.get('http://localhost:3000/transaction/')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
