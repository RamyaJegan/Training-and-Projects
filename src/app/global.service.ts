import { Injectable } from '@angular/core';
interface record{
  id:number;
  name:string;
  component:string;
  panel:string;
  parts:number;
   value:string;
}

@Injectable({
  providedIn: 'root'
  
})

export class GlobalService {
  item :record  ={id:null,name:"",component:"",panel:"",parts:null,value: ""};
  items:Array<record>=[
    {id:1,name:"ramya",component:"j",panel:"dw",parts:123,value: ""},
    {id:2,name:"rama",component:"s",panel:"ddw",parts:123,value: ""},
    {id:3,name:"ramya kannan",component:"k",panel:"ddw",parts:123,value: ""}
  ];
  constructor() { }
}
