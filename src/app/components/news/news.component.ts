import { Component, OnInit } from '@angular/core';

import { TetrioService } from '../../services/tetrio.service';
import { NewsEntry } from '../../models/news';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
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
