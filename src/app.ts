import { VIEWS_DIR, IS_DEV } from './init'

import { app, BrowserWindow } from 'electron'
import * as path from 'path'


function createWindow () {
  const window: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    }
  })
  window.loadFile(VIEWS_DIR)
  window.webContents.on('did-finish-load', function () {
    if (IS_DEV) {
      window.webContents.openDevTools({
        mode: "undocked"
      })
    }
  })
}

app.on('ready', createWindow)
