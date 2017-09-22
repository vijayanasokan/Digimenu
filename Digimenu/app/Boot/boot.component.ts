import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import{DialogComponent} from '../../app/popup/dialog.component'

@Component({
  selector: "boot",
  templateUrl: "../../app/Boot/boot.html",
   styleUrls: ['../../app/Boot/card-fancy-example.css']
})
export class Bootcomponent {
  tiles = [
    { image: '../../app/images/f1.jpg', text:"haiee" },
{ image: '../../app/images/f2.jpg',text:"haiidiot"},
{ image: '../../app/images/f3.jpg', text:"hai" },
{ image: '../../app/images/f4.jpg', text:"hai" },
{ image: '../../app/images/f5.jpg', text:"hai" },
{ image: '../../app/images/f6.jpg', text:"hai" },
{ image: '../../app/images/f7.jpg', text:"hai" },
{ image: '../../app/images/f8.jpg', text:"hai" },
{ image: '../../app/images/f9.jpg', text:"hai" }
  ];




  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

   navigate(tiles){
        alert(tiles.text);
    }


  animal: string;
  name: string;

  constructor(public dialog: MdDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: "abc", animal: "abc" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}