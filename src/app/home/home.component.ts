import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit{
  show: boolean=false;
  hide: boolean=false;
  ngOnInit(){
   
  }
  constructor(private router:Router, private data: GlobalService){}
  items=this.data.items;
  item=this.data.item;
  edit(item)
  {
    this.show=true;
    this.hide=false;
    console.log("show",this.show,"Hide",this.hide)
    this.item= item;
    console.log("Edit",this.item);
    console.log("Item Array:",this.items)   
  } 
  update(item){   
    console.log("Update",item)
    this.items[item.id-1]=item;       
    console.log("Item Array:",this.items)
    this.router.navigate(['/edit']);
  }
  delete(item){
    let index=this.items.findIndex(item_v=>item_v.id===item.id);
    console.log(this.items.splice(index,1));
    console.log("Item Array:",this.items)
    this.router.navigate(['/delete']);
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
    this.router.navigate(['/add'],{ queryParams: { id: data.id } });
  }  
  clear(){    
    this.hide=true;
    this.show=false;
    console.log("show",this.show,"Hide",this.hide)
    this.item={id:null,name:"",component:"",panel:"",parts:null,value: ""}; 
  }
  
}

