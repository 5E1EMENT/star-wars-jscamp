import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public User:any
  public dataFilms:any = []

  constructor(private home: HomeService) { }

  

  ngOnInit() {
    this.home.getData().subscribe(data => {
      this.dataFilms = Object.values(data["films"]).map(film => film["fields"])
      console.log(this.dataFilms)
    })
  }
}