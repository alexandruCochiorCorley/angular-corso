import { Injectable } from '@angular/core';

@Injectable()
export class BankService {

  constructor() { }

  calcAmount(n: number): number {
    return n * 0.5;
  }

}