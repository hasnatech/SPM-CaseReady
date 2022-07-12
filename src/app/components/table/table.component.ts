import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  a : any;
  b : any
  result: any

  // showcomment1 = false
  // showcomment2 = false
  // showcomment = false

  constructor(public service: MainService) { }

  ngOnInit(): void {
 
  }


  form = [
    {
      head1: 'Value Drivers',
      head2: 'Type',
      data1: 'Labor Savings - Cattle Count',
      data2: 'Tangible',
      data3: 'Accurate Cattle Count',
      data4: 'Tangible',
      data5: 'Early ID of Sick Cattle',
      data6: 'Intangible',
      data7: 'Fewer Trips to Feed Bunk - Labor',
      data8: 'Tangible',
      data9: 'Reduced environmental footprint - no ATVs for cattle count',
      data10: 'Sustainability',
      data11: 'Real Time Reporting on Cattle Health Data',
      data12: 'Service',
      data13: 'Drone Unable to Fly in Bad Weather',
      data14: 'Negative'

    },
  ]

  _negative = "Negative";

  dropdown = [
    "Tangible", "Intangible", "Functional", "Process", "Service", "Market-Based", "Sustainability", this._negative
  ]


  data = [
    {
      value: "",
      types: "",
      a:0,
      b:0,
      result:0
    },
    {
      value: "",
      types: "",
      a:0,
      b:0,
      result:0
    },
    {
      value: "",
      types: "",
      a:0,
      b:0,
      result:0
    }
  ];
  showbtn = false;
  print() {
    window.print();
  }
  showError = false;
  submit() {
   
    let validation = true;
    let negative = false;
    
    if (this.data.length > 2) {
      for (let i = 0; i < this.data.length; i++) {
        const element = this.data[i];
        console.log(element.types , this._negative, element.value)
        if (element.value.length == 0) {
          validation = false;
          
        }
        else{
          validation = true
        }

        if (element.types == this._negative) {
          negative = true;
          
        }
        else{
        
        }
       
      }
    }

    if (validation == true && negative == true) {
      this.showbtn = true
      this.showError = false
    } else {
      this.showError = true
      // this.showError = true;
     
    }

  }
  add() {
    this.data.push({
      value: "",
      types: "",
      a:0,
      b:0,
      result:0
    });
  }



  remove(item: number) {
    this.data.splice(item, 1);
  }

  grandTotal:any;
  calc(item:any){
    item.result = item.a * item.b;
    this.grandTotal=0;
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      this.grandTotal += element.result;
    }
  }

  addNumbers(){
     this.result = this.a * this.b
     let validation = true;

      if (this.data.length > 2) {
        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];
          if (element.value.length == 0) {
            validation = false;
          }
  

        }
      }
  
    }
  }


