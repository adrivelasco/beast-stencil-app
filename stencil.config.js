exports.config = {
  namespace: 'beast-stencil-app',
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