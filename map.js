const Alley = {
    ID: 'alley',
    neighbors: ['archery range', 'school', 'avenue', 'temple'],
    hammer,
    scissors,
    steelChain,
    needle,
    wetsuit,
    bracelet,
    runningShoes,
    cross,
    binoculars,
    rubber,
    lighter,
    stallionMedal,
    glue,
    garlic,
    ramen,
    honey,
    meteorite
}
const Temple = {
    ID: 'temple',
    neighbors: ['alley', 'avenue', 'pond'],
    shortRod,
    bamboo,
    kitchenKnife,
    ramen,
    shortSpear,
    hairband,
    monksRobe,
    fabricArmor,
    buddhistScripture,
    stallionMedal,
    cloth,
    gemstone,
    paper,
    gunpowder,
    garlic,
    orientalHerb,
    meteorite,
    potato
}
const Avenue = {
    ID: 'avenue',
    neighbors: ['alley', 'school', 'forest', 'temple', 'pond'],
    glassBottle,
    playingCards,
    fountainPen,
    hairband,
    watch,
    slippers,
    tights,
    fan,
    nail,
    battery,
    oil,
    cloth,
    can,
    chocolate,
    honey,
    milk,
    surveillanceCamera
}
const Pond = {
    ID: 'pond',
    neighbors: ['avenue', 'temple', 'hospital'],
    shortRod,
    bamboo,
    hammer,
    pickaxe,
    hatchet,
    shortSpear,
    hat,
    bracelet,
    flower,
    ribbon,
    box,
    snare,
    mouseTrap,
    turtleShell,
    gemstone,
    orientalHerb,
    meteorite,
    carp,
    potato
}
const Hospital = {
    ID: 'hospital',
    neighbors: ['pond', 'cemetery', 'factory'],
    cottonGlove,
    razor,
    scissors,
    needle,
    bandage,
    slippers,
    tights,
    feather,
    surveillanceCamera,
    scrapMetal,
    laserPointer,
    alcohol,
    glue,
    realLemon,
    adhesiveBandage,
    ice,
    milk
}
const ArcheryRange = {
    ID: 'archery range',
    neighbors: ['alley', 'school', 'hotel'],
    bamboo,
    ironBall,
    bow,
    hat,
    monksRobe,
    fabricArmor,
    runningShoes,
    surveillanceCamera,
    snare,
    nail,
    rubber,
    oil,
    paper,
    gunpowder,
    egg,
    rustySword,
    chocolate
}
const School = {
    ID: 'school',
    neighbors: ['archery range', 'hotel', 'forest', 'avenue', 'alley'],
    whip,
    razor,
    chalk,
    scissors,
    fountainPen,
    hat,
    bikeHelmet,
    windbreaker,
    bandage,
    slippers,
    ribbon,
    surveillanceCamera,
    lighter,
    laserPointer,
    alcohol,
    can,
    bread,
    meteorite
}
const Cemetery = {
    ID: 'cemetery',
    neighbors: ['hospital', 'factory', 'chapel'],
    brassKnuckles,
    bamboo,
    pickaxe,
    steelChain,
    hairband,
    fabricArmor,
    feather,
    flower,
    surveillanceCamera,
    mouseTrap,
    ironOre,
    gunpowder,
    garlic,
    egg,
    ice,
    coffee,
    treeOfLife,
    carp
}
const Factory = {
    ID: 'factory',
    neighbors: ['hospital', 'cemetery', 'chapel', 'dock'],
    ironBall,
    chalk,
    shortCrossbow,
    waltherPPK,
    fedorova,
    hatchet,
    bandage,
    binoculars,
    nail,
    scrapMetal,
    lighter,
    battery,
    alcohol,
    oil,
    glue,
    curryPowder,
    meteorite
}
const Hotel = {
    ID: 'hotel',
    neighbors: ['archery range', 'school', 'forest', 'beach'],
    cottonGlove,
    playingCards,
    waltherPPK,
    fedorova,
    kitchenKnife,
    needle,
    windbreaker,
    watch,
    binoculars,
    pianoWire,
    scrapMetal,
    cloth,
    ironOre,
    realLemon,
    ice,
    whiskey,
    carbonatedWater,
    treeOfLife
}
const Forest = {
    ID: 'forest',
    neighbors: ['hotel', 'school', 'avenue', 'beach', 'uptown', 'chapel'],
    brassKnuckles,
    bamboo,
    ironBall,
    shortCrossbow,
    longRifle,
    pickaxe,
    shortSpear,
    tights,
    feather,
    flower,
    fan,
    snare,
    gemstone,
    ironOre,
    egg,
    orientalHerb,
    honey,
    treeOfLife,
    carp
}
const Chapel = {
    ID: 'chapel',
    neighbors: ['uptown', 'dock', 'factory', 'cemetery', 'forest'],
    whip,
    glassBottle,
    razor,
    chalk,
    bow,
    rustySword,
    bikeHelmet,
    fan,
    box,
    holyGrail,
    cross,
    snare,
    pianoWire,
    paper,
    bread,
    milk,
    whiskey
}
const Beach = {
    ID: 'beach',
    neighbors: ['hotel', 'forest', 'uptown'],
    waltherPPK,
    hammer,
    hatchet,
    steelChain,
    bikeHelmet,
    wetsuit,
    binoculars,
    surveillanceCamera,
    snare,
    mouseTrap,
    pianoWire,
    turtleShell,
    stallionMedal,
    can,
    carbonatedWater,
    gemstone,
    pickaxe,
    cod
}
const Uptown = {
    ID: 'uptown',
    neighbors: ['beach', 'forest', 'chapel', 'dock'],
    fountainPen,
    windbreaker,
    watch,
    bracelet,
    runningShoes,
    flower,
    ribbon,
    surveillanceCamera,
    pianoWire,
    laserPointer,
    oil,
    realLemon,
    chocolate,
    curryPowder,
    whiskey,
    coffee,
    carbonatedWater,
    cod
}
const Dock = {
    ID: 'dock',
    neighbors: ['uptown', 'chapel', 'factory'],
    shortRod,
    glassBottle,
    longRifle,
    kitchenKnife,
    hammer,
    rustySword,
    wetsuit,
    bandage,
    box,
    surveillanceCamera,
    snare,
    turtleShell,
    rubber,
    scrapMetal,
    lighter,
    battery,
    bread,
    ramen,
    coffee,
    cod
}

const hyperloop = {
    Alley,
    Avenue,
    Chapel,
    Hospital,
    Hotel,
    Temple,
    Uptown
}

const areas = {
    Alley,
    Temple,
    Avenue,
    Pond,
    Hospital,
    ArcheryRange,
    School,
    Cemetery,
    Factory,
    Hotel,
    Forest,
    Chapel,
    Beach,
    Uptown,
    Dock
}

function containsHyperloop(area) {
    for (let key in hyperloop) {
        if (area === hyperloop[key]) return true
    }
    return false
}

function itemsInArea(area) {
    let result = []
    for (let key in area) {
        result[key] = area[key]
    }
    return result
}

function getAreaID(area) {
    return area.ID
}

function getNeighbors(area) {
    return area.neighbors
}

//currently only returns items of first match
function getNeighboringItems(area) {
    for (let key in areas) {
        for (let key2 in area.neighbors) {
            if (areas[key].ID === area.neighbors[key2]) return areas[key]
        }
    }
}

//for single item
function whereToFind(item) {
    let result = []
    let index = 0
    for (let key in areas) {
        let obj = areas[key]
        for (let key2 in obj) {
            if (item === obj[key2]) {
                result[index++] = obj.ID
            }
        }
    }
    if (result.length === 0) return 'You forgot to implement this one.'
    return result
}

//for multiple component items
function whereToFindEach(item) {
    let result = []
    for (let key in item) {
        result[key] = ''
        result[key] += (item[key] + ' can be found in: ')
        for (let key2 in areas) {
            let obj = areas[key2]
            for (let key3 in areas[key2]) {
                if (item[key] === obj[key3]) {
                    result[key] += (obj.ID + ', ')
                }
            }
        }
        result[key] = result[key].slice(0, -2)
    }
    return result
}

function whereToCraft(item) {
    let result = []
    let index = 0
    for (let key in item) {
        for (let key2 in areas) {
            let obj = areas[key2]
            for (let key3 in areas[key2]) {
                if (item[key] === obj[key3]) {
                    if (duplicate(result, obj.ID)) break
                    result[index++] = obj.ID
                }
            }
        }
    }
    return result
}

function duplicate(arr, arg) {
    for (let key in arr) {
        if (arr[key] === arg) return true
    }
    return false
}