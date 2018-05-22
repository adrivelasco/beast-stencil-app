exports.config = {
  namespace: 'beast-stencil-app',
  srcDir: 'src/client',
  outputTargets: [
    { 
      type: 'dist'
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}