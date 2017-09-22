import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Bootcomponent } from './Boot.Component'
import { CommonModule } from '@angular/common';
import { MdGridListModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import {MdCardModule} from '@angular/material';
import{DialogModule} from '../../app/popup/dialog.module'
import {MdDialogModule} from '@angular/material';
import{DialogComponent}from '../../app/popup/dialog.component'

@NgModule({
  exports: [Bootcomponent],
  declarations: [Bootcomponent],
  imports: [CommonModule, FormsModule, MdGridListModule, MdSelectModule,MdCardModule,DialogModule,MdDialogModule]
})
export class BootModule
{ }