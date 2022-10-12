import Phaser from 'phaser'
import CONFIG from '../config.js'

class Day1Scene1 extends Phaser.Scene {
  create () {
    this.registry.set('dayCounter', 1)

    const speech = []
    speech[0] = 'It is a warm, sunny afternoon. Cars are lazily driving past the brick and concrete city apartments as they head home from work. Birds are singing and muffled guitar music can be heard from open windows from the street. '
    speech[1] = 'As a brisk afternoon breeze hits you as you climb up the stairs to the door, you reposition the load of boxes you are carrying.'
    speech[2] = 'You have been moving in for the last few days, and this is just about the last of the packages to arrive. You dread how the coffee maker still hasn’t arrived yet as you need your caffeine. '
    speech[3] = 'You glance to check your calendar ... You start your new job tomorrow. Work isn’t terrible, never really has, after all, it’s mostly emails and data entry, but as you had been just relocated to this location from your last department... the thought of working again has escaped your mind the last couple of days. '
    speech[4] = 'The other thing to escape your mind is also friends…. '
    speech[5] = 'Sure, you had some friends back home, heck, the old location you worked at wasn’t even that far from your hometown! But….there was a lot to be desired still. This is your second chance, I guess. But so far, you haven’t left your house or even thought about socializing. But now the thought is there. '
    speech[6] = 'You continue to unpack. The sun begins to set and the sky is already turning blue and black. The thought of friends sits still in your brain, you aren’t lonely per se...but you do crave to be around people. You instinctively reach for coffee but there is nothing there. You remember you don’t have a coffee maker….or mugs unpacked entirely for that matter. '
    speech[7] = 'You sigh and take out your phone, opening the search browser to Boogle and Boogling the nearest coffee place you can walk to. To your luck, there is one relatively nearby, and it’s specifically open for late-night hours. The title is pretty self-explanatory in that fact: Night Owls.'
    speech[8] = 'You grab your wallet and house keys and leave to go there. It’s a little exciting leaving the house, a strange exhilaration, and excitement. '
    speech[9] = ''

    const bedroom = this.add.image(1280 / 2, 800 / 2, 'Bedroom')
    bedroom.setScale(
      CONFIG.DEFAULT_WIDTH / bedroom.width,
      CONFIG.DEFAULT_WIDTH / bedroom.width
    )

    this.cameras.main.fadeIn(3000)
    this.time.delayedCall(3000, () => {
      const box = this.add.image(CONFIG.DEFAULT_WIDTH / 2, CONFIG.DEFAULT_HEIGHT / 2, 'DialogueBoxSimp')
      box.setScale(
        CONFIG.DEFAULT_WIDTH / box.width,
        CONFIG.DEFAULT_HEIGHT / box.height
      )
      this.text = this.add.text(120, 575, speech[0], { font: '32px Arial', color: '#000000', wordWrap: { width: 1100 } })
      this.i = 0

      const name = ('')
      const nametext = this.add.text(50, 475, name, { font: '64px Arial', color: '#000000', wordWrap: { width: 310 } })

      this.button = this.add.image(1150, 560, 'Arrow')
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
          this.i++
          console.log('pressed')
          this.text.setText(speech[this.i])
          if (this.i === 9) {
            this.cameras.main.fadeOut(2000)
            this.time.delayedCall(1000, () => {
              this.scene.start('Day1Scene2')
            })
          }
        })
      this.button.setScale(0.3)
    })
  }

  update () {

  }

  updateText () {

  }
}

export default Day1Scene1
