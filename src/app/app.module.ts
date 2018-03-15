import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsAddComponent } from './comments-add/comments-add.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentsComponent,
    CommentsAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
