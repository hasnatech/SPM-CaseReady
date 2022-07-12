import { Component, OnInit } from '@angular/core';
import { NgxPrintDirective } from 'ngx-print';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.scss']
})
export class M1Component implements OnInit {
  selectedTab = 1;
  constructor(public service:MainService) { }

  ngOnInit(): void {
  }



  content(n:any){
    this.selectedTab = n
  } 

  showbtn = false

  submit(){
    this.showbtn = true
  } 





}
