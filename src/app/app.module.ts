import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { BankService } from './bank/bank.service';

import { BankComponent } from './bank/bank.component';

const routes: Routes = [
  { path: '',   redirectTo: 'binding', pathMatch: 'full' },
  { path: 'binding', component: BindingComponent },
  { path: 'bank', component: BankComponent },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent, BindingComponent, BankComponent ],
  bootstrap: [ AppComponent ],
  providers: [ BankService ]
})
export class AppModule { }
