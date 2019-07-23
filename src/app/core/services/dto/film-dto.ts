/**
 * FilmDto - allows to match our film data with our layout data
 */
interface FilmRecordDto {
    /**
     * frelease_date - film release date
     */
    release_date: string;
    /**
     * title - film title
     */
    title: string;
    /**
     * episode_id - film episode id
     */
    episode_id: number;
    /**
     * director - film director
     */
    director: string;
  }

  /**
   * FilmDto - film dto
   */
export interface FilmDto extends DatabaseRecord<FilmRecordDto> {
  
}

export interface DatabaseRecord<T> {
    /**
   * fields - films data
   */
  fields: T;
}
