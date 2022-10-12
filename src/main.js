// Bring in the phaser library
import Phaser from 'phaser'

import CONFIG from './config.js'

// Bringing in our base example scene
import TitleScene from './scenes/TitleScene.js'
import Preloader from './scenes/Preloader.js'
import Day1Scene2 from './scenes/Day1Scene2.js'
import HUDScene from './scenes/HUD.js'
import Day1Scene1 from './scenes/Day1Scene1.js'
import Day1Scene3 from './scenes/Day1Scene3.js'
import Game from './scenes/Game.js'
import MiniGame1 from './scenes/MiniGame1.js'
import CharacterSelection from './scenes/CharacterSelection.js'
import UpdateHeartScene from './scenes/UpdateHeartScene.js'
import Day2Scene1 from './scenes/Day2Scene1.js'
import Day2Scene2 from './scenes/Day2Scene2.js'
import Day2Scene3 from './scenes/Day2Scene3.js'
import Day2Scene4 from './scenes/Day2Scene4.js'
import Day3Scene1 from './scenes/Day3Scene1.js'
import Day3Scene2 from './scenes/Day3Scene2.js'
import Day3Scene3 from './scenes/Day3Scene3.js'
import Day3Scene4 from './scenes/Day3Scene4.js'
import MiniGame2 from './scenes/MiniGame2.js'
import MiniGame3 from './scenes/MiniGame3.js'
import MiniGame4 from './scenes/MiniGame4.js'
import MiniGame5 from './scenes/MiniGame5.js'
import GameEnd from './scenes/GameEnd.js'

const config = {
  // Configure Phaser graphics settings
  type: Phaser.AUTO,
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: CONFIG.DEFAULT_WIDTH,
    height: CONFIG.DEFAULT_HEIGHT
  },

  // Configure physics settings
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: CONFIG.DEFAULT_GRAVITY },
      debug: __DEV__
    }
  }
}

// Initialize the base phaser game object (must always be done once)
const game = new Phaser.Game(config)

// Add and auto-starting ExampleScene
game.scene.add('Preloader', Preloader)
game.scene.add('Title', TitleScene)
game.scene.add('HUDScene', HUDScene)
game.scene.add('Day1Scene1', Day1Scene1)
game.scene.add('Day1Scene2', Day1Scene2)
game.scene.add('Day1Scene3', Day1Scene3)
game.scene.add('GameScene', Game)
game.scene.add('CharSelection', CharacterSelection)
game.scene.add('mini1', MiniGame1)
game.scene.add('mini2', MiniGame2)
game.scene.add('mini3', MiniGame3)
game.scene.add('mini4', MiniGame4)
game.scene.add('mini5', MiniGame5)
game.scene.add('updateHeart', UpdateHeartScene)
game.scene.add('Day2Scene1', Day2Scene1)
game.scene.add('Day2Scene2', Day2Scene2)
game.scene.add('Day2Scene3', Day2Scene3)
game.scene.add('Day2Scene4', Day2Scene4)
game.scene.add('Day3Scene1', Day3Scene1)
game.scene.add('Day3Scene2', Day3Scene2)
game.scene.add('Day3Scene3', Day3Scene3)
game.scene.add('Day3Scene4', Day3Scene4)
game.scene.add('End', GameEnd)
game.scene.start('Preloader')
