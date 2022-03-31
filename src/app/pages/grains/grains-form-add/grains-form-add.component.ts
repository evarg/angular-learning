import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ValidationService } from '../validation.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Grain } from '../../../models/Grain.interface'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-grains-form-add',
  templateUrl: './grains-form-add.component.html',
  styleUrls: ['./grains-form-add.component.css']
})
export class GrainsFormAddComponent implements OnInit {

  grain: Grain = {
    name: "Nowe nasionko",
    name_latin: "",
    desc: "",
    image: ""
  }

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(JSON.stringify(this.grain))

    this.http.post<Grain>('http://localhost/grains', this.grain).subscribe(
      data => {
        console.log("DATA: " + data);
        this.router.navigate(['/grains']);
      },
      err => {
        console.log(err);
      }
    );;
  }

  onCancel() {
    this.router.navigate(['/grains']);
  }

}
