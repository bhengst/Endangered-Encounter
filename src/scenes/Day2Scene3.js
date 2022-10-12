import Phaser from 'phaser'
import CONFIG from '../config.js'

class Day2Scene3 extends Phaser.Scene {
  create () {
    this.speech = []
    this.speech[0] = 'I still have to finish up some paperwork from today, so I\'ll take a quick break with you here and you can head home after ... I just can\'t deal with that high energy right now.'
    this.speech[1] = 'He sighs.'
    this.speech[2] = 'She\'s not actually that bad to hang out with, she\'s just a bit too draining on me after the workday has finished… Perhaps I have a low social battery.'
    this.speech[3] = 'Nor do I want to get ornery and say something I don\'t mean, of course.'
    this.speech[4] = 'What does she do here anyways?'
    this.speech[5] = 'Oh, yeah. She does the office art for an agency that goes around to all the offices in the city. She turns into a different person when she is on the clock. Not sure if I enjoy that version more or not, sure she\'s quieter and more focused, but it\'s like her color fades from her beak.'
    this.speech[6] = 'I don\'t like to stare, I think it makes it look like I pity her. I don\'t pity her if you\'re wondering, but I still wonder why she does this.'
    this.speech[7] = 'You stare at the table. Leo takes out a sandwich and starts eating it.'
    this.speech[8] = 'Oh well. Food recharges me good, though. So does flavored water, or sparkling water, or any water.'
    this.speech[9] = 'He perks up at the topic he\'s brought up himself.'
    this.speech[10] = 'Want a fun fact?'
    this.speech[11] = 'Did you know that all water tastes different but only some people can taste the difference? Eh, not a very fun fact, actually, maybe just a weird one.'
    this.speech[12] = 'You could now tell by the smell that his sandwich was mostly salami and ham, also too much mustard for a normal person to enjoy. Leo quickly eats the remaining bits seconds later.'
    this.speech[13] = 'You also notice that Leo\'s head fuzz is all out of place, as well as his tie. He looks quite tired overall, actually.'
    this.speech[14] = 'You also notice that Leo\'s head fuzz is all out of place, as well as his tie. He looks quite tired overall, actually.'
    // ask
    this.speech[15] = 'You know, I didn\'t see you when you came into work today. When did you punch in?'
    this.speech[16] = 'Leo looks up to you, perplexed by the question.'
    this.speech[17] = 'Oh, I always come in at 5 AM. I just need to get more done.'
    this.speech[18] = 'You are flabbergasted. The regular time to come in was 7:30 AM, sure there was unlimited overtime, but 5 AM is ridiculous to think about.'
    this.speech[19] = 'W...Why do you do that? I mean, we should all be getting the same amount of work assigned?'
    this.speech[20] = 'I mean, it\'s quite simple, it shows that I am a good coworker. I get employee of the month, and it shows I can handle myself and my work.'
    this.speech[21] = ''
    // push the subject
    this.speech[22] = 'I mean, maybe, but that just means you\'re overloading yourself in a lower job position. I mean we have similar job positions and I do not do as nearly as you do? Have you tried to get a promotion? Anything at all? I mean, you do so much?'
    this.speech[23] = 'That\'s not really something of my nature...'
    this.speech[24] = 'It doesn\'t have to be something of your nature! If you\'re doing more work you need to be recognized for that.'
    this.speech[25] = 'I...well. Hm. I figured that it would be seen already, but since it hasn\'t I just assume I haven\'t made much of a difference to the manager of the department.'
    this.speech[26] = 'You should bring it up soon. And it doesn\'t have to be tomorrow, but it could just be!'
    this.speech[27] = 'Leo puts a paw to his jaw and pouts down at the crumbs his sandwich left all over on the table.'
    this.speech[28] = 'Maybe...'
    this.speech[29] = ''
    // drop the subject
    this.speech[30] = 'I see. Please take care of yourself though, we can all share the work equally.'
    this.speech[31] = 'Hmm...Yeah. Anyways, I\'m gonna go finish up my work.'
    this.speech[32] = 'He leaves you at the table.'
    this.speech[33] = ''
    // end of choice 1 either way
    this.speech[34] = 'You now decide it is a good time to head home. As well as deciding to take public transport since it\'s dark out, and you want to conserve as much energy as you can to make it to your bed.'
    this.speech[35] = 'Your mind wanders once again when you sit down on the bus, now waiting for your stop.'
    this.speech[36] = ''
    // don't ask
    this.speech[37] = 'So, what do you do for fun around town? We could maybe quick hit something when you finish your last bits of work?'
    this.speech[38] = 'Ah well, I live too simply to be much fun. The most I do for fun is go find a new flavor of water to go crazy for at the grocery store, or I visit Dandelion, that barista at the Night Owl you saw yesterday and-'
    this.speech[39] = 'Wait, wait, wait, hold up. You said you buy weird water?'
    this.speech[40] = 'Leo becomes defensive.'
    this.speech[41] = 'It\'s not “weird” water, it\'s PREMIUM water. They taste better than tap water, and sparkling water is always above non-sparkling water.'
    this.speech[42] = 'His tail hits the ground in a playful annoyance. He smiles.'
    this.speech[43] = 'It\'s just something I can do for fun with how busy I am all the time.'
    this.speech[44] = 'You both continue talking about small hobbies, mostly you talking about your own, as Leo only has one or two more outside of the water connoisseur he\'s become in his free time.'
    this.speech[45] = 'Before you know it, you\'re yawning and need to head home. You decide to take public transport since it\'s dark out, and you want to conserve as much energy as you can to make it to your bed.'
    this.speech[46] = 'Your mind wanders once again when you sit down on the bus, now waiting for your stop.'
    this.speech[47] = ''

    this.i = 0

    this.firstCheckChoice = -1
    this.secondCheckChoice = -1
    this.dialogueBoxBool = true
    this.narratorBoxBool = false

    this.leoHeart = this.registry.get('leoHeart')
    this.toucaHeart = this.registry.get('toucaHeart')
    this.dandelionHeart = this.registry.get('dandelionHeart')

    // leo sprite
    this.leoSprite = this.add.sprite(1300, 0, 'Leo')
    this.leoSprite.setDepth(-14)
    this.leoBG = this.add.sprite(this.leoSprite.x, this.leoSprite.y, 'Leo')
    this.leoSprite.setOrigin(0, 0)
    this.leoBG.setOrigin(0, 0)
    this.leoBG.setDepth(-15)
    this.leoBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')

    this.leoIcon = this.add.sprite(90, 75, 'leoIcon')
    this.leoIcon.alpha = 0

    this.officeBreakroom = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'officeBreakroom')
    this.officeBreakroom.setDepth(-20)

    this.cameras.main.fadeIn(1000)

    this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')

    this.dialBox = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBox')
    this.box.setVisible(false).setActive(false)
    this.dialBox.setDepth(-10)
    this.box.setDepth(-10)

    this.text = this.add.text(120, 575, this.speech[0], {
      font: '32px Arial',
      color: '#000000',
      wordWrap: { width: 1100 }
    })

    this.nameText = this.add.text(50, 475, '', {
      font: '64px Arial',
      color: '#000000'
    })

    this.boxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.boxChoice2 = this.add.image(960, 900, 'textBoxBeige')

    this.choiceText1 = this.add.text(290, 880, 'Ask', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText2 = this.add.text(905, 880, 'Don\'t Ask', {
      font: '32px Arial',
      color: '#000000'
    })

    // choice boxes for second question
    this.secBoxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.secBoxChoice2 = this.add.image(960, 900, 'textBoxBeige')

    // choice text for second question
    this.secChoiceText1 = this.add.text(200, 880, 'Push the Subject', {
      font: '32px Arial',
      color: '#000000'
    })
    this.secChoiceText2 = this.add.text(850, 880, 'Drop the Subject', {
      font: '32px Arial',
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
        this.updateCharBox()
        console.log(this.i)
        this.text.setText(this.speech[this.i])
      })

    this.updateCharBox()
  }

  updateCharBox () {
    if (this.i === 0) {
      this.showCharacter(this.leoSprite, this.leoBG)

      this.spotlightLeo()
    }

    if (this.i === 4) {
      this.spotlightMain()
    }

    if (this.i === 5) {
      this.spotlightLeo()
    }

    if (this.i === 7) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.unspotlight()
    }

    if (this.i === 8) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightLeo()
    }

    if (this.i === 9) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.nameText.setText('')

      this.leoSprite.setTexture('LeoHappy')
      this.leoBG.setTexture('LeoHappy')
    }

    if (this.i === 10) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightLeo()
    }

    if (this.i === 12) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.unspotlight()

      this.leoSprite.setTexture('Leo')
      this.leoBG.setTexture('Leo')
    }

    if (this.i === 14) {
      // dialogue box and text
      this.TweenerY(this.box, this.box.y, -100, 1, 1)
      this.TweenerY(this.text, this.text.y, 70, 1, 1)

      // choice boxes with text
      this.TweenerY(this.boxChoice1, this.boxChoice1.y, 500, 1, 1)
      this.TweenerY(this.choiceText1, this.choiceText1.y, 480, 1, 1)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, 500, 1, 1)
      this.TweenerY(this.choiceText2, this.choiceText2.y, 480, 1, 1)

      this.disableArrow()

      this.time.delayedCall(2000, () => {
        this.setChoicesInteractive()
      })
    }

    if (this.i === 15) {
      // dialogue box and text
      this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
      this.TweenerY(this.text, this.text.y, 575, 1, 1)

      // choice boxes with text
      this.TweenerY(this.boxChoice1, this.boxChoice1.y, 500, 1, 0)
      this.TweenerY(this.choiceText1, this.choiceText1.y, 480, 1, 0)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, 500, 1, 0)
      this.TweenerY(this.choiceText2, this.choiceText2.y, 480, 1, 0)

      this.time.delayedCall(2100, this.enableArrow())
      this.time.delayedCall(2100, this.dealWithChoice())

      this.time.delayedCall(2200, () => {
        this.dialogueBoxBool = true
        this.narratorBoxBool = false
        this.changeBox()
        this.spotlightMain()
      })
    }

    if (this.i === 16) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.unspotlight()
    }

    if (this.i === 17) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightLeo()
    }

    if (this.i === 18) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.unspotlight()
    }

    if (this.i === 19) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightMain()
    }

    if (this.i === 20) {
      this.spotlightLeo()
    }

    if (this.i === 21) {
      this.unspotlight()

      this.Tweener(this.dialBox, this.dialBox.x, this.dialBox.x, 1, 0, 2000)
      this.Tweener(this.text, this.text.x, this.text.x, 1, 0, 2000)
      this.Tweener(this.nameText, this.nameText.x, this.nameText.x, 1, 0, 2000)

      this.TweenerY(this.secBoxChoice1, this.secBoxChoice1.y, 400, 1, 1)
      this.TweenerY(this.secChoiceText1, this.secChoiceText1.y, 380, 1, 1)

      this.TweenerY(this.secBoxChoice2, this.secBoxChoice2.y, 400, 1, 1)
      this.TweenerY(this.secChoiceText2, this.secChoiceText2.y, 380, 1, 1)

      this.disableArrow()

      this.time.delayedCall(2000, () => {
        this.setSecondChoices()
      })
    }

    if (this.i === 22) {
      this.spotlightMain()

      this.Tweener(this.dialBox, this.dialBox.x, this.dialBox.x, 0, 1, 1800)
      this.Tweener(this.text, this.text.x, this.text.x, 0, 1, 1800)
      this.Tweener(this.nameText, this.nameText.x, this.nameText.x, 0, 1, 1800)

      this.TweenerY(this.secBoxChoice1, this.secBoxChoice1.y, this.secBoxChoice1.y, 1, 0)
      this.TweenerY(this.secChoiceText1, this.secChoiceText1.y, this.secChoiceText1.y, 1, 0)

      this.TweenerY(this.secBoxChoice2, this.secBoxChoice2.y, this.secBoxChoice2.y, 1, 0)
      this.TweenerY(this.secChoiceText2, this.secChoiceText2.y, this.secChoiceText2.y, 1, 0)

      this.time.delayedCall(2100, this.enableArrow())
      this.time.delayedCall(2100, this.dealWithSecondChoice())
      console.log(this.i)
    }

    if (this.i === 23) {
      this.spotlightLeo()
    }

    if (this.i === 24) {
      this.spotlightMain()
    }

    if (this.i === 25) {
      this.spotlightLeo()
    }

    if (this.i === 26) {
      this.spotlightMain()
    }

    if (this.i === 27) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.nameText.setText('')

      this.spotlightLeo()
    }

    if (this.i === 28) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()
      this.spotlightLeo()

      this.disappearCharacter(this.leoSprite, this.leoBG)

      this.i = 34
    }

    // drop the subject
    if (this.i === 30) {
      this.spotlightMain()
    }

    if (this.i === 31) {
      this.spotlightLeo()
    }

    if (this.i === 32) {
      this.disappearCharacter(this.leoSprite, this.leoBG)

      this.i = 34
    }

    if (this.i === 34) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.unspotlight()
    }

    if (this.i === 36 || this.i === 47) {
      this.disableArrow()
      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.start('mini3')
      })
    }

    if (this.i === 38) {
      this.spotlightLeo()
    }

    if (this.i === 39) {
      this.spotlightMain()
    }

    if (this.i === 40) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.nameText.setText('')
      this.leoSprite.alpha = 1
    }

    if (this.i === 41) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightLeo()
    }

    if (this.i === 42) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.nameText.setText('')
    }

    if (this.i === 43) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightLeo()
    }

    if (this.i === 44) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.nameText.setText('')
    }
  }

  dealWithSecondChoice () {
    switch (this.secondCheckChoice) {
      case 1:
        this.i = 22 // push subject
        break
      case 2:
        this.i = 30 // drop subject
        break
    }
  }

  setSecondChoices () {
    this.secBoxChoice1.setInteractive()
      .on('pointerover', () => {
        this.secBoxChoice1.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        this.secBoxChoice1.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.i++
        this.leoHeart++
        this.registry.set('leoHeart', this.leoHeart)
        this.secondCheckChoice = 1
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
    this.secBoxChoice2.setInteractive()
      .on('pointerover', () => {
        this.secBoxChoice2.setTexture('textBoxGreen')
        this.toucaSprite.alpha = 1
      })
      .on('pointerout', () => {
        this.secBoxChoice2.setTexture('textBoxBeige')
        this.toucaSprite.alpha = 0.5
      })
      .on('pointerdown', () => {
        this.i++
        this.leoHeart = Math.max(0, this.leoHeart - 1)
        this.secondCheckChoice = 2
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
  }

  dealWithChoice () {
    switch (this.firstCheckChoice) {
      case 1:
        this.i = 15 // ask
        break
      case 2:
        this.i = 37 // don't ask
        break
    }
  }

  setChoicesInteractive () {
    this.boxChoice1.setInteractive()
      .on('pointerover', () => {
        this.boxChoice1.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        this.boxChoice1.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.i++
        this.firstCheckChoice = 1
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
        this.i++
        this.leoHeart++
        this.firstCheckChoice = 2
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

  unspotlight () {
    this.nameText.setText('')
    this.leoSprite.alpha = 0.5
  }

  spotlightMain () {
    this.leoSprite.alpha = 0.5
    this.nameText.setText('You')
  }

  spotlightLeo () {
    this.nameText.setText('Leo')
    this.leoSprite.alpha = 1
  }

  showCharacter (character, charBG) {
    // if (this.showLeo) {
    this.disableArrow()
    this.Tweener(character, 1300, 600, 0.0, 1, 2000)
    this.Tweener(charBG, 1300, 600, 1, 1, 2000)

    this.time.delayedCall(2000, () => {
      this.enableArrow()
    })
    // }
  }

  disappearCharacter (character, charBG) {
    // if (this.showLeo) {
    this.disableArrow()
    this.Tweener(character, character.x, 1300, 1, 0, 2000)
    this.Tweener(charBG, charBG.x, 1300, 1, 1, 2000)

    this.time.delayedCall(2000, () => {
      this.enableArrow()
      this.nameText.setText('')
    })
    // }
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
}

export default Day2Scene3
