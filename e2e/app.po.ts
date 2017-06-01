import { browser, by, element } from 'protractor';

export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yo-root h1')).getText();
  }
}
