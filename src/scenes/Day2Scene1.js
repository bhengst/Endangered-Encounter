import Phaser from 'phaser'
import CONFIG from '../config.js'

class Day2Scene1 extends Phaser.Scene {
  create () {
    this.registry.set('dayCounter', 2)

    this.speech = []
    this.speech[0] = 'You wake up in the morning, a little under-caffeinated from the late-night coffee’s effects leaving you in your sleep.'
    this.speech[1] = 'Groggily you get ready and get yourself to work with your old office items.'
    this.speech[2] = 'Travel to your job at the office'

    this.bedroom = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'Bedroom')

    this.cameras.main.fadeIn(1000)
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, (cam, effect) => {
      this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')

      this.text = this.add.text(120, 575, this.speech[0], {
        font: '32px Arial',
        color: '#000000',
        wordWrap: { width: 1100 }
      })
      this.i = 0

      this.button = this.add.image(1200, 740, 'Arrow')
        .setInteractive()
        .on('pointerdown', () => {
          this.i++
          if (this.i < 2) {
            this.text.setText(this.speech[this.i])
          } else {
            this.text.setText('')
          }
        })
        .on('pointerover', () => {
          this.button.alpha = 0.7
        })
        .on('pointerout', () => {
          this.button.alpha = 1
        })
      this.button.setScale(0.7)

      this.officeBtn = this.add.image(CONFIG.DEFAULT_WIDTH / 2, 700, 'biegeTextBox')
        .setInteractive()
        .setVisible(false).setActive(false)
        .on('pointerover', () => {
          this.officeBtn.alpha = 0.7
        })
        .on('pointerout', () => {
          this.officeBtn.alpha = 1
        })
        .on('pointerdown', () => {
          console.log('hiii')
          this.scene.start('Day2Scene2')
        })
      this.officeText = this.add.text(this.officeBtn.x, this.officeBtn.y, this.speech[2], {
        font: '32px Arial',
        color: '#000000'
      })
        .setVisible(false).setActive(false)
        .setOrigin(0.5, 0.5)
    })
  }

  update () {
    if (this.i === 2) {
      this.button.setVisible(false).setActive(false)
      this.officeBtn.setVisible(true).setActive(true)
      this.officeText.setVisible(true).setActive(true)
    }
  }
}

export default Day2Scene1
