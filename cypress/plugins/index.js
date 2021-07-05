const { startDevServer } = require('@cypress/vite-dev-server')
const codeCoverageTask = require('@cypress/code-coverage/task')
const istanbul = require('vite-plugin-istanbul')

module.exports = (on, config) => {
  on('dev-server:start', (options) =>
    startDevServer({
      options,
      viteConfig: {
        clearScreen: false,
        server: {
          // Ignore coverage file changes
          watch: {
            ignored: 'coverage/**/*.*'
          }
        },
        plugins: [istanbul({})],
      },
    })
  );

  codeCoverageTask(on, config);
  return config;
};
