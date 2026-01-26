import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  private url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/products?limit=5');
  }
}
