import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { BankService } from './bank/bank.service';

import { BankModule } from './bank/bank.module';

const routes: Routes = [
  { path: '',   redirectTo: 'binding', pathMatch: 'full' },
  { path: 'binding', component: BindingComponent },
  { path: 'bank', component: BankModule },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, BankModule ],
  declarations: [ AppComponent, BindingComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BankService ]
})
export class AppModule { }
