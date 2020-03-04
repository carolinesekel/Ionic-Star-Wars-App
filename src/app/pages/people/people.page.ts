import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.people = this.api.getPeople();
  }

  openPerson(person){
    let split = person.url.split('/');
    let PersonId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${PersonId}`);
  }

}
