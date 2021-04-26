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
    honey
}
const Temple = {
    ID: 'temple',
    neighbors: [],
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
    orientalHerb
}
const Avenue = {
    ID: 'avenue'
}
const Pond = {}
const Hospital = {}
const ArcheryRange = {}
const School = {}
const Cemetery = {}
const Factory = {}
const Hotel = {}
const Forest = {}
const Chapel = {}
const Beach = {}
const Uptown = {}
const Dock = {}

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

function getNeighboringItems(area) {
    for (let key in areas) {
        for (let key2 in area.neighbors) {
            if (areas[key].ID === area.neighbors[key2]) return areas[key]
        }
    }
}