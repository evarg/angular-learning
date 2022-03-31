import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Grain } from '../../../models/Grain.interface'

@Component({
  selector: 'app-grains-details',
  templateUrl: './grains-details.component.html',
  styleUrls: ['./grains-details.component.css']
})
export class GrainsDetailsComponent implements OnInit {

  id: any;
  paramsSub: any;

  grain: Grain = {
    name: "Oczekiwanie na pobranie danych",
    name_latin: "",
    desc: "",
    image: "",
  };

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));

    this.http.get<Grain>('http://localhost/grains/' + this.id).subscribe(
      data => this.grain = data,
      err => console.log(err)
    )
  }

  onCancel() {
    this.router.navigate(['/grains']);
  }

  onChange() {
    this.router.navigate(['/grains/change/' + this.id]);
  }


  onDelete() {
    this.http.delete<Grain>('http://localhost/grains/' + this.id).subscribe(
      data => {
        this.grain = data;
        this.router.navigate(['/grains/']);
      },
      err => console.log(err)
    )
  }

}
