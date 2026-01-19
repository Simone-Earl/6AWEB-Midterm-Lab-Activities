import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './products';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'services-demo';

  public products: {
    productId: string;
    productName: string;
    description: string;
    price: string;
  }[] = [];

  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  constructor(
    private _productsService: Products,
    private _employeeService: Employee
  ) {}

  ngOnInit() {
    this.products = this._productsService.getProducts();
    this.employees = this._employeeService.getEmployees();
  }
}
