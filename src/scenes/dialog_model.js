import Phaser from 'phaser'
import CONFIG from '../config'

class DialogueModalPlugin extends Phaser.Scene {
  // Initialize the dialog modal
  init (opts) {
  // Check to see if any optional parameters were passed
    if (!opts) opts = {}
    // set properties from opts object or use defaults
    this.borderThickness = opts.borderThickness || 3
    this.borderColor = opts.borderColor || 0x907748
    this.borderAlpha = opts.borderAlpha || 1
    this.windowAlpha = opts.windowAlpha || 0.8
    this.windowColor = opts.windowColor || 0x303030
    this.windowHeight = opts.windowHeight || 150
    this.padding = opts.padding || 32
    this.closeBtnColor = opts.closeBtnColor || 'darkgoldenrod'
    this.dialogSpeed = opts.dialogSpeed || 3

    // used for animating the text
    this.eventCounter = 0
    // if the dialog window is shown
    this.visible = true
    // the current text in the window
    // eslint-disable-next-line no-unused-expressions
    this.text
    // the text that will be displayed in the window
    // eslint-disable-next-line no-unused-expressions
    this.dialog
    // eslint-disable-next-line no-unused-expressions
    this.graphics
    // eslint-disable-next-line no-unused-expressions
    this.closeBtn
    // Create the dialog window
    this._createWindow()
  }

  // Gets the width of the game (based on the scene)
  _getGameWidth () {
    return this.scene.sys.game.config.width
  }

  // Gets the height of the game (based on the scene)
  _getGameHeight () {
    return this.scene.sys.game.config.height
  }

  // Calculates where to place the dialog window based on the game size
  _calculateWindowDimensions (width, height) {
    const x = this.padding
    const y = height - this.windowHeight - this.padding
    const rectWidth = width - (this.padding * 2)
    const rectHeight = this.windowHeight
    return {
      x,
      y,
      rectWidth,
      rectHeight
    }
  }

  // Creates the inner dialog window (where the text is displayed)
  _createInnerWindow (x, y, rectWidth, rectHeight) {
    this.graphics.fillStyle(this.windowColor, this.windowAlpha)
    this.graphics.fillRect(x + 1, y + 1, rectWidth - 1, rectHeight - 1)
  }

  // Creates the border rectangle of the dialog window
  _createOuterWindow (x, y, rectWidth, rectHeight) {
    this.graphics.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha)
    this.graphics.strokeRect(x, y, rectWidth, rectHeight)
  }

  // Creates the dialog window
  _createWindow () {
    const gameHeight = this._getGameHeight()
    const gameWidth = this._getGameWidth()
    const dimensions = this._calculateWindowDimensions(gameWidth, gameHeight)
    this.graphics = this.scene.add.graphics()
    this._createOuterWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight)
    this._createInnerWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight)
  }
}
