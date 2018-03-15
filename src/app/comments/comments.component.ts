import { Component, OnInit } from '@angular/core';

import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  providers: [ CommentsService ],
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  comments = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.getComments().subscribe(data => this.comments = data);
  }
}
