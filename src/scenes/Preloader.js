import Phaser from 'phaser'

class Preloader extends Phaser.Scene {
  preload () {
    // Load in title screen assets
    this.load.image('title', 'assets/title_together.png')

    // Load in character assets
    this.load.image('komodoDragon', 'assets/sprites/KomodoDragon_Emotes.png')
    this.load.image('pangolin', 'assets/sprites/Pangolin.png')

    // touca sprites
    this.load.image('Touca', 'assets/sprites/Touca_Emote_Neutral.png')
    this.load.image('ToucaUpset', 'assets/sprites/Touca_Emote_Upset.png')
    this.load.image('ToucaHappy', 'assets/sprites/Touca_Emote_Happy.png')

    // leo sprites
    this.load.image('Leo', 'assets/sprites/Leo_Emote_Neutral.png')
    this.load.image('LeoUpset', 'assets/sprites/Leo_Emotes_Upset.png')
    this.load.image('LeoHappy', 'assets/sprites/Leo_Emote_Happy.png')

    // dandelion sprites
    this.load.image('Dandelion', 'assets/sprites/Dandelion_Emote_Neutral.png')
    this.load.image('DandelionUpset', 'assets/sprites/Dandelion_Emote_Upset.png')
    this.load.image('DandelionHappy', 'assets/sprites/Dandelion_Emote_Happy.png')

    // Load character icons
    this.load.image('toucaIcon', 'assets/LoveCharts/toucan_icon.png')
    this.load.image('leoIcon', 'assets/LoveCharts/leopard_icon.png')
    this.load.image('dandelionIcon', 'assets/LoveCharts/panda_icon.png')

    // Load in images for regular game
    this.load.image('Bedroom', 'assets/backgrounds/bg_bedroomgreen.png')
    this.load.image('Cafe', 'assets/backgrounds/bg_cafe.png')
    this.load.image('officeBreakroom', 'assets/backgrounds/bg_office_breakroom.png')
    this.load.image('DialogueBox', 'assets/UI_Assets/text_box_UI.png')
    this.load.image('DialogueBoxSimp', 'assets/UI_Assets/text_simplebox_UI.png')
    this.load.image('Arrow', 'assets/UI_Assets/UI_green_arrow.png')
    this.load.image('textBoxBeige', 'assets/UI_Assets/UI_beige_textbox_tall.png')
    this.load.image('textBoxGreen', 'assets/UI_Assets/UI_green_textbox_tall.png')
    this.load.image('bgDayPark', 'assets/backgrounds/bg_Daypark.png')
    this.load.image('biegeTextBox', 'assets/UI_Assets/UI_beige_textbox_short.png')
    this.load.image('heartBG', 'assets/backgrounds/bg_heartscreen.png')
    this.load.image('office', 'assets/backgrounds/bg_office.png')
    this.load.image('Car', '/assets/backgrounds/bg_car.png')
    this.load.image('smallDialogueBox', 'assets/UI_Assets/text_simplebox_extrasmall_UI.png')

    // Load in images and spritesheets for match game
    this.load.image('box', 'assets/UI_Assets/UI_minigamebox.png')
    this.load.image('timeup', 'assets/UI_Assets/UI_minigame_timeup.png')
    this.load.image('finish', 'assets/UI_Assets/UI_minigame_finish.png')

    this.load.spritesheet('bush', 'assets/sprites/Bush_Spritesheet.png', {
      frameWidth: 170
    })

    this.load.image('bamboo', 'assets/sprites/Sprite_Bamboo.png')
    this.load.image('berry', 'assets/sprites/Sprite_Berry.png')
    this.load.image('bone', 'assets/sprites/Sprite_Bone.png')
    this.load.image('cricket', 'assets/sprites/Sprite_Cricket.png')
    this.load.image('egg', 'assets/sprites/Sprite_Egg.png')
    this.load.image('feathers', 'assets/sprites/Sprite_Feathers.png')
    this.load.image('lizard', 'assets/sprites/Sprite_Lizard.png')
    this.load.image('sheep', 'assets/sprites/Sprite_Sheep.png')
    this.load.image('chicken', 'assets/sprites/Sprite_Chicken.png')
    this.load.image('orange', 'assets/sprites/Sprite_Orange.png')
    this.load.image('steak', 'assets/sprites/Sprite_Steak.png')
    this.load.image('mouse', 'assets/sprites/Sprite_Mouse.png')
    this.load.image('pen', 'assets/sprites/Sprite_Pen.png')

    // Load in heart charts
    this.load.image('red0', 'assets/LoveCharts/redpanda_score_0.png')
    this.load.image('red1', 'assets/LoveCharts/redpanda_score_1.png')
    this.load.image('red2', 'assets/LoveCharts/redpanda_score_2.png')
    this.load.image('red3', 'assets/LoveCharts/redpanda_score_3.png')
    this.load.image('red4', 'assets/LoveCharts/redpanda_score_4.png')

    this.load.image('snow0', 'assets/LoveCharts/snowleopard_score_0.png')
    this.load.image('snow1', 'assets/LoveCharts/snowleopard_score_1.png')
    this.load.image('snow2', 'assets/LoveCharts/snowleopard_score_2.png')
    this.load.image('snow3', 'assets/LoveCharts/snowleopard_score_3.png')
    this.load.image('snow4', 'assets/LoveCharts/snowleopard_score_4.png')

    this.load.image('toucan0', 'assets/LoveCharts/toucan_score_0.png')
    this.load.image('toucan1', 'assets/LoveCharts/toucan_score_1.png')
    this.load.image('toucan2', 'assets/LoveCharts/toucan_score_2.png')
    this.load.image('toucan3', 'assets/LoveCharts/toucan_score_3.png')
    this.load.image('toucan4', 'assets/LoveCharts/toucan_score_4.png')

    this.load.image('end', 'assets/sprites/polaroid_Fin.png')
  }

  create () {
    // change this to show what scene plays :)
    this.scene.start('Title')
  }
}

export default Preloader
