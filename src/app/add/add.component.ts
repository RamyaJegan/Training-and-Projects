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
  //   this.sub = this.route.snapshot.queryParamMap.get("id");
  //   this.sub=this.sub-1;
  //  console.log("id",this.sub)
  this.item={id:null,name:"",component:"",panel:"",parts:null,value: ""}; 
  }
  add(item){
    // edit_item={id:null,name:"",component:"",panel:"",parts:null,value: ""}; 
     console.log("Before add:",item);
     const myObjStr = JSON.stringify(this.item);
     let data=JSON.parse(myObjStr)
     data.id=this.items.length+1;
     this.items.push(data);
     item=data;
     console.log("after add:",item);
     this.router.navigate(['/profile']);
   }  

  back(){
    this.location.back();
    
  }
  
}
