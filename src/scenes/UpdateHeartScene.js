import Phaser from 'phaser'
import CONFIG from '../config.js'

class UpdateHeartScene extends Phaser.Scene {
  create () {
    this.toucaHeart = this.registry.get('toucaHeart')
    this.dandelionHeart = this.registry.get('dandelionHeart')
    this.leoHeart = this.registry.get('leoHeart')

    this.dayCounter = this.registry.get('dayCounter')

    this.heartBG = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'heartBG')

    this.toucaCounter = this.add.sprite(CONFIG.DEFAULT_WIDTH / 2, 250)
    this.dandelionCounter = this.add.sprite(CONFIG.DEFAULT_WIDTH / 2, 450)
    this.leoCounter = this.add.sprite(CONFIG.DEFAULT_WIDTH / 2, 650)

    this.cameras.main.fadeIn(1000)

    this.button = this.add.image(1200, 740, 'Arrow')
      .setInteractive()
      .on('pointerover', () => {
        this.button.alpha = 0.7
      })
      .on('pointerout', () => {
        this.button.alpha = 1
      })
      .on('pointerdown', () => {
        if (this.dayCounter === 1) {
          this.scene.start('Day2Scene1')
        }
        if (this.dayCounter === 2) {
          this.scene.start('Day3Scene1')
        }
        if (this.dayCounter === 3) {
          this.scene.start('End')
        }
      })
    this.button.setScale(0.7)

    this.dayText = this.add.text(CONFIG.DEFAULT_WIDTH / 2, 90, '', {
      font: '50px Arial'
    })
      .setOrigin(0, 0)

    if (this.dayCounter === 1) {
      this.dayText.text = 'DAY 1 END'
    } else if (this.dayCounter === 2) {
      this.dayText.text = 'DAY 2 END'
    } else if (this.dayCounter === 3) {
      this.dayText.text = 'DAY 3 END'
    }

    // determine which touca texture to use
    switch (this.toucaHeart) {
      case 0:
        this.toucaCounter.setTexture('toucan0')
        break
      case 1:
        this.toucaCounter.setTexture('toucan1')
        break
      case 2:
        this.toucaCounter.setTexture('toucan2')
        break
      case 3:
        this.toucaCounter.setTexture('toucan3')
        break
      case 4:
        this.toucaCounter.setTexture('toucan4')
        break
    }

    // determine which dandelion texture to use
    switch (this.dandelionHeart) {
      case 0:
        this.dandelionCounter.setTexture('red0')
        break
      case 1:
        this.dandelionCounter.setTexture('red1')
        break
      case 2:
        this.dandelionCounter.setTexture('red2')
        break
      case 3:
        this.dandelionCounter.setTexture('red3')
        break
      case 4:
        this.dandelionCounter.setTexture('red4')
        break
    }

    // determine which leo texture to use
    switch (this.leoHeart) {
      case 0:
        this.leoCounter.setTexture('snow0')
        break
      case 1:
        this.leoCounter.setTexture('snow1')
        break
      case 2:
        this.leoCounter.setTexture('snow2')
        break
      case 3:
        this.leoCounter.setTexture('snow3')
        break
      case 4:
        this.leoCounter.setTexture('snow4')
        break
    }
  }
}

export default UpdateHeartScene
