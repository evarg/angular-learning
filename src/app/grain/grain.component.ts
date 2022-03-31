import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grain',
  templateUrl: './grain.component.html',
  styleUrls: ['./grain.component.css']
})
export class GrainComponent implements OnInit {
  @Input() name: string = "";
  @Input() image: string = "";
  @Input() desc: string = "";
  @Input() link: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}


