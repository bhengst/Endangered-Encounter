import Phaser from 'phaser'
import CONFIG from '../config.js'

class Day3Scene3 extends Phaser.Scene {
  create () {
    this.speech = []
    this.speech[0] = 'Leo volunteered to drive, so no public transport tonight.'
    this.speech[1] = 'Leo drives, and you got shotgun while Touca took the backseat.'
    this.speech[2] = 'You know, I haven’t forgotten that I was called a barrel this morning.'
    this.speech[3] = 'Touca gets poofed up in feathers.'
    this.speech[4] = 'IT’S BECAUSE IT’S TRUE!!!'
    this.speech[5] = 'Ok, and why is it true? Huh?'
    this.speech[6] = 'Touca turns to you, fluffed up in feathers, her eyes asking for an excuse or help.'
    this.speech[7] = 'That’s because…'
    this.speech[8] = '...you have..'
    this.speech[9] = 'Leo huffs through his nose.'
    this.speech[10] = 'Good guess, buddy.'
    this.speech[11] = 'Touca looks relieved but now has to pat down all the fluffed-up feathers.'
    this.speech[12] = 'You make it safely to the cafe, all in one piece.'
    this.speech[13] = ''
    this.speech[14] = 'Leo smiles mischievously.'
    this.speech[15] = 'Not good enough, champ.'
    this.speech[16] = 'At a red light, Leo’s hand moves around to the back seat and playfully claws around. Touca squawks, feathers flying around the car.'
    this.speech[17] = 'You make it safely to the cafe, all in one piece, although Touca may be down a few feathers now.'
    this.speech[18] = ''

    this.i = 0
    this.firstCheckChoice = -1
    this.secondCheckChoice = -1
    this.dialogueBoxBool = false
    this.narratorBoxBool = true

    this.leoHeart = this.registry.get('leoHeart')
    this.toucaHeart = this.registry.get('toucaHeart')
    this.dandelionHeart = this.registry.get('dandelionHeart')

    // load in character sprites
    this.leoSprite = this.add.sprite(1300, 0, 'Leo')
    this.leoSprite.setDepth(-14)
    this.leoBG = this.add.sprite(this.leoSprite.x, this.leoSprite.y, 'Leo')
    this.leoSprite.setOrigin(0, 0)
    this.leoBG.setOrigin(0, 0)
    this.leoBG.setDepth(-15)
    this.leoBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')

    this.leoIcon = this.add.sprite(90, 75, 'leoIcon')
    this.leoIcon.alpha = 0

    // touca
    this.toucaSprite = this.add.sprite(1300, 0, 'Touca')
    this.toucaSprite.setDepth(-13)
    this.toucaBG = this.add.sprite(this.toucaSprite.x, this.toucaSprite.y, 'Touca')
    this.toucaSprite.setOrigin(0, 0)
    this.toucaBG.setOrigin(0, 0)
    this.toucaBG.setDepth(-14)
    this.toucaBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')

    this.toucaIcon = this.add.sprite(90, 74, 'toucaIcon')
    this.toucaIcon.alpha = 0

    this.dandelionSprite = this.add.sprite(1300, 0, 'Dandelion')
    this.dandelionBG = this.add.sprite(this.dandelionSprite.x, this.dandelionSprite.y, 'Dandelion')
    this.dandelionSprite.setOrigin(0, 0)
    this.dandelionBG.setOrigin(0, 0)
    this.dandelionBG.setDepth(-15)
    this.dandelionSprite.setDepth(-14)
    this.dandelionBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')
    this.dandelionIcon = this.add.sprite(90, 75, 'dandelionIcon')
    this.dandelionIcon.alpha = 0

    this.office = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'Car')
    this.office.setDepth(-20)

    this.cameras.main.fadeIn(1000)

    // load in dialogue stuff
    this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')
    this.dialBox = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBox')
    this.dialBox.setVisible(false).setActive(false)
    this.dialBox.setDepth(-10)
    this.box.setDepth(-10)

    this.boxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.boxChoice2 = this.add.image(960, 900, 'textBoxBeige')

    this.choiceText1 = this.add.text(250, 880, 'Dense Fur', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText2 = this.add.text(850, 880, 'A Double Fur Coat', {
      font: '32px Arial',
      color: '#000000'
    })

    this.text = this.add.text(120, 575, this.speech[this.i], {
      font: '32px Arial',
      color: '#000000',
      wordWrap: { width: 1100 }
    })

    this.nameText = this.add.text(50, 475, '', {
      font: '64px Arial',
      color: '#000000'
    })

    this.button = this.add.image(1200, 740, 'Arrow')
    this.button.setScale(0.7)

    this.button.setInteractive()
      .on('pointerover', () => {
        this.button.alpha = 0.7
      })
      .on('pointerout', () => {
        this.button.alpha = 1
      })
      .on('pointerup', () => {
        this.button.alpha = 0.7
      })
      .on('pointerdown', () => {
        this.button.alpha = 1
        this.i++
        console.log('hello ' + this.i)
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
  }

  disableArrow () {
    this.Tweener(this.button, this.button.x, this.button.x, 1, 0, 300)
    this.button.setVisible(false).setActive(false)
  }

  enableArrow () {
    this.Tweener(this.button, this.button.x, this.button.x, 0, 1, 300)
    this.button.setVisible(true).setActive(true)
  }

  setChoicesInteractive() {
    this.boxChoice1.setInteractive()
      .on('pointerover', () => {
        this.boxChoice1.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        this.boxChoice1.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.i++
        this.updateCharBox()
        this.toucaHeart++
        this.registry.set('toucaHeart', this.toucaHeart)
        this.toucaHeart = Math.max(0, this.toucaHeart - 1)
        this.registry.set('toucaHeart', this.toucaHeart)

        this.leoHeart++
        this.registry.set('leoHeart', this.leoHeart)
        this.toucaHeart = Math.max(0, this.leoHeart - 1)
        this.registry.set('leoHeart', this.leoHeart)

        this.text.setText(this.speech[this.i])
      })
    this.boxChoice2.setInteractive()
      .on('pointerover', () => {
        this.boxChoice2.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        this.boxChoice2.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.i = 14
        this.updateCharBox()
        this.toucaHeart--
        this.registry.set('toucaHeart', this.toucaHeart)
        this.toucaHeart = Math.max(0, this.toucaHeart - 1)
        this.registry.set('toucaHeart', this.toucaHeart)

        this.leoHeart++
        this.registry.set('leoHeart', this.leoHeart)
        this.toucaHeart = Math.max(0, this.leoHeart - 1)
        this.registry.set('leoHeart', this.leoHeart)
        this.text.setText(this.speech[this.i])
      })
  }

  showCharacter (character, charBG) {
    this.disableArrow()
    this.Tweener(character, 1300, 600, 0.0, 1, 2000)
    this.Tweener(charBG, 1300, 600, 1, 1, 2000)

    this.time.delayedCall(200, () => {
      this.enableArrow()
    })
  }

  changeBox () {
    if (this.dialogueBoxBool) {
      this.dialBox.setVisible(true).setActive(true)
      this.box.setVisible(false).setActive(false)
    } else if (this.narratorBoxBool) {
      this.dialBox.setVisible(false).setActive(false)
      this.box.setVisible(true).setActive(true)
    }
  }

  narratorDialogue () {
    this.toucaSprite.setAlpha(0.5)
    this.leoSprite.setAlpha(0.5)
    this.dandelionSprite.setAlpha(0.5)

    this.nameText.setText('')
    this.text.setColor('#000000')

    this.NarratorBox()
  }

  YouDialogue () {
    this.toucaSprite.setAlpha(0.5)
    this.leoSprite.setAlpha(0.5)
    this.dandelionSprite.setAlpha(0.5)

    this.nameText.setText('You')
    this.text.setColor('#4c815c')

    this.updateDialogueBox()
  }

  ToucaDialogue () {
    this.toucaSprite.setAlpha(1)
    this.leoSprite.setAlpha(0.5)
    this.dandelionSprite.setAlpha(0.5)

    this.nameText.setText('Touca')
    this.text.setColor('#aa7d0d')

    this.updateDialogueBox()
  }

  Dandeliondialogue () {
    this.toucaSprite.setAlpha(0.5)
    this.leoSprite.setAlpha(0.5)
    this.dandelionSprite.setAlpha(1)

    this.nameText.setText('Dandelion')
    this.text.setColor('#b42463')

    this.updateDialogueBox()
  }

  LeoDialogue () {
    this.toucaSprite.setAlpha(0.5)
    this.leoSprite.setAlpha(1)
    this.dandelionSprite.setAlpha(0.5)

    this.nameText.setText('Leo')
    this.text.setColor('#34616b')

    this.updateDialogueBox()
  }

  NarratorBox () {
    this.box.setActive(true).setVisible(true)
    this.dialBox.setActive(false).setVisible(false)
  }

  updateDialogueBox () {
    this.box.setActive(false).setVisible(false)
    this.dialBox.setActive(true).setVisible(true)
  }

  Tweener (target, startx, endx, alpha1, alpha2, durationTime) {
    this.button.setActive(false)
    this.tweens.add({
      targets: target,
      x: {
        getStart: () => startx,
        getEnd: () => endx
      },
      alpha: {
        getStart: () => alpha1,
        getEnd: () => alpha2
      },
      duration: durationTime,
      delay: 200
    })
  }

  TweenerY (target, starty, endy, alpha1, alpha2) {
    this.button.setActive(false)
    this.tweens.add({
      targets: target,
      y: {
        getStart: () => starty,
        getEnd: () => endy
      },
      alpha: {
        getStart: () => alpha1,
        getEnd: () => alpha2
      },
      duration: 2000,
      delay: 200
    })
  }

  updateCharBox () {
    if (this.i === 0 || this.i === 3 || this.i === 6 || this.i === 9 || this.i === 11 || this.i === 16 || this.i === 13) {
      this.narratorDialogue()
    }

    if (this.i === 4) {
      this.ToucaDialogue()
    }

    if (this.i === 2 || this.i === 5 || this.i === 10 || this.i === 15) {
      this.LeoDialogue()
    }

    if (this.i === 7) {
      this.YouDialogue()
    }

    if (this.i === 8) {
      this.nameText.setText('')
      this.text.setX(170)

      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.leoSprite.alpha = 0.5

      this.Tweener(this.leoIcon, this.leoIcon.x, this.leoIcon.x, 0, 1, 2000)

      this.TweenerY(this.box, this.box.y, -100, 1, 1)
      this.TweenerY(this.text, this.text.y, 70, 1, 1)

      this.TweenerY(this.boxChoice1, this.boxChoice1.y, 600, 1, 1)
      this.TweenerY(this.choiceText1, this.choiceText1.y, 580, 1, 1)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, 600, 1, 1)
      this.TweenerY(this.choiceText2, this.choiceText2.y, 580, 1, 1)

      this.disableArrow()
      this.setChoicesInteractive()
    }
    if (this.i === 9 || this.i === 14) {
      this.TweenerY(this.box, this.box.y, 400, 1, 1)
      this.TweenerY(this.text, this.text.y, 575, 1, 1)

      this.TweenerY(this.boxChoice1, this.boxChoice1.y, this.boxChoice1.y, 1, 0)
      this.TweenerY(this.choiceText1, this.choiceText1.y, this.choiceText1.y, 1, 0)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, this.boxChoice2.y, 1, 0)
      this.TweenerY(this.choiceText2, this.choiceText2.y, this.choiceText2.y, 1, 0)

      this.text.setX(120)

      this.Tweener(this.leoIcon, this.leoIcon.x, this.leoIcon.x, 1, 0, 2000)

      this.time.delayedCall(2100, this.enableArrow())
      this.time.delayedCall(2200, () => {
        this.dialogueBoxBool = false
        this.narratorBoxBool = true
        this.changeBox()
      })
    }

    if (this.i === 18 || this.i === 13) {
      this.box.setActive(true).setVisible(false)
      this.dialBox.setActive(true).setVisible(true)
      this.disableArrow()

      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.start('Day3Scene4')
      })
    }
  }

  update () {

  }
}
export default Day3Scene3
