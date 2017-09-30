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
		"Maingauche"]},
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
		weapontype1: ["Curvedshortswords", "Curvedonehandedswords"],
		weaponcomborotation: [1],
	},
	SimpleCurvedSwordAndShield: {
		awaken     : 2,
		weapontype1: ["Curvedshortswords", "Curvedonehandedswords"],
		weapontype2: ["Shields"],
		weaponcomborotation: [1,2],
	},
	SimpleDagger: {
		requirement: 5,
		weapontype1: ["Daggers"],
	},
	TwohandedSword: {
		requirement: 40,
		weapontype1: ["Twohandedgreatswords"],
		weaponcomborotation: [1],
	},
	TwhohandedCurvedSword: {
		requirement: 40,
		weapontype1: ["Curvedtwohandedswords"],
		weaponcomborotation: [1],
	},
	DualDagger: {
		awaken     : 1,
		weapontype1: ["Daggers"],
		weapontype2: ["Daggers"],
	},
	God: {
		awaken     : 80,
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