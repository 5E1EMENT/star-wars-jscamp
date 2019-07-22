/**
 * FilmDto - allows to match our film data with our layout data
 */

export interface FilmDto {
    /**
     * fields - films data
     */
    fields: {
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
    };
}
