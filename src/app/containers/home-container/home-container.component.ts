import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostDto } from '../../models/app.dtos'
import { MockPostService } from '../../services/mock-post.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  userPosts$: Observable<PostDto[]> = of([]);

  constructor(private readonly postService: MockPostService, private router: Router ) { }

  ngOnInit(): void {
    this.userPosts$ = this.postService.getUserPosts('username');
  }

  handleCardClick(postId: number) {
    this.router.navigateByUrl(`/post/${postId}`)
  }

}
