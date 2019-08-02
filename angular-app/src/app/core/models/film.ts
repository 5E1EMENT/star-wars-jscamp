/**
 * Interface for film data structure
 */
export interface Film {
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

}
