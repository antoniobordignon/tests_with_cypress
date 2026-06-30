module.exports = {
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    video: false,
    screenshotOnRunFailure: false,
    pageLoadTimeout: 120000,
    blockHosts: [
      'events.backtrace.io',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
    ],
  },
};
