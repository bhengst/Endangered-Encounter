import Phaser from 'phaser'
import CONFIG from '../config.js'

class CharacterSelection extends Phaser.Scene {
  create () {
    // Pangolin or Komodo Dragon
    // player hearts
    this.registry.set('dandelionHeart', 0)
    this.registry.set('toucaHeart', 0)
    this.registry.set('leoHeart', 0)

    this.registry.set('dayCounter', 0)

    this.player = ''

    this.changeBool = false

    this.komodoDragon = this.add.sprite(0, 0, 'komodoDragon')
    this.komodoDragon.setOrigin(0, 0)

    this.pangolin = this.add.sprite(CONFIG.DEFAULT_WIDTH / 2, 0, 'pangolin')
    this.pangolin.setOrigin(0, 0)

    this.dialogueBox = this.add.sprite(0, 0, 'DialogueBox')
    this.dialogueBox.setOrigin(0, 0)

    this.name = this.add.text(50, 475, 'Narrator', {
      font: '64px Arial',
      color: '#000000'
    })

    this.choose = this.add.text(120, 575, 'Please choose a character...', {
      font: '32px Arial',
      color: '#000000'
    })

    this.button = this.add.image(1150, 740, 'Arrow')

    this.button.setScale(0.7)

    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
      this.scene.start('Day1Scene1')
    })
  }

  update () {
    // Button stuff
    this.button.setInteractive()
      .on('pointerover', () => {
        this.button.alpha = 0.75
      })
      .on('pointeroff', () => {
        this.button.alpha = 1
      })
      .on('pointerdown', () => {
        this.button.alpha = 0.75

        if (!this.changeBool) {
          this.fadeOutText()
        } else {
          this.cameras.main.fadeOut(1000)
        }
      })
      .on('pointerup', () => {
        this.button.alpha = 1
      })

    // Setting what the player chooses for their character
    if (!this.dialogueBox.active) {
      this.pangolin.setInteractive()
        .on('pointerover', () => {
          this.pangolin.alpha = 1
        })
        .on('pointerout', () => {
          this.pangolin.alpha = 0.5
        })
        .on('pointerdown', () => {
          this.player = 'Pangolin'

          this.registry.set('player', this.player)

          this.fadeInText()
          this.fadeInCharacter()
        })

      this.komodoDragon.setInteractive()
        .on('pointerover', () => {
          this.komodoDragon.alpha = 1
        })
        .on('pointerout', () => {
          this.komodoDragon.alpha = 0.5
        })
        .on('pointerdown', () => {
          this.player = 'Komodo Dragon'

          this.registry.set('player', this.player)

          this.fadeInText()
          this.fadeInCharacter()
        })
    }

    this.registry.set('player', this.player)

    if (this.changeBool) {
      this.choose.setText('You will play as ' + this.registry.get('player'))
    }
  }

  setInactive () {
    this.name.setActive(false).setVisible(false)
    this.choose.setActive(false).setVisible(false)
    this.dialogueBox.setActive(false).setVisible(false)
    this.button.setActive(false).setVisible(false)
  }

  setTextActive () {
    this.name.setActive(true).setVisible(true)
    this.choose.setActive(true).setVisible(true)
    this.dialogueBox.setActive(true).setVisible(true)
    this.button.setActive(true).setVisible(true)

    this.changeBool = true
  }

  fadeOutText () {
    this.tweens.add({
      targets: [this.name, this.choose, this.dialogueBox, this.button],
      alpha: '-=0.5',
      duration: 500,
      onComplete: () => {
        this.setInactive()
      }
    })

    this.tweens.add({
      targets: [this.pangolin, this.komodoDragon],
      alpha: {
        getStart: () => 1,
        getEnd: () => 0.5
      },
      duration: 500,
      delay: 500
    })
  }

  fadeInCharacter () {
    if (this.registry.get('player') === 'Komodo Dragon') {
      this.tweens.add({
        targets: [this.pangolin],
        alpha: {
          getStart: () => 0.5,
          getEnd: () => 0
        },
        duration: 500,
        delay: 500
      })

      this.tweens.add({
        targets: [this.komodoDragon],
        alpha: {
          getStart: () => 0.5,
          getEnd: () => 1
        },
        duration: 500,
        delay: 500
      })
    } else if (this.registry.get('player') === 'Pangolin') {
      this.tweens.add({
        targets: [this.komodoDragon],
        alpha: {
          getStart: () => 0.5,
          getEnd: () => 0
        },
        duration: 500,
        delay: 500
      })

      this.tweens.add({
        targets: [this.pangolin],
        alpha: {
          getStart: () => 0.5,
          getEnd: () => 1
        },
        duration: 500,
        delay: 500
      })
    } else {
      console.log('How did you get here?')
    }

    this.pangolin.disableInteractive()
    this.komodoDragon.disableInteractive()
  }

  fadeInText () {
    this.setTextActive()
    this.name.alpha = 0
    this.choose.alpha = 0
    this.dialogueBox.alpha = 0
    this.button.alpha = 0

    this.tweens.add({
      targets: [this.name, this.choose, this.dialogueBox, this.button],
      alpha: {
        getStart: () => 0,
        getEnd: () => 1
      },
      duration: 500,
      delay: 500
    })
  }
}

export default CharacterSelection
