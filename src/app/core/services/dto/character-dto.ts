import { DatabaseRecord } from './film-dto';

/**
 * FilmDto - allows to match our film data with our layout data
 */
interface CharacterRecordDto {
    /**
     * Character birth year
     */
    birth_year: string;
    /**
     * Character eye color
     */
    eye_color: string;
    /**
     * Character gender
     */
    gender: string;
    /**
     * Characters hair color
     */
    hair_color: string;
    /**
     * Character heigth
     */
    height: string;
    /**
     * Character mass
     */
    mass: string;
    /**s
     * Character name
     */
    name: string;
    /**
     * Character skin color
     */
    skin_color: string;
  }

  /**
   * Character Dto
   */
  export interface CharacterDto extends DatabaseRecord<CharacterRecordDto> {}
