import { SdcJobsPage } from './app.po';

describe('sdc-jobs App', () => {
  let page: SdcJobsPage;

  beforeEach(() => {
    page = new SdcJobsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
