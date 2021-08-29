import { Component, OnInit, Input } from '@angular/core';
import { CommentDto } from 'src/app/models/app.dtos';

@Component({
  selector: 'post-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentDto | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
