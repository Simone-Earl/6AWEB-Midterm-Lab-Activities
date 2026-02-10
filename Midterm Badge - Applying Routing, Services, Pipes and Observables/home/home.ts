import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { map, Observable } from 'rxjs';
import { TruncatePipe } from '../truncate.pipe';
import { Post } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // We just get the stream; the template handles the slicing
    this.posts$ = this.dataService.getPosts();
  }
}
