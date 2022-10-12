import Phaser from 'phaser'
import CONFIG from '../config.js'

class Day1Scene2 extends Phaser.Scene {
  preload () {

  }

  create () {
    this.speech = []
    this.speech[0] = 'You make it to the coffee shop at record walking speed. Boogle never anticipates speed-walking to your destination. You quick glance through the illuminated windows, it seems harmless enough, and not super busy. You can see from the outside that there\'s a mild commotion inside, but mostly a colorful bird waving their wings around and shedding feathers over something.'
    this.speech[1] = 'You proceed inside.'
    this.speech[2] = 'As you thought there is a Toucan being the center of excitement around some very sleepy bats, gesturing to the art on the wall and explaining and talking effortlessly. For a bit, you listen in as you pass by.'
    this.speech[3] = ''
    this.speech[4] = 'Now THIS painting is about me and my relationship to fruit and the color ORANGE-'
    this.speech[5] = 'The bats sitting at the table victim to the discussion nod wearily, one nearly falling asleep at the table.'
    this.speech[6] = 'You slink past to not get entrapped and to secure your coffee. '
    this.speech[7] = 'You walk to the counter, and to the right of you, is a fuzzy leopard nursing his coffee. He asks the little red panda behind the counter something about his drink… The panda laughs and turns around as if to respond, but seeing you he startles himself and walks to get your order.'
    this.speech[8] = 'Ahaha! I didn\'t hear you walk up to the desk! Sorry for the wait, a- oh-oh! You\'re a new customer! I recognize every one of my guests but not you … yet!'
    this.speech[9] = 'Ahaha..yes, I just finished moving in, but my coffee maker didn\'t come in yet-'
    this.speech[10] = 'Coffee Maker!! No need for that anymore, you\'ll never want that bland bean water after you\'ve had my tea or in-house coffee.'
    this.speech[11] = 'Don\'t fight them...They are quite the salesperson…when it comes to their coffee, at least.'
    this.speech[12] = 'Shush! I\'m not that bad!!!!!!!!!'
    this.speech[13] = '* He turns back to you.'
    this.speech[14] = 'For your troubles, but also as a first time customer, a free coffee, for you.'
    this.speech[15] = 'O-h, are you sure? Is there anything I have to do?'
    this.speech[16] = 'Oh most definitely, only answer correctly a fact about my species (wink).'
    this.speech[17] = 'What kind of diet do you think I eat?'
    this.speech[18] = 'Hahaha! Good one, take one look at me and I\'m no predator! Bamboo all the way.'
    this.speech[19] = 'You gingerly take the coffee handed to you. Saying your thanks and trying the first sip.'
    this.speech[20] = 'As you sip on your coffee….you think you know this flavor but ... You cant quite place it … you try to remember harder...'
    this.speech[21] = ''
    this.speech[22] = '… Is this pumpkin flavor?'
    this.speech[23] = 'Oooh how observant! We love that in a new friend.'
    this.speech[24] = '[Friend….? We only just met and he\'s calling me a friend?]'
    this.speech[25] = 'You, stunned by kindness, go to sit down. Still very appreciative of the kind service.'
    this.speech[26] = 'The Snow Leopard stretches out, paws spreading wide in the air, and sighs once relaxed. He readjusts his suit and heads out to leave. You overhear the enthusiastic barista and leopard talk.'
    this.speech[27] = 'Back to work already Leo? Didn\'t you just come back from it? '
    this.speech[28] = 'Yes, but, you know already how it is.'
    this.speech[29] = 'That I may, yes. I know I can\'t stop you, but be careful, rest.'
    this.speech[30] = 'You watch the big cat leave the shop. You assume they must be good friends, based on their comfort in talking to one another. You notice Leo glance towards the toucan and give a detesting look towards that situation in that side of the shop before he leaves.'
    this.speech[31] = 'Again, glancing over to the Toucan she comes to match eyes with you. Oh no.'
    this.speech[32] = 'What do you do?'
    this.speech[33] = "Hellooooooo~ You're a new face around here, or so I overheard. Saw you entertaining Dandelion and Leo, haha! I'm Touca! What's your name, newbie?"
    this.speech[34] = 'Ah...my name is ' + this.registry.get('player') + " . I just finished moving in, I'm back down a few blocks."
    this.speech[35] = 'She looks at you with surprise, but also intrigue.'
    this.speech[36] = 'Hrmph. I won\'t overload you today... Seeing as how you\'ve had such a big day, but next time... I will talk your head off about cool stuff! Watch out!!!'
    this.speech[37] = 'Touca does a hand gesture pointing at their eyes to yours and walking away backwards, nearly hitting a chair whilst doing so.'
    this.speech[38] = 'You sigh a breath of relief. Next time will be crazy, you suppose. You finish up your coffee, and begin to leave, the barkeep waves and says formal goodbyes. You felt kinda special today. It was nice to be outside, talking to others. Maybe the friend thing will work out after all.'
    this.speech[39] = ''
    this.speech[40] = 'Ahaha!! You\'re smart!! I\'ll getcha next time, buddy! Next time I see you, I\'ll talk your head off about cool stuff! Watch out!!!'
    this.speech[41] = 'Touca bellows a loud laugh and looks towards Dandelion, who awkwardly smiles.'
    this.speech[42] = 'What\'dya tell them that was so bad?'
    this.speech[44] = 'After leaving, you sigh a breath of relief. Next time will be crazy, you suppose. You finish up your coffee and begin to leave, the barkeep waves from the window and mouths a formal goodbye. You felt kinda special today. It was nice to be outside, talking to others. Maybe the friend thing will work out after all.'
    this.speech[44] = ''

    this.registry.get('player')
    this.cafe = this.add.image(1280 / 2, 800 / 2, 'Cafe')
    this.cafe.setScale(
      CONFIG.DEFAULT_WIDTH / this.cafe.width,
      CONFIG.DEFAULT_WIDTH / this.cafe.width
    )
    this.cafe.setDepth(-20)

    this.Touca = this.add.sprite(1300, 0, 'Touca')
    this.ToucaBG = this.add.sprite(this.Touca.x, this.Touca.y, 'Touca')
    this.Touca.setOrigin(0, 0)
    this.ToucaBG.setOrigin(0, 0)
    this.ToucaBG.setDepth(-15)
    this.Touca.setDepth(-14)
    this.toucaIcon = this.add.sprite(90, 75, 'toucaIcon')
    this.toucaIcon.alpha = 0

    this.Leo = this.add.sprite(1300, 0, 'Leo')
    this.LeoBG = this.add.sprite(this.Leo.x, this.Leo.y, 'Leo')
    this.Leo.setOrigin(0, 0)
    this.LeoBG.setOrigin(0, 0)
    this.LeoBG.setDepth(-15)
    this.Leo.setDepth(-14)
    this.LeoBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')

    this.Dandelion = this.add.sprite(1300, 0, 'Dandelion')
    this.DandelionBG = this.add.sprite(this.Dandelion.x, this.Dandelion.y, 'Dandelion')
    this.Dandelion.setOrigin(0, 0)
    this.DandelionBG.setOrigin(0, 0)
    this.DandelionBG.setDepth(-15)
    this.Dandelion.setDepth(-14)
    this.DandelionBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')
    this.dandelionIcon = this.add.sprite(90, 75, 'dandelionIcon')
    this.dandelionIcon.alpha = 0

    // this.cafe.setDepth(-10)
    this.cameras.main.fadeIn(3000)
    this.box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')
    this.dialBox = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBox')
    this.dialBox.setVisible(false).setActive(false)
    this.dialBox.setDepth(-10)
    this.box.setDepth(-10)
    this.box.setScale(
      CONFIG.DEFAULT_WIDTH / this.box.width,
      CONFIG.DEFAULT_HEIGHT / this.box.height
    )
    this.text = this.add.text(120, 550, this.speech[0], { font: '32px Arial', color: '#000000', wordWrap: { width: 1100 } })
    this.i = 0

    this.choiceBool = 0

    this.name = ('')
    this.nametext = this.add.text(50, 475, this.name, { font: '64px Arial', color: '#000000', wordWrap: { width: 310 } })
    this.button = this.add.image(1200, 720, 'Arrow')
      .setInteractive()
      .on('pointerover', () => {
        this.button.alpha = 0.7
      })
      .on('pointerout', () => {
        this.button.alpha = 1
      })
      .on('pointerup', () => {
        this.button.alpha = 0.7
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.i++
        console.log('pressed')
        this.text.setText(this.speech[this.i])
        if (this.i === 2) {
          this.ToucaBG.setTint('#4f4f4f', '#4f4f4f', '#4f4f4f', '#4f4f4f')
          this.Tweener(this.Touca, 1300, 600, 0.0, 0.5)
          this.tweens2 = this.Tweener(this.ToucaBG, 1300, 600, 1, 1)
        }
        if (this.i === 3) {
          this.i++
          console.log(this.i)
          this.text.setText(this.speech[this.i])
        }
        if (this.i === 6) {
          this.tweens3 = this.Tweener(this.Touca, 600, 1300, 0.5, 0.0)
          this.tweens4 = this.Tweener(this.ToucaBG, 600, 1300, 1, 1)
        }
        if (this.i === 7) {
          this.tweens5 = this.Tweener(this.Dandelion, 1300, 600, 0.0, 0.5)
          this.tweens6 = this.Tweener(this.DandelionBG, 1300, 600, 1, 1)
          this.tweens7 = this.Tweener(this.Leo, 1400, 700, 0.0, 0.5)
          this.tweens8 = this.Tweener(this.LeoBG, 1400, 700, 1, 1)

          this.Dandelion.setAlpha(1)
        }
        if (this.i === 17) {
          this.nametext.setText('')
          this.text.setX(170)

          this.updateBox()
          this.Tweener(this.dandelionIcon, this.dandelionIcon.x, this.dandelionIcon.x, 0, 1, 2000)

          this.TweenerY(this.box, this.box.y, -100, 1, 1)
          this.TweenerY(this.text, this.text.y, 70, 1, 1)

          this.TweenerY(this.boxChoice1, this.boxChoice1.y, 600, 1, 1)
          this.TweenerY(this.choiceText1, this.choiceText1.y, 580, 1, 1)

          this.TweenerY(this.boxChoice2, this.boxChoice2.y, 600, 1, 1)
          this.TweenerY(this.choiceText2, this.choiceText2.y, 580, 1, 1)

          this.disableArrow()

          this.time.delayedCall(2000, () => {
            this.boxChoice1.setInteractive()
              .on('pointerover', () => {
                this.boxChoice1.setTexture('textBoxGreen')
              })
              .on('pointerout', () => {
                this.boxChoice1.setTexture('textBoxBeige')
              })
              .on('pointerdown', () => {
                console.log('Hi')
                this.TweenerY(this.boxChoice1, this.boxChoice1.y, this.boxChoice1.y, 1, 0)
                this.TweenerY(this.choiceText1, this.choiceText1.y, this.choiceText1.y, 1, 0)

                this.TweenerY(this.boxChoice2, this.boxChoice2.y, this.boxChoice2.y, 1, 0)
                this.TweenerY(this.choiceText2, this.choiceText2.y, this.choiceText2.y, 1, 0)
                this.text.setX(120)

                this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
                this.TweenerY(this.text, this.text.y, 575, 1, 1)

                this.Tweener(this.dandelionIcon, this.dandelionIcon.x, this.dandelionIcon.x, 1, 0, 2000)

                this.time.delayedCall(2100, this.enableArrow())
                this.time.delayedCall(2200, () => {
                  this.i++
                  console.log(this.i)
                  this.DandelionDialogue()
                  this.text.setText(this.speech[this.i])
                })
              })
            this.boxChoice2.setInteractive()
              .on('pointerover', () => {
                this.boxChoice2.setTexture('textBoxGreen')
              })
              .on('pointerout', () => {
                this.boxChoice2.setTexture('textBoxBeige')
              })
              .on('pointerdown', () => {
                this.TweenerY(this.boxChoice1, this.boxChoice1.y, this.boxChoice1.y, 1, 0)
                this.TweenerY(this.choiceText1, this.choiceText1.y, this.choiceText1.y, 1, 0)

                this.TweenerY(this.boxChoice2, this.boxChoice2.y, this.boxChoice2.y, 1, 0)
                this.TweenerY(this.choiceText2, this.choiceText2.y, this.choiceText2.y, 1, 0)
                this.text.setX(120)

                this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
                this.TweenerY(this.text, this.text.y, 575, 1, 1)

                this.Tweener(this.dandelionIcon, this.dandelionIcon.x, this.dandelionIcon.x, 1, 0, 2000)

                this.time.delayedCall(2100, this.enableArrow())
                this.time.delayedCall(2200, () => {
                  this.i++
                  console.log(this.i)
                  this.DandelionDialogue()
                  this.text.setText(this.speech[this.i])
                })
              })
          })
        }

        if (this.i === 21) {
          this.cameras.main.fadeOut(1000)
          this.time.delayedCall(1000, () => {
            this.scene.switch('mini1')
          })
          this.i++
        }

        if (this.i === 22) {
          this.time.delayedCall(1000, () => {
            this.cameras.main.fadeIn(1000)

            // this.i++
            this.text.setText(this.speech[this.i])
          })
        }
        if (this.i === 32) {
          this.nametext.setText('')
          this.text.setX(170)

          this.updateBox()
          this.Tweener(this.toucaIcon, this.toucaIcon.x, this.toucaIcon.x, 0, 1, 2000)

          this.TweenerY(this.box, this.box.y, -100, 1, 1)
          this.TweenerY(this.text, this.text.y, 70, 1, 1)

          this.TweenerY(this.boxChoice3, this.boxChoice3.y, 600, 1, 1)
          this.TweenerY(this.choiceText3, this.choiceText3.y, 580, 1, 1)

          this.TweenerY(this.boxChoice4, this.boxChoice4.y, 600, 1, 1)
          this.TweenerY(this.choiceText4, this.choiceText4.y, 580, 1, 1)

          this.disableArrow()
        }
        this.time.delayedCall(2000, () => {
          this.boxChoice3.setInteractive()
            .on('pointerover', () => {
              this.boxChoice3.setTexture('textBoxGreen')
            })
            .on('pointerout', () => {
              this.boxChoice3.setTexture('textBoxBeige')
            })
            .on('pointerdown', () => {
              console.log('Hi')
              this.TweenerY(this.boxChoice3, this.boxChoice3.y, this.boxChoice3.y, 1, 0)
              this.TweenerY(this.choiceText3, this.choiceText3.y, this.choiceText3.y, 1, 0)

              this.TweenerY(this.boxChoice4, this.boxChoice4.y, this.boxChoice4.y, 1, 0)
              this.TweenerY(this.choiceText4, this.choiceText4.y, this.choiceText4.y, 1, 0)
              this.text.setX(120)

              this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
              this.TweenerY(this.text, this.text.y, 575, 1, 1)

              this.Tweener(this.toucaIcon, this.toucaIcon.x, this.toucaIcon.x, 1, 0, 2000)

              this.time.delayedCall(2100, this.enableArrow())
              this.time.delayedCall(2200, () => {
                this.i = 40
                console.log(this.i)
                this.ToucaDialogue()
                this.text.setText(this.speech[this.i])
              })
            })
          this.boxChoice4.setInteractive()
            .on('pointerover', () => {
              this.boxChoice4.setTexture('textBoxGreen')
            })
            .on('pointerout', () => {
              this.boxChoice4.setTexture('textBoxBeige')
            })
            .on('pointerdown', () => {
              this.TweenerY(this.boxChoice3, this.boxChoice3.y, this.boxChoice3.y, 1, 0)
              this.TweenerY(this.choiceText3, this.choiceText3.y, this.choiceText3.y, 1, 0)

              this.TweenerY(this.boxChoice4, this.boxChoice4.y, this.boxChoice4.y, 1, 0)
              this.TweenerY(this.choiceText4, this.choiceText4.y, this.choiceText4.y, 1, 0)
              this.text.setX(120)

              this.TweenerY(this.box, this.box.y, CONFIG.DEFAULT_HEIGHT / 2, 1, 1)
              this.TweenerY(this.text, this.text.y, 575, 1, 1)

              this.Tweener(this.toucaIcon, this.toucaIcon.x, this.toucaIcon.x, 1, 0, 2000)

              this.time.delayedCall(2100, this.enableArrow())
              this.time.delayedCall(2200, () => {
                this.i = 33
                console.log(this.i)
                this.ToucaDialogue()
                this.text.setText(this.speech[this.i])
              })
            })
          if (this.i === 30) {
            this.Tweener(this.Leo, 700, 1300, 0.5, 0)
            this.Tweener(this.LeoBG, 700, 1300, 1, 1)

            this.Tweener(this.Dandelion, 600, 800)
            this.Tweener(this.DandelionBG, 600, 800)
          }
          if (this.i === 31) {
            this.Tweener(this.Touca, 1300, 600, 0, 0.5)
            this.Tweener(this.ToucaBG, 1300, 600, 1, 1)
          }
        }
        )
      })
    this.button.setScale(0.7)

    this.boxChoice1 = this.add.image(950, 900, 'textBoxBeige')
    this.boxChoice2 = this.add.image(320, 900, 'textBoxBeige')

    this.boxChoice3 = this.add.image(950, 900, 'textBoxBeige')
    this.boxChoice4 = this.add.image(320, 900, 'textBoxBeige')

    this.choiceText1 = this.add.text(800, 900, 'Red meat, easy peasy', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText2 = this.add.text(180, 900, 'Bamboo, of course', {
      font: '32px Arial',
      color: '#000000'
    })

    this.choiceText3 = this.add.text(800, 900, 'Run', {
      font: '32px Arial',
      color: '#000000'
    })
    this.choiceText4 = this.add.text(180, 900, 'Let it happen', {
      font: '32px Arial',
      color: '#000000'
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
        this.i = 18
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
      })
  }

  update () {
    if (this.i === 4 || this.i === 36 || this.i === 40 || this.i === 42) {
      this.Touca.setAlpha(1)
      this.ToucaDialogue()
    }
    if (this.i === 5 || this.i === 13 || this.i === 19 || this.i === 20 || this.i === 21 || this.i === 25 || this.i === 30 || this.i === 35 || this.i === 37 || this.i === 41 | this.i === 44) {
      this.NarratorDialogue()
    }
    if (this.i === 8 || this.i === 10 || this.i === 12 || this.i === 14 || this.i === 16 || this.i === 23 || this.i === 27 || this.i === 29) {
      this.DandelionDialogue()
    }
    if (this.i === 9 || this.i === 15 || this.i === 22 || this.i === 24 || this.i === 34) {
      this.YouDialogue()
    }
    if (this.i === 11 || this.i === 28) {
      this.LeoDialogue()
    }

    if (this.i === 39 || this.i === 44) {
      this.disableArrow()
      this.box.setVisible(false).setActive(false)
      this.cameras.main.fadeOut(2000)
      this.time.delayedCall(2000, () => {
        this.scene.start('Day1Scene3')
      })
    }

    if (this.choiceBool === 1 || this.choiceBool === 2) {
      this.text.setText(this.speech[this.i])

      this.questionBox.setActive(false).setVisible(false)
      this.Choice1.setActive(false).setVisible(false)
      this.choice1Text.setActive(false).setVisible(false)
      this.Choice2.setActive(false).setVisible(false)
      this.choice2Text.setActive(false).setVisible(false)
      this.questionText.setActive(false).setVisible(false)

      this.box.setActive(true).setVisible(true)
      this.nametext.setActive(true).setVisible(true)
      this.text.setActive(true).setVisible(true)
      this.button.setActive(true).setVisible(true)
      this.choiceBool = 0

      // this.scene.start('updateHeart')
    }
  }

  NarratorDialogue () {
    this.Touca.setAlpha(0.5)
    this.Dandelion.setAlpha(0.5)
    this.Leo.setAlpha(0.5)

    this.nametext.setText('')
    this.text.setColor('#000000')

    this.updateBox()
    this.text.y = 550
  }

  YouDialogue () {
    this.Dandelion.setAlpha(0.5)
    this.Touca.setAlpha(0.5)
    this.Leo.setAlpha(0.5)

    this.text.setColor('#4c815c')
    this.nametext.setText('You')

    this.updateDialogueBox()

    this.text.y = 580
  }

  ToucaDialogue () {
    this.Dandelion.setAlpha(0.5)
    this.Leo.setAlpha(0.5)
    this.nametext.setText('Touca')
    this.text.setColor('#aa7d0d')
    this.Touca.setAlpha(1)

    this.updateDialogueBox()

    this.text.y = 580
  }

  DandelionDialogue () {
    this.Dandelion.setAlpha(1)
    this.Touca.setAlpha(0.5)
    this.Leo.setAlpha(0.5)

    this.text.setColor('#b42463')
    this.nametext.setText('Dandelion')

    this.updateDialogueBox()

    this.text.y = 580
  }

  disableArrow () {
    this.Tweener(this.button, this.button.x, this.button.x, 1, 0, 300)
    this.button.setVisible(false).setActive(false)
  }

  enableArrow () {
    this.Tweener(this.button, this.button.x, this.button.x, 0, 1, 300)
    this.button.setVisible(true).setActive(true)
  }

  LeoDialogue () {
    this.Leo.setAlpha(1)
    this.Dandelion.setAlpha(0.5)
    this.Touca.setAlpha(0.5)

    this.text.setColor('#34616b')
    this.nametext.setText('Leo')

    this.updateDialogueBox()
  }

  setInactive () {
    this.button.setActive(false).setVisible(false)
    this.box.setActive(false).setVisible(false)
    this.nametext.setActive(false).setVisible(false)
    this.text.setActive(false).setVisible(false)
  }

  BoxGenerator (x, y, name) {
    this.add.image(x, y, name)
  }

  updateBox () {
    this.box.setActive(true).setVisible(true)
    this.dialBox.setActive(false).setVisible(false)
  }

  updateDialogueBox () {
    this.box.setActive(false).setVisible(false)
    this.dialBox.setActive(true).setVisible(true)
  }

  Tweener (target, startx, endx, alpha1, alpha2, durationTime) {
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
      duration: 2000,
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

export default Day1Scene2
