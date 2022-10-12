import Phaser from 'phaser'
import CONFIG from '../config.js'
import TitleScene from './TitleScene.js'
import MiniGame2 from './MiniGame2.js'

class Day2Scene2 extends Phaser.Scene {
  create () {
    this.speech = []
    this.speech[0] = 'Walking into the white office space, many of the features are similar to the old office you came from. The beige walls, the greyscale furniture, and blue-tinted glass all recall your last office. The biggest difference is people.'
    this.speech[1] = 'There is almost an animal in every single cubicle and office. You get introduced to your empty cubicle by the shift lead. You look over your cubicle walls, on one side is a wall, and on the other is a familiar face...'
    this.speech[2] = 'Stop staring at me Larry- Huh?'
    this.speech[3] = 'He turns his head to you in surprise.'
    this.speech[4] = 'YOU\'RE the new guy??????'
    this.speech[5] = 'You know them?'
    this.speech[6] = 'No not really. Saw him yesterday though...just a small world.'
    this.speech[7] = 'Leo quickly gets back to work. You notice some fur out of place and frizzed. He seems quite overworked and it\'s only 8 AM…'
    this.speech[8] = '...Do new coworkers get surprised by you a lot?'
    this.speech[9] = 'Explain further...?'
    this.speech[10] = 'When I heard Leo, I dunno, I suppose I expected a lion?'
    this.speech[11] = 'Hm.... I suppose.. Hey, I\'ll give you a knee slapper. Which species do you think I\'m closest related to?'
    this.speech[12] = 'Which species do you think I\'m closest related to?'
    this.speech[13] = ''
    this.speech[14] = 'I am going to forget you said that.'
    this.speech[15] = 'He spins his chair around and refuses to talk to you for the rest of the workday.'
    this.speech[16] = ''
    this.speech[17] = 'Hm...Well decent guess but still wrong. Not offended though, they\'re a very respectable species.'
    this.speech[18] = 'He goes back to work.'
    this.speech[19] = ''
    this.speech[20] = 'His eyebrows immediately raise, he looks surprised.'
    this.speech[21] = 'Huh, guess you\'re pretty well informed. It\'s nice when someone guesses right for once.'
    this.speech[22] = 'He goes back to work.'
    this.speech[23] = 'Your supervisor comes back and continues to introduce you to the basics of the job and your duties. You lull in and out of auto-pilot through the training. It\'s all stuff you already know. You get slightly distracted...'
    this.speech[24] = ''
    this.speech[25] = ''
    this.speech[26] = 'You come back to your senses and exit the auto-pilot of working to realize most of the day has flown by! Your manager is just finishing up some conversation about an office artist coming in soon, and not to bother them directly.'
    this.speech[27] = 'A couple of minutes pass by without issue afterward. But then you spot it. A fancy, elite-looking pair walking through the hallway, measuring the walls and taking photos.'
    this.speech[28] = 'The one is the receptionist front the front desk, the other...is hard to believe.'
    this.speech[29] = 'It\'s that toucan...although it\'s a much different demeanor of the toucan from last night. It is the same bird though, right?'
    this.speech[30] = 'You continue looking over your cubicle wall until you feel a paw on top of your head, pushing you back down. You turn around frantically, and it\'s Leo, again.'
    this.speech[31] = 'If you keep staring over there I think I\'ll throw up from the social constipation you emanate.'
    this.speech[32] = 'H-hey! I\'m not staring. Also- Hey!! I know how to make friends.'
    this.speech[33] = 'Surely. Then what are you doing?'
    this.speech[34] = 'I\'m...confused?'
    this.speech[35] = 'Aren\'t we all… She doesn\'t really work here full-time. She helps to make the office a little less decrepit.'
    this.speech[36] = 'You look back over, and Touca seems to have just finished talking to their other professional half over yonder. The accomplice points towards the cubicles, towards you, specifically.'
    this.speech[37] = 'Oh no. Touca looks over, she sees you and immediately breaks character, her hands go to the sides of her face in surprise.'
    this.speech[38] = 'You duck back down.'
    this.speech[39] = 'Eugh...I told you to stop starting.'
    this.speech[40] = 'She\'s not that bad….right?'
    this.speech[41] = 'It\'s all in personal taste. You were exposed to it yesterday, I suppose.'
    this.speech[42] = 'Touca is already on top of both of your cubicles, already breathing in to start a long-winded conversation. When Leo stops her from the beginning-'
    this.speech[43] = 'HEY, buddy! Didn\'t know you were working here. You shoulda told me yesterday! I could have introduced myself way better. Not to mention Leo can have a new office friend to-'
    this.speech[44] = '-WELL...Woofta, it\'s the end of the workday...gotta get going...I am...going to head out.'
    this.speech[45] = 'Hey!! The one time Leo wants to avoid work is because I\'m right here.'
    this.speech[46] = 'At least the newbie here can\'t leave without me asking if you want to go out to the cafe tonight? I wasn\'t even aware you worked HERE. Can\'t just leave me hanging like this now that we\'re all coworkers, dude!!'
    this.speech[47] = ''
    // go with leo
    this.speech[48] = 'You decide that getting out of here is for the best. It\'s the end of the workday for goodness sake! Can\'t be spending all your time with work and coworkers.'
    this.speech[49] = 'Come oooooon, I\'m not like the bearer of the plague. Leo back me up!'
    this.speech[50] = '“Buddy” here made their decision! Maybe next time.'
    this.speech[51] = 'Touca huffs and picks back up her paperwork, heading into a different area of the office to pack up fully.'
    this.speech[52] = 'Leo leads you to the break room, and he sits down. You follow suit.'
    this.speech[53] = ''
    // go with touca
    this.speech[54] = 'Maybe just for today, you think it will be ok to stay around. Touca immediately scree\'s in joy for a new acquaintance to join her.'
    this.speech[55] = 'Oh yay!! I will make sure you get to have a fun time. Although it\'ll mostly be us and Dandelion, oh do you remember Dandelion? They served you your coffee yesterday. Although you will have to pay for it today. It\'s one of his better business tactics.'
    this.speech[56] = '(Ah, so it wasn\'t because I was special or anything that I got a free coffee….aw man..)'
    this.speech[57] = 'No worries about that now, now is the time to have a bit of fun since you\'re new in town. You finally get to tell me about yourself-'
    this.speech[58] = '-Except I\'ll go first, of course. You can probably already tell I love high-energy people, perhaps. Did Leo tell you what I do here? I make the art in all the offices with the agency I\'m in! It\'s snazzy, to say the least, but, ya know, can be a drag, haha.'
    this.speech[59] = 'Her beak does a weird enunciation and emphasis on “drag,” like she\'s trying to be comedic but it is the awkward, yet real truth.'
    this.speech[60] = ''

    this.i = 0
    this.firstCheckChoice = -1
    this.secondCheckChoice = -1
    this.dialogueBoxBool = false
    this.narratorBoxBool = true
    this.showLeo = false

    this.leoHeart = this.registry.get('leoHeart')
    this.toucaHeart = this.registry.get('toucaHeart')
    this.dandelionHeart = this.registry.get('dandelionHeart')

    // load in character sprites
    // leo
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

    this.office = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'office')
    this.office.setDepth(-20)
    // this.officeBreak = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'officeBreakroom')
    // this.officeBreak.setDepth(-20)

    this.cameras.main.fadeIn(1000)
    // this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, (cam, effect) => {
    // load in dialogue stuff
    this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')
    // this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'smallDialogueBox')

    this.dialBox = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBox')
    this.dialBox.setVisible(false).setActive(false)
    this.dialBox.setDepth(-10)
    this.box.setDepth(-10)

    // this.choices = []
    this.boxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.boxChoice2 = this.add.image(320, 1100, 'textBoxBeige')
    this.boxChoice3 = this.add.image(960, 900, 'textBoxBeige')
    this.boxChoice4 = this.add.image(960, 1100, 'textBoxBeige')

    // choice text for first question
    this.choiceText1 = this.add.text(290, 880, 'Lion', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText2 = this.add.text(265, 1080, 'Jaguar', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText3 = this.add.text(905, 880, 'Leopard', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText4 = this.add.text(915, 1080, 'Tiger', {
      font: '32px Arial',
      color: '#000000'
    })

    // choice boxes for second question
    this.secBoxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.secBoxChoice2 = this.add.image(320, 1100, 'textBoxBeige')

    // choice text for second question
    this.secChoiceText1 = this.add.text(240, 900, 'Go With Leo', {
      font: '32px Arial',
      color: '#000000'
    })
    this.secChoiceText2 = this.add.text(240, 1100, 'Go With Touca', {
      font: '32px Arial',
      color: '#000000'
    })

    this.text = this.add.text(120, 575, this.speech[0], {
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
        this.updateCharBox()
        console.log(this.i)
        this.text.setText(this.speech[this.i])
      })
    // })
  }

  disableArrow () {
    console.log('yoooo')
    this.Tweener(this.button, this.button.x, this.button.x, 1, 0, 300)
    this.button.setVisible(false).setActive(false)
  }

  enableArrow () {
    console.log('here')
    this.Tweener(this.button, this.button.x, this.button.x, 0, 1, 300)
    this.button.setVisible(true).setActive(true)
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
        this.leoHeart = Math.max(0, this.leoHeart - 1)
        this.registry.set('leoHeart', this.leoHeart)
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
        this.firstCheckChoice = 2
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
    this.boxChoice3.setInteractive()
      .on('pointerover', () => {
        this.boxChoice3.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        this.boxChoice3.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.i++
        this.firstCheckChoice = 3
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
    this.boxChoice4.setInteractive()
      .on('pointerover', () => {
        this.boxChoice4.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        this.boxChoice4.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.i++
        this.leoHeart++
        this.registry.set('leoHeart', this.leoHeart)
        this.firstCheckChoice = 4
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
  }

  setSecondChoices () {
    this.secBoxChoice1.setInteractive()
      .on('pointerover', () => {
        this.secBoxChoice1.setTexture('textBoxGreen')
        this.leoSprite.alpha = 1
      })
      .on('pointerout', () => {
        this.secBoxChoice1.setTexture('textBoxBeige')
        this.leoSprite.alpha = 0.5
      })
      .on('pointerdown', () => {
        this.i++
        this.leoHeart++
        this.registry.set('leoHeart', this.leoHeart)
        this.toucaHeart = Math.max(0, this.toucaHeart - 1)
        this.registry.set('toucaHeart', this.toucaHeart)
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
        this.toucaHeart++
        this.registry.set('toucaHeart', this.toucaHeart)
        this.secondCheckChoice = 2
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
  }

  updateCharBox () {
    if (this.i === 2) {
      this.showLeo = true
      this.showCharacter(this.leoSprite, this.leoBG)

      this.nameText.setText('Leo')

      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()
    }

    if (this.i === 3) {
      this.unspotlight()

      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 4) {
      this.nameText.setText('Leo')

      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()
    }

    if (this.i === 5) {
      this.nameText.setText('Manager')
      this.leoSprite.alpha = 0.5
    }

    if (this.i === 6) {
      this.spotlightLeo()
    }

    if (this.i === 7) {
      this.nameText.setText('')

      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.leoSprite.alpha = 0.5
    }

    if (this.i === 8) {
      this.spotlightMain()

      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()
    }

    if (this.i === 9) {
      this.spotlightLeo()
    }

    if (this.i === 10) {
      this.spotlightMain()
    }

    if (this.i === 11) {
      this.spotlightLeo()
    }

    if (this.i === 12) {
      this.nameText.setText('')
      this.text.setX(170)

      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.leoSprite.alpha = 0.5

      this.Tweener(this.leoIcon, this.leoIcon.x, this.leoIcon.x, 0, 1, 2000)

      // dialogue box and text
      this.TweenerY(this.box, this.box.y, -100, 1, 1)
      this.TweenerY(this.text, this.text.y, 70, 1, 1)

      // choice boxes with text
      this.TweenerY(this.boxChoice1, this.boxChoice1.y, 400, 1, 1)
      this.TweenerY(this.choiceText1, this.choiceText1.y, 380, 1, 1)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, 600, 1, 1)
      this.TweenerY(this.choiceText2, this.choiceText2.y, 580, 1, 1)

      this.TweenerY(this.boxChoice3, this.boxChoice3.y, 400, 1, 1)
      this.TweenerY(this.choiceText3, this.choiceText3.y, 380, 1, 1)

      this.TweenerY(this.boxChoice4, this.boxChoice4.y, 600, 1, 1)
      this.TweenerY(this.choiceText4, this.choiceText4.y, 580, 1, 1)

      this.disableArrow()

      this.time.delayedCall(2000, () => {
        this.setChoicesInteractive()
      })
    }

    if (this.i === 13) {
      this.TweenerY(this.boxChoice1, this.boxChoice1.y, this.boxChoice1.y, 1, 0)
      this.TweenerY(this.choiceText1, this.choiceText1.y, this.choiceText1.y, 1, 0)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, this.boxChoice2.y, 1, 0)
      this.TweenerY(this.choiceText2, this.choiceText2.y, this.choiceText2.y, 1, 0)

      this.TweenerY(this.boxChoice3, this.boxChoice3.y, this.boxChoice3.y, 1, 0)
      this.TweenerY(this.choiceText3, this.choiceText3.y, this.choiceText3.y, 1, 0)

      this.TweenerY(this.boxChoice4, this.boxChoice4.y, this.boxChoice4.y, 1, 0)
      this.TweenerY(this.choiceText4, this.choiceText4.y, this.choiceText4.y, 1, 0)

      this.text.setX(120)

      this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
      this.TweenerY(this.text, this.text.y, 575, 1, 1)

      this.Tweener(this.leoIcon, this.leoIcon.x, this.leoIcon.x, 1, 0, 2000)

      this.time.delayedCall(2100, this.enableArrow())
      this.time.delayedCall(2100, this.dealWithChoice())
      console.log(this.i)
      this.time.delayedCall(2200, () => {
        this.dialogueBoxBool = true
        this.narratorBoxBool = false
        this.changeBox()
      })
    }

    if (this.i === 16 || this.i === 19) {
      this.i = 23
    }

    if (this.i === 14 || this.i === 17 || this.i === 20 || this.i === 21) {
      if (this.firstCheckChoice === 1) {
        this.leoSprite.setTexture('LeoUpset')
        this.leoBG.setTexture('LeoUpset')
      }
      if (this.firstCheckChoice === 4) {
        this.leoSprite.setTexture('LeoHappy')
        this.leoBG.setTexture('LeoHappy')
      }
      this.spotlightLeo()
    }

    if (this.i === 15 || this.i === 18 || this.i === 22) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.disappearCharacter(this.leoSprite, this.leoBG)
    }

    if (this.i === 24) {
      this.disableArrow()
      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.switch('mini2')
      })
      this.i++
    }

    if (this.i === 25) {
      this.enableArrow()
      this.time.delayedCall(1000, () => {
        this.cameras.main.fadeIn(1000)

        this.i++
        this.text.setText(this.speech[this.i])
        this.leoSprite.setTexture('Leo')
        this.leoBG.setTexture('Leo')
      })
    }

    if (this.i === 31) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.showLeo = true

      this.showCharacter(this.leoSprite, this.leoBG)
      this.spotlightLeo()
    }

    if (this.i === 32) {
      this.spotlightMain()
    }

    if (this.i === 33) {
      this.spotlightLeo()
    }

    if (this.i === 34) {
      this.spotlightMain()
    }

    if (this.i === 35) {
      this.spotlightLeo()
    }

    if (this.i === 36) {
      this.unspotlight()
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 39) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightLeo()
    }

    if (this.i === 40) {
      this.spotlightMain()
    }

    if (this.i === 41) {
      this.spotlightLeo()
    }

    if (this.i === 42) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.unspotlight()
    }

    if (this.i === 43) {
      this.showCharacter(this.toucaSprite, this.toucaBG)
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()
      this.spotlightTouca()
    }

    if (this.i === 44) {
      this.spotlightLeo()
    }

    if (this.i === 45) {
      this.spotlightTouca()
    }

    if (this.i === 47) {
      this.unspotlight()

      this.Tweener(this.dialBox, this.dialBox.x, this.dialBox.x, 1, 0, 2000)
      this.Tweener(this.text, this.text.x, this.text.x, 1, 0, 2000)
      this.Tweener(this.nameText, this.nameText.x, this.nameText.x, 1, 0, 2000)

      this.Tweener(this.toucaIcon, this.toucaIcon.x, this.toucaIcon.x, 0, 1, 2000)

      this.TweenerY(this.secBoxChoice1, this.secBoxChoice1.y, 300, 1, 1)
      this.TweenerY(this.secChoiceText1, this.secChoiceText1.y, 280, 1, 1)

      this.TweenerY(this.secBoxChoice2, this.secBoxChoice2.y, 500, 1, 1)
      this.TweenerY(this.secChoiceText2, this.secChoiceText2.y, 480, 1, 1)

      this.disableArrow()

      this.time.delayedCall(2000, () => {
        this.setSecondChoices()
      })
    }

    if (this.i === 48) {
      this.Tweener(this.dialBox, this.dialBox.x, this.dialBox.x, 0, 1, 2000)
      this.Tweener(this.text, this.text.x, this.text.x, 0, 1, 2000)
      this.nameText.setText('')
      this.Tweener(this.nameText, this.nameText.x, this.nameText.x, 0, 1, 2000)

      this.Tweener(this.toucaIcon, this.toucaIcon.x, this.toucaIcon.x, 1, 0, 2000)

      this.TweenerY(this.secBoxChoice1, this.secBoxChoice1.y, this.secBoxChoice1.y, 1, 0)
      this.TweenerY(this.secChoiceText1, this.secChoiceText1.y, this.secChoiceText1.y, 1, 0)

      this.TweenerY(this.secBoxChoice2, this.secBoxChoice2.y, this.secBoxChoice2.y, 1, 0)
      this.TweenerY(this.secChoiceText2, this.secChoiceText2.y, this.secChoiceText2.y, 1, 0)

      this.time.delayedCall(2100, this.enableArrow())
      this.time.delayedCall(2100, this.dealWithSecondChoice())
      console.log(this.i)
      this.time.delayedCall(2200, () => {
        this.dialogueBoxBool = false
        this.narratorBoxBool = true
        this.changeBox()
      })
    }

    if (this.i === 49) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()
      this.toucaSprite.setTexture('ToucaUpset')
      this.toucaBG.setTexture('ToucaUpset')
      this.spotlightTouca()
    }

    if (this.i === 50) {
      this.spotlightLeo()
    }

    if (this.i === 51) {
      this.unspotlight()
      this.disappearCharacter(this.toucaSprite, this.toucaBG)

      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 53) {
      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.start('Day2Scene3')
      })
    }

    if (this.i === 54) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.unspotlight()
    }

    if (this.i === 55) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightTouca()
    }

    if (this.i === 56) {
      this.spotlightMain()
    }

    if (this.i === 57) {
      this.spotlightTouca()
    }

    if (this.i === 59) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 60) {
      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.start('Day2Scene4')
      })
    }
  }

  unspotlight () {
    this.nameText.setText('')
    this.leoSprite.alpha = 0.5
    this.toucaSprite.alpha = 0.5
  }

  spotlightMain () {
    this.leoSprite.alpha = 0.5
    this.toucaSprite.alpha = 0.5
    this.nameText.setText('You')
  }

  spotlightLeo () {
    this.nameText.setText('Leo')
    this.toucaSprite.alpha = 0.5
    this.leoSprite.alpha = 1
  }

  spotlightTouca () {
    this.nameText.setText('Touca')
    this.toucaSprite.alpha = 1
    this.leoSprite.alpha = 0.5
  }

  dealWithChoice () {
    switch (this.firstCheckChoice) {
      case 1:
        this.i = 14
        break
      case 2:
        this.i = 17
        break
      case 3:
        this.i = 17
        break
      case 4:
        this.i = 20
    }
  }

  dealWithSecondChoice () {
    switch (this.secondCheckChoice) {
      case 1:
        this.i = 48
        break
      case 2:
        this.i = 54 // touca's
        break
    }
  }

  showCharacter (character, charBG) {
    if (this.showLeo) {
      this.disableArrow()
      this.Tweener(character, 1300, 600, 0.0, 1, 2000)
      this.Tweener(charBG, 1300, 600, 1, 1, 2000)

      this.time.delayedCall(2000, () => {
        this.enableArrow()
      })
    }
  }

  disappearCharacter (character, charBG) {
    if (this.showLeo) {
      this.disableArrow()
      this.Tweener(character, character.x, 1300, 1, 0, 2000)
      this.Tweener(charBG, charBG.x, 1300, 1, 1, 2000)

      this.time.delayedCall(2000, () => {
        this.enableArrow()
        this.showLeo = false
        this.nameText.setText('')
      })
    }
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

  update () {

  }
}

export default Day2Scene2
