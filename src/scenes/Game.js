import Phaser from 'phaser'
import BoxGroup from '../sprites/BoxGroup.js'
import Box from '../sprites/Box.js'
import Item from '../sprites/Item.js'

/**
 * Match game code
 */

const level = [
  [1, 0, 3],
  [2, 4, 1],
  [3, 4, 2]
]

class Game extends Phaser.Scene {
  // /** @type {Phaser.GameObjects.Group} */
  // itemsGroup

  // /** @type {{ box: Phaser.Physics.Arcade.Sprite, item: Phaser.GameObjects.Sprite }} */
  // selectedBoxes = []

  // /** @type {Phaser.Physics.Arcade.Sprite} */
  // activeBox

  create () {
    const backgroundBox = this.add.sprite(0, 0, 'box')
    backgroundBox.setOrigin(0, 0)

    this.selectedBoxes = []

    this.activeBox = undefined
    this.itemsGroup = this.add.group()

    this.matchesCount = 0

    const { width, height } = this.scale

    this.boxGroup = this.add.group()
    this.createBoxes()

    this.boxChildren = this.boxGroup.getChildren()

    for (let i = 0; i < this.boxChildren.length; i++) {
      this.boxChildren[i].setInteractive()

      this.boxChildren[i].on('pointerover', () => {
        console.log('pointerover')
        this.boxChildren[i].alpha = 0.5
      })

      this.boxChildren[i].on('pointerout', () => {
        console.log('pointeroff')
        this.boxChildren[i].alpha = 1
      })

      this.boxChildren[i].on('pointerdown', this.handleMouseDown.bind(this, this.boxChildren[i]))

      this.boxChildren[i].on('pointerup', () => {
        console.log('pointerup')
      })
    }

    this.itemsGroup = this.add.group()
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

    if (first.item.texture !== second.item.texture) {
      this.tweens.add({
        targets: [first.item, second.item],
        y: '+=50',
        alpha: 0,
        scale: 0,
        duration: 300,
        delay: 900,
        onComplete: () => {
          first.box.setData('opened', false)
          second.box.setData('opened', false)
        }
      })
      return
    }

    ++this.matchesCount
    this.time.delayedCall(900, () => {
      first.box.setFrame(8)
      second.box.setFrame(8)

      if (this.matchesCount >= 4) {
        // game won
        const { width, height } = this.scale
        this.add.text(width * 0.5, height * 0.5, 'You Win!', { fontSize: 48 })
          .setOrigin(0.5)
      }
    })
  }

  createBoxes () {
    const width = this.scale.width
    this.xPer = 0.2
    this.y = 200

    for (let row = 0; row < level.length; ++row) {
      for (let col = 0; col < level[row].length; ++col) {
        this.boxChild = this.boxGroup.create(width * this.xPer + 130, this.y, 'bush', 0)
        this.boxChild.setData('itemType', level[row][col])

        this.xPer += 0.2
      }

      this.xPer = 0.2
      this.y += 175
    }
  }
}

export default Game
