import { Component, OnInit } from '@angular/core';
import { Market } from '../market';
import {LOCATIONS} from '../locations';
import { Options } from 'selenium-webdriver/ie';
import { Product } from '../product';
import { pipeBind1 } from '@angular/core/src/render3';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {

  Marketler = LOCATIONS;
  nearestMarket:Market;

  selectedMarket:Market;

  userPosition:Position;



  
  p1:Product = {name:"Torku süt", sku:5, price:123 , image: "http://torku.com.tr/Upload/Contents/d56502a3-e225-4dba-a4e8-ef522c51860eciftci-sutu-list.png"};

  migrosArray: Array<Product> = [this.p1];
  


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
        this.nearestMarket = this.findNearestMarket(position.coords.latitude , position.coords.longitude);

        
      },
      (error) =>{

      },
      {enableHighAccuracy:true}
      );
      
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  findNearestMarket(lat : number , longi: number):Market{
    let minMarket:Market;
    let minDistance:number = 9999999999;

    for(let market of LOCATIONS){
      let distance:number = Math.sqrt( (market.x-lat)**2 + (market.y-longi) ** 2  );
      console.log(distance);
      if(distance < minDistance){
        minDistance = distance;
        minMarket = market;
      }
    }

    return minMarket;


  }


}








