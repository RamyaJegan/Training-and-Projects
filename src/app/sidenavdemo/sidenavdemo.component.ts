import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavdemo',
  templateUrl: './sidenavdemo.component.html',
  styleUrls: ['./sidenavdemo.component.css']
})
export class SidenavdemoComponent implements OnInit {
  show(){
    alert("Welcome you all to my sidenav")
  }
  display(){
    document.getElementById("disp").style.display="flex";
    
  }
  open(){
    document.getElementById("close").style.display="block";
    document.getElementById("open").style.display="none";
  }
  close(){
    document.getElementById("open").style.display="block";
    document.getElementById("close").style.display="none";
  
  }
  constructor() { }

  ngOnInit() {
  }

}
