import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
 {path:'Users',component: UserComponent},
 {path:'Posts',component:PostComponent},
 {path:'UserForm',component:UserFormComponent},
 {path:'EditForm',component:EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[UserComponent,PostComponent];

