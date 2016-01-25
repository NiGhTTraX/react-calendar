import webdriverio from 'webdriverio';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';


chai.use(chaiAsPromised);

const expect = chai.expect;

const SELENIUM_HUB_URL = 'hub';
const PLAYGROUND_URL = 'http://playground';

const BROWSER_OPTIONS = {
  host: SELENIUM_HUB_URL,
  desiredCapabilities: {
    browserName: 'chrome'
  }
};


describe('ReactCalendar', function() {
  let client;

  before(function() {
    this.timeout(10 * 1000);

    client = webdriverio.remote(BROWSER_OPTIONS).init();

    return client.url(PLAYGROUND_URL);
  });

  it('should be work in progress', function() {
    return expect(client.getText('.calendar')).to.eventually.contain('WIP');
  });
});
