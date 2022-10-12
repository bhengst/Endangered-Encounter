import Phaser from 'phaser'

class BoxGroup extends Phaser.Physics.Arcade.StaticGroup {

}

BoxGroup.animInitialized = false
BoxGroup.setupAnim = (scene) => {
  scene.anims.create({
    key: 'bushClick',
    frameRate: 5,
    repeat: -1,
    frames: scene.anims.generateFrameNumbers('bush', { start: 0, end: 7 })
  })

  BoxGroup.animInitialized = true
}

export default BoxGroup
