import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { NewsEntry, NewsType } from '../../models/news';

@Component({
  selector: 'app-news-entry',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './news-entry.component.html',
  styleUrl: './news-entry.component.scss',
})
export class NewsEntryComponent {
  @Input({ required: true }) newsEntry!: NewsEntry;
  public NewsTypeEnum = NewsType;
  readonly NewsNameMap = {
    [NewsType.Badge]: 'Badge',
    [NewsType.Leaderboard]: 'Leaderboard Change',
    [NewsType.PersonalBest]: 'Personal Best',
    [NewsType.Rankup]: 'User Rankup',
    [NewsType.Supporter]: 'Supporter',
    [NewsType.SupporterGift]: 'Supporter Gift',
  };
}
