import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Grain } from '../../../models/Grain.interface'

@Component({
  selector: 'app-grains-list',
  templateUrl: './grains-list.component.html',
  styleUrls: ['./grains-list.component.css']
})
export class GrainsListComponent implements OnInit {

  grains: Grain[] = [];

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.http.get<Grain[]>('http://localhost/grains').subscribe(
      data => this.grains = data,
      err => console.log(err)
    )
  }

  onNew() {
    this.router.navigate(['/grains/add']);
  }
}
