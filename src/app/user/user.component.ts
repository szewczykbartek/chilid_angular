import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService],
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  counter_likes = 0;
  counter_likes_clicked = false;
  counter_followers = 0;
  counter_followers_clicked = false;

  method = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.userCountListOne('likes').subscribe(data => this.counter_likes = <any>data);
    this.userService.userCountListOne('followers').subscribe(data => this.counter_followers = <any>data);
  }

  counterUpdate(system) {
    switch (system) {
      case 'likes':
        this.counter_likes_clicked = !this.counter_likes_clicked;
        if (this.counter_likes_clicked) {
          this.method = 'plus';
          this.counter_likes++;
        } else {
          this.method = 'minus';
          this.counter_likes--;
        }
        break;
      case 'followers':
        this.counter_followers_clicked = !this.counter_followers_clicked;
        if (this.counter_followers_clicked) {
          this.method = 'plus';
          this.counter_followers++;
        } else {
          this.method = 'minus';
          this.counter_followers--;
        }
        break;
    }
  }

  permalink() {
    alert(window.location.href);
  }
}
