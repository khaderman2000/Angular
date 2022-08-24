import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService,AuthenticateService, PostService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
   routingComponent,
   UserFormComponent,
   EditFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [UserService,PostService,AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
