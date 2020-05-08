import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankComponent } from './bank.component';
import { BankService } from './bank.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ BankComponent ],
  providers: [ BankService ]
})
export class BankModule { }