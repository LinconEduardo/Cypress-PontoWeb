const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  projectId: "fa564o",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

"reporter": "mochawesome",
"reporterOptions": {
"reportDir": "cypress/report/mochawesome-report",
"overwrite": true,
"html": true,
"json": false,
"timestamp": "mmddyyyy_HHMMss"
}
});