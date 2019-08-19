import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  currentPageNumber: number = 1;
  itemsPerPage: number = 100;
  maxPages: number = 1000 / this.itemsPerPage; // Only the first 1000 search results are available
  url: string = 'https://api.github.com/search/users?q=';
  numberOfpages: Array<number>;
  userList: Array<object>;
  userName: string = '';
  response: any;
  formGroup: FormGroup;
  validAlert: string = 'Invalid username. Please read the comment above';

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.createForm();
    this.route.queryParams.subscribe(params => {
      if (params.query) {
        this.currentPageNumber = Number(params.page);
        this.name.setValue(params.query);
        this.search(params.page);
      }
    });
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

  userInfo(id) {
    this.router.navigate(['/user', id]);
  }

  changeParams(pageNumber) {
    this.router.navigate([], {
      queryParams: {
        page: pageNumber
      },
      queryParamsHandling: 'merge'
    });
  }

  search(pageNumber = 1) {
    this.userName = this.name.value;
    const url = this.url + this.userName + '&page=' + pageNumber + '&per_page=' + this.itemsPerPage;
    this.http.get(url)
      .subscribe((response) => {
        this.response = response;
        const result = this.response.items.map(x => ({
            id: x.id,
            login: x.login
          })
        );
        this.userList = result;
        const allAvailablePages = Array.from(Array(Math.round(this.response.total_count / this.itemsPerPage)).keys());
        this.numberOfpages = allAvailablePages.slice(0, this.maxPages);
      });
    this.router.navigate([], {
      queryParams: {
        query: this.userName
      },
      queryParamsHandling: 'merge'
    });
  }
}
