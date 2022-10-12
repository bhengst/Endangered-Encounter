import Phaser from 'phaser'
import CONFIG from '../config.js'

class Day3Scene2 extends Phaser.Scene {
  create () {
    this.speech = []
    this.speech[0] = 'You get to work, and Touca is already making observations'
    this.speech[1] = 'Leo is EXTRA busy today, buddy. He’s been a bit flustered and scatter-brained, so give him some extra time if you talk to him'
    this.speech[2] = 'Work goes by as intended. Until lunch break, that is. You begin to hear a bit of commotion a few cubicles down, and go to investigate.'
    this.speech[3] = 'It’s Touca and Leo, because of course it is. '
    this.speech[4] = 'You can’t just not be looking while carrying TWO coffee’s! That’s absurd! '
    this.speech[5] = 'He’s showing emphasis to his coffee stained tie.'
    this.speech[6] = 'You walked into me, buddy! You’re built like a barrel and didn’t move over when I was walking though.'
    this.speech[7] = 'Don’t call me buddy---I’m not a barrel.'
    this.speech[8] = 'You slink into the space and try to help break it up.'
    this.speech[9] = 'Finally a second opinion! Whose fault is it.'
    this.speech[10] = "Someone who wasn't there can't just decide whose at fault?"
    this.speech[11] = ''
    this.speech[12] = 'Touca looks surprised, to say the least.'
    this.speech[13] = 'Oh my g- I’m NOT built like a barrel! It’s my natural fluff-'
    this.speech[14] = 'He is more flustered now.'
    this.speech[15] = 'Hey, it’s okay! If you need a new tie, I know we have extras in the supply closet. The manager showed me during training. '
    this.speech[16] = 'No, i’ll be fine, actually.'
    this.speech[17] = 'He’s now all grumbly, with his tail swaying from side to side. Annoyed.'
    this.speech[18] = 'Sorry, Touca.'
    this.speech[19] = ''
    this.speech[20] = 'Leo makes a dirt-eating grin.'
    this.speech[21] = 'Newbie is technically right.'
    this.speech[22] = 'Not ALL Toucans are clumsy!! …. Just most!'
    this.speech[23] = 'OK most of us are! That doesn’t mean I’m not sorry, though!'
    this.speech[24] = 'I’ll take that as an apology.'
    this.speech[25] = 'Touca turns her head to the side, beak up.'
    this.speech[26] = 'Hrmph!'
    this.speech[27] = ''
    this.speech[28] = 'You later bring Leo a new coffee to try and make him feel better.'
    this.speech[29] = 'He looks appreciative but doesn’t say much other than the immediate pleasantry. He immediately goes back to work.'
    this.speech[30] = ''
    this.speech[31] = 'You both continue silence between the two cubicles, with the occasional call being taken and the clattering of keyboards and mice.'
    this.speech[32] = "You do eventually see Leo taking a short break, and find it's an opportunity to continue the conversation."
    this.speech[33] = 'You’re working really hard today, what’s up with that?'
    this.speech[34] = 'I’ve made the decision to do more work now so that maybe I can do stuff later. Still don’t know if I’ll get everything done but, eh.'
    this.speech[35] = 'You’re gonna have fun? For real?'
    this.speech[36] = 'Oh don’t act too surprised. Don’t even know if I’ll end up going.'
    this.speech[37] = 'Well what are you doing?'
    this.speech[38] = 'Private information.'
    this.speech[39] = 'You make a weird face, “private information?” Who does he think he is? A superspy?'
    this.speech[40] = 'He chuckles and explains it’ll make sense later.'
    this.speech[41] = 'You assume he’s telling the truth, and go back to work.'
    this.speech[42] = 'At the end of the day, you don’t feel as tired because of the office coffee, but it sure didn’t taste very good. Not as good as Dandelion’s, that’s for sure.'
    this.speech[43] = 'Maybe they were right about the bland bean water being old news.'
    this.speech[44] = 'You’re too busy analyzing coffee to notice both Leo and Touca behind you.'
    this.speech[45] = 'Lil’ Buddy, wakey wakey! Time for school. :)'
    this.speech[46] = 'After nearly choking your gulp of bland coffee, they ask if you want to go to the Night Owls Cafe again.'
    this.speech[47] = 'Touca is dragging me this time to the cafe. She said Dandelion missed me, is that true?'
    this.speech[48] = 'He raises his eyebrows at you.'
    this.speech[49] = 'You say in a joking tone, “That’s private information.”'
    this.speech[50] = ''
    this.speech[51] = 'He lets out a heavy laugh.'
    this.speech[52] = 'You can’t just UNO reverse me! That’s illegal.'
    this.speech[53] = 'Wow Leo making a friend, how impressive! He’s finally warming up.'
    this.speech[54] = 'Yeah, yeah, let’s just go to the cafe.'
    this.speech[55] = ''

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

    this.office = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'office')
    this.office.setDepth(-20)

    this.cameras.main.fadeIn(1000)

    // load in dialogue stuff
    this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')
    this.dialBox = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBox')
    this.dialBox.setVisible(false).setActive(false)
    this.dialBox.setDepth(-10)
    this.box.setDepth(-10)

    this.boxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.boxChoice2 = this.add.image(320, 1100, 'textBoxBeige')

    this.choiceText1 = this.add.text(290, 880, "Leo's Fault", {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText2 = this.add.text(265, 1080, "Touca's Fault", {
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
        this.leoSprite.alpha = 1
      })
      .on('pointerout', () => {
        this.boxChoice1.setTexture('textBoxBeige')
        this.leoSprite.alpha = 0.5
      })
      .on('pointerdown', () => {
        this.i = 12
        this.updateCharBox()
        this.toucaHeart++
        this.registry.set('toucaHeart', this.toucaHeart)
        this.toucaHeart = Math.max(0, this.toucaHeart - 1)
        this.registry.set('toucaHeart', this.toucaHeart)
        this.text.setText(this.speech[this.i])

        this.DisappearLeoandTouca()
      })
    this.boxChoice2.setInteractive()
      .on('pointerover', () => {
        this.boxChoice2.setTexture('textBoxGreen')
        this.toucaSprite.alpha = 1
      })
      .on('pointerout', () => {
        this.boxChoice2.setTexture('textBoxBeige')
        this.toucaSprite.alpha = 0.5
      })
      .on('pointerdown', () => {
        this.i = 20
        this.updateCharBox()
        this.toucaHeart++
        this.leoHeart = this.leoHeart + 2
        this.registry.set('leoHeart', this.leoHeart)
        this.leoHeart = Math.max(0, this.leoHeart - 1)
        this.registry.set('leoHeart', this.leoHeart)

        this.registry.set('toucaHeart', this.toucaHeart)
        this.toucaHeart = Math.max(0, this.toucaHeart - 1)
        this.registry.set('toucaHeart', this.toucaHeart)
        this.text.setText(this.speech[this.i])

        this.DisappearLeoandTouca()
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

  disappearCharacter (character, charBG) {
    this.disableArrow()
    this.Tweener(character, character.x, 1300, 0.5, 0, 2000)
    this.Tweener(charBG, charBG.x, 1300, 1, 1, 2000)

    this.time.delayedCall(2000, () => {
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
    if (this.i === 0 || this.i === 2 || this.i === 5 || this.i === 8 || this.i === 12 || this.i === 14 || this.i === 20
      || this.i === 25 || this.i === 28 || this.i === 38 || this.i === 46 || this.i === 48 || this.i === 17 || this.i === 41 || this.i === 43 || this.i === 39 || this.i === 40) {
      this.narratorDialogue()
    }

    if (this.i === 1 || this.i === 6 || this.i === 9 || this.i === 22 || this.i === 26 || this.i === 45
      || this.i === 53) {
      this.ToucaDialogue()
    }

    if (this.i === 4 || this.i === 7 || this.i === 10 || this.i === 13 || this.i === 16 || this.i === 18 || this.i === 21
      || this.i === 24 || this.i === 34 || this.i === 36 || this.i === 38 || this.i === 47
      || this.i === 52 || this.i === 54) {
      this.LeoDialogue()
    }

    if (this.i === 15 || this.i === 33 || this.i === 35 || this.i === 37) {
      this.YouDialogue()
    }

    if (this.i === 1) {
      this.showCharacter(this.toucaSprite, this.toucaBG)
    }
    if (this.i === 2) {
      this.disappearCharacter(this.toucaSprite, this.toucaBG)
    }
    if (this.i === 3) {
      this.showCharacter(this.toucaSprite, this.toucaBG)
      this.showCharacter(this.leoSprite, this.leoBG)
    }

    if (this.i === 11) {
      this.Tweener(this.dialBox, this.dialBox.x, this.dialBox.x, 1, 0, 2000)
      this.Tweener(this.text, this.text.x, this.text.x, 1, 0, 2000)
      this.Tweener(this.nameText, this.nameText.x, this.nameText.x, 1, 0, 2000)

      this.Tweener(this.toucaIcon, this.toucaIcon.x, this.toucaIcon.x, 0, 1, 2000)

      this.TweenerY(this.boxChoice1, this.boxChoice1.y, 300, 1, 1)
      this.TweenerY(this.choiceText1, this.choiceText1.y, 280, 1, 1)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, 500, 1, 1)
      this.TweenerY(this.choiceText2, this.choiceText2.y, 480, 1, 1)

      this.disableArrow()

      this.time.delayedCall(2000, () => {
        this.setChoicesInteractive()
      })
    }

    if (this.i === 19 || this.i === 27) {
      this.disappearCharacter(this.toucaSprite, this.toucaBG)
      this.narratorDialogue()
      this.i = 28
    }

    if (this.i === 30) {
      this.disableArrow()
      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.switch('mini4')
      })
      this.i++
    }
    if (this.i === 31) {
      this.enableArrow()
      this.time.delayedCall(1000, () => {
        this.cameras.main.fadeIn(1000)
      })
    }

    if (this.i === 55) {
      this.box.setActive(true).setVisible(false)
      this.dialBox.setActive(true).setVisible(true)

      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.start('Day3Scene3')
      })
    }
  }

  DisappearLeoandTouca () {
    this.Tweener(this.dialBox, this.dialBox.x, this.dialBox.x, 0, 1, 2000)
    this.Tweener(this.text, this.text.x, this.text.x, 0, 1, 2000)
    this.Tweener(this.nameText, this.nameText.x, this.nameText.x, 0, 1, 2000)

    this.Tweener(this.toucaIcon, this.toucaIcon.x, this.toucaIcon.x, 1, 0, 2000)

    this.TweenerY(this.boxChoice1, this.boxChoice1.y, this.boxChoice1.y, 1, 0)
    this.TweenerY(this.choiceText1, this.choiceText1.y, this.choiceText1.y, 1, 0)

    this.TweenerY(this.boxChoice2, this.boxChoice2.y, this.boxChoice2.y, 1, 0)
    this.TweenerY(this.choiceText2, this.choiceText2.y, this.choiceText2.y, 1, 0)
    console.log(this.i)
    this.enableArrow()
  }

  update () {

  }
}
export default Day3Scene2
