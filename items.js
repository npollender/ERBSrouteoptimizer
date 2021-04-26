/*
Materials
*/

const pianoWire = 'piano wire'
const stone = 'stone'
const glassBottle = 'glass bottle'
const nail = 'nail'
const leather = 'leather'
const turtleShell = 'turtle shell'
const rubber = 'rubber'
const scrapMetal = 'scrap metal'
const lighter = 'lighter'
const laserPointer = 'laser pointer'
const stallionMedal = 'stallion medal'
const battery = 'battery'
const alcohol = 'alcohol'
const oil = 'oil'
const cloth = 'cloth'
const gemstone = 'gemstone'
const glue = 'glue'
const paper = 'paper'
const ironOre = 'iron ore'
const can = 'can'
const gunpowder = 'gunpowder'
const meteorite = 'meteorite'
const treeOfLife = 'tree of life'
const mithril = 'mithril'
const vfBloodSample = 'vf blood sample'

/*
Consumables
*/

//Food
const potato = 'potato'
const cod = 'cod'
const realLemon = 'real lemon'
const garlic = 'garlic'
const adhesiveBandage = 'adhesive bandage'
const carp = 'carp'
const bread = 'bread'
const meat = 'meat'
const egg = 'egg'
const ramen = 'ramen'
const orientalHerb = 'oriental herb'
const chocolate = 'chocolate'
const curryPowder = 'curry powder'

//Beverage
const honey = 'honey'
const water = 'water'
const ice = 'ice'
const whiskey = 'whiskey'
const coffee = 'coffee'
const carbonatedWater = 'carbonated water'
const milk = 'milk'

/*
Weapons
*/

//Dagger
const scissors = 'scissors'
const fountainPen = 'fountain pen'
const kitchenKnife = 'kitchen knife'

//2H Sword
const rustySword = 'rusty sword'

//Axe
const pickaxe = 'pickaxe'
const hatchet = 'hatchet'

//Pistol
const waltherPPK = 'walther ppk'

//Assault Rifle
const fedorova = 'fedorova'

//Long Rifle
const longRifle = 'long rifle'

//Rapier
const needle = 'needle'

//Spear
const shortSpear = 'short spear'

//Hammer
const hammer = 'hammer'

//Bat
const branch = 'branch'
const shortRod = 'shortRod'

//Throw
const ironBall = 'iron ball'
const baseball = 'baseball'

//Shuriken
const razor = 'razor'
const playingCards = 'playing cards'
const chalk = 'chalk'

//Bow
const bow = 'bow'

//Crossbow
const shortCrossbow = 'short crossbow'

//Glove 
const brassKnuckles = 'brass knuckles'
const cottonGlove = 'cotton glove'

//Tonfa
const bamboo = 'bamboo'

//Guitar
const starterGuitar = 'starter guitar'

//Nunchaku
const steelChain = 'steel chain'

//Whip
const whip = 'whip'

/*
Armor
*/

//Head
const hairband = 'hairband'
const hat = 'hat'
const bikeHelmet = 'bike helmet'

//Chest
const windbreaker = 'windbreaker'
const monksRobe = 'monks robe'
const wetsuit = 'wetsuit'
const fabricArmor = 'fabric armor'

//Arm
const watch = 'watch'
const bandage = 'bandage'
const bracelet = 'bracelet'

//Leg
const slippers = 'slippers'
const runningShoes = 'running shoes'
const tights = 'tights'

//Accessory
const feather = 'feather'
const flower = 'flower'
const ribbon = 'ribbon'
const fan = 'fan'
const buddhistScripture = 'buddhist scripture'
const box = 'box'
const holyGrail = 'holy grail'
const cross = 'cross'
const binoculars = 'binoculars'

/*
Special
*/

//Summon
const surveillanceCamera = 'surveillance camera'
const snare = 'snare'
const mouseTrap = 'mouse trap'

/*
Greens
*/

//Dagger
const armyKnife = {
    kitchenKnife,
    branch
}
const scalpel = {
    fountainPen,
    razor
}

//2H Sword
const shamshir = {
    rustySword,
    lighter
}

//Axe
const chainScythe = {
    pickaxe,
    steelChain
}
const battleAxe = {
    hatchet,
    bamboo
}

//Dual Swords
const twinSwords = {
    kitchenKnife,
    rustySword
}

//Pistol
const magnumPython = {
    waltherPPK,
    oil
}
const berettaM92F = {
    waltherPPK,
    leather
}

//Assault Rifle
const STG44 = {
    fedorova,
    gunpowder
}

//Sniper Rifle
const springfield = {
    longRifle,
    laserPointer
}

//Rapier
const fencingRapier = {
    needle,
    ironOre
}

//Spear
const bambooSpear = {
    shortSpear,
    bamboo
}

//Hammer
const warhammer = {
    hammer,
    shortRod
}

//Bat
const longRod = {
    shortRod,
    bamboo
}

//Throw
const grenade = {
    ironBall,
    gunpowder
}
const molotovCocktail = {
    glassBottle,
    oil
}
const signedBall = {
    baseball,
    fountainPen
}

/*
TMP fnc
*/

const roseKnife = {
    kitchenKnife,
    branch,
    flower
}
const swissArmyKnife = {
    fountainPen,
    razor,
    scissors
}

function getRecipe(item) {
    let result = []
    for (let key in item) {
        result[key] = item[key]
    }
    return result
}

function areasWithItem(item) {
    let result = []
    for (let key in areas) {
        for (let key2 in areas[key]) {
            let obj = areas[key]
            if (item === obj[key2]) {
                result[key] = areas[key].ID
            }
        }
    }
    return result
}

function areasWithRecipe(item) {
    let result = []
    for (let key in areas) {
        for (let key2 in item) {
            for (let key3 in areas[key]) {
                let obj = areas[key]
                if (item[key2] === obj[key3]) {
                    result[key] = areas[key].ID
                    break
                }
            }
        }
    }
    return result
}

function omit(key, obj) {
    const { [key]: omitted, ...rest } = obj
    return rest
}