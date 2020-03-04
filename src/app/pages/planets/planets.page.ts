import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: Observable<any>;
  
  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.planets = this.api.getPlanets();
  }

  openPlanet(planet){
    let split = planet.url.split('/');
    let PlanetId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/planets/${PlanetId}`);
  }
}
