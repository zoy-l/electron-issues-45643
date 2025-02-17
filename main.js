
const {app, BrowserWindow} = require('electron')

function init() {
	const mainWindow = new BrowserWindow({
		titleBarStyle: 'hidden',
		titleBarOverlay:{
			color: '#666666',
			height: 30,
			symbolColor: '#999999'
		},
		show: true,
	});


	// test hide
	// mainWindow.addListener('close', (event) => {
	// 	event.preventDefault();
	// 	mainWindow.hide();
	// })


	mainWindow.loadFile("index.html")
}

app.whenReady().then(init)

