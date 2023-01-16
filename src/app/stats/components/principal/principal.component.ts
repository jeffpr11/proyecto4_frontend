
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  datos: ChartConfiguration<'line'>['data'] = {
    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    datasets: [
      {
        label: 'Enciende',
        data: [1, 8, 2, 3, 8, 8, 5],
        fill: false,
        tension: 0.5,
        borderColor: '#36A2EB',
        backgroundColor: '#36A2EB',
        hoverBorderColor: '#36A2EB',
        hoverBackgroundColor: '#9BD0F5',
      },
      {
        label: 'Pirofobia',
        data: [9, 2, 9, 4, 8, 5, 6],
        fill: false,
        tension: 0.5,
        borderColor: 'red',
        backgroundColor: 'red',
        hoverBorderColor: '#36A2EB',
        hoverBackgroundColor: '#9BD0F5',
      },
      {
        label: 'Tierra prometida',
        data: [4, 5, 2, 6, 7, 3, 10],
        fill: false,
        tension: 0.5,
        borderColor: '#AD8E70',
        backgroundColor: '#AD8E70',
        hoverBorderColor: '#36A2EB',
        hoverBackgroundColor: '#9BD0F5',
      },
      {
        label: 'Crecimiento y Cambio',
        data: [5, 1, 2, 5, 6, 2, 2],
        fill: false,
        tension: 0.5,
        borderColor: '#0A2647',
        backgroundColor: '#0A2647',
        hoverBorderColor: '#36A2EB',
        hoverBackgroundColor: '#9BD0F5',
      },
      {
        label: 'Mosaico',
        data: [9, 9, 2, 3, 10, 7, 2],
        fill: false,
        tension: 0.5,
        borderColor: '#3C6255',
        backgroundColor: '#3C6255',
        hoverBorderColor: '#36A2EB',
        hoverBackgroundColor: '#9BD0F5',
      },
      {
        label: 'Comunidad de Varones',
        data: [6, 4, 2, 6, 2, 8, 8],
        fill: false,
        tension: 0.5,
        borderColor: '#6C00FF',
        backgroundColor: '#6C00FF',
        hoverBorderColor: '#36A2EB',
        hoverBackgroundColor: '#9BD0F5',
      },
    ]
  };
  
  circleDataset: number[] = [1, 8, 2, 3, 8, 8, 5];

  circleData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4', 'Subgrupo 5', 'Subgrupo 6', 'Subgrupo 7'],
    datasets: [
      {
        data: this.circleDataset
      }
    ]
  };

  ngOnInit(): void {
  }

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  public changeList(event: Event) {
    this.circleData = {
      
      labels: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4', 'Subgrupo 5', 'Subgrupo 6', 'Subgrupo 7'],
      datasets: [
        {
          data: Array.from({length: 7}, () => Math.floor(Math.random() * 10))
        }
      ]
    };

  }

}
