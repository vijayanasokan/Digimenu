import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../../app/popup/dialog.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MdDialogRef<DialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}