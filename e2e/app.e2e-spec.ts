import { SmartdokPage } from './app.po';

describe('smartdok App', function() {
  let page: SmartdokPage;

  beforeEach(() => {
    page = new SmartdokPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
