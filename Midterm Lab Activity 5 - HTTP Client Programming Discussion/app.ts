import { User } from './user.model';
import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ng-http-client-demo');
  httpUsers: User[] = [];
  products: any[] = [];

  constructor(private httpclientList: Httpclient) {}

  ngOnInit(): void {
    this.httpclientList.getUsersRemotely().subscribe((data) => {
      this.httpUsers = data;
    });

    this.httpclientList.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}
