/**
 * Class for User data
 */
export class User {
  /**
   * Field email - user email from response api
   */
  public email: string;
  /**
   * Field idToken - user token id from response api
   */
  public idToken: string;
  /**
   * Field kind - user kind id from response api
   */
  public kind: string;
  /**
   * Field localId - user local from response api
   */
  public localId: string;
  /**
   * Field registered - user registered from response api
   */
  public registered: boolean;
  /**
   *
   */
  constructor(userResponse: Partial<User>) {
    this.idToken = userResponse.idToken;
    this.email = userResponse.email;
}
}
