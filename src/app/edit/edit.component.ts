import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router, private data: GlobalService, private location: Location){}
  items=this.data.items;
  item=this.data.item;
 
  ngOnInit() {
  }
  back(){
    this.location.back();
  }
}
