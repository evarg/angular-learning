import { Component } from '@angular/core';
import { GrainService } from '../grain.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = 'JavaLeaderAngularApp';
  employees : any = null;
  constructor(private apiService: GrainService) { }

  ngOnInit() {
    console.log('ngOnInit');
//console.log(this.apiService.getEmployees());
        this.apiService.getEmployees().subscribe((data : any) => {
      //this.employees = data;
      console.log(data);
    });
  }
}
