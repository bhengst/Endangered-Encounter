import Phaser from 'phaser'
import CONFIG from '../config.js'

class GameEnd extends Phaser.Scene {
  create () {
    this.registry.set('dayCounter', 4)
    this.cameras.main.fadeIn(1000)
    this.endPic = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'end')
    this.time.delayedCall(2000, () => {
      this.dialBox = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')
      this.add.text(120, 575, 'Thank you for playing My Endangered Friend', {
        font: '50px Arial',
        color: '#000000'
      })
        .setOrigin(0, 0)

      this.button = this.add.image(1200, 740, 'Arrow')
        .setInteractive()
        .on('pointerover', () => {
          this.button.alpha = 0.7
        })
        .on('pointerout', () => {
          this.button.alpha = 1
        })
        .on('pointerdown', () => {
          this.cameras.main.fadeOut(1000)
          this.time.delayedCall(1000, () => {
            this.scene.start('Title')
          })
        })
      this.button.setScale(0.7)
    })
  }
}

export default GameEnd
