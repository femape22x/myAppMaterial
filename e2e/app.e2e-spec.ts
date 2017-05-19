import { MyAppMaterialPage } from './app.po';

describe('my-app-material App', function() {
  let page: MyAppMaterialPage;

  beforeEach(() => {
    page = new MyAppMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
