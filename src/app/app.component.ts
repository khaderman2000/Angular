import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  constructor(private router: Router){}
  goToPosts(){
    this.router.navigateByUrl('/Posts');

  }
  goToUsers(){
    this.router.navigateByUrl('/Users');

  }
  
  
}
