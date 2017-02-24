import { ScotchCardsPage } from './app.po';

describe('scotch-cards App', function() {
  let page: ScotchCardsPage;

  beforeEach(() => {
    page = new ScotchCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
