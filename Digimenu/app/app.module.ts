import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Appcomponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { BootModule } from './Boot/Boot.Module'
import { Bootcomponent } from './Boot/Boot.Component'


import { MdSelectModule } from '@angular/material';

import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router'
import {MdDialogModule} from '@angular/material';
import{DialogModule} from '../app/popup/dialog.module'
import{DialogComponent} from'../app/popup/dialog.component'


const appRoutes: Routes = [
  { path: '', component: Bootcomponent },
  { path: 'details', component: Bootcomponent}
  //  { path: '**', component:Appcomponent }
]

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    BootModule,
    MdSelectModule,
    MdDialogModule,
    DialogModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only

    )
  ],
  declarations: [Appcomponent],
  bootstrap: [Appcomponent]
})
export class AppModule { }