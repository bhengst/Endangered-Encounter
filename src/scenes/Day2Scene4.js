import Phaser from 'phaser'
import CONFIG from '../config.js'

class Day2Scene4 extends Phaser.Scene {
  create () {
    this.speech = []
    this.speech[0] = 'You explain how you were just relocated to this office from your old location. Migration isn\'t easy, but talking about all the bumps and troubles so far from the moving process does let you feel a bit lighter.'
    this.speech[1] = 'So a bit of a rough start, but a new start nonetheless, huh? Well, I hope it\'s been intriguing so far!'
    this.speech[2] = 'She opens the cafe door for you. Walking in, you notice it\'s not a rush of people inside yet, probably because it\'s just before the sunset.'
    this.speech[3] = 'Dandy!! I brought a new friend!'
    this.speech[4] = 'You\'re surprised by the earnestness Touca has to call you a friend, although you barely know each other yet. Perhaps it\'s just her nature, or maybe Toucans are generally friendly people? They are loud ones, that\'s for sure.'
    this.speech[5] = 'Dandelion sees you and immediately perks up more. His ears facing forwards fully at you.'
    this.speech[6] = 'Oh! I\'m so glad you\'ve come back again. And you as well, Touca.'
    this.speech[7] = 'As you know I can\'t give you a free drink this time, company policy!'
    this.speech[8] = 'You\'re literally the guy who writes company policy, you could always give me a free drink. '
    this.speech[9] = 'She poses dramatically over the counter.'
    this.speech[10] = 'I\'m just here to relax after work-'
    this.speech[11] = 'YEAH! WHO KNEW THEY WORKED AT LEO\'S OFFICE! It\'s a small wooooorld aaaafter a-'
    this.speech[12] = 'We can\'t sing copyrighted music here! I don\'t have that kind of money.'
    this.speech[13] = 'O-oh, you work with Leo? Did he want to come as well or did his tendencies get the best of him?'
    this.speech[14] = 'He had work to finish up, unfortunately.'
    this.speech[15] = 'As expected, he works too hard, which shortens your lifespan, in my opinion.'
    this.speech[16] = 'Dandelion sighs.'
    this.speech[17] = 'Do tell him next time I\'d like to see him around again. Regardless, Touca, would you mind getting your prints set up for the art sale?'
    this.speech[18] = 'AYE AYE Captain!!'
    this.speech[19] = 'She gets so happy when talking about personal work, quite refreshing when most of your clientele is jaded city dwellers, aha.'
    this.speech[20] = 'They smile solemnly at you.'
    this.speech[21] = 'I\'m not sure how tired you are but if you just want to go home after a drink, I\'m not offended by any means. Touca may want you to stay longer, but that\'s your choice.'
    this.speech[22] = 'After all, it\'s still your second day! I\'d rest too if I was you.'
    this.speech[23] = 'They turn, grabbing a mug.'
    this.speech[24] = 'When I came to this city years ago, everything was so different, much smaller, and everything was so lighthearted, kinder even.'
    this.speech[25] = 'I like to think I can help keep a hold on that kindness with my place here.'
    this.speech[26] = 'Of course, I feel I can do more, but it is hard. Hard to accept what must be done.'
    this.speech[27] = 'You watch them brew something for you, despite not asking or requesting a flavor yet. You continue listening to them.'
    this.speech[28] = 'As we all get older, people forget what it means to be a friend. It takes little to no effort to hurt something, and even easier to ignore it. The real challenge is to heal something, spend compassion onto someone.'
    this.speech[29] = 'This place has been my effort to keep love and compassion in this city. For the consideration of those otherwise forgotten, it is a haven in this city.'
    this.speech[30] = 'They hand a small cup in front of you, pouring what they brewed into it. They look a bit solemn now.'
    this.speech[31] = 'Apologies for rambling. I\'ve had much on my mind, and you got me to think what more can I do for both new and old companions of the cafe.'
    this.speech[32] = 'Thank you for listening. This one is on the house, it is chai.'
    this.speech[33] = 'The three of us you\'ve met so far, at least, have had this city change them, for better or worse.'
    this.speech[34] = 'They stare towards Touca, who is still putting up prints on the wall.'
    this.speech[35] = 'A mere hypothetical, but do you think I can do it? Do more for this community?'
    this.speech[36] = 'A mere hypothetical, but do you think I can do it? Do more for this community?'
    this.speech[37] = 'He becomes quiet, staring at the wall of art Touca has assembled.'
    this.speech[38] = 'I see.'
    this.speech[39] = 'You drink your tea and think to yourself. What are you doing for others? Can being a good friend do that much?'
    this.speech[40] = 'After all, you just listened to Dandelion for a generous amount of time, and they look to be put to ease now. Maybe that\'s some of the biggest impact you can have on those around you?'
    this.speech[41] = 'You remember Dandelion\'s advisement. Do you want to go home early?'
    this.speech[42] = 'You remember Dandelion\'s advisement. Do you want to go home early?'
    // leave early
    this.speech[43] = 'You gesture and thank Dandelion for another free drink. They pop back into reality to wave and send pleasantries as you leave.'
    this.speech[44] = 'You do quickly check in with Touca and while she is saddened you\'re leaving early, she understands. She does show you very quickly her pet project she has at the cafe.'
    this.speech[45] = 'She sells prints that make her happy. She looks very happy to talk about it, and this time is not over the top on energy. It is quaint.'
    this.speech[46] = 'You head home and immediately fall asleep when you get into bed.'
    this.speech[47] = ''
    // stay
    this.speech[48] = 'By now, Touca has already come back, and urges you to come see.'
    this.speech[49] = 'There is a huge wall of small prints covering the wall, edge by edge, and while each image is great on their own, all together they make a huge illustration.'
    this.speech[50] = 'So much color. It\'s like the whole piece is moving. It\'s quite beautiful.'
    this.speech[51] = 'Wow.. Do you spend all your free time on stuff like this?'
    this.speech[52] = 'Yeah.. This brings me...more happiness. But I can only give it a little time every other day.'
    this.speech[53] = 'This has taken me a few months from just some of my “free time”.'
    this.speech[54] = 'Touca takes upon a melancholy look.'
    this.speech[55] = 'I\'d love to do this more but, I don\'t think I\'d be able to. Able to survive on that, I mean.'
    this.speech[56] = 'The agency allows me to be somewhat comfortable. I don\'t worry about not making rent, I can afford groceries, the whole shabang.'
    this.speech[57] = 'It\'s both exciting and difficult. This is something I really love pursuing, since it\'s coming from my own heart.'
    this.speech[58] = 'It\'s just, I don\'t think people would be more interested than what I bring to the cafe, y\'know? I could be happier, but could I really live?'
    this.speech[59] = 'It\'s just, I don\'t think people would be more interested than what I bring to the cafe, y\'know? I could be happier, but could I really live?'
    // stay safe
    this.speech[60] = 'Yeah, you\'re probably right.'
    this.speech[61] = 'She shifts her weight to the other leg and leans on a table.'
    this.speech[62] = 'Yeah.'
    this.speech[63] = 'You now feel awkward in this spot, to say the least.'
    // make the jump
    this.speech[64] = 'Do you really think so?'
    this.speech[65] = '...'
    this.speech[66] = 'Maybe it is time to make a leap of faith.'
    // regardless
    this.speech[67] = 'Touca gets approached by a few cafe guests asking about the art for sale. Touca gestures to you and caters to the guests now with her.'
    this.speech[68] = 'You are feeling quite exhausted now, to say the least. You say your goodbyes to both Touca and Dandelion and head home.'
    this.speech[69] = ''

    this.i = 0

    this.firstCheckChoice = -1
    this.secondCheckChoice = -1
    this.thirdCheckChoice = -1
    this.dialogueBoxBool = false
    this.narratorBoxBool = true

    this.leoHeart = this.registry.get('leoHeart')
    this.toucaHeart = this.registry.get('toucaHeart')
    this.dandelionHeart = this.registry.get('dandelionHeart')

    // touca sprite
    this.toucaSprite = this.add.sprite(1300, 0, 'ToucaHappy')
    this.toucaSprite.setDepth(-14)
    this.toucaBG = this.add.sprite(this.toucaSprite.x, this.toucaSprite.y, 'ToucaHappy')
    this.toucaSprite.setOrigin(0, 0)
    this.toucaBG.setOrigin(0, 0)
    this.toucaBG.setDepth(-15)
    this.toucaBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')

    this.toucaIcon = this.add.sprite(90, 75, 'toucaIcon')
    this.toucaIcon.alpha = 0

    // dandelion sprite
    this.dandelionSprite = this.add.sprite(1300, 0, 'DandelionHappy')
    this.dandelionSprite.setDepth(-13)
    this.dandelionBG = this.add.sprite(this.dandelionSprite.x, this.dandelionSprite.y, 'DandelionHappy')
    this.dandelionSprite.setOrigin(0, 0)
    this.dandelionBG.setOrigin(0, 0)
    this.dandelionBG.setDepth(-14)
    this.dandelionBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')

    this.dandelionIcon = this.add.sprite(90, 75, 'dandelionIcon')
    this.dandelionIcon.alpha = 0

    this.cafe = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'Cafe')
    this.cafe.setDepth(-20)

    this.cameras.main.fadeIn(1000)

    this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')

    this.dialBox = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBox')
    this.dialBox.setVisible(false).setActive(false)
    this.dialBox.setDepth(-10)
    this.box.setDepth(-10)

    this.text = this.add.text(120, 575, this.speech[0], {
      font: '32px Arial',
      color: '#000000',
      wordWrap: { width: 1100 }
    })

    this.nameText = this.add.text(45, 470, '', {
      font: '64px Arial',
      color: '#000000'
    })

    this.boxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.boxChoice2 = this.add.image(960, 900, 'textBoxBeige')

    this.choiceText1 = this.add.text(225, 880, 'Yes, Always', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText2 = this.add.text(780, 880, 'No, You\'re Doing Enough', {
      font: '32px Arial',
      color: '#000000'
    })

    this.secBoxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.secBoxChoice2 = this.add.image(960, 900, 'textBoxBeige')

    this.secChoiceText1 = this.add.text(240, 880, 'Leave Early', {
      font: '32px Arial',
      color: '#000000'
    })
    this.secChoiceText2 = this.add.text(920, 880, 'Stay', {
      font: '32px Arial',
      color: '#000000'
    })

    this.thirdBoxChoice1 = this.add.image(320, 900, 'textBoxBeige')
    this.thirdBoxChoice2 = this.add.image(960, 900, 'textBoxBeige')

    this.thirdChoiceText1 = this.add.text(235, 880, 'Stay Safe', {
      font: '32px Arial',
      color: '#000000'
    })
    this.thirdChoiceText2 = this.add.text(865, 880, 'Make the Jump', {
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
      this.showCharacter(this.toucaSprite, this.toucaBG, 'touca')
    }

    if (this.i === 1) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightTouca()
    }

    if (this.i === 2) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 3) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightTouca()
    }

    if (this.i === 4) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 5) {
      this.showCharacter(this.dandelionSprite, this.dandelionBG, 'dandelion')
    }

    if (this.i === 6) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightDandelion()
    }

    if (this.i === 8) {
      this.spotlightTouca()
    }

    if (this.i === 9) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 10) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightMain()
    }

    if (this.i === 11) {
      this.spotlightTouca()
    }

    if (this.i === 12) {
      this.spotlightDandelion()
    }

    if (this.i === 14) {
      this.spotlightMain()
    }

    if (this.i === 15) {
      this.dandelionSprite.setTexture('Dandelion')
      this.dandelionBG.setTexture('Dandelion')

      this.spotlightDandelion()
    }

    if (this.i === 16) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 17) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightDandelion()
    }

    if (this.i === 18) {
      this.spotlightTouca()
    }

    if (this.i === 19) {
      this.disappearCharacter(this.toucaSprite, this.toucaBG)
      this.spotlightDandelion()
    }

    if (this.i === 20) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 21) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightDandelion()
    }

    if (this.i === 23) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 24) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightDandelion()
    }

    if (this.i === 27) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 28) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightDandelion()
    }

    if (this.i === 30) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 31) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightDandelion()
      this.dandelionHeart++
    }

    if (this.i === 34) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 35) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightDandelion()
    }

    if (this.i === 36) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

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

    if (this.i === 37) {
      // dialogue box and text
      this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
      this.TweenerY(this.text, this.text.y, 575, 1, 1)

      // choice boxes with text
      this.TweenerY(this.boxChoice1, this.boxChoice1.y, 500, 1, 0)
      this.TweenerY(this.choiceText1, this.choiceText1.y, 480, 1, 0)

      this.TweenerY(this.boxChoice2, this.boxChoice2.y, 500, 1, 0)
      this.TweenerY(this.choiceText2, this.choiceText2.y, 480, 1, 0)

      this.time.delayedCall(2100, this.enableArrow())

      this.time.delayedCall(2200, () => {
        this.dialogueBoxBool = false
        this.narratorBoxBool = true
        this.changeBox()
      })
    }

    if (this.i === 38) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightDandelion()
    }

    if (this.i === 39) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()

      this.unspotlight()
    }

    if (this.i === 42) {
      // dialogue box and text
      this.TweenerY(this.box, this.box.y, -100, 1, 1)
      this.TweenerY(this.text, this.text.y, 70, 1, 1)

      // choice boxes with text
      this.TweenerY(this.secBoxChoice1, this.secBoxChoice1.y, 500, 1, 1)
      this.TweenerY(this.secChoiceText1, this.secChoiceText1.y, 480, 1, 1)

      this.TweenerY(this.secBoxChoice2, this.secBoxChoice2.y, 500, 1, 1)
      this.TweenerY(this.secChoiceText2, this.secChoiceText2.y, 480, 1, 1)

      this.disableArrow()

      this.time.delayedCall(2000, () => {
        this.setSecondChoices()
      })
    }

    if (this.i === 43) {
      this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
      this.TweenerY(this.text, this.text.y, 575, 1, 1)

      // choice boxes with text
      this.TweenerY(this.secBoxChoice1, this.secBoxChoice1.y, 500, 1, 0)
      this.TweenerY(this.secChoiceText1, this.secChoiceText1.y, 480, 1, 0)

      this.TweenerY(this.secBoxChoice2, this.secBoxChoice2.y, 500, 1, 0)
      this.TweenerY(this.secChoiceText2, this.secChoiceText2.y, 480, 1, 0)

      this.time.delayedCall(2100, this.enableArrow())
      this.time.delayedCall(2100, this.dealWithSecondChoice())
      console.log(this.i)
    }

    if (this.i === 44) {
      this.dandelionSprite.alpha = 0.5
      this.disappearCharacter(this.dandelionSprite, this.dandelionBG)

      this.toucaSprite.setTexture('Touca')
      this.toucaBG.setTexture('Touca')
      this.showCharacter(this.toucaSprite, this.toucaBG, 'touca')
      this.spotlightTouca()
      this.nameText.setText('')
    }

    if (this.i === 46) {
      this.disappearCharacter(this.toucaSprite, this.toucaBG)
    }

    if (this.i === 47) {
      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.start('updateHeart')
      })
    }

    if (this.i === 48) {
      this.showCharacter(this.toucaSprite, this.toucaBG, 'touca')
      this.disappearCharacter(this.dandelionSprite, this.dandelionBG)
      this.toucaSprite.alpha = 1
    }

    if (this.i === 51) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightMain()
    }

    if (this.i === 52) {
      this.spotlightTouca()
    }

    if (this.i === 54) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.nameText.setText('')
    }

    if (this.i === 55) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightTouca()
    }

    if (this.i === 59) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.nameText.setText('')

      // dialogue box and text
      this.TweenerY(this.box, this.box.y, -100, 1, 1)
      this.TweenerY(this.text, this.text.y, 70, 1, 1)

      // choice boxes with text
      this.TweenerY(this.thirdBoxChoice1, this.thirdBoxChoice1.y, 500, 1, 1)
      this.TweenerY(this.thirdChoiceText1, this.thirdChoiceText1.y, 480, 1, 1)

      this.TweenerY(this.thirdBoxChoice2, this.thirdBoxChoice2.y, 500, 1, 1)
      this.TweenerY(this.thirdChoiceText2, this.thirdChoiceText2.y, 480, 1, 1)

      this.disableArrow()

      this.time.delayedCall(2000, () => {
        this.setThirdChoices()
      })
    }

    if (this.i === 60) {
      this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
      this.TweenerY(this.text, this.text.y, 575, 1, 1)

      // choice boxes with text
      this.TweenerY(this.thirdBoxChoice1, this.thirdBoxChoice1.y, 500, 1, 0)
      this.TweenerY(this.thirdChoiceText1, this.thirdChoiceText1.y, 480, 1, 0)

      this.TweenerY(this.thirdBoxChoice2, this.thirdBoxChoice2.y, 500, 1, 0)
      this.TweenerY(this.thirdChoiceText2, this.thirdChoiceText2.y, 480, 1, 0)

      this.time.delayedCall(2100, this.enableArrow())
      this.time.delayedCall(2100, this.dealWithThirdChoice())
      this.time.delayedCall(2100, () => {
        this.dialogueBoxBool = true
        this.narratorBoxBool = false
        this.changeBox()
        if (this.thirdCheckChoice === 1) {
          this.toucaSprite.setTexture('Touca')
          this.toucaBG.setTexture('Touca')
        }
        this.spotlightTouca()
      })
      console.log(this.i)
    }

    if (this.i === 61) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.nameText.setText('')
    }

    if (this.i === 62) {
      this.dialogueBoxBool = true
      this.narratorBoxBool = false
      this.changeBox()

      this.spotlightTouca()
    }

    if (this.i === 63) {
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
      this.nameText.setText('')
      this.i = 67
    }

    if (this.i === 67) {
      this.nameText.setText('')
      this.dialogueBoxBool = false
      this.narratorBoxBool = true
      this.changeBox()
    }

    if (this.i === 68) {
      this.disappearCharacter(this.toucaSprite, this.toucaBG)
    }

    if (this.i === 69) {
      this.cameras.main.fadeOut(1000)
      this.time.delayedCall(1000, () => {
        this.scene.start('updateHeart')
      })
    }
  }

  dealWithThirdChoice () {
    switch (this.thirdCheckChoice) {
      case 1:
        this.i = 60 // stay safe
        break
      case 2:
        this.i = 64 // make the jump
        break
    }
  }

  setThirdChoices () {
    this.thirdBoxChoice1.setInteractive()
      .on('pointerover', () => {
        this.thirdBoxChoice1.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        this.thirdBoxChoice1.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.i++
        this.toucaHeart = Math.max(0, this.toucaHeart - 1)
        this.thirdCheckChoice = 1
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
    this.thirdBoxChoice2.setInteractive()
      .on('pointerover', () => {
        this.thirdBoxChoice2.setTexture('textBoxGreen')
      })
      .on('pointerout', () => {
        this.thirdBoxChoice2.setTexture('textBoxBeige')
      })
      .on('pointerdown', () => {
        this.i++
        this.toucaHeart = this.toucaHeart + 2
        this.thirdCheckChoice = 2
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
  }

  dealWithSecondChoice () {
    switch (this.secondCheckChoice) {
      case 1:
        this.i = 43 // leave early
        break
      case 2:
        this.i = 48 // stay
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
        this.secondCheckChoice = 2
        this.updateCharBox()
        this.text.setText(this.speech[this.i])
      })
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
        this.dandelionHeart++
        this.registry.set('dandelionHeart', this.dandelionHeart)
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
    this.dandelionSprite.alpha = 0.5
    this.toucaSprite.alpha = 0.5
  }

  spotlightMain () {
    this.dandelionSprite.alpha = 0.5
    this.toucaSprite.alpha = 0.5
    this.nameText.setText('You')
  }

  spotlightDandelion () {
    this.nameText.setText('Dandelion')
    this.toucaSprite.alpha = 0.5
    this.dandelionSprite.alpha = 1
  }

  spotlightTouca () {
    this.nameText.setText('Touca')
    this.toucaSprite.alpha = 1
    this.dandelionSprite.alpha = 0.5
  }

  showCharacter (character, charBG, name) {
    this.disableArrow()

    if (name === 'touca') {
      this.Tweener(character, 1300, 750, 0.0, 1, 2000)
      this.Tweener(charBG, 1300, 750, 1, 1, 2000)
    } else if (name === 'dandelion') {
      this.Tweener(character, 1300, 600, 0.0, 1, 2000)
      this.Tweener(charBG, 1300, 600, 1, 1, 2000)
    }

    this.time.delayedCall(2000, () => {
      this.enableArrow()
    })
  }

  disappearCharacter (character, charBG) {
    console.log('exit right')
    this.disableArrow()
    this.Tweener(character, character.x, 1300, 1, 0, 2000)
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

export default Day2Scene4
