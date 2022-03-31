import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grain } from '../../../models/Grain.interface'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grains-form-change',
  templateUrl: './grains-form-change.component.html',
  styleUrls: ['./grains-form-change.component.css']
})
export class GrainsFormChangeComponent implements OnInit {

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

  onSubmit() {
    this.http.put<Grain>('http://localhost/grains/' + this.id, this.grain).subscribe(
      data => {
        console.log("DATA: " + data);
      },
      err => {
        console.log(err);
      }
    );;
  }

  onCancel() {
    this.router.navigate(['/grains/details/' + this.id]);
  }


}
