import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address ;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
        this.name = 'rajan upadhyay'; 
        this.email = 'rajan@gmail.com'
        this.address = {
            street: '1000 N 4th street',
            city: 'Fairfield',
            state: 'IA'
        }
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(posts=>{
            console.log(posts);
            this.posts = posts;
        })
  }

  toggleHobbies(){
      console.log('showHobbies');
      this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby:string){
      console.log(hobby);
      this.hobbies.push(hobby);
  }

  deleteHobby(i:number){
      this.hobbies.splice(i, 1);
  }


}

interface address{
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}