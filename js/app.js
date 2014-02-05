App = Ember.Application.create();

App.DruidRoute = Ember.Route.extend({
  model: function() {
    return Druid.sort(dynamicSort('mana_cost'));;
  }
});

App.HunterRoute = Ember.Route.extend({
  model: function() {
    return Hunter.sort(dynamicSort('mana_cost'));;
  }
});

App.MageRoute = Ember.Route.extend({
  model: function() {
    return Mage.sort(dynamicSort('mana_cost'));;
  }
});

App.PaladinRoute = Ember.Route.extend({
  model: function() {
    return Paladin.sort(dynamicSort('mana_cost'));;
  }
});

App.PriestRoute = Ember.Route.extend({
  model: function() {
    return Priest.sort(dynamicSort('mana_cost'));;
  }
});

App.RogueRoute = Ember.Route.extend({
  model: function() {
    return Rogue.sort(dynamicSort('mana_cost'));;
  }
});

App.ShamanRoute = Ember.Route.extend({
  model: function() {
    return Shaman.sort(dynamicSort('mana_cost'));;
  }
});

App.WarlockRoute = Ember.Route.extend({
  model: function() {
    return Warlock.sort(dynamicSort('mana_cost'));;
  }
});

App.WarriorRoute = Ember.Route.extend({
  model: function() {
    return Warrior.sort(dynamicSort('mana_cost'));;
  }
});

App.Router.map(function() {
  this.resource('druid');
  this.resource('hunter');
  this.resource('mage');
  this.resource('paladin');
  this.resource('priest');
  this.resource('rogue');
  this.resource('shaman');
  this.resource('warlock');
  this.resource('warrior');
});


var Druid = [
  {card_name: 'Bite', mana_cost: 4, description: 'Give your hero +4 Attack this turn and 4 Armor.'},
  {card_name: 'Claw', mana_cost: 1, description: 'Give your hero +2 Attack this turn and 2 Armor.'},
  {card_name: 'Force of Nature', mana_cost: 6, description: 'Summon three 2/2 Treants with Charge that die at the end of the turn.'},
  {card_name: 'Healing Touch', mana_cost: 3, description: 'Restore 8 Health.'},
  {card_name: 'Innervate', mana_cost: 0, description: 'Gain 2 Mana Crystals this turn only.'},
  {card_name: 'Mark of Nature', mana_cost: 3, description: 'Choose One - Give a minion +4 Attack; or +4 Health and Taunt.'},
  {card_name: 'Mark of the Wild', mana_cost: 2, description: 'Give a minion Taunt and +2/+2. (+2 Attack and +2 Health)'},
  {card_name: 'Moonfire', mana_cost: 0, description: 'Deal 1 damage.'},
  {card_name: 'Naturalize', mana_cost: 1, description: 'Destroy a minion. Your opponent draws 2 cards.'},
  {card_name: 'Nourish', mana_cost: 5, description: 'Choose One - Gain 2 Mana Crystals; or Draw 3 cards.'},
  {card_name: 'Power of the Wild', mana_cost: 2, description: 'Choose One - Give your minions +1/+1; or summon a 3/2 Panther.'},
  {card_name: 'Savage Roar', mana_cost: 3, description: 'Give your characters +2 Attack this turn.'},
  {card_name: 'Savagery', mana_cost: 3, description: 'Deal damage equal to your heros Attack to all enemy minions.'},
  {card_name: 'Sould of the Forest', mana_cost: 4, description: 'Give your minions "Deathrattle: Summon a 2/2 Treant."'},
  {card_name: 'Starfall', mana_cost: 5, description: 'Choose One - Deal 5 damage to an enemy; or 2 damage to all of them.'},
  {card_name: 'Starfire', mana_cost: 6, description: 'Deal 5 damage. Draw a card.'},
  {card_name: 'Swipe', mana_cost: 4, description: 'Deal 3 damage to an enemy and 1 damage to all other enemies.'},
  {card_name: 'Wild Growth', mana_cost: 2, description: 'Gain an empty Mana Crystal.'},
  {card_name: 'Wrath', mana_cost: 2, description: 'Choose One - Deal 3 damage; or Deal 1 damage and draw a card.'}
]

var Hunter = [
  {card_name: 'Anima Companion', mana_cost: 3, description: 'Summon a random Beast Companion.'},
  {card_name: 'Animal Companion', mana_cost: 3, description: 'Summon a random Beast Companion.'},
  {card_name: 'Arcane Shot', mana_cost: 1, description: 'Deal 2 damage.'},
  {card_name: 'Bestial Wrath', mana_cost: 1, description: 'Give a Beast +2 Attack and Immune this turn.'},
  {card_name: 'Deadly Shot', mana_cost: 3, description: 'Destroy a random enemy minion.'},
  {card_name: 'Explosive Shot', mana_cost: 5, description: 'Deal 5 damage to a minion and 2 damage to adjacent ones.'},
  {card_name: 'Explosive Trap', mana_cost: 2, description: 'Secret: When a minion damages your hero, deal 2 damage to all enemies.'},
  {card_name: 'Flare', mana_cost: 1, description: 'All minions lose Stealth. Destroy all enemy secret. Draw a card.'},
  {card_name: 'Freezing Trap', mana_cost: 2, description: 'Secret: When an enemy attacks, return it to its owners hand and it cost (2) more.'},
  {card_name: 'Hunters Mark', mana_cost: 0, description: 'Change a minions Health to 1 this turn.'},
  {card_name: 'Kill Command', mana_cost: 3, description: 'Deal 3 damage. If you have a Beast, deal 5 damage instead.'},
  {card_name: 'Misdirection', mana_cost: 2, description: 'Secret: When a character attacks your hero, instead he attacks another random character.'},
  {card_name: 'Multi-Shot', mana_cost: 4, description: 'Deal 3 damage to two random enemy minions.'},
  {card_name: 'Shotgun Blast', mana_cost: 2, description: 'Deal 1 damage.'},
  {card_name: 'Snake Trap', mana_cost: 2, description: 'Secret: When one of your minions is attacked, summon three 1/1 Snakes.'},
  {card_name: 'Snipe', mana_cost: 2, description: 'Secret: When your opponent plays a minion, deal 4 damage to it.'},
  {card_name: 'Steady Shot', mana_cost: 2, description: 'Deal 2 damage to the enemy hero.'},
  {card_name: 'Tracking', mana_cost: 1, description: 'Look at the top three cards of your deck. Draw one and discard the others.'},
  {card_name: 'Unleash the Hounds', mana_cost: 1, description: 'Give your Beasts +1 Attack and Charge.'}
]

var Paladin = [
  {card_name: 'Avenging Wrath', mana_cost: 6, description: 'Deal 8 damage randomly split among enemy characters'},
  {card_name: 'Blessed Champion', mana_cost: 5, description: 'Double a minions Attack.'},
  {card_name: 'Blessing of Kings', mana_cost: 4, description: 'Give a minion +4+4'},
  {card_name: 'Blessing of Wisdom', mana_cost: 1, description: 'Choose a minion. Whenever it attacks, draw a card.'},
  {card_name: 'Consecration', mana_cost: 4, description: 'Deal 2 damage to all enemies. Consecrated ground glows with Holy energy. But it smells a little, too.'},
  {card_name: 'Divine Favor', mana_cost: 3, description: 'Draw cards until you have as many in hand as your opponent'},
  {card_name: 'Equality', mana_cost: 2, description: 'Change the Health of ALL minions to 1.'},
  {card_name: 'Eye for an Eye', mana_cost: 1, description: 'Secret: When your hero takes damage, deal that much damage to the enemy hero.'},
  {card_name: 'Hammer of Wrath', mana_cost: 4, description: 'Deal 3 damage. Draw a card.'},
  {card_name: 'Hand of Protection', mana_cost: 1, description: 'Give a minion Divine Shield. This spell has been renamed so many times, even paladins don?t know what it should be called anymore.'},
  {card_name: 'Holy Light', mana_cost: 2, description: 'Restore 6 Health. If you are often bathed in Holy Light, you should consider wearing sunscreen.'},
  {card_name: 'Holy Wrath', mana_cost: 5, description: 'Draw a card and deal damage equal to its cost.'},
  {card_name: 'Humility', mana_cost: 1, description: 'Change a minions attack to 1.'},
  {card_name: 'Lay on Hands', mana_cost: 8, description: 'Restore 8 Health. Draw 3 cards.'},
  {card_name: 'Noble Sacrifice', mana_cost: 1, description: 'Secret: When an enemy attacks, summon a 2/1 Defender as the new target.'},
  {card_name: 'Redemption', mana_cost: 1, description: 'Secret: When one of your minions dies, return it to life with 1 Health.'},
  {card_name: 'Repentance', mana_cost: 1, description: 'When your opponent plays a minion, reduce its health to 1'},
]

var Priest = [
  {card_name: 'Circle of Healing', mana_cost: 0, description: 'Restore 4 Health to ALL minions.'},
  {card_name: 'Dark Command', mana_cost: 4, description: 'Gain control of an enemy minion with 3 or less Attack until end of turn.'},
  {card_name: 'Divine Spirit', mana_cost: 2, description: 'Double a minions Health.'},
  {card_name: 'Fade', mana_cost: 2, description: 'Give your minions Taunt. Draw a card.'},
  {card_name: 'Greater Heal', mana_cost: 2, description: 'Restore 2 Health to a character for each card in your opponents hand.'},
  {card_name: 'Holy Nova', mana_cost: 5, description: 'Deal 2 damage to all enemies. Restore 2 Health to all friendly characters.'},
  {card_name: 'Holy Smite', mana_cost: 1, description: 'Deal 2 damage.'},
  {card_name: 'Lightwell', mana_cost: 2, description: 'At the start of your turn, restore 3 Health to a damaged friendly character.'},
  {card_name: 'Mass Dispel', mana_cost: 4, description: 'Silence all enemy minions. Draw a card.'},
  {card_name: 'Mental Collapse', mana_cost: 2, description: 'Deal 1 damage to the enemy hero for each card in his hand.'},
  {card_name: 'Mind Blast', mana_cost: 3, description: 'Deal 5 damage to the enemy hero.'},
  {card_name: 'Mind Control', mana_cost: 8, description: 'Take control of an enemy minion.'},
  {card_name: 'Mind Vision', mana_cost: 4, description: 'Take a random card from your opponents hand.'},
  {card_name: 'Mindgames', mana_cost: 4, description: 'Put a copy of a random minion from your opponents deck into the battlefield.'},
  {card_name: 'Penance', mana_cost: 3, description: 'Deal 3 damage. Restore 3 Health to your hero.'},
  {card_name: 'Power Word: Shield', mana_cost: 1, description: 'Give a minion +3 Health.'},
  {card_name: 'Prayer of Fortitude', mana_cost: 2, description: 'Give your minions +1/+1. (+1 Attack/+1Health)'},
  {card_name: 'Shadowform', mana_cost: 3, description: 'Your Hero Power becomes Deal 2 damage. If already in Shadowform: 3 damage.'},
  {card_name: 'Silence', mana_cost: 0, description: 'Silence a minion.'},
  {card_name: 'Thoughtsteal', mana_cost: 3, description: 'Copy 2 cards from your opponents deck and put them into your hand.'},
]

var Mage = [
  {card_name: 'Arcane Explosion', mana_cost: 2, description: 'Deal 1 damage to all enemy minions.'},
  {card_name: 'Arcane Intellect', mana_cost: 3, description: 'Draw 2 cards.'},
  {card_name: 'Arcane Missiles', mana_cost: 1, description: 'Deal 3 damage randomly split among enemy characters.'},
  {card_name: 'Blizzard', mana_cost: 5, description: 'Deal 2 damage to all enemy minions and Freeze them.'},
  {card_name: 'Cone of Cold', mana_cost: 3, description: 'Freeze a minion and the minions next to it, and deal 1 damage to them.'},
  {card_name: 'Counterspell', mana_cost: 3, description: 'Secret: When your opponent casts a spell, Counter it.'},
  {card_name: 'Fireball', mana_cost: 4, description: 'Deal 6 damage.'},
  {card_name: 'Flamestrike', mana_cost: 7, description: 'Deal 4 damage to all enemy minions.'},
  {card_name: 'Frost Nova', mana_cost: 2, description: 'Freeze all enemy minions.'},
  {card_name: 'Frostbolt', mana_cost: 2, description: 'Deal 3 damage to a character and Freeze it.'},
  {card_name: 'Ice Barrier', mana_cost: 3, description: 'Secret: As soon as your hero is attacked, gain 8 Armor.'},
  {card_name: 'Ice Block', mana_cost: 3, description: 'Secret: When your hero takes fatal damage, prevent it and become Immune this turn.'},
  {card_name: 'Ice Lance', mana_cost: 1, description: 'Freeze a character. If it was already Frozen, deal 4 damage instead.'},
  {card_name: 'Mirror Entity', mana_cost: 3, description: 'Secret: When your opponent plays a minion, summon a copy of it.'},
  {card_name: 'Mirror Image', mana_cost: 1, description: 'Summon two 0/2 minions with Taunt.'},
  {card_name: 'Polymorph', mana_cost: 4, description: 'Transform a minion into a 1/1 Sheep.'},
  {card_name: 'Pyroblast', mana_cost: 8, description: 'Deal 10 damage.'},
  {card_name: 'Spellbender', mana_cost: 3, description: 'When an enemy casts a spell on a minion, summon a 1/3 as the new target.'},
  {card_name: 'Vaporize', mana_cost: 3, description: 'Secret: When a minion attacks your hero, destroy it.'},
]

var Rogue = [
  {card_name: 'Adrenaline Rush', mana_cost: 1, description: 'Draw a card. Combo: Draw 2 instead.'},
  {card_name: 'Assassinate', mana_cost: 5, description: 'Destroy an enemy minion.'},
  {card_name: 'Backstab', mana_cost: 0, description: 'Deal 2 damage to an undamaged minion.'},
  {card_name: 'Betrayal', mana_cost: 2, description: 'An enemy minion deals its damage to the minions next to it.'},
  {card_name: 'Blade Flurry', mana_cost: 2, description: 'Destroy your weapon and deal its damage to all enemies.'},
  {card_name: 'Cold Blood', mana_cost: 1, description: 'Give a minion +2 Attack. Combo: +4 Attack instead.'},
  {card_name: 'Conceal', mana_cost: 1, description: 'Give your minions Stealth until your next turn.'},
  {card_name: 'Deadly Poison', mana_cost: 1, description: 'Give your weapon +2 Attack.'},
  {card_name: 'Eviscerate', mana_cost: 2, description: 'Deal 2 damage. Combo: Deal 4 damage instead.'},
  {card_name: 'Fan of Knives', mana_cost: 3, description: 'Deal 1 damage to all enemy minions. Draw a card.'},
  {card_name: 'Headcrack', mana_cost: 3, description: 'Deal 2 damage to the enemy hero. Combo: Return this to your hand next turn.'},
  {card_name: 'Preparation', mana_cost: 0, description: 'The next spell you cast this turn costs (3) less.'},
  {card_name: 'Sap', mana_cost: 2, description: 'Return an enemy minion to its owners hand.'},
  {card_name: 'Shadowstep', mana_cost: 0, description: 'Return a friendly minion to your hand. It costs (2) less.'},
  {card_name: 'Shiv', mana_cost: 2, description: 'Deal 1 damage. Draw a card.'},
  {card_name: 'Sinister Strike', mana_cost: 1, description: 'Deal 3 damage to the enemy hero.'},
  {card_name: 'Sprint', mana_cost: 7, description: 'Draw 4 cards.'},
  {card_name: 'Vanish', mana_cost: 6, description: 'Return all minions to their owners hand.'},
]

var Shaman = [
  {card_name: 'Ancestral Healing', mana_cost: 0, description: 'Restore a minion to full Health.'},
  {card_name: 'Ancestral Spirit', mana_cost: 2, description: 'Choose a minion. When that minion is destroyed, return it to the battlefield.'},
  {card_name: 'Bloodlust', mana_cost: 5, description: 'Give your minions +3 Attack this turn.'},
  {card_name: 'Feral Spirit', mana_cost: 3, description: 'Summon two 2/3 Spirit Wolves with Taunt. Overload: (2)'},
  {card_name: 'Forked Lightning', mana_cost: 2, description: 'Deal 2 damage to 2 random enemy minions. Overload: (1)'},
  {card_name: 'Frost Shock', mana_cost: 1, description: 'Deal 1 damage to an enemy character and Freeze it.'},
  {card_name: 'Hex', mana_cost: 3, description: '(incomplete description) Transform a minion in...'},
  {card_name: 'Lava Burst', mana_cost: 3, description: 'Deal 5 damage. Overload: (2)'},
  {card_name: 'Lightning Bolt', mana_cost: 1, description: 'Deal 3 damage. Overload: (1)'},
  {card_name: 'Lightning Storm', mana_cost: 3, description: 'Deal 2-3 damage to all enemy minions. Overload: (2)'}
]

var Warlock = [
  {card_name: 'Bane of Doom', mana_cost: 5, description: 'Deal 2 damage to a character. If that kills it, summon a random Demon.'},
  {card_name: 'Chaos Bolt', mana_cost: 2, description: 'Deal 2 damage to a minion. If the target is a Demon, give it +2/+2 instead.'},
  {card_name: 'Corruption', mana_cost: 1, description: 'Choose an enemy minion. At the start of your turn, destroy it.'},
  {card_name: 'Demonfire', mana_cost: 2, description: 'Deal 2 damage to a minion. If its a friendly Demon, give it +2/+2 instead.'},
  {card_name: 'Drain Life', mana_cost: 3, description: 'Deal 2 damage. Restore 2 Health to your hero.'},
  {card_name: 'Hellfire', mana_cost: 4, description: 'Deal 3 damage to ALL characters.'},
  {card_name: 'Mortal Coil', mana_cost: 1, description: 'Deal 1 damage to a minion. If that kills it, draw a card.'},
  {card_name: 'Power Overwhelming', mana_cost: 1, description: 'Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.'},
  {card_name: 'Sacrificial Pact', mana_cost: 0, description: 'Destroy a Demon. Restore 5 Health to your hero.'},
  {card_name: 'Sense Demons', mana_cost: 3, description: 'Put 2 random Demons from your deck into your hand.'},
  {card_name: 'Shadow Bolt', mana_cost: 3, description: 'Deal 4 damage to a minion.'},
  {card_name: 'Shadowflame', mana_cost: 4, description: 'Destroy a friendly minion and deal its Attack damage to all enemy minions.'},
  {card_name: 'Siphon Soul', mana_cost: 6, description: 'Destroy a minion. Restore 3 Health to your hero.'},
  {card_name: 'Soulfire', mana_cost: 0, description: 'Deal 4 damage. Discard a random card.'},
  {card_name: 'Twisting Nether', mana_cost: 8, description: 'Destroy all minions.'},
]

var Warrior = [
  {card_name: 'Battle Rage', mana_cost: 2, description: 'Draw a card for each damaged friendly character.'},
  {card_name: 'Brawl', mana_cost: 5, description: 'Destroy all minions except one. (chosen randomly)'},
  {card_name: 'Charge', mana_cost: 0, description: 'Give a friendly minion Charge.'},
  {card_name: 'Cleave', mana_cost: 2, description: 'Deal 2 damage to two random enemy minions.'},
  {card_name: 'Commanding Shout', mana_cost: 2, description: 'Your minions cant be reduced below 1 Health this turn. Draw a card.'},
  {card_name: 'Execute', mana_cost: 1, description: 'Destroy a damaged enemy minion.'},
  {card_name: 'Heroic Strike', mana_cost: 2, description: 'Give your hero +4 Attack this turn.'},
  {card_name: 'Inner Rage', mana_cost: 0, description: 'Deal 1 damage to a minion and give it +2 Attack.'},
  {card_name: 'Mortal Strike', mana_cost: 4, description: 'Deal 4 damage. If your hero has 12 or less Health, deal 6 damage instead.'},
  {card_name: 'Rampage', mana_cost: 2, description: 'Give a damaged minion +3/+3.'},
  {card_name: 'Shield Block', mana_cost: 3, description: 'Gain 5 Armor. Draw a card.'},
  {card_name: 'Shield Slam', mana_cost: 1, description: 'Deal 1 damage to a minion for each Armor you have.'},
  {card_name: 'Slam', mana_cost: 2, description: 'Deal 2 damage to a minion. If it survives, draw a card.'},
  {card_name: 'Upgrade!', mana_cost: 1, description: 'If you have a weapon, give it +1/+1. Otherwise equip a 1/3 weapon.'},
  {card_name: 'Whirlwind', mana_cost: 1, description: 'Deal 1 damage to ALL minions.'}
]

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}