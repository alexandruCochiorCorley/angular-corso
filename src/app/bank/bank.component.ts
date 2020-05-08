import { Component, Input } from '@angular/core';
 
import { BankService } from './bank.service';

@Component({
  selector: 'bank',
  templateUrl: './bank.component.html'
})
export class BankComponent  {

	amount: number = 100;
  rate: number;
  
  constructor(
    private service: BankService
  ) { }
  
	calc(n: number): void { 
    this.rate = this.service.calcAmount(n);
  }


}