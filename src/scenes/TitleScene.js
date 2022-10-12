import Phaser from 'phaser'
import CONFIG from '../config.js'

class TitleScene extends Phaser.Scene {
  create () {
    const titlePark = this.add.sprite(0, 0, 'bgDayPark')
    titlePark.setOrigin(0, 0)

    const titleBG = this.add.sprite(0, 0, 'title')
    titleBG.setOrigin(0, 0)

    const startButton = this.add.sprite(CONFIG.DEFAULT_WIDTH / 2, 700, 'textBoxBeige')
      .setInteractive()
      .on('pointerover', () => {
        startButton.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        startButton.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.cameras.main.fadeOut(1000)
      })

    this.add.text(startButton.x, startButton.y, 'Play', {
      font: '100px Arial',
      color: '#000000'
    })
      .setOrigin(0.5)

    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
      this.scene.start('CharSelection')
    })
  }
}

export default TitleScene
