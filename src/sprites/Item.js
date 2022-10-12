import Phaser from 'phaser'

class Item extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, texture, frame) {
    super(scene, x, y, texture)

    scene.physics.world.enableBody(this, Phaser.Physics.Arcade.DYNAMIC_BODY)
    this.body.setAllowGravity(false)
    this.body.setImmovable(true)

    scene.add.existing(this)
  }
}

export default Item
