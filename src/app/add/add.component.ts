import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   sub:any=0;
 // private id:any;
  items=this.data.items;
  item=this.data.item;
  constructor(private router:Router, private data: GlobalService, private location: Location,private route:ActivatedRoute){}
  
 
  ngOnInit() {
    this.sub = this.route.snapshot.queryParamMap.get("id");
    this.sub=this.sub-1;
   console.log("id",this.sub)

  }

  back(){
    this.location.back();
    
  }
  
}
