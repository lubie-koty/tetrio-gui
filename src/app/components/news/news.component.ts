import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { TetrioService } from '../../services/tetrio.service';
import { NewsEntry } from '../../models/news';
import { NewsEntryComponent } from '../news-entry/news-entry.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    NewsEntryComponent,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  public newsData!: NewsEntry[];

  constructor(private tetrioService: TetrioService) {}

  ngOnInit(): void {
    this.tetrioService.news
      .getNews()
      .subscribe((response) => (this.newsData = response.data.news));
  }
}
