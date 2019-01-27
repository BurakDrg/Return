import { Component, OnInit } from '@angular/core';
import { Market } from './market';
import {LOCATIONS} from './locations';
import { Options } from 'selenium-webdriver/ie';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss']
})
export class DenemeComponent implements OnInit {

  Marketler = LOCATIONS;

  selectedMarket:Market;

  userPosition:Position;

  constructor() { }

  ngOnInit() {
    this.findMe();
  }

  onSelect(market: Market): void{
    this.selectedMarket = market;


  }



  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userPosition = position;
        
        
      },
      (error) =>{

      },
      {enableHighAccuracy:true}
      );


    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}








