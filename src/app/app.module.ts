import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule,MatButtonModule,MatIconModule,MatCardModule,MatSidenavModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { FormsModule } from '@angular/forms';
//import { MenudemoComponent } from './menudemo/menudemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
//import { BootstrapModalModule } from 'ng2-bootstrap-modal';
//import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule,Routes } from '@angular/router';
import {DeleteComponent} from './delete/delete.component';
import { GlobalService } from './global.service';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
const routes:Routes=[
 {
   path:'',
   redirectTo:'Home',
   pathMatch:'full'
 }, 
  {
    path:'profile',
    component:HomeComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'edit',
    component:EditComponent
  },
  {
    path:'add',
    component:AddComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SidenavdemoComponent,
    HomeComponent,
    DeleteComponent,
    EditComponent,
    AddComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,    
    MatSidenavModule ,
    FormsModule,
    RouterModule.forRoot(routes)
    //ModalModule.forRoot()
   
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
