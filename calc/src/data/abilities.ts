import * as I from './interface';
import {toID} from '../util';

const RBY: string[] = [];

const GSC: string[] = [];

const ADV = [
  'Air Lock',
  'Arena Trap',
  'Battle Armor',
  'Blaze',
  'Clear Body',
  'Cloud Nine',
  'Color Change',
  'Cute Charm',
  'Drizzle',
  'Damp',
  'Drought',
  'Early Bird',
  'Effect Spore',
  'Flame Body',
  'Flash Fire',
  'Forecast',
  'Guts',
  'Huge Power',
  'Hustle',
  'Hyper Cutter',
  'Illuminate',
  'Immunity',
  'Inner Focus',
  'Insomnia',
  'Intimidate',
  'Keen Eye',
  'Levitate',
  'Lightning Rod',
  'Limber',
  'Liquid Ooze',
  'Magma Armor',
  'Magnet Pull',
  'Marvel Scale',
  'Natural Cure',
  'Oblivious',
  'Overgrow',
  'Own Tempo',
  'Poison Point',
  'Pressure',
  'Pure Power',
  'Rain Dish',
  'Rough Skin',
  'Run Away',
  'Sand Stream',
  'Sand Veil',
  'Serene Grace',
  'Shadow Tag',
  'Shed Skin',
  'Shell Armor',
  'Shield Dust',
  'Soundproof',
  'Speed Boost',
  'Static',
  'Stench',
  'Sticky Hold',
  'Sturdy',
  'Suction Cups',
  'Swarm',
  'Swift Swim',
  'Synchronize',
  'Thick Fat',
  'Torrent',
  'Trace',
  'Truant',
  'Vital Spirit',
  'Volt Absorb',
  'Water Absorb',
  'Water Veil',
  'White Smoke',
  'Wonder Guard',
];

const DPP = ADV.concat([
  'Adaptability',
  'Aftermath',
  'Anger Point',
  'Anticipation',
  'Bad Dreams',
  'Dry Skin',
  'Filter',
  'Flower Gift',
  'Forewarn',
  'Frisk',
  'Gluttony',
  'Heatproof',
  'Honey Gather',
  'Hydration',
  'Ice Body',
  'Iron Fist',
  'Klutz',
  'Leaf Guard',
  'Magic Guard',
  'Mold Breaker',
  'Motor Drive',
  'Mountaineer',
  'Multitype',
  'No Guard',
  'Normalize',
  'Persistent',
  'Poison Heal',
  'Quick Feet',
  'Rebound',
  'Reckless',
  'Rivalry',
  'Scrappy',
  'Simple',
  'Skill Link',
  'Slow Start',
  'Snow Cloak',
  'Snow Warning',
  'Solar Power',
  'Solid Rock',
  'Stall',
  'Steadfast',
  'Storm Drain',
  'Super Luck',
  'Tangled Feet',
  'Technician',
  'Tinted Lens',
  'Unaware',
  'Unburden',
]);

const BW = DPP.concat([
  'Analytic',
  'Big Pecks',
  'Contrary',
  'Cursed Body',
  'Defeatist',
  'Defiant',
  'Flare Boost',
  'Friend Guard',
  'Harvest',
  'Healer',
  'Heavy Metal',
  'Illusion',
  'Imposter',
  'Infiltrator',
  'Iron Barbs',
  'Light Metal',
  'Justified',
  'Magic Bounce',
  'Moody',
  'Moxie',
  'Multiscale',
  'Overcoat',
  'Pickpocket',
  'Poison Touch',
  'Prankster',
  'Rattled',
  'Regenerator',
  'Sand Force',
  'Sand Rush',
  'Sap Sipper',
  'Sheer Force',
  'Telepathy',
  'Teravolt',
  'Toxic Boost',
  'Turboblaze',
  'Unnerve',
  'Victory Star',
  'Weak Armor',
  'Wonder Skin',
  'Zen Mode',
]);

const XY = BW.concat([
  'Aerilate',
  'Aura Break',
  'Aroma Veil',
  'Bulletproof',
  'Competitive',
  'Dark Aura',
  'Fairy Aura',
  'Flower Veil',
  'Fur Coat',
  'Gale Wings',
  'Gooey',
  'Magician',
  'Mega Launcher',
  'Pixilate',
  'Refrigerate',
  'Stance Change',
  'Strong Jaw',
  'Sweet Veil',
  'Symbiosis',
  'Tough Claws',
]);

const SM = XY.concat([
  'Battery',
  'Battle Bond',
  'Berserk',
  'Comatose',
  'Corrosion',
  'Dancer',
  'Dazzling',
  'Disguise',
  'Electric Surge',
  'Emergency Exit',
  'Fluffy',
  'Galvanize',
  'Grassy Surge',
  'Innards Out',
  'Liquid Voice',
  'Long Reach',
  'Merciless',
  'Misty Surge',
  'Neuroforce',
  'Power Construct',
  'Power of Alchemy',
  'Psychic Surge',
  'Queenly Majesty',
  'RKS System',
  'Receiver',
  'Schooling',
  'Shields Down',
  'Slush Rush',
  'Stamina',
  'Stakeout',
  'Steelworker',
  'Tangling Hair',
  'Triage',
  'Water Compaction',
  'Wimp Out',
  'Sinister',
  'Rapid Fire',
  'Amplifier',
  'Ruthless',
  'Proficiency',
  'Instinct',
  'Expertise',
  'Hubris',
  'Versatility',
  'Grassy Guard',
  'Volt Rush',
  'Solar Rush',
  'Sweltering Sun',
  'Stormy Seas',
  'Guarding Gale',
  'Sixth Sense',
  'Headstrong',
  'Metabolism',
  'Liquid Veil',
  'Energy Shield',
  'Resilient',
  'Birds\' Eye View',
  'Debug',
  'Database',
  'Interstellar',
  'Evoboost'
]);

const SS = SM.concat([
  'As One (Glastrier)',
  'As One (Spectrier)',
  'Ball Fetch',
  'Chilling Neigh',
  'Cotton Down',
  'Curious Medicine',
  'Dauntless Shield',
  'Dragon\'s Maw',
  'Gorilla Tactics',
  'Grim Neigh',
  'Gulp Missile',
  'Hunger Switch',
  'Ice Face',
  'Ice Scales',
  'Intrepid Sword',
  'Libero',
  'Mimicry',
  'Mirror Armor',
  'Neutralizing Gas',
  'Pastel Veil',
  'Perish Body',
  'Power Spot',
  'Propeller Tail',
  'Punk Rock',
  'Quick Draw',
  'Ripen',
  'Sand Spit',
  'Screen Cleaner',
  'Stalwart',
  'Steam Engine',
  'Steely Spirit',
  'Transistor',
  'Unseen Fist',
  'Wandering Spirit',
]);

const SV = SS.concat([
  'Anger Shell',
  'Armor Tail',
  'Beads of Ruin',
  'Commander',
  'Costar',
  'Cud Chew',
  'Earth Eater',
  'Electromorphosis',
  'Good as Gold',
  'Guard Dog',
  'Hadron Engine',
  'Lingering Aroma',
  'Mycelium Might',
  'Opportunist',
  'Orichalcum Pulse',
  'Protosynthesis',
  'Purifying Salt',
  'Quark Drive',
  'Rocky Payload',
  'Seed Sower',
  'Sharpness',
  'Supreme Overlord',
  'Sword of Ruin',
  'Tablets of Ruin',
  'Thermal Exchange',
  'Toxic Debris',
  'Vessel of Ruin',
  'Well-Baked Body',
  'Wind Power',
  'Wind Rider',
  'Zero to Hero',
]);

export const ABILITIES = [[], RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];

export class Abilities implements I.Abilities {
  private readonly gen: I.GenerationNum;

  constructor(gen: I.GenerationNum) {
    this.gen = gen;
  }

  get(id: I.ID) {
    return ABILITIES_BY_ID[this.gen][id];
  }

  *[Symbol.iterator]() {
    for (const id in ABILITIES_BY_ID[this.gen]) {
      yield this.get(id as I.ID)!;
    }
  }
}

class Ability implements I.Ability {
  readonly kind: 'Ability';
  readonly id: I.ID;
  readonly name: I.AbilityName;

  constructor(name: string) {
    this.kind = 'Ability';
    this.id = toID(name);
    this.name = name as I.AbilityName;
  }
}

const ABILITIES_BY_ID: Array<{[id: string]: Ability}> = [];

for (const abilities of ABILITIES) {
  const map: {[id: string]: Ability} = {};
  for (const ability of abilities) {
    const a = new Ability(ability);
    map[a.id] = a;
  }
  ABILITIES_BY_ID.push(map);
}
