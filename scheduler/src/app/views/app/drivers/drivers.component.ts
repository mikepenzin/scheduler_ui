import { Component, OnInit } from '@angular/core';
import { DriversService } from './service/drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
