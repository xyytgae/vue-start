// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'Router tests': (browser) => {
    browser.url(process.env.VUE_DEV_SEREVR_URL).pause(1000);
    browser.expect.element('#app').to.be.present.before(1000);
    browser.click('a[href="/about"]').pause(1000);

    browser.expect
      .element('#name')
      .to.have.attribute('class')
      .which.contains('search');

    browser.setValue('#name', '山田').click('#send');
    browser.expect.element('#result').text.to.equal('こんにちは、山田さん！');

    browser.end();
  },
};
