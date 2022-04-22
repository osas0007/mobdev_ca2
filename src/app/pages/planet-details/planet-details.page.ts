import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
  styleUrls: ['./planet-details.page.scss'],
})
export class PlanetDetailsPage implements OnInit {

  planets: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/planets/${id}`).subscribe(res => {
      this.planets = res;
    });
  }

}
