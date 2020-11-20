module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eslint "src/**/*.{vue,js}"',
        watch: 'watch "$1" src',
      },
    ],
  ],
  scripts: {
    'build:css': 'postcss',
  },
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    '@app': './src',
    '@public': './public',
  },
}
