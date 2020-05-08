import { Component, Input } from '@angular/core';
 
import { BankService } from './bank.service';

@Component({
  selector: 'bank',
  templateUrl: './bank.component.html'
})
export class BankComponent  {

	amount: number = 100;
  
  constructor(
    service: BankService
  ) { }
  
	calc(n: number): number { 
    return this.service.calcAmount(n);
  }


}