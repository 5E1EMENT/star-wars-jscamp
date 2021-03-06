/**
 * Detailed film interface
 */
export interface DetailFilm {
  /**
   * Field title - film name
   */
  title: string;
  /**
   * Film index in database array
   */
  databaseId: number;
  /**
   * Field releaseDate - release date
   */
  releaseDate: Date;
  /**
   * Field episodeId - episode number
   */
  episodeId: number;
  /**
   * Field director - episode director
   */
  director: string;
  /**
   * Opening crawl
   */
  openingCrawl: string;
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
