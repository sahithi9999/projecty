import { Component, OnInit,ViewChild,ElementRef,AfterViewInit,OnDestroy,ChangeDetectorRef, } from '@angular/core';
import { CompanydataService } from 'src/app/companydata.service';
 import { StockpriceService } from 'src/app/stockprice.service';
 import { Router } from '@angular/router';
 import { Companydata } from '../companydata';
 import { Observable } from 'rxjs/internal/Observable';
 import { Stockprice } from 'src/app/stockprice';
 import { SectorService } from 'src/app/sector.service';
  import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
 import { Sector } from '../sector'; 
  import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
 import { HighchartsService } from './highcharts.service';
  import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
})
export class ComparecompanyComponent implements OnInit {

  myGroup: FormGroup;

 constructor(private hcs: HighchartsService, private formBuilder: FormBuilder, private router: Router, private companydataservice:CompanydataService,private sectorService: SectorService, private stockpriceService: StockpriceService) { }

 companyList: Companydata[];

 companyListAll: Companydata[];

 sectorsList: Sector[];

 stockpriceList: Observable<Stockprice[]>;

 ngOnInit() {

  this.stockpriceService.getmultiplelinechart().subscribe(result => {

   var formatteddata = [];

   for (var key in result) {

    var singleObject = {

     name: '',

     data: []

    }

    singleObject.name = key.toUpperCase();

    for (var i = 0; i < result[key].length; i++) {

     singleObject.data.push(parseInt(result[key][i].currentPrice));

    }

    formatteddata.push(singleObject);

   }

   this.drawMultipleLineChart(formatteddata);

  });

  this.myGroup = this.formBuilder.group({

   "choose": new FormControl([Validators.required]),

   "sectorName": new FormControl([Validators.required]),

   "companyName": new FormControl([Validators.required]),

   "fromdate": new FormControl([Validators.required]),

   "todate": new FormControl([Validators.required])

  })

  this.companydataservice.getAllCompanydata().subscribe(data => {

   this.companyList = data;

   this.companyListAll = data;

   this.companyList = this.companyList.filter(comp => comp.sector == 'NSE');

  })

  this.stockpriceService.getAllStockprice().subscribe(data => {

   this.stockpriceList = data;

  })

  this.sectorService.getAllSectors().subscribe(data => {

   this.sectorsList = data;

  })

 }

 sectorChange() {

  alert(1234);

  var sectorValue = this.myGroup.controls['sectorName'].value;

  this.companyList = this.companyListAll.filter(comp => comp.sector == sectorValue);

 }

 drawMultipleLineChart(formatteddata) {

 Highcharts.chart('container', {

   title: {

    text: 'Current price, 2010-2019'

   },

   subtitle: {

    text: 'Source: thesolarfoundation.com'

   },

   yAxis: {

    title: {

     text: 'Number of Company'

    }

   },

   legend: {

    layout: 'vertical',

    align: 'right',

    verticalAlign: 'middle'

   },

   plotOptions: {

    series: {

     label: {

      connectorAllowed: false

     },

     pointStart: 2000

    }

   },

   series: formatteddata,

   responsive: {

    rules: [{

     condition: {

      maxWidth: 500

     },

     chartOptions: {

      legend: {

       layout: 'horizontal',

       align: 'center',

       verticalAlign: 'bottom'

      }

     }

    }]

   }

  });

 }

}

