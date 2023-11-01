import { Component, Input, OnInit, ViewChild, signal } from '@angular/core';
import { ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PercentagesService } from 'src/app/services/percentages.service';

@Component({
  selector: 'app-circular-chart',
  templateUrl: './circular-chart.component.html',
  styleUrls: ['./circular-chart.component.scss'],
})
export class CircularChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() percentage = 0;
  @Input() label = '';

  data: number[] = [];

  doughnutChartLabels: string[] = [];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
      },
    ],
  };
  doughnutChartOptions: ChartOptions<'doughnut'> = {
    cutout: '80%',
    animation: {
      animateRotate: false,
    },
  };

  ngOnInit(): void {
    this.doughnutChartLabels = [this.label || 'No data'];
    this.onChartChange();
  }

  onChartChange(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: [
            this.percentage ? this.percentage : 0,
            this.percentage ? 100 - this.percentage : 100,
          ],
        },
      ],
    };
    this.chart?.chart?.update();
  }
}
