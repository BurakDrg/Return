import { Component, OnInit } from '@angular/core';
import { Map } from '../map';
@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {
  map: Map={
    id : 5 ,
    name : 'deneme prop'

  };

  constructor() { }

  ngOnInit() {
  }

}

