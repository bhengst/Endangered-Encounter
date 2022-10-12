import Phaser from 'phaser'
import CONFIG from '../config.js'

class Day3Scene4 extends Phaser.Scene {
  create () {
    this.speech = []
    this.speech[0] = 'You all enter the cafe, and Dandelion sees all three of you together and nearly drops the mug he was cleaning.'
    this.speech[1] = 'He looks absolutely excited as he quickly runs around the counter and greets all of you. '
    this.speech[2] = 'This is a nice feeling, a feeling of friendship.'
    this.speech[3] = 'Immediately both of the other animals joke with Dandelion.'
    this.speech[4] = 'Heard you missed me, old man.'
    this.speech[5] = 'C’mon old man! We weren’t gone for that long!'
    this.speech[6] = 'I’m just a year older than you, Touca! You silly goose.'
    this.speech[7] = 'Dandelion turns to you.'
    this.speech[8] = 'I bet you couldn’t really tell but, Leo is actually the youngest of all of us.'
    this.speech[9] = 'He works so hard he gets the permanent 5’o’clock shadow before 30!'
    this.speech[10] = 'Leo huffs, it’s true though. '
    this.speech[11] = 'You laugh to yourself, you would have never really guessed or known.'
    this.speech[12] = 'You all go to the baristas table and Touca offers to buy Leo a new coffee as reparations for this morning.'
    this.speech[13] = 'Leo hrmphs and takes the offer, the giveaway for his appreciation though is his tail swaying happily. The tail is a catch-all you suppose.'
    this.speech[14] = 'You turn to Dandelion, who eagerly awaits your order.'
    this.speech[15] = 'What do you order?'
    this.speech[16] = 'Oh! You’re kidding! I love bamboo tea. '
    this.speech[17] = 'Dandelion cartoonishly swoons to the coffee bar to make the other’s drinks.'
    this.speech[18] = 'Great choice! I’ll get to it.'
    this.speech[19] = 'You and the rest of the group pay separately. '
    this.speech[20] = 'Touca and Leo begin talking and you feel a bit of inner success that they don’t hate each other super hard anymore, or at least right now.'
    this.speech[21] = 'You sit comfortably listening to the chatter and the sounds of bubbling water and bags rustling of ingredients. '
    this.speech[22] = 'You come back to reality as Dandelion gently sets your drink in front of you. '
    this.speech[23] = 'Something on your mind?'
    this.speech[24] = 'You think about it for a second, you suppose there is.'
    this.speech[25] = 'Are we friends?'
    this.speech[26] = 'Dandelion almost looks hurt by the question.'
    this.speech[27] = 'Of course! All my guests are a friend to me!'
    this.speech[28] = 'Maybe, but I mean like a real friend, not just a guest.'
    this.speech[29] = 'Well, ...  I would think so. I would think that the others think the same.'
    this.speech[30] = 'You feel a bit of relief, but not too much. '
    this.speech[31] = 'You gingerly sip your drink.'
    this.speech[32] = 'How has it been? Since youve moved in, that is.'
    this.speech[33] = 'You think on that for a second, its been a few days but it feel like so much longer.'
    this.speech[34] = 'It’s been going by very fast.'
    this.speech[35] = 'Dandelion smiles.'
    this.speech[36] = 'That means its been going well, otherwise it would be slow, yeah?'
    this.speech[37] = 'You nod.'
    this.speech[38] = 'You continue talking about life changes, Dandelion is a good listener. They nod and give small snippets of wisdom.'
    this.speech[39] = 'Occasionally you glance over to the others, and you see a scene unfold of Touca slowly being consumed with guests wanting to look and buy art from her.'
    this.speech[40] = 'You think maybe she really can make it big out here.'
    this.speech[41] = 'Dandelion serves another guest, then asks something to Leo and Touca, they both make various levels of faces at the question.'
    this.speech[42] = 'Then they all approach you.'
    this.speech[43] = 'Leo puts his arm around your shoulder.'
    this.speech[44] = 'Dandelion said you didn’t know if we were friends yet.'
    this.speech[45] = 'Like- Of course we are! Sure it’s not been that long, but youre awesome!'
    this.speech[46] = 'Dandelion pats your hand, looking sympathetic.'
    this.speech[47] = 'You have good friends around you, don’t forget that.'
    this.speech[48] = 'The night continues positively. You feel quite good now from the acknowledgement of friends.'
    this.speech[49] = 'It’s really nice, actually.'
    this.speech[50] = ''


    this.i = 0
    this.firstCheckChoice = -1
    this.secondCheckChoice = -1
    this.dialogueBoxBool = false
    this.narratorBoxBool = true

    this.leoHeart = this.registry.get('leoHeart')
    this.toucaHeart = this.registry.get('toucaHeart')
    this.dandelionHeart = this.registry.get('dandelionHeart')

    // load in character sprites
    this.leoSprite = this.add.sprite(1300, 0, 'LeoHappy')
    this.leoSprite.setDepth(-14)
    this.leoBG = this.add.sprite(this.leoSprite.x, this.leoSprite.y, 'LeoHappy')
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

    this.office = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'Cafe')
    this.office.setDepth(-20)

    this.cameras.main.fadeIn(1000)

    // load in dialogue stuff
    this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')
    this.dialBox = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBox')
    this.dialBox.setVisible(false).setActive(false)
    this.dialBox.setDepth(-10)
    this.box.setDepth(-10)

    this.boxChoice1 = this.add.image(300, 900, 'textBoxBeige')
    this.boxChoice2 = this.add.image(1000, 900, 'textBoxBeige')

    this.choiceText1 = this.add.text(220, 880, 'Bamboo Tea', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText2 = this.add.text(900, 880, 'Milka Mocha', {
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
        if (this.i === 17) {
          this.i = 19
        }
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
        this.dandelionHeart = this.dandelionHeart + 2
        this.registry.set('dandelionHeart', this.dandelionHeart)
        this.toucaHeart = Math.max(0, this.dandelionHeart - 1)
        this.registry.set('dandelionHeart', this.dandelionHeart)
        this.updateCharBox()
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
        this.i = 18
        this.updateCharBox()
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
    if (this.i === 0 || this.i === 7|| this.i === 10 || this.i === 17 || 
      this.i === 19 || this.i === 24 || this.i === 26 || this.i === 30 || 
      this.i === 33 || this.i === 35 || this.i === 37 || this.i === 46) {
      this.narratorDialogue()
    }

    if (this.i === 5 || this.i === 45) {
      this.ToucaDialogue()
    }

    if (this.i === 4 || this.i === 44) {
      this.LeoDialogue()
    }

    if (this.i === 6 || this.i === 8 || this.i === 16 || this.i === 18 || 
      this.i === 23 || this.i === 27 || this.i === 29 || this.i === 32 ||
      this.i === 36 || this.i === 47) {
      this.Dandeliondialogue()
    }

    if (this.i === 25 || this.i === 28 || this.i === 34) {
      this.YouDialogue()
    }

    if (this.i === 1) {
      this.disableArrow()
      this.Tweener(this.toucaSprite, 1300, 600, 0.0, 1, 2000)
      this.Tweener(this.toucaBG, 1300, 600, 0.0, 1, 2000)

      this.Tweener(this.leoSprite, 1300, 700, 0.0, 1, 2000)
      this.Tweener(this.leoBG, 1300, 700, 0.0, 1, 2000)

      this.Tweener(this.dandelionSprite, 1300, 500, 0.0, 1, 2000)
      this.Tweener(this.dandelionBG, 1300, 500, 0.0, 1, 2000)

      this.time.delayedCall(200, () => {
        this.enableArrow()
      })
    }
    if (this.i === 15) {
      this.text.setX(170)

      this.changeBox()
      this.disableArrow()
      this.Tweener(this.dandelionIcon, this.dandelionIcon.x, this.dandelionIcon.x, 0, 1, 2000)

      this.TweenerY(this.box, this.box.y, -100, 1, 1)
      this.TweenerY(this.text, this.text.y, 70, 1, 1)

      this.TweenerY(this.boxChoice1, this.boxChoice1.y, 600, 1, 1)
      this.TweenerY(this.choiceText1, this.choiceText1.y, 575, 1, 1)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, 600, 1, 1)
      this.TweenerY(this.choiceText2, this.choiceText2.y, 575, 1, 1)

      this.time.delayedCall(2000, () => {
        this.setChoicesInteractive()
      })
    }

    if (this.i === 16 || this.i === 18) {
      this.text.setX(120)
      this.TweenerY(this.box, this.box.y, 400, 1, 1)
      this.TweenerY(this.text, this.text.y, 575, 1, 1)

      this.TweenerY(this.boxChoice1, this.boxChoice1.y, this.boxChoice1.y, 1, 0)
      this.TweenerY(this.choiceText1, this.choiceText1.y, this.choiceText1.y, 1, 0)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, this.boxChoice2.y, 1, 0)
      this.TweenerY(this.choiceText2, this.choiceText2.y, this.choiceText2.y, 1, 0)


      this.Tweener(this.dandelionIcon, this.dandelionIcon.x, this.dandelionIcon.x, 1, 0, 2000)
      this.time.delayedCall(2100, this.enableArrow())
    }

    if (this.i === 21) {
      this.disableArrow()
      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.switch('mini5')
      })
      this.i++
    }

    if (this.i === 22) {
      this.enableArrow()
      this.time.delayedCall(1000, () => {
        this.cameras.main.fadeIn(1000)
      })
    }

    if (this.i === 50) {
      this.box.setActive(true).setVisible(false)
      this.dialBox.setActive(true).setVisible(true)

      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.start('updateHeart')
      })
    }
  }

  update () {

  }
}
export default Day3Scene4
