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
    [
      'snowpack-plugin-terser',
      {
        terserOptions: {
          compress: {
            arguments: true,
            passes: 2,
            unsafe_arrows: true,
          },
        },
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
    '@node': './node_modules',
  },
}
