import { Component, Input } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html'
})
export class BindingComponent  {

  constructor() {
    console.log('111')
  }

  public name: string = 'Pippo';

  public changeName(name: string): void {
    this.name = name;
  }
}