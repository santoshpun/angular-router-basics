import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../smartphone.service';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {

  smartphones: any = [];

  constructor(private smartphoneService: SmartphoneService) { }

  ngOnInit() {
    this.getSmartphones();
  }

  getSmartphones() {
    this.smartphoneService.getSmartphone().subscribe(data => {
      for (let d of (data as any)) {
        this.smartphones.push({
          name: d.name,
          price: d.price
        });
      }
      console.log(this.smartphones);
    });
  }

}
