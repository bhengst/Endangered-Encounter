import Phaser from 'phaser'
import CONFIG from '../config.js'

class StartScene extends Phaser.Scene {
  init () {
    this.loadingText = this.add.text(
      CONFIG.DEFAULT_WIDTH / 2,
      CONFIG.DEFAULT_HEIGHT / 2,
      'Loading ...', { font: '16pt Arial', color: '#FFFFFF', align: 'center' }
    )
    this.loadingText.setOrigin(0.5, 0.5)
  }

  preload () {
    // Load the image assets needed for THIS scene
    this.load.image('StartScreen', 'assets/backgrounds/bg_Daypark.png')

    // Load the image assets neede for ALL scenes
    this.load.image('Bedroom', 'assets/backgrounds/bg_bedroomgreen.png')
    this.load.image('Cafe', 'assets/backgrounds/bg_cafe.png')
    // Load the dialogue box here for now
    this.load.image('DialogueBox', 'assets/UI_Assets/text_box_UI.png')
    this.load.image('Arrow', 'assets/UI_Assets/UI_green_arrow.png')

    // Load the animal sprites
    this.load.image('Touca', 'assets/sprites/Touca_sketch.png')

    // Load the image assets needed for 'ExampleScene'
    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')

    // Pre-load the entire audio sprite
    this.load.audioSprite('gameAudio', 'assets/audio/gameAudioSprite.json', [
      'assets/audio/gameAudioSprite.ogg',
      'assets/audio/gameAudioSprite.m4a',
      'assets/audio/gameAudioSprite.mp3',
      'assets/audio/gameAudioSprite.ac3'
    ])
  }

  create () {
    // Remove loading text
    this.loadingText.destroy()

    // Add background image
    const startScreen = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'StartScreen')
    startScreen.setScale(
      CONFIG.DEFAULT_WIDTH / startScreen.width,
      CONFIG.DEFAULT_HEIGHT / startScreen.height
    )

    // Add a callback when a key is released
    this.input.keyboard.on('keyup', this.keyReleased, this)

    // Load and play background music
    this.music = this.sound.addAudioSprite('gameAudio')
    this.music.play('freeVertexStudioTrack1')
  }

  keyReleased () {
    console.log('Key released')
    this.scene.start('TextScene')
    this.music.stop()
  }
}

export default StartScene
