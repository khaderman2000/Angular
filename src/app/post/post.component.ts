import { Component, OnInit } from '@angular/core';
import { PostVM,PostService } from '../services';
import { PostModel } from '../services/PostModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   public _posts?:PostVM[];
public title="";
public post= new PostModel(0,"",9);
public index?: number;

  constructor(private _postServise:PostService) { }

  ngOnInit(): void {
    this._postServise.apiPostGetAllPostsGet().subscribe(data=>this._posts=data);

  }

   
  getIndex(i: number){
    this.index=i+1;
  }
 share(){
  this.post.title=this.title;
  this.post.userId=9;
  this.post.id=0
  this._postServise.apiPostAddPostsPost(this.post).subscribe();
  console.log(this.post.id);
  
 }
}
