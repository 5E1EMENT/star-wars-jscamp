/**
 * FilmDto - allows to match our film data with our layout data
 */
interface FilmRecordDto {
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
}

/**
 * FilmDto - extends DatabaseRecord because api needs fields field
 */
export interface FilmDto extends DatabaseRecord<FilmRecordDto> {}
/**
 * DatabaseRecord for fields wrapper
 */

export interface DatabaseRecord<T> {
  /**
   * Films data - fields
   */
  fields: T;
}
