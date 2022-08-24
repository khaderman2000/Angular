import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService,UserVM } from '../services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService:UserService,private router: Router) { }
  public _users!: UserVM[];

 ngOnInit(): void {
   this._userService.apiUserGetAllUsersGet().subscribe(data=>this._users=data);
 }
 public index?: number;

getIndex(i: number){
  this.index=i+1;
}
delete(user:UserVM){
  console.log(user.id);
   this._userService.apiUserDeleteUserDelete(user.id).subscribe();


}
goToEdit(){
  this.router.navigateByUrl('/EditForm');
}
goToUserForm(){
  this.router.navigateByUrl('/UserForm');

}



}
