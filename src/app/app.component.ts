import { Component, OnInit } from '@angular/core';
// facebook login
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Facebook Login';
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  public signInWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }
}
