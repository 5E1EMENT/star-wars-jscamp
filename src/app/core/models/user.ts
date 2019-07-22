/**
 * Interface for User data
 */
export interface User {
    /**
     * Field email - user email from response api
     */
    email: string;
    /**
     * Field idToken - user token id from response api
     */
    idToken: string;
    /**
     * Field kind - user kind id from response api
     */
    kind: string;
    /**
     * Field localId - user local from response api
     */
    localId: string;
    /**
     * Field registered - user registered from response api
     */
    registered: boolean;
  }
