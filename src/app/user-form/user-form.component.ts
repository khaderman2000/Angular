import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, UserVM } from '../services';
import { Test } from '../test';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private _userService:UserService,private router: Router) {
   }
   userModel=new Test(0,'','','','','');
   
   saveUser(){
    this._userService.apiUserAddUserPost(this.userModel).subscribe();
    this.router.navigateByUrl('/Users')
  }
  
//public user:new UserClass(0,'khader','mansour','khadermansour','khade@mansour','kfshknj');
//user!:UserVM;
  ngOnInit(): void {
    
  }

}
