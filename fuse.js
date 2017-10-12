const {FuseBox} = require('fuse-box');
const argv      = require('yargs').argv;
 
const dev = argv.variant === 'dev';
 
const fuse = FuseBox.init({
    homeDir: 'src/scripts',
    output: 'public/assets/$name.js',
    sourceMaps: dev,
    cache: dev
});

if(dev){
  fuse.dev({
    port: 8080,                       // port 番号を指定。デフォルトは 4444
    root: 'public/',                  // ルートディレクトリを指定。デフォルトは output 先となるディレクトリ
    open: true,                       // ブラウザで表示
    httpServer: true,                 // http サーバ機能を有効化するかどうかを指定。デフォルトは true
    socketURI: 'ws://localhost:3333'  // 
  });
}
else{
  fuse.bundle('app')
      .instructions(`> main.ts`);
}

dev && fuse.watch();
 
fuse.run();