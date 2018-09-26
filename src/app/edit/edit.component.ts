import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router, private data: GlobalService, private location: Location,private route:ActivatedRoute){}
  items=this.data.items;
  item=this.data.item;  
  id:any=0;
  position:any;
  ngOnInit() {
    this.id=this.route.snapshot.queryParamMap.get("id");
    let index = Object.keys(this.items);    
    for (let i of index) { 
      if(this.id==this.items[i].id){      
        console.log(this.item=this.items[i]);
         this.position=i;
      }
    }
  }
  update(item){   
    console.log("Update",item)
    this.items[this.position]=item;       
    console.log("Item Array:",this.items)
    this.router.navigate(['/profile']);
  }
  back(){
    this.location.back();
  }
}
