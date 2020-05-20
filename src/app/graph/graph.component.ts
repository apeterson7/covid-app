import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { WeatherService } from '../service/weather.service';
import { Covid19 } from '../model/covid19'
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  
  covid19: Covid19;
  zipcode: String;
  errorMsg: String;

  lat: number;
  long: number;

  lineChartLabels: Label[];
  lineChartData: ChartDataSets[];
  lineChartOptions;
  lineChartColors: Color[]
  lineChartLegend: boolean;
  lineChartPlugins;
  lineChartType: string;


  constructor(
    private weatherService: WeatherService, 
  ) { 
  }

  ngOnInit(): void {
    this.zipcode = '02468';
    this.weatherService.findByZipCode(this.zipcode).subscribe(
      res => {
        this.covid19 = res.covid19;
        this.lat = this.covid19.latitude;
        this.long = this.covid19.longitude;

        this.lineChartLabels =  this.covid19.dateReport.map(date => date.toLocaleString()).reverse();
        this.lineChartData = [
          { data: this.covid19.confirmed.reverse(), label: 'Confirmed' },
          { data: this.covid19.deaths.reverse(), label: 'Deaths' }
        ];

        this.lineChartOptions = {
          responsive: true,
        };
      
        this.lineChartColors = [
          {
            borderColor: 'black',
            backgroundColor: 'rgba(255,255,0,0.28)',
          },
        ];
      
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        
        console.log(res);
      }
    );
  }

  changeZip(){
    console.log(this.zipcode);
    this.weatherService.findByZipCode(this.zipcode).subscribe(
      res => {
        this.covid19 = res.covid19;
        this.lat = this.covid19.latitude;
        this.long = this.covid19.longitude;

        this.lineChartLabels =  this.covid19.dateReport.map(date => date.toLocaleString()).reverse();
        this.lineChartData = [
          { data: this.covid19.confirmed.reverse(), label: 'Confirmed' },
          { data: this.covid19.deaths.reverse(), label: 'Deaths' }
        ];
        this.errorMsg = null;
      },
      err => {
        console.log(err);
        this.errorMsg = "Invalid Zipcode";
      });
  }
 
  changeCoordinates(latitude: number, longitude: number){
    console.log("in change coordiantes")
    this.zipcode = null;
    this.lat = latitude;
    this.long = longitude;
    console.log(this.lat);
    console.log(this.long);

    
    this.weatherService.findByCoordinates(latitude, longitude).subscribe(
      res => {
        this.covid19 = res.covid19;

        this.lineChartLabels =  this.covid19.dateReport.map(date => date.toLocaleString()).reverse();
        this.lineChartData = [
          { data: this.covid19.confirmed.reverse(), label: 'Confirmed' },
          { data: this.covid19.deaths.reverse(), label: 'Deaths' }
        ];
        this.errorMsg = null;
      },
      err => {
        console.log(err);
        this.errorMsg = "Invalid Zipcode";
      });
  }
}
