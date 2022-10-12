import Phaser from 'phaser'

class Box extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, texture, frame) {
    super(scene, x, y, texture)

    scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
    this.body.setAllowGravity(false)
    this.body.setImmovable(true)

    scene.add.existing(this)
  }
}

Box.animInitialized = false
Box.setupAnim = (scene) => {
  scene.anims.create({
    key: 'bushClick',
    frameRate: 5,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('bush', { start: 0, end: 7 })
  })

  Box.animInitialized = true
}

export default Box
