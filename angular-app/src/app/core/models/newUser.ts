/**
 * Class new user
 */
export class newUser {
  /**
   * Field idToken - user token id from response api
   */
  public idToken: string;
  /**
   * Field email - user email from response api
   */
  public email: string;
  /**
   * Field refreshToken - user refresh token
   */
  public refreshToken: string;
  /**
   * Field expiresIn - when user token will be expired
   */
  public expiresIn: string;
  /**
   * Field localId - user local from response api
   */
  public localId: string;
  /**
   * .ctor
   * @param userResponse uses the User class and set up idToken and email values
   */
  public constructor(userResponse: Partial<newUser>) {
    this.idToken = userResponse.idToken;
    this.email = userResponse.email;
  }
}
