import { browser, element, by } from 'protractor';

export class NgChatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-chat-root h1')).getText();
  }
}
