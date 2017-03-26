'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.commandLine.appendSwitch('ppapi-flash-path', __dirname + '/PepperFlash/PepperFlashPlayer.plugin');
app.commandLine.appendSwitch('ppapi-flash-version', '19.0.0.245');


app.on('ready', function() {

  // ブラウザ(Chromium)の起動, 初期画面のロード
  mainWindow = new BrowserWindow({width: 1200, height: 800});
  mainWindow.loadURL('file://' + __dirname + '/index.html');


  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
