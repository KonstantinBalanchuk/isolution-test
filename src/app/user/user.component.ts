import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: object;
  reposCount: number;
  constructor(private http: HttpClient, private route: ActivatedRoute ) {

  }

  fetchUserData(id) {
    this.http.get('https://api.github.com/user/' + id)
      .subscribe((userData: object) => {
        this.user = userData;
        console.log(this.user);
        this.fetchRepos(this.user.login);
      });
  }

  fetchRepos(username) {
    this.http.get('https://api.github.com/users/' + username + '/repos')
      .subscribe((repos: Array<object>) => {
        this.reposCount = repos.length;
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fetchUserData(params.id);
    });
  }
}
