import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MockPostService } from 'src/app/services/mock-post.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostDto, CommentDto } from 'src/app/models/app.dtos';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {
  currentPost$: Observable<PostDto | null> = of(null);
  commentForm: FormGroup = new FormGroup({
    message: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private mockPostService: MockPostService
    ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.currentPost$ = this.mockPostService.getUserPosts('username').pipe(map(posts => {
      const currPost = posts.find(post => post.id.toString() === postId)
      return !!currPost ? currPost : null
    }))
  }

  onSubmit(): void {
    const comment: CommentDto = { 
      name: "UserA",
      created: new Date().toString(),
      message: this.commentForm.controls['message'].value 
    } as CommentDto;

    console.log("Hey a new comment", comment)
  }

}
