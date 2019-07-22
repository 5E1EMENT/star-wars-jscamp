/**
 * Interface for User data
 */
export interface User {
    /**
     * email - user email from response api
     */
    email: string;
    /**
     * idToken - user token id from response api
     */
    idToken: string;
    /**
     * kind - user kind id from response api
     */
    kind: string;
    /**
     * localId - user local from response api
     */
    localId: string;
    /**
     * registered - user registered from response api
     */
    registered: boolean;
  }
