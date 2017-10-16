const WEAPONSYPES = {
	BareHands: 			{Weapons:["Hand"]},
	HandFist: 			{Weapons:[ /*11k*/
		"Gauntlet",	/*Europe*/
		"Katar", 	/*Asia India*/
		"Knuckles", /*Europe*/ /*Brass Knuckles*/
		"Mubuchae", /*Asia Korea*/ /*Korean fighting fan*/
		"Tekko"		/*Asia Japan*/
		]},
	Straightshortswords: 	{Weapons:[ /*12k*/
		"Cinquedea",	/*Europe*/
		"Ninjato",		/*Asia Japan*/
		"Gladius",		/*Europe Mediterranean*/
		]},
	Curvedshortswords: {Weapons:[ /*13k*/
		"Wakizashi",	/*Asia Japan*/
		"Shikomizue",	/*Asia Japan*/
		"Talibong"]},	/*Asia Southeast*/
	Curvedonehandedswords: {Weapons:[ /*14k*/
		"Cutlass",		/*Europe*/
		"Dao",			/*Asia China*/
		"Falchion",		/*Europe*/
		"Hwando",		/*Asia Korea*/
		"Kilij",		/**/
		"Krabi",
		"Sabre",
		"Schweizersabel",
		"Scimitar",
		"Shamshir"]},
	Straightonehandedswords: {Weapons:[ /*15k*/
		"Backsword",
		"Epee",
		"Estoc",
		"Flamberge",
		"Jian",
		"Khanda",
		"Longsword",
		"Rapier",
		"Tsurugi" /*Japanese*/
		]},
	Curvedtwohandedswords: {Weapons:[ /*16k*/
		"Katana", /*Japanese*/
		"Miaodao",]},
	Twohandedgreatswords: {Weapons:[ /*17k*/
		"Changdao",
		"Claymore",
		"Espadon",
		"Executionerssword",
		"Flambard",
		"LongKatana", /*Japanese*/
		"GreatLongsword",
		"Nodachi", /*Japanese*/
		"Zweihander",
		"CeremonialSword"]},
	Axelikeswords: {Weapons:[ /*18k*/
		"Golok",
		"Kopis",
		"Kukri",
		"Machete",
		"Yatagan"]},
	HookSwords: {Weapons:[ /*19k*/
		"Shuanggou"]},
	Daggers: {Weapons:[ /*20k*/
		"Pugio",
		"Stiletto",
		"Dirk",
		"Maingauche",
		"Asura",
		"Damascus",
		"Knife",
		"Dagger",
		"Icepick"]},
	Shields: {Weapons:[ /*21k*/
		"Shield",
		"Buckler",
		"CrossShield",
		"Guard",
		"Aegis",
		]},
	Axes: {Weapons:[ /*22k*/
		"Bardiche",
		"BattleAxe",
		"Broadaxe",
		"Doloire",
		"Fu",	/*chinese*/
		"Hatchet",
		"Labrys", /*Europe, Greek*/
		"Masakari", /*Japanese, very rare strong fast*/
		"Tomahawk"]},
	TwohandedAxes: {Weapons:[ /*23k*/
		"GreatBattleAxe",
		"Greataxe"]},
	Spears: {Weapons:[ /*24k*/
		"Dangpa", /*Korean, middle*/
		"Gichang", /*Korean, long and slow*/
		"Kamayari", /*Jap*/
		"Lance",
		"Qiang", /*Chinese*/
		"Spear",]},
	Polearms: {Weapons:[ /*25k*/
		"Fauchard",
		"Halberd", /*German*/
		"JiChinese", /*Chinese*/
		"Partisan", /*French*/
		"Pike",
		"Poleaxe", /*EUrope, hache*/
		"Ranseur", /*French*/
		"Trident"]},
	Maces: {Weapons:[ /*26k*/
		"Club",	
		"Flail", /*Europe*/
		"Hammer",
		"HorsemansPick", /*Europe, Polish*/
		"Kanabo", /*Japanese*/
		"Mace",
		"Warhammer",
		]},
	TwohandedMaces: {Weapons:[ /*27k*/
		"Bonegrinder",
		"Demolisher",
		"Greatmace",
		"Greathammer",
		"GreatWarhammer",
		"Maul",
		"MorningStar",
		"Sledgehammer",
		"Warmace",
		]},
	Staff: {Weapons:[ /*28k*/
		"Bo", /*chinese */
		"Hanbo", /*Japanese*/
		"Sceptre", /*Europe*/
		"Rod",
		"GunChineseStick",	
		"Quarterstaff" /*Europe*/
		]},
}

const WIELDINGTYPES = {
	Hand: {
		requirement: 1,
		weapontype1: ["HandFist"/*, "BareHands"*/],
		weapontype2: ["HandFist"/*, "BareHands"*/],
		weaponcomborotation: [1,2],
	},
	SimpleSword: {
		requirement: 1,
		weapontype1: ["Straightshortswords", "Straightonehandedswords"],
		weaponcomborotation: [1],
	},
	SimpleSwordAndShield: {
		awaken     : 2,
		weapontype1: ["Straightshortswords", "Straightonehandedswords"],
		weapontype2: ["Shields"],
		weaponcomborotation: [1,2],
	},
	SimpleCurvedSword: {
		requirement: 1,
		weapontype1: ["Curvedshortswords", "Curvedonehandedswords", "Axelikeswords"],
		weaponcomborotation: [1],
	},
	SimpleCurvedSwordAndShield: {
		awaken     : 2,
		weapontype1: ["Curvedshortswords", "Curvedonehandedswords", "Axelikeswords"],
		weapontype2: ["Shields"],
		weaponcomborotation: [1,2],
	},
	SimpleDagger: {
		requirement: 5,
		weapontype1: ["Daggers"],
		weaponcomborotation: [1],
	},
	DualDagger: {
		awaken     : 1,
		weapontype1: ["Daggers"],
		weapontype2: ["Daggers"],
		weaponcomborotation: [1,2],
	},
	TwohandedSword: {
		requirement: 40,
		weapontype1: ["Twohandedgreatswords"],
		weaponcomborotation: [1],
	},
	TwohandedCurvedSword: {
		requirement: 40,
		weapontype1: ["Curvedtwohandedswords"],
		weaponcomborotation: [1],
	},
	Barbarian: {
		requirement: 20,
		weapontype1: ["Axes"],
		weaponcomborotation: [1],
	},
	Centurion: {
		awaken: 3,
		weapontype1: ["Axes"],
		weapontype2: ["Shields"],
		weaponcomborotation: [1,1,2],
	},
	Berserker: {
		requirement: 50,
		weapontype1: ["TwohandedAxes"],
		weaponcomborotation: [1],
	},
	Berserker2: {
		awaken: 50,
		weapontype1: ["TwohandedAxes"],
		weapontype2: ["TwohandedAxes"],
		weaponcomborotation: [1,2],
	},
	Paladin: {
		requirement: 70,
		weapontype1: ["Straightonehandedswords","Maces"],
		weapontype2: ["Shields"],
		weaponcomborotation: [1,2],
	},
	Crusader: {
		awaken: 20,
		weapontype1: ["Twohandedgreatswords","TwohandedMaces"],
		weapontype2: ["Shields"],
		weaponcomborotation: [1,1,1,2],
	},
	HolyKnight: {
		awaken: 50,
		weapontype1: ["Straightonehandedswords","Maces"],
		weapontype2: ["Straightonehandedswords","Maces","Shields"],
		weaponcomborotation: [1,1,1,2],
	},
	Templar: {
		awaken: 100,
		weapontype1: ["Twohandedgreatswords","TwohandedMaces"],
		weapontype2: ["Twohandedgreatswords","TwohandedMaces","Shields"],
		weaponcomborotation: [1,1,1,2],
	},
	Lancer: {
		requirement: 50,
		weapontype1: ["Spears"],
		weaponcomborotation: [1],
	},
	ShaolinFist: {
		awaken     : 10,
		weapontype1: ["HandFist","Daggers"],
		weapontype2: ["HandFist","Daggers"],
		weaponcomborotation: [1,2],
	},
	ShaolinSpear: {
		awaken     : 60,
		weapontype1: ["Spears"],
		weaponcomborotation: [1],
	},
	ShaolinMaster: {
		awaken     : 300,
		weapontype1: ["HookSwords"],
		weaponcomborotation: [1],
	},
	God: {
		awaken     : 9000,
		hidden     : true,
		weapontype1: [
			"BareHands","HandFist",
			"Straightshortswords","Curvedshortswords","Curvedonehandedswords",
			"Straightonehandedswords","Curvedtwohandedswords","Twohandedgreatswords",
			"Axelikeswords","HookSwords","Daggers"],
		weapontype2: [
			"BareHands","HandFist",
			"Straightshortswords","Curvedshortswords","Curvedonehandedswords",
			"Straightonehandedswords","Curvedtwohandedswords","Twohandedgreatswords",
			"Axelikeswords","HookSwords","Daggers"],
		weapontype3: [
			"BareHands","HandFist",
			"Straightshortswords","Curvedshortswords","Curvedonehandedswords",
			"Straightonehandedswords","Curvedtwohandedswords","Twohandedgreatswords",
			"Axelikeswords","HookSwords","Daggers"],
		weaponcomborotation: [1,2,1,2,1,2,3],
	},
	/*
	SimpleArchery: {
		requirement: 70,
		weapontype1: ["Bow", "Crossbow"],
	},
	TwohandedArchery: {
		requirement: 74,
		weapontype1: ["TwohandedCrossbow"],
	},
	LongrangeArchery: {
		requirement: 79,
		weapontype1: ["Bow", "Crossbow", "TwohandedCrossbow"],
	},*/
}