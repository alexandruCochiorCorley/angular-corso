import { Component, Input } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html'
})
export class BindingComponent  {
  public name: string = 'Pippo';

  public chancgeName(name: string): void {
    this.name = name;
  }
}