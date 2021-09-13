import { Component, OnInit } from '@angular/core';
import { Personal } from '../../models/Personal';
import {NgForm} from '@angular/forms';
import {PersonalService} from '../../services/personal.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public personalservice : PersonalService,public dialog:MatDialogRef<EditComponent>) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialog.close();
  }

  

}
