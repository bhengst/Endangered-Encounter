import Phaser from 'phaser'
import BoxGroup from '../sprites/BoxGroup.js'
import Box from '../sprites/Box.js'
import Item from '../sprites/Item.js'
import CONFIG from '../config.js'
import CharacterSelection from './CharacterSelection.js'
import Day2Scene2 from './Day2Scene2.js'

/**
 * Match game code
 */

const level = [
  [1, -1, 4],
  [6, 4, 9],
  [1, 6, 9]
]

class MiniGame4 extends Phaser.Scene {
  // /** @type {Phaser.GameObjects.Group} */
  // itemsGroup

  // /** @type {{ box: Phaser.Physics.Arcade.Sprite, item: Phaser.GameObjects.Sprite }} */
  // selectedBoxes = []

  // /** @type {Phaser.Physics.Arcade.Sprite} */
  // activeBox

  create () {
    const backgroundBox = this.add.sprite(0, 0, 'box')
    backgroundBox.setOrigin(0, 0)

    this.finish = this.add.sprite(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'finish')
      .setDepth(100)
      .setVisible(false)
    this.finish.alpha = 0

    this.dialogueBox = this.add.sprite(0, 0, 'DialogueBoxSimp')
      .setOrigin(0, 0)
      .setDepth(150)
      .setVisible(false)
    this.dialogueBox.alpha = 0

    this.dialogue = this.add.text(120, 575, 'You succeeded with your knowledge check! Congrats!', {
      font: '32px Arial',
      color: '#000000'
    })
    this.dialogue.setVisible(false)
      .setDepth(160)
    this.dialogue.alpha = 0

    this.button = this.add.image(1200, 740, 'Arrow')
      .setScale(0.7)
      .setDepth(160)
    this.button.alpha = 0

    this.selectedBoxes = []

    this.activeBox = undefined
    this.itemsGroup = this.add.group()

    this.matchesCount = 0

    this.boxGroup = this.add.group()

    this.cameras.main.fadeIn(1000)

    this.time.delayedCall(1000, this.createBoxes())
    // this.createBoxes()

    this.boxChildren = this.boxGroup.getChildren()

    this.setBushesActive(true)

    this.itemsGroup = this.add.group()

    this.player = this.registry.get('player')
    console.log(this.player)
  }

  setActiveBox (box) {
    const opened = box.getData('opened')

    if (opened) {
      return
    }

    if (this.activeBox) {
      return
    }

    this.activeBox = box

    this.anims.create({
      key: 'bushClick',
      frameRate: 10,
      repeat: 0,
      frames: this.anims.generateFrameNumbers('bush', { start: 0, end: 7 })
    })

    this.activeBox.anims.play('bushClick')
  }

  handleMouseDown (box, pointer) {
    this.setActiveBox(box)

    this.openBox(this.activeBox)

    if (this.activeBox) {
      this.activeBox.setFrame(0)
      this.activeBox = undefined
    }
  }

  openBox (box) {
    if (!box) {
      return
    }

    const itemType = box.getData('itemType')

    /** @type {Phaser.GameObjects.Sprite} */
    let item

    switch (itemType) {
      case -1:
        console.log('hopefully this works')
        break
      case 0:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('bamboo')
        break
      case 1:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('berry')
        break
      case 2:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('bone')
        break
      case 3:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('cricket')
        break
      case 4:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('egg')
        break
      case 5:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('feathers')
        break
      case 6:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('lizard')
        break
      case 7:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('sheep')
        break
      case 8:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('chicken')
        break
      case 9:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('orange')
        break
      case 10:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('steak')
        break
      case 11:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('mouse')
        break
      case 12:
        item = this.itemsGroup.get(box.x, box.y)
        item.setTexture('pen')
        break
    }

    if (!item) {
      console.log('unknown item type')
      return
    }

    box.setData('opened', true)

    item.scale = 0
    item.alpha = 0

    this.selectedBoxes.push({ box, item })

    this.tweens.add({
      targets: item,
      y: '-=50',
      alpha: 1,
      scale: 1,
      duration: 500,
      onComplete: () => {
        if (this.selectedBoxes.length < 2) {
          return
        }
        if (this.selectedBoxes.length === 2) {
          this.checkForMatch()
        }
      }
    })
  }

  checkForMatch () {
    const second = this.selectedBoxes.pop()
    const first = this.selectedBoxes.pop()

    this.setBushesActive(false)

    if (first.item.texture !== second.item.texture) {
      this.tweens.add({
        targets: [first.item, second.item],
        y: '+=50',
        alpha: 0,
        scale: 0,
        duration: 1500,
        delay: 900,
        onComplete: () => {
          // this.itemsGroup.killAndHide(first.item)
          // this.itemsGroup.killAndHide(second.item)
          first.box.setData('opened', false)
          second.box.setData('opened', false)

          this.setBushesActive(true)
        }
      })
      this.time.delayedCall(1500, () => {
        this.setBushesActive(true)
      })
      return
    }

    ++this.matchesCount
    this.time.delayedCall(1000, () => {
      first.box.setFrame(0)
      second.box.setFrame(0)

      this.setBushesActive(true)

      if (this.matchesCount >= 4) {
        // game won
        this.setBushesActive(false)

        this.finish.setVisible(true)
        this.dialogueBox.setVisible(true)
        this.dialogue.setVisible(true)

        this.tweens.add({
          targets: this.finish,
          duration: 500,
          alpha: {
            getStart: () => 0,
            getEnd: () => 1
          },
          delay: 200
        })

        this.time.delayedCall(400, () => {
          this.wonGameScreen()
        })
      }
    })
  }

  createBoxes () {
    const width = this.scale.width
    this.xPer = 0.2
    this.y = 200

    for (let row = 0; row < level.length; ++row) {
      for (let col = 0; col < level[row].length; ++col) {
        if (!(row === 0 && col === 1)) {
          this.boxChild = this.boxGroup.create(width * this.xPer + 130, this.y, 'bush', 0)
          this.boxChild.setData('itemType', level[row][col])
        }

        this.xPer += 0.2
      }

      this.xPer = 0.2
      this.y += 175
    }
  }

  setBushesActive (bushesClickable) {
    if (bushesClickable) {
      for (let i = 0; i < this.boxChildren.length; i++) {
        if (!(this.boxChildren[i].getData('opened'))) {
          this.boxChildren[i].setInteractive()

          this.boxChildren[i].on('pointerover', () => {
            this.boxChildren[i].alpha = 0.5
          })

          this.boxChildren[i].on('pointerout', () => {
            this.boxChildren[i].alpha = 1
          })

          this.boxChildren[i].on('pointerdown', this.handleMouseDown.bind(this, this.boxChildren[i]))
        }
      }
    } else if (!bushesClickable) {
      console.log('this is not active')
      for (let i = 0; i < this.boxChildren.length; i++) {
        this.boxChildren[i].disableInteractive()
      }
    } else {
      console.log('howd you get here')
    }
  }

  wonGameScreen () {
    this.tweens.add({
      targets: this.dialogueBox,
      alpha: {
        getStart: () => 0,
        getEnd: () => 1
      },
      duration: 1000,
      delay: 1500
    })

    this.tweens.add({
      targets: [this.dialogue, this.button],
      alpha: {
        getStart: () => 0,
        getEnd: () => 1
      },
      duration: 1000,
      delay: 1600
    })

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
        this.scene.stop()
        this.scene.wake('Day3Scene2')
      })
  }
}

export default MiniGame4
