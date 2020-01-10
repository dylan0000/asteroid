function villain () {
    for (let index = 0; index < 5; index++) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b b . . . . . . . 
. . . . b b b b b b . . . . . . 
. . b b b f f b b b b b . . . . 
. b b b b f f f b b b b . . . . 
. b b b b b b b b b f b b . . . 
. b f f b b b b b b f b b . . . 
. b f f b b b b b b f f b . . . 
. b b b b b b b b b b b b . . . 
. . b b b b b f b b b b b . . . 
. . . b b b f f b b b b . . . . 
. . . . b b b b b b b b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, 50), Math.randomRange(0, 100))
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b b . . . . . . . 
. . . . b b b b b b . . . . . . 
. . b b b f f b b b b b . . . . 
. b b b b f f f b b b b . . . . 
. b b b b b b b b b f b b . . . 
. b f f b b b b b b f b b . . . 
. b f f b b b b b b f f b . . . 
. b b b b b b b b b b b b . . . 
. . b b b b b f b b b b b . . . 
. . . b b b f f b b b b . . . . 
. . . . b b b b b b b b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, -70), Math.randomRange(0, 100))
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b b . . . . . . . 
. . . . b b b b b b . . . . . . 
. . b b b f f b b b b b . . . . 
. b b b b f f f b b b b . . . . 
. b b b b b b b b b f b b . . . 
. b f f b b b b b b f b b . . . 
. b f f b b b b b b f f b . . . 
. b b b b b b b b b b b b . . . 
. . b b b b b f b b b b b . . . 
. . . b b b f f b b b b . . . . 
. . . . b b b b b b b b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, 70), Math.randomRange(0, -100))
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b b . . . . . . . 
. . . . b b b b b b . . . . . . 
. . b b b f f b b b b b . . . . 
. b b b b f f f b b b b . . . . 
. b b b b b b b b b f b b . . . 
. b f f b b b b b b f b b . . . 
. b f f b b b b b b f f b . . . 
. b b b b b b b b b b b b . . . 
. . b b b b b f b b b b b . . . 
. . . b b b f f b b b b . . . . 
. . . . b b b b b b b b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, -70), Math.randomRange(0, -100))
    }
}
function hero () {
    alien = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . 7 7 7 . . . . . . 7 7 7 . . 
. . . 7 7 7 . . . . 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 f 7 7 f 7 7 . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(alien, 85, 85)
    info.setLife(3)
}
function score () {
    info.changeScoreBy(Math.randomRange(5, 16))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    overlap()
})
// applies to all rock contact
function overlap () {
    info.changeLifeBy(-1)
}
function spawnhp () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 . . 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
}
let mySprite: Sprite = null
let alien: Sprite = null
let projectile: Sprite = null
game.splash("get ready")
game.splash("random score / 1s")
pause(1000)
hero()
villain()
game.onUpdateInterval(20000, function () {
    spawnhp()
})
game.onUpdateInterval(5000, function () {
    villain()
    projectile.destroy()
})
game.onUpdateInterval(1000, function () {
    score()
})
