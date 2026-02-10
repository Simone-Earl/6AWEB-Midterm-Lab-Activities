import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, catchError, of } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  // Caching mechanism: Store the observable, not just the data
  private postsCache$: Observable<Post[]> | null = null;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    if (!this.postsCache$) {
      // Fetch and cache the response
      this.postsCache$ = this.http.get<Post[]>(this.apiUrl).pipe(
        shareReplay(1), // Replays the last emission to new subscribers (Caching)
        catchError(err => {
          console.error('Error loading posts', err);
          return of([]); // Return empty array on error
        })
      );
    }
    return this.postsCache$;
  }
}
