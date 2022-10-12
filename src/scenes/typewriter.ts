import Phaser from 'phaser'

export default class TypewriterDemo extends Phaser.Scene
{
    label: any
    constructor()
    {
        super('typewriter-demo')
    }

    preload()
    {
        
    }

    create()
    {
       this.label = this.add.text(100, 100, '')
         .setWordWrapWidth(100)

       this.typerwriteText('Hello, World!') 
    }
    typerwriteText(text)
    {
        const length = text.length
        let i = 0
        this.time.addEvent({
            callback: () => {
                this.label.text += text[i]
                ++i
            }, 
            repeat: length - 1,
            delay: 200
        })
    }
    /**
     * @param {string} text
     */
    typewriteTextWrapped(text)
    {
        const lines = this.label.getWrappedText(text)
        const wrappedText = lines.join('\n')

        this.typerwriteText(wrappedText)
    }
}