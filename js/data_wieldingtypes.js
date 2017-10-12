const WEAPONSYPES = {
	BareHands: 			{Weapons:["Hand"]},
	HandFist: 			{Weapons:[
		"Gauntlet",	/*Europe*/
		"Katar", 	/*Asia India*/
		"Knuckles", /*Europe*/ /*Brass Knuckles*/
		"Mubuchae", /*Asia Korea*/ /*Korean fighting fan*/
		"Tekko"		/*Asia Japan*/
		]},
	Straightshortswords: 	{Weapons:[
		"Cinquedea",	/*Europe*/
		"Ninjato",		/*Asia Japan*/
		"Gladius",		/*Europe Mediterranean*/
		]},
	Curvedshortswords: {Weapons:[
		"Wakizashi",	/*Asia Japan*/
		"Shikomizue",	/*Asia Japan*/
		"Talibong"]},	/*Asia Southeast*/
	Curvedonehandedswords: {Weapons:[
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
	Straightonehandedswords: {Weapons:[
		"Backsword",
		"Epee",
		"Estoc",
		"Flamberge",
		"Jian",
		"Khanda",
		"Longsword",
		"Rapier",
		"Tsurugi"
		]},
	Curvedtwohandedswords: {Weapons:[
		"Katana",
		"Miaodao",]},
	Twohandedgreatswords: {Weapons:[
		"Changdao",
		"Claymore",
		"Espadon",
		"Executionerssword",
		"Flambard",
		"LongKatana",
		"GreatLongsword",
		"Nodachi",
		"Zweihander"]},
	Axelikeswords: {Weapons:[
		"Golok",
		"Kopis",
		"Kukri",
		"Machete",
		"Yatagan"]},
	HookSwords: {Weapons:[
		"Shuanggou"]},
	Daggers: {Weapons:[
		"Pugio",
		"Stiletto",
		"Dirk",
		"Maingauche",
		"Asura",
		"Damascus",
		"Knife",
		"Dagger",
		"Icepick"]},
	Axes: {Weapons:[
		"BattleAxe"]},
	TwohandedAxes: {Weapons:[
		"Greataxe"]},
	Spears: {Weapons:[
		"Spear"]},
	Polearms: {Weapons:[
		"Poleaxe"]},
	Maces: {Weapons:[
		"Mace",
		"Hammer"]},
	TwohandedMaces: {Weapons:[
		"BigMace"]},
	Shields: {Weapons:[
		"Buckler"]},
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