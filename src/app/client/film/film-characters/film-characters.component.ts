import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { CharacterDetails } from '../../../core/models/characterDetails';
/**
 * Component displays characters information
 */
@Component({
  selector: 'app-film-characters',
  templateUrl: './film-characters.component.html',
  styleUrls: ['./film-characters.component.scss'],
})
export class FilmCharactersComponent {
  /**
   * Property whitch we get from film compnent filmCharacters$ variable
   */
  @Input() public characters: Observable<CharacterDetails[]>;
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

}
