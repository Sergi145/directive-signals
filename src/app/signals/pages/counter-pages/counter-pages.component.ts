import {Component, signal, computed} from '@angular/core';

@Component({
  selector: 'app-counter-pages',
  templateUrl: './counter-pages.component.html',
  styleUrl: './counter-pages.component.css'
})
export class CounterPagesComponent {
    public counter = signal(10);
    public squareCounter = computed(()=> this.counter() *this.counter());

    increaseBy(value:number) {
      //this.counter.set(this.counter()+value);
      this.counter.update(current => current +value);
    }
}
