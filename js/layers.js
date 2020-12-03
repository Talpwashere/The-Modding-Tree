addLayer("rnp", {
    name: "RNPrestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "RNP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#850000",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "RNPrestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for RNP points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        rows: 2,
        cols: 3,
        11: {
            title: "The Beginning",
            description: "Add 1/10th of a Point every second.",
            cost: new Decimal(1),
            unlocked() { return player[this.layer].unlocked }
        },
        12: {
            title: "RNG",
            description: "Multiplies Point Value between 0 and 10x",
            cost: new Decimal(1),
            unlocked() { return (hasUpgrade(this.layer, 11))},
            update(diff) {
                new decimal(60)
            },
            effect() {
                let ret = (Math.random()*11)
                return ret
            }
        },
    }
}),
addlayer("time", {
    startData() { return {
        unlocked: true,
    }},
    name: "time",
    symbol: "t",
    color: "white",
    position: "side",
})