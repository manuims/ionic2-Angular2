import { Component,OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

  category:any;
  barActive:boolean=true;
  pieActive:boolean;
  doughnutActive:boolean;

   constructor(public navCtrl: NavController) {

  }

ngOnInit()
{
  this.category='bar';
 
   
}

onChange(value)
  {
    
    if(value == "pie")
    {
      this.barActive = false;
      this.pieActive = true;
      this.doughnutActive = false;
    }
    else if(value == "doughnut")
    {
      this.barActive = false;
      this.pieActive = false;
      this.doughnutActive = true;
    }
   else if(value == "bar")
      {
         this.barActive = true;
          this.pieActive = false;
          this.doughnutActive = false;
      }
    
   

       this.category = value;

  }


   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) { 
                        return tooltipItems.datasetIndex == 0?tooltipItems.yLabel:tooltipItems.yLabel + ' % ';
                    }
                }
            },
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Growth %'}
  ];


  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }



  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

public randomizePie()
{
   let data = [
      Math.round(Math.random() * 100),
      60,
      80,
      (Math.random() * 100),
      50,
      (Math.random() * 100),
      60];
    let clone = JSON.parse(JSON.stringify(this.pieChartData));
    clone[0].data = data;
    this.pieChartData = clone;
}

   // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

 
}
