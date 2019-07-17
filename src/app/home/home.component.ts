import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  constructor(private home: HomeService) { }
  
  getData() {
    return this.home.getData().subscribe(data => this.users = data)
  }
  
  ngOnInit() {

  }
}