import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, of } from 'rxjs';


@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, KeyValuePipe, CommonModule, PercentPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  name = 'Madarang, Simone Earl D.';

  price = 20000;

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNuml = 8.7589623;
  decimalNum2 = 5.43;

  data = {
    name: 'Simone',
    age: 20,
    course: 'IT'
  };

  score = 0.85;

  message$ = of('Loaded!').pipe(delay(2000));
}
