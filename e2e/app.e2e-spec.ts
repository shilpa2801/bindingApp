import { BindAppPage } from './app.po';

describe('bind-app App', () => {
  let page: BindAppPage;

  beforeEach(() => {
    page = new BindAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
