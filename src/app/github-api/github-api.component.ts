import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-github-api',
  templateUrl: './github-api.component.html',
  styleUrls: ['./github-api.component.scss']
})

export class GithubApiComponent implements OnInit {
  userName: string = '';
  response: any;
  post: any = '';
  formGroup: FormGroup;
  validAlert: string = 'Invalid username. Please read the comment above';
  constructor(private http: HttpClient, private formBuilder: FormBuilder ) {

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const userregex: RegExp = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(userregex)]]
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  onSubmit(post) {
      this.post = post;
  }

  search() {
    this.userName = this.name.value;
    this.http.get(' https://api.github.com/search/users?q=' + this.userName)
      .subscribe((response) => {
        this.response = response;
        // console.log(JSON.stringify(response['items']));

        console.log(this.response);
        console.log(this.userName);
      }); }
}
