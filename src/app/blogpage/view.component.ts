import { Component, OnInit } from '@angular/core';
import {ModelService} from '../model/model.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
    viewData:any;  
  constructor() {
      this.viewData = JSON.parse(localStorage.getItem("blogdata"))
      console.log(this.viewData);
    }

  ngOnInit(): void {
  }

}
