import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-api',
  templateUrl: './github-api.component.html',
  styleUrls: ['./github-api.component.scss']
})
// export class GithubApiComponent implements OnInit {
//   userName: string = '';
//   response: any;
//   constructor(private http: HttpClient ) {
//
//   }
//
//   search() {
//     this.http.get('https://api.github.com/users/' + this.userName)
//       .subscribe((response) => {
//         this.response = response;
//         console.log(this.response);
//       }); }
//
//   ngOnInit() {
//   }
//
// }
export class GithubApiComponent implements OnInit {
  userName: string = '';
  response: any;
  constructor(private http: HttpClient ) {

  }

  search() {
    this.http.get(' https://api.github.com/search/users?q=' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      }); }

  ngOnInit() {
  }

}
