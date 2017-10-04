import { AngularWithMaterialPage } from './app.po';

describe('angular-with-material App', () => {
  let page: AngularWithMaterialPage;

  beforeEach(() => {
    page = new AngularWithMaterialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
