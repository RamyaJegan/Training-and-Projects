import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @ViewChild(HomeComponent) items;
  @ViewChild(HomeComponent) item;
  
  constructor() { }

  ngOnInit() {
  }

}
