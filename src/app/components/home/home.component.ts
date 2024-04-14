import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { LineGraphComponent } from '../line-graph/line-graph.component';
import { TetrioService } from '../../services/tetrio.service';
import { ServerStatistics } from '../../models/general';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DecimalPipe,
    LineGraphComponent,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public serverStatistics!: ServerStatistics;
  public serverActivity!: number[];

  constructor(private tetrioService: TetrioService) {}

  ngOnInit(): void {
    this.tetrioService.general
      .getServerStatistics()
      .subscribe((response) => (this.serverStatistics = response.data));
    this.tetrioService.general
      .getServerActivity()
      .subscribe((response) => (this.serverActivity = response.data.activity));
  }
}
