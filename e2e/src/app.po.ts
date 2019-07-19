import { browser, by, element } from 'protractor';
/**
 * class App Page
 */
export class AppPage {
  /**
 * class e2e navigate
 */
  public navigateTo(): any {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
/**
 * class e2e titletexts
 */
  public getTitleText(): any {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
