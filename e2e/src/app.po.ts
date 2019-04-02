import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getText(cssElementName: string) {
    return element(by.css(cssElementName)).getText() as Promise<string>;
  }

  /**
   * Use the textContent attribute to get the element text even if the element is hidden
   * you can see how this attribute work in this link https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/
   * @param cssElementName css elemente reference. Exemplo: 'span .mySpan'
   */
  getHiddenText(cssElementName: string) {
    return element(by.css(cssElementName)).getAttribute('textContent') as Promise<string>;
  }
}
