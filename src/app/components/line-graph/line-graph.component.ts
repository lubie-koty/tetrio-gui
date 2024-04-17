import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Chart, ChartConfiguration } from 'chart.js/auto';
import 'chartjs-adapter-moment';

@Component({
  selector: 'app-line-graph',
  standalone: true,
  imports: [],
  templateUrl: './line-graph.component.html',
  styleUrl: './line-graph.component.scss',
})
export class LineGraphComponent implements OnInit, OnChanges {
  @Input({ required: true }) chartData: number[] = [];
  public chart!: Chart;

  ngOnInit(): void {
    Chart.defaults.font.size = 8;
    this.chart = this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['chartData'].previousValue === changes['chartData'].currentValue
    ) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.chart.data.datasets.pop();
    const today = new Date();
    const endDate = new Date(today.setDate(today.getDate() - 1));
    const startDate = new Date(today.setDate(today.getDate() - 1));
    this.chart.data.datasets.push({
      label: 'Users Active',
      data: this.parseChartData(startDate, endDate),
      pointStyle: false,
    });
    this.chart.update();
  }

  private parseChartData(startDate: Date, endDate: Date) {
    if (this.chartData === undefined || !this.chartData.length) {
      return [];
    }
    const parsedData = [];
    let tempDate: Date = new Date(startDate);
    let idx: number = this.chartData.length - 1;
    while (tempDate.getTime() <= endDate.getTime()) {
      parsedData.push({
        x: tempDate.getTime(),
        y: this.chartData[idx],
      });
      tempDate.setTime(tempDate.getTime() + 30 * 60 * 1000);
      idx--;
    }
    return parsedData;
  }

  private createChart(): Chart {
    const today = new Date();
    const maxDate = new Date(today.setDate(today.getDate() - 1));
    const minDate = new Date(today.setDate(today.getDate() - 1));

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Users Active',
            data: this.parseChartData(minDate, maxDate),
            pointStyle: false,
          },
        ],
      },
      options: {
        parsing: false,
        plugins: {
          decimation: {
            enabled: true,
            algorithm: 'lttb',
            samples: 48,
          },
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: {
            type: 'time',
            max: maxDate.toISOString(),
            min: minDate.toISOString(),
            time: {
              displayFormats: {
                hour: 'HH:mm DD-MM',
              },
            },
          },
        },
      },
    };

    const chart = new Chart('LineChart', config);
    return chart;
  }
}
