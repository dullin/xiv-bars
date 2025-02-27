const JOBS = [
  {
    Name: 'Alchemist',
    Abbr: 'ALC',
    ID: 14,
    Discipline: 'DOH',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Armorer',
    Abbr: 'ARM',
    ID: 10,
    Discipline: 'DOH',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Blacksmith',
    Abbr: 'BSM',
    ID: 9,
    Discipline: 'DOH',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Carpenter',
    Abbr: 'CRP',
    ID: 8,
    Discipline: 'DOH',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Culinarian',
    Abbr: 'CUL',
    ID: 15,
    Discipline: 'DOH',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Goldsmith',
    Abbr: 'GSM',
    ID: 11,
    Discipline: 'DOH',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Leatherworker',
    Abbr: 'LTW',
    ID: 12,
    Discipline: 'DOH',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Weaver',
    Abbr: 'WVR',
    ID: 13,
    Discipline: 'DOH',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Botanist',
    Abbr: 'BTN',
    ID: 17,
    Discipline: 'DOL',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Fisher',
    Abbr: 'FSH',
    ID: 18,
    Discipline: 'DOL',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Miner',
    Abbr: 'MIN',
    ID: 16,
    Discipline: 'DOL',
    ClassID: null,
    Role: null
  },
  {
    Name: 'Arcanist',
    Abbr: 'ACN',
    ID: 26,
    Discipline: 'DOM',
    ClassID: null,
    Role: 'HEAL'
  },
  {
    Name: 'Astrologian',
    Abbr: 'AST',
    ID: 33,
    Discipline: 'DOM',
    ClassID: null,
    Role: 'HEAL',
    Weapon: 'Star Globes',
    Description: 'Ever has man coveted knowledge, and none more so than that of his fate. Thus did he labor to master the skill of foresight—but initial efforts bore little fruit. That is, until he looked to the stars above, which foretell the coming seasons, and learned to read the heavens. <br/><br/> Though this gift is known today as astrology, the people of Sharlayan saw fit to not only read the stars, but to write their movements as well. By attuning their aetherial energies to that of constellations, they learned to wield magicks with heretofore unseen properties. <br/><br/> Thus was astromancy born—a new form of magick which grants its users power over fate. Employing a star globe and divining deck in their miraculous deeds, fortune always smiles upon these masters of arcana.'
  },
  {
    Name: 'Black Mage',
    Abbr: 'BLM',
    ID: 25,
    Discipline: 'DOM',
    ClassID: 7,
    Role: 'MDPS',
    Weapon: 'Rods and Staves',
    Description: 'In days long past, there existed an occult and arcane art known as black magic—a potent magic of pure destructive force born forth by a sorceress of unparalleled power. Those who learned to wield this instrument of ruin came to be called black mages, out of both fear and respect for their gift. Yet great power served to corrupt the judgment of mortal man, and so he unknowingly set out upon the path of ruin. <br/><br/> Adventurers who take the black will become agents of devastation, capable of annihilating those who oppose them through little more than the force of their will.'
  },
  {
    Name: 'Blue Mage',
    Abbr: 'BLU',
    ID: 36,
    Discipline: 'DOM',
    ClassID: null,
    Role: 'MDPS',
    Description: 'A so-called mage of rather questionable character claims to have mastered an outlandish form of spellcasting that resembles neither black nor white magic during his voyage to the New World. Allegedly, anyone who purchases one of his soul crystals can learn to mimic the aetherial magicks of wild creatures. But can he be trusted, or is he merely a con artist looking to make a quick gil?'
  },
  {
    Name: 'Conjurer',
    Abbr: 'CNJ',
    ID: 6,
    Discipline: 'DOM',
    ClassID: null,
    Role: 'HEAL'
  },
  {
    Name: 'Scholar',
    Abbr: 'SCH',
    ID: 28,
    Discipline: 'DOM',
    ClassID: 26,
    Role: 'HEAL',
    Weapon: 'Books',
    Description: "In an age long past, when mankind flourished under the radiance of arcane mastery, the island of Vylbrand was home to a city-state called Nym. Though the history of that age tells of countless wars waged with earth-shattering incantations, it was the brilliant strategic maneuvering of Nym's scholars that allowed their mundane army of mariners to throw back would-be conquerers time and again. These learned men and women defended the freedom of their tiny nation with their unique command over spell-weaving faeries, utilizing the creatures' magicks to heal the wounded and bolster the strength of their allies.",
    ClassActionAllowlist: ['Resurrection']
  },
  {
    Name: 'Summoner',
    Abbr: 'SMN',
    ID: 27,
    Discipline: 'DOM',
    ClassID: 26,
    Role: 'MDPS',
    Weapon: 'Books',
    Description: "The beast tribes of Eorzea worship and summon forth beings known as primals, among which are Ifrit, Garuda, and Titan. Yet what is a god to one man is a demon to another, for the city-states of Eorzea see these beings as a grave threat to their collective survival. <br/><br/> In times immemorial, there lived mages who had not only the power to summon the primals, but also the means to transmute the primals' essences, thus binding them to their will. Known simply as summoners, the existence of these men and women and their arcane art have been all but lost to the ages."
  },
  {
    Name: 'Thaumaturge',
    Abbr: 'THM',
    ID: 7,
    Discipline: 'DOM',
    ClassID: null,
    Role: 'MDPS'
  },
  {
    Name: 'White Mage',
    Abbr: 'WHM',
    ID: 24,
    Discipline: 'DOM',
    ClassID: 6,
    Role: 'HEAL',
    Weapon: 'Wands and Canes',
    Description: 'White magic, the arcane art of succor, was conceived eras past that the world might know comfort. Alas, man began perverting its powers for self-gain, and by his wickedness brought about the Sixth Umbral catastrophe. Although the art subsequently became forbidden, it is now in the midst of a revival at the hands of the Padjal, chosen of the elementals. <br/><br/> Those who would walk the path of the white mage are healers without peer, possessed of the power to deliver comrades from the direst of afflictions—even the icy grip of death itself.'
  },
  {
    Name: 'Archer',
    Abbr: 'ARC',
    ID: 5,
    Discipline: 'DOM',
    ClassID: null,
    Role: 'RDPS'
  },
  {
    Name: 'Bard',
    Abbr: 'BRD',
    ID: 23,
    Discipline: 'DOW',
    ClassID: 5,
    Role: 'RDPS',
    Weapon: 'Bows',
    Description: 'The word “bard” ordinarily puts folk in mind of those itinerant minstrels, fair of voice and nimble of finger, who earn their coin performing in taverns and the halls of great lords. Few know, however, that bards in fact trace their origins back to the bowmen of eld, who sang in the heat of battle to fortify the spirits of their companions. <br/><br/> In time, their impassioned songs came to hold sway over the hearts of men, inspiring their comrades to great feats and granting peace unto those who lay upon the precipice of death.'
  },
  {
    Name: 'Dancer',
    Abbr: 'DNC',
    ID: 38,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'RDPS',
    Weapon: 'Chakrams',
    Description: 'From the Near Eastern nation of Thavnair comes a troupe of bewitchingly graceful performers. Though certainly elegant and beautiful, their movements also speak of martial discipline─of a pulsing, persistent energy whose rhythm can inspire souls and soothe troubled hearts. Inured to the hardships of the road, these dancers have learned to land throwing weapons with the same exacting precision as their footfalls, removing any who would obstruct the endless beat of the dance.'
  },
  {
    Name: 'Dark Knight',
    Abbr: 'DRK',
    ID: 32,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'TANK',
    Weapon: 'Longswords',
    Description: 'The pious Ishgardian clergy guide the flock, and the devout knights protect the weak. Yet even the holiest of men succumb to the darkest of temptations. <br/><br/> None dare to administer justice to these sacrosanct elite residing outside the reach of the law. Who, then, defends the feeble from the transgressions of those meant to guide and protect them? <br/><br/> A valiant few take up arms to defend the downtrodden, and not even the holy priests and knights can escape their judgment. Pariahs in their own land, they are known by many as “dark knights.” <br/><br/> These sentinels bear no shields declaring their allegiance. Instead, their greatswords act as beacons to guide the meek through darkness.'
  },
  {
    Name: 'Dragoon',
    Abbr: 'DRG',
    ID: 22,
    Discipline: 'DOW',
    ClassID: 4,
    Role: 'PDPS',
    Weapon: 'Polearms',
    Description: 'Of all the things that are symbolic of the nation of Ishgard, few are more recognized than the dragoon. Born amidst the timeless conflict between men and dragons, these lance-wielding knights have developed an aerial style of combat, that they might better pierce the scaled hides of their mortal foes. <br/><br/> Taking to the firmament as though it were an extension of the land, they descend upon the enemy with every onze of their bodies behind the blow. It is this penetrative power that characterizes the dragoon.'
  },
  {
    Name: 'Gladiator',
    Abbr: 'GLA',
    ID: 1,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'TANK'
  },
  {
    Name: 'Gunbreaker',
    Abbr: 'GNB',
    ID: 37,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'TANK',
    Weapon: 'Gunblades',
    Description: "The Hrothgar of northern Ilsabard have passed the art of the gunblade from one generation to the next. The weapon itself combines a sword with a firing mechanism, emitting a range of magical effects by utilizing aetherically imbued cartridges. Originally employed by Queen Gunnhildr's personal guard, they were once known as “Gunnhildr's Blades” and differ greatly from the similarly named weapons used in the Garlean Empire."
  },
  {
    Name: 'Lancer',
    Abbr: 'LNC',
    ID: 4,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'PDPS'
  },
  {
    Name: 'Machinist',
    Abbr: 'MCH',
    ID: 31,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'RDPS',
    Weapon: 'Guns',
    Description: 'The war with Dravania rages on, brutal and unrelenting. With no end in sight, the Holy See grows desperate. As her dragoons lay down their lives in defense of their home, Ishgard turns to technology to protect her sons and daughters. Great cannons and ballistas now line the city walls, plucking dragons from the sky. <br/><br/> Following the example of Cid Garlond, who has demonstrated the potency of magitek, the Skysteel Manufactory works tirelessly on the development of advanced armaments. As new and devastating weapons are brought to the fray, a new class of champion arises to wield them―the machinist.'
  },
  {
    Name: 'Marauder',
    Abbr: 'MRD',
    ID: 3,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'TANK'
  },
  {
    Name: 'Monk',
    Abbr: 'MNK',
    ID: 20,
    Discipline: 'DOW',
    ClassID: 2,
    Role: 'PDPS',
    Weapon: 'Fists',
    Description: "Though now under Garlean rule, the city-state of Ala Mhigo once boasted the greatest military might of all Eorzea. Among its standing armies were the monks—ascetic warriors as dreaded by foes on the field of battle as the city-state's great pikemen. <br/><br/> The monks comprised an order known as the Fist of Rhalgr, and it was to this god—the Destroyer—that they devoted their lives of worship. By mastering seats of power within the body known as chakra, they are capable of performing extraordinary physical feats."
  },
  {
    Name: 'Ninja',
    Abbr: 'NIN',
    ID: 30,
    Discipline: 'DOW',
    ClassID: 29,
    Role: 'PDPS',
    Weapon: 'Daggers',
    Description: 'Hailing from the war-torn lands of the Far East, the secret arts of the ninja were born of necessity, and have since given rise to a unique breed of highly-trained combatants. <br/><br/> Able to manipulate the vital energies of the land, the air, and living beings, they manifest their power through the weaving of signs, unleashing a wide array of attacks against their foes. Master the arts of the ninja and learn to bend the tide of battle to your will.'
  },
  {
    Name: 'Paladin',
    Abbr: 'PLD',
    ID: 19,
    Discipline: 'DOW',
    ClassID: 1,
    Role: 'TANK',
    Weapon: 'One-handed Swords',
    Description: "For centuries, the elite of the Sultansworn have served as personal bodyguards to the royal family of Ul'dah. Known as paladins, these men and women marry exquisite swordplay with stalwart shieldwork to create a style of combat uncompromising in its defense. Clad in brilliant silver armor, they charge fearlessly into battle, ever ready to lay down their lives for their liege. <br/><br/> To be a paladin is to protect, and those who choose to walk this path will become the iron foundation upon which the party's defense is built."
  },
  {
    Name: 'Pugilist',
    Abbr: 'PGL',
    ID: 2,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'PDPS'
  },
  {
    Name: 'Red Mage',
    Abbr: 'RDM',
    ID: 35,
    Discipline: 'DOM',
    ClassID: null,
    Role: 'MDPS',
    Weapon: 'Rapiers',
    Description: "On the eastern edge of Abalathia's Spine lies the mountainous region of Gyr Abania. <br/><br/> It is in these elevated lands that people took shelter, when a burning star guided them away from the Sixth Umbral Calamity's treacherous floodwaters. The survivors gathered from near and far, and amongst them were refugees of the sorcerous cities of Mhach and Amdapor. <br/><br/> These sworn enemies buried their history for the sake of the future, and cast aside their vestments of black and white. Upon the remnants of their arts a new discipline was built, and the first red mages stepped forward with rapiers in hand to fight back against the rising tides of destruction."
  },
  {
    Name: 'Rogue',
    Abbr: 'ROG',
    ID: 29,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'PDPS'
  },
  {
    Name: 'Samurai',
    Abbr: 'SAM',
    ID: 34,
    Discipline: 'DOW',
    ClassID: null,
    Role: 'PDPS',
    Weapon: 'Katanas',
    Description: "Far across the rolling waves, towards the rising sun, there lies the island nation of Hingashi. <br/><br/> In the distant past, the realm's great lords vied for supremacy over its sea-girt confines in a long and bloody conflict. And taking to battle in their lieges' names were noble swordsmen whose art was forged in the crucible of war: the samurai. <br/><br/> Eventually, the nation was unified under one banner, and these warriors came to wield their katana not upon fields as part of an army, but upon streets as protectors of the peace. <br/><br/> But as a neglected blade grows dull with rust, so too do men forget their purpose. Amidst waning memories of the old ways, a determined few hold fast to their convictions, hands by katana grips, awaiting the moment for steel to sing."
  },
  {
    Name: 'Warrior',
    Abbr: 'WAR',
    ID: 21,
    Discipline: 'DOW',
    ClassID: 3,
    Role: 'TANK',
    Weapon: 'Great Axes',
    Description: "On the northernmost edge of Abalathia's Spine exists a mountain tribe renowned for producing fearsome mercenaries. Wielding greataxes and known as warriors, these men and women learn to harness their inner-beasts and translate that power to unbridled savagery on the battlefield. <br/><br/> In former times which saw war waged ceaselessly in Eorzea, the warriors featured prominently on the front lines of battle. With the arrival of peacetime, however, their art has descended into the shadows of obscurity, where it remains to this day."
  },
  {
    Name: 'Sage',
    Abbr: 'SGE',
    ID: 40,
    Discipline: 'DOM',
    ClassID: null,
    Role: 'HEAL',
    Weapon: 'Nouliths',
    Description: 'The nation of Sharlayan is the cradle of knowledge, and the Studium its foremost institution of learning. Yet more so than its incomparable library and formidable assemblage of Archons, this prestigious academy is famed for blending traditionally distinct fields to produce revolutionary new disciplines. Among these, perhaps the most distinguished is an altruistic art which draws upon the wisdom of aetherology, sorcery, and medicine. Dubbed somanoutics, the art seeks to heal and protect by manipulating corporeal aether through the use of nouliths, a flying array of foci. Practitioners are dedicated to the betterment of mankind, and for their wisdom and compassion, eventually came to be known simply as sages.'
  },
  {
    Name: 'Reaper',
    Abbr: 'RPR',
    ID: 39,
    Discipline: 'DOW',
    Role: 'PDPS',
    ClassID: null,
    Weapon: 'Scythe',
    Description: "The Garleans' forebears were once humble farmers who made their home among the sun-drenched fields of southern Ilsabard. That was, until they were driven from this paradise by invaders wielding arcane magicks. Forced north into the frigid mountains, the survivors sought a means to tap into the reservoir of aether otherwise closed to them. A daring few found their answer within the void, binding themselves to its creatures to gain verboten power─power fed by the souls of the slain. Once more they took up their scythes, this time to reap a crimson harvest."
  }
];

const BASE_CLASS_IDS = [1, 2, 3, 4, 5, 6, 7, 26, 29];

const ROLE_ACTION_IDS = {
  TANK: [7531, 7540, 7533, 7538, 7535, 7548, 7537],
  PDPS: [7541, 7863, 7542, 7549, 7548, 7546],
  RDPS: [7554, 7541, 7553, 7557, 7551, 7548],
  MDPS: [7560, 7561, 7562, 7559],
  HEAL: [16560, 7568, 7561, 7562, 7559, 7571]
};

const ROLE_NAMES = {
  TANK: 'Tank',
  PDPS: 'Melee DPS',
  RDPS: 'Physical Ranged DPS',
  MDPS: 'Magic Ranged DPS',
  HEAL: 'Healer'
};

const DISCIPLINE_NAMES = {
  DOW: 'Disciple of War',
  DOM: 'Disciple of Magic',
  DOH: 'Disciple of the Hand',
  DOL: 'Disciple of the Land'
};

function getAdvancedJobs() {
  return JOBS.filter((job) => !BASE_CLASS_IDS.includes(job.ID));
}

const ADVANCED_JOBS = getAdvancedJobs();

function getJobsByDiscipline(discipline) {
  return ADVANCED_JOBS.filter((job) => job.Discipline === discipline);
}

module.exports = {
  getJobsByDiscipline,
  JOBS,
  ADVANCED_JOBS,
  ROLE_ACTION_IDS,
  ROLE_NAMES,
  DISCIPLINE_NAMES
};
