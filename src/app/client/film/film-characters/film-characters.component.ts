import { Component, OnInit, Input } from '@angular/core';
import { CharacterDetails } from '../../../core/models/characterDetails';

@Component({
  selector: 'app-film-characters',
  templateUrl: './film-characters.component.html',
  styleUrls: ['./film-characters.component.scss']
})
export class FilmCharactersComponent implements OnInit {
  
  @Input() public characters: CharacterDetails[]
    /**
   * Films detail loading status
   */
  public loadingFilmsDetail = true;
   /**
   * Columns whitch will be displayed in the film details table
   */
  public displayedFilmDetailColumns: string[] = [
    'name',
    'birthYear',
    'gender',
    'eyeColor',
    'hairColor',
    'height',
    'mass',
    'skinColor',
  ];
  public constructor() { }

  ngOnInit() {
  }

}
