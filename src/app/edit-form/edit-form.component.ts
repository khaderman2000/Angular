import { Component, OnInit } from '@angular/core';
import { Test2 } from '../test2';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  
  constructor() { }
  userModel=new Test2(0,'','','','');

  ngOnInit(): void {
  }
  saveUser(){

  }

}
