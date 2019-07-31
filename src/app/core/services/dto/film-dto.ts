/**
 * FilmRecordDto - allows to match our film data with our layout data
 */
export interface FilmRecordDto {
  /**
   * Film release date - frelease_date
   */
  release_date: string;
  /**
   * Film title - title
   */
  title: string;
  /**
   * Film episode id - episode_id
   */
  episode_id: number;
  /**
   * Film director - director
   */
  director: string;
  /**
   * Opening crawl
   */
  opening_crawl: string;
  /**
   * Producer
   */
  producer: string;
  /**
   * Characters
   */
  characters: number[];
  /**
   * Planets
   */
  planets: number[];
  /**
   * Species
   */
  species: number[];
  /**
   * Starships
   */
  starships: number[];
  /**
   * vehicles
   */
  vehicles: number[];
}
/**
 * Interface allows to use field field in API database
 */
export interface DatabaseRecord<T> {
  /**
   * Films data - fields
   */
  fields: T;
}
