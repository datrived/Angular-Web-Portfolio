import { WebAsterPage } from './app.po';

describe('web-aster App', () => {
  let page: WebAsterPage;

  beforeEach(() => {
    page = new WebAsterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
