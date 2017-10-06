//initalize electron framework
const electron = require('electron');

//app and browser window modules
const {app, BrowserWindow} = electron;

//create a new BrowserWindow
app.on('ready', function(){
   //do something
    mainWindow = new BrowserWindow({
        width:1000,
        height:800,
        resizable:true,
        frame: false
    });

    //load file for the main window
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    //open dev tools
  //  mainWindow.webContents.openDevTools({
  //      mode: 'bottom'
  //  });


});
