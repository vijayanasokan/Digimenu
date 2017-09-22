import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { DialogComponent } from './dialog.component'
import { CommonModule } from '@angular/common';
import {MdCardModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [DialogComponent],
  declarations: [DialogComponent],
  imports: [CommonModule, FormsModule,MdCardModule,MdDialogModule,BrowserAnimationsModule]
})
export class DialogModule
{ }