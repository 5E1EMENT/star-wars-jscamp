import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  dataFilms:any = []

  constructor(private home: HomeService) { }
  
  getData() {
    this.home.getData().subscribe(data => {
      this.dataFilms = Object.values(data["films"]).map(film => film["fields"])
      console.log(this.dataFilms)
    })
  }
  
  ngOnInit() {

  }
}