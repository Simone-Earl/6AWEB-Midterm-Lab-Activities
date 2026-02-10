import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { DataService } from '../data.service';
import { TruncatePipe } from '../truncate.pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TruncatePipe, ReactiveFormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})

export class Services implements OnInit {
  filteredPosts$!: Observable<Post[]>;
  searchControl = new FormControl(''); // Reactive form control for search

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const posts$ = this.dataService.getPosts();
    
    // Create a stream for the search term
    const search$ = this.searchControl.valueChanges.pipe(
      startWith('') // Start with empty string so list shows immediately
    );

    // Combine streams to filter automatically
    this.filteredPosts$ = combineLatest([posts$, search$]).pipe(
      map(([posts, term]) => {
        const lowerTerm = (term || '').toLowerCase();
        return posts.filter(p => 
          p.title.toLowerCase().includes(lowerTerm) || 
          p.body.toLowerCase().includes(lowerTerm)
        );
      })
    );
  }
}