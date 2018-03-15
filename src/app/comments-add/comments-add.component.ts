import { Component, OnInit } from '@angular/core';

import { CommentsAddService } from './comments-add.service';

@Component({
  selector: 'app-comments-add',
  templateUrl: './comments-add.component.html',
  providers: [CommentsAddService],
  styleUrls: ['./comments-add.component.css']
})

export class CommentsAddComponent {
  counter_likes = 0;
  counter_likes_clicked = false;
  counter_followers = 0;
  counter_followers_clicked = false;

  constructor(private commentsAddService: CommentsAddService) { }

  add(form) {
    // Add new comment
    let commentContainer = document.getElementById('comments__list');
    let commentNew = document.createElement('li');
    commentNew.classList.add('comment__wrapper', 'new');
    commentNew.innerHTML = '<div class="comment__photo"><div class="comment__photo__img"></div></div><div class="comment__data"><div class="comment__author">Bartek Szewczyk</div><div class="comment__text">' + form.text + '</div></div><div class="comment__date">1d</div>';
    commentContainer.appendChild(commentNew);

    document.getElementById("comments__list").scrollTo(0, 99999);

    this.commentsAddService.postComments(form.text).subscribe();
  }
}
