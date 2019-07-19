import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

/**
 * Home component for displaying film data when user will login
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  private User: any;

  constructor(private homeService: HomeService) { }

  private displayedColumns: string[] = ['title', 'episode', 'release_date', 'director'];
  private dataSource = [];
  /**
   * Initialize films data witch will be used to display to the user
   */
  public ngOnInit(): any {
    this.homeService.getData().subscribe(data => {
      this.dataSource = Object.values(data['films']).map(film => film['fields']);
      console.log(this.dataSource);
    });
  }
}
