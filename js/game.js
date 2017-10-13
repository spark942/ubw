/*
	global: GTOOLS
	global: MONSTERS
	global: STAGES
	global: ITEMS
	global: PASSIVES
	global: ACTIVES
	global: WIELDINGTYPE
*/
'use strict'

const gameClass = () => {
	const GAMEVAR = {
		initialized:false,
		renderInitialized:false,
		inventoryspace: 20,
		saveCooldown: 30000,
		refreshingActiveskill: false,
	}
	const TABLES = {
		EXP_CHAR:   [],
		EXP_SKILL:  [],
		EXP_SKILL2: [],
		EXP_SKILL3: [],
		EXP_SKILL4: [],
		EXP_SKILL5: [],
		ITEM_DROPRATE: [5,10,20,40,80,160,320,640,1280,2560,5120,10240],
		ITEM_QUALITY_MIN: [5,10,30,80,200,500,1000],
		ITEM_QUALITY_MAX: [9,29,79,199,499,999,1999],
		MONSTERDEF_PER_RANK : [0.05,0.08,0.11,0.14,0.16,0.18,0.20],
		MONSTERS_ID: {
			asia: null,
			europe: null,
			asgard: null,
			special: null
		},
		MAXSTAGE: 250000,
		AURA: {
			FOCUS_DMG: {
				name: "Strengthen",
				base : 1,
				base_bonus_per_level: 0.02,
				curbonus : 0,
				cost_type: "focus",
				cost_per_sec: 3,
			},
			FOCUS_POWER_REGEN: {
				name: "Concentration",
				base : 5,
				base_bonus_per_level: 0.02,
				curbonus : 0,
				cost_type: "focus",
				cost_per_sec: 2,
			},
			FOCUS_COMBO_STREAK: {
				name: "Wombo Combo",
				base : 0.03,
				base_bonus_per_level: 0.0005,
				bonusperhit : 0.03,
				cost_type: "focus",
				cost_per_sec: 100,
			},
		},
		EXP_BONUS: {
			per_activeskill_level : 0.01,
			per_awaken_stage : 0.1,
		},
		regions_data : {
			asia : {
				world: "earth",
				offset: 0,
				multiplier: 0,
				max_stage: 250000,
				price: 100000000,
			},
			europe : {
				world: "earth",
				offset: 0,
				multiplier: 0,
				max_stage: 250000,
				price: 100000000,
			},
			asgard : {
				world: "ninerealms",
				offset: 200000,
				multiplier: 50,
				max_stage: 100002,
				price: 1000000000,
			},
			valhalla : {
				world: "ninerealms",
				offset: 5000000,
				multiplier: 800,
				max_stage: 1002,
				price: 10000000000,
			},
		},
		regions_world_cost : { /* if teleport to different world */
			earth  : { ekk: 		1000000000, focus:    5000000},
			ninerealms : { ekk:  1000000000000, focus: 	20000000000},
		},
		regions: ["asia","europe","asgard"],
		towns: [],
		townsGrimoirePerRegion: {
			asia: 	[1021,1022,1024,1025,1027,1028,1030, 1041,1042,1044,1045,1047,1048,1050, 1061,1062,1064,1065,1067,1068,1070],
			europe: [1021,1023,1024,1026,1027,1029,1030, 1041,1043,1044,1046,1047,1049,1050, 1061,1063,1064,1066,1067,1069,1070],
			asgard: [1024,1027,1030,1031, 1044,1047,1050,1051, 1064,1067,1070,1071],
		},
		passivesPerClass: {},
		activesPerClass: {},
		activeSkillBonusPerLevel: {
			slash: {dmg_p: 0.08},
			thrust: {dmg_p: 0.03, defpen_p: 0.005},
			blunt: {dmg_p: 0.04, mobtimer_p: 0.003},
		},
		defaultActiveSkillType: "slash",
		defaultWeapon : {
			dmg: 10,
			aspd: 1,
			class: "Hand",
			grade: 2,
		},
		weaponstarter : {
			type: "w",
			item_id:15144,
			stage: 40,
			quality:128
		}
	} 

	var DATA = {
		player: {
			settings    : {
				autoadvance: true,
				reverseadvance: false,
				droponfail: true,
				autoawaken: false,
				townstop   : true,
				uianimation: true,
				autosell_level : 100,
				autosell_1 : false,
				autosell_2 : false,
				autosell_3 : false,
				autosell_4 : false,
				autosell_5 : false,
				aura_focus_dmg 				 : false,
				aura_focus_power_regen : false,
				aura_focus_combostreak : false,
				townSell : false,
				townSalvage : false,
			},
			lastonline: null,
			focus: 10000,
			currentRegion: "asia",
			currentTownTab: "portal",
			currentTownPortalTab: "route",
			currentTownMarketTab: null,
			currentStage: 1,
			currentStageIsTown: false,
			currentMonster: null,
			currentPower: 0,
			comboPowerUsed: 0,
			currentComboStreak: 0,
			exp_char    : 1,
			aura_exp    : {
				focus_dmg:         0,
				focus_power_regen: 0,
				focus_combostreak: 0,
			},
			awaken_stage: 0,
			max_stage    : {
				all : 1,
				/* earth */
				asia : 1,
				europe : 0,
				/* ninerealms */
				asgard : 0,
				valhalla : 0,
			},
			ekk         : 1000,
			equipments  	 : [],
			wieldingsetups : {},
			passives  		 : {},
			actives   		 : {},
			activesView    : "Hand",
			activesViewSkills : [],
			activescombo   : {
				combosetup1: null,
				combo1: [],
				combosetup2: null,
				combo2: [],
				combosetup3: null,
				combo3: [],
				combosetup4: null,
				combo4: [],
				usedcombo: 1,
				viewcombo: 1
			},
			inventory  		 : [],
			weapondust     : {
				epic      : 0,
				legendary : 0,
				mythical  : 0,
			},
			lastitemid     : 1,
			battle 				 : {
				combo : null,
				current_combo: 0,
				current_hit: 0,
				timestamp_next_hit: null,
				combo_ts_start : null,
				combo_ts_end   : null,
				combo_ts_now   : null,
			},
			lts : {
				creationdate : null,
				playtime     : 1,
				looted_legendary : 0,
				looted_mythical  : 0,
				looted_ekk       : 0,
				killedenemies    : 0,
			}
		}
	}

	var ELEMENTMODELS = {
		wieldingtype: null,
		passiveskill: null,
		activeskill: null,
		comboskill: null,
		combolistskill: null,
		item: null,
		wsitem: null,
	}
	var ELEMENTS = {
		wieldingSetups: {},
		passiveskills: {},
		activeskills: {},
	}

	const init = () => {
		setConstant()
		setVariable()
		setElement()


		loadData()
		fillPlayerObject()
		if (DATA.player.lts.creationdate === null) {
			DATA.player.lts.creationdate = Date.now()
		}
		if (DATA.player.lts.hasOwnProperty("playtime") === false) {
			DATA.player.lts.playtime = 1
		}
		updateWieldingSetups()
		updatePassives()
		updateActives()

		initRender()

		comboSetupRender()
		updateStage(DATA.player.currentStage)
	}

	const setConstant = () => {
		for (var i = 0; i < 123; i++) {
			let fib1 = fibonacci(i+1)
			let fib8 = fibonacci(i+8)
			TABLES['EXP_CHAR'].push( Math.floor( Math.sqrt( fib8 )*8 ) )
			TABLES['EXP_SKILL'].push( Math.floor( Math.sqrt( fib1 )*10 ) )
			TABLES['EXP_SKILL2'].push( Math.floor( Math.sqrt( fib1 )*15 ) )
			TABLES['EXP_SKILL3'].push( Math.floor( Math.sqrt( fib1 )*25 ) )
			TABLES['EXP_SKILL4'].push( Math.floor( Math.sqrt( fib1 )*80 ) )
			TABLES['EXP_SKILL5'].push( Math.floor( Math.sqrt( fib1 )*5500 ) )
		}
		for (var i = 0; i < 877; i++) {
			TABLES['EXP_SKILL'].push(Math.floor(TABLES['EXP_SKILL'][TABLES['EXP_SKILL'].length - 1] * 1.1))
			TABLES['EXP_SKILL2'].push(Math.floor(TABLES['EXP_SKILL2'][TABLES['EXP_SKILL2'].length - 1] * 1.1))
			TABLES['EXP_SKILL3'].push(Math.floor(TABLES['EXP_SKILL3'][TABLES['EXP_SKILL3'].length - 1] * 1.1))
			TABLES['EXP_SKILL4'].push(Math.floor(TABLES['EXP_SKILL4'][TABLES['EXP_SKILL4'].length - 1] * 1.1))
			TABLES['EXP_SKILL5'].push(Math.floor(TABLES['EXP_SKILL5'][TABLES['EXP_SKILL5'].length - 1] * 1.1))
		}

		/* load monsters id per region and elite_rank */
		let asia 		= [[],[],[],[],[],[],[]]
		let europe 	= [[],[],[],[],[],[],[]]
		let special = [[],[],[],[],[],[],[]]
		for (var i = 0; i < MONSTERS.length; i++) {
			var mobrank = MONSTERS[i][6] ? MONSTERS[i][6] : 0
			if (MONSTERS[i][1] == "asia") {
				asia[mobrank].push(MONSTERS[i][0])
			} else if (MONSTERS[i][1] == "europe") {
				europe[mobrank].push(MONSTERS[i][0])
			} else if (MONSTERS[i][1] == "special") {
				special[mobrank].push(MONSTERS[i][0])
			}
		}

		TABLES.MONSTERS_ID.asia 	= asia
		TABLES.MONSTERS_ID.europe = europe
		TABLES.MONSTERS_ID.special = special

		TABLES.towns = getTowns()
	}

	const setVariable = () => {
		/*Stage*/
		/*Player*/
	}

	const fillPlayerObject = () => {
		if (DATA.player.settings.hasOwnProperty("uianimation") === false) { DATA.player.settings.uianimation = true }

		if (DATA.player.max_stage.hasOwnProperty("asgard") === false) { DATA.player.max_stage.asgard = 0 }
		if (DATA.player.max_stage.hasOwnProperty("valhalla") === false) { DATA.player.max_stage.valhalla = 0 }
	}

	const setElement = () => {
		/* town view */
		function showTown() {
			elebyID("game-container").classList.add("intown")
			elebyID("game-container").classList.add(DATA.player.currentRegion)
		}
		function showGate() {
			updateAttributeByID("game-container", "class", "")

			elebyID("town-sell").checked = false
			elebyID("town-salvage").checked = false

			DATA.player.settings.townSell = false
			DATA.player.settings.townSalvage = false
		}
		elebyID("town-enter").onclick = showTown
		elebyID("town-gate").onclick = showGate


		function changeInventory() {
			let inventories = eleByClass("g-inventory")
			for(var i = 0; i < inventories.length; i++)
			{
				if (inventories.item(i).className.indexOf("hidden") === -1) {
					inventories.item(i).className += " hidden"
				}
			}

			if (this.checked) {
				let inventoryID = this.id.replace("-b-","-")
				elebyID(inventoryID).classList.remove("hidden")
				if (this.id.includes("activescombo")) {
					comboSetupRender()
				}
			}

		}
		elebyID("g-in-b-equipments").onchange = changeInventory
		elebyID("g-in-b-wieldingsetups").onchange = changeInventory
		elebyID("g-in-b-passives").onchange = changeInventory
		elebyID("g-in-b-actives").onchange = changeInventory
		elebyID("g-in-b-activescombo").onchange = changeInventory
		elebyID("g-in-b-inventory").onchange = changeInventory

		/* force on this view */
		elebyID("g-in-b-inventory").checked = true
		elebyID("g-in-b-inventory").onchange()
	}

	const setPlayer = () => {
		if (DATA.player.inventory.length !== 0) { return false}
		DATA.player.activescombo["combosetup1"] = TABLES.defaultWeapon.class
		DATA.player.activescombo["combosetup2"] = TABLES.defaultWeapon.class
		DATA.player.activescombo["combosetup3"] = TABLES.defaultWeapon.class
		DATA.player.activescombo["combosetup4"] = TABLES.defaultWeapon.class
		addItemInventory(TABLES.weaponstarter)
		addItemInventory({
			type: "w",
			item_id:11023,
			stage: 80
		})
		addItemInventory({
			type: "w",
			item_id:11024,
			stage: 80
		})
		addItemInventory({
			type: "w",
			item_id:13023,
			stage: 80
		})
	}

	const getCharacterLevelByExp = () => {
		var char_level = 0
		for (var u = 0; u < TABLES.EXP_CHAR.length; u++) {
			if (DATA.player.exp_char >= TABLES.EXP_CHAR[u]) {
				char_level++
			}
		}
		return char_level + 1
	}
	const getCharacterCurrentExpOfLevel = () => {
		let char_current_level = getCharacterLevelByExp()

		let char_base_exp_of_level = TABLES.EXP_CHAR[char_current_level-2] || 0
		return DATA.player.exp_char - char_base_exp_of_level
	}
	const getCharacterCurrentLevelTotalExp = () => {
		let char_current_level = getCharacterLevelByExp()
		let char_base_exp_of_level = TABLES.EXP_CHAR[char_current_level-2] || 0
		let char_max_exp_of_level = TABLES.EXP_CHAR[char_current_level-1] || TABLES.EXP_CHAR[TABLES.EXP_CHAR.length-1]
		return char_max_exp_of_level - char_base_exp_of_level
	}

	function awakenPlayer () {
		if (getCharacterLevelByExp() === 101) {
			DATA.player.awaken_stage++
			DATA.player.exp_char = 0
		}
	}

	const getEffectiveStage = () => {
		return (DATA.player.currentStage + TABLES.regions_data[DATA.player.currentRegion].offset) * (1 + TABLES.regions_data[DATA.player.currentRegion].multiplier)
	}

	const getWeaponTypeByWeaponClass = (weaponClass) => {
		weaponClass = weaponClass || TABLES.defaultWeapon.class
		for (var wType in WEAPONSYPES) {
			if (WEAPONSYPES[wType].Weapons.indexOf(weaponClass) !== -1) {
				return wType
			}
		}
	}

	const getWeaponComboRotation = (wieldingType) => {
		let wcb = null
		if (WIELDINGTYPES[wieldingType].hasOwnProperty("weaponcomborotation") === false) {
			wcb = [1]
		} else {
			wcb = WIELDINGTYPES[wieldingType].weaponcomborotation
		}
		let rotation = []
		while (rotation.length < 200) {
			for (var i = 0; i < wcb.length; i++) {
				rotation.push(wcb[i])
			};
		}
		return rotation
	}

	const updateWieldingSetups = () => {
		for (var wt in WIELDINGTYPES) {
			if (DATA.player.wieldingsetups.hasOwnProperty(wt) === false) {
				DATA.player.wieldingsetups[wt] = {
					weapon1: null
				}
				if (WIELDINGTYPES[wt].hasOwnProperty("weapontype2") === true) {
					DATA.player.wieldingsetups[wt].weapon2 = null
				}
				if (WIELDINGTYPES[wt].hasOwnProperty("weapontype3") === true) {
					DATA.player.wieldingsetups[wt].weapon3 = null
				}

			}
			
		}
	}

	const updateWieldingSetupUnlock = () => {
		for (var wt in WIELDINGTYPES) {
			if (DATA.player.wieldingsetups.hasOwnProperty(wt) !== false) {
				if (WIELDINGTYPES[wt].hasOwnProperty("requirement")) {
					DATA.player.wieldingsetups[wt].unlocked = WIELDINGTYPES[wt].requirement <= getCharacterLevelByExp() ? true : false
				} else if (WIELDINGTYPES[wt].hasOwnProperty("awaken")) {
					DATA.player.wieldingsetups[wt].unlocked = WIELDINGTYPES[wt].awaken <= DATA.player.awaken_stage ? true : false
				}
			}
		}
	}

	const getSkillLevelByExp = (skill_exp, curve) => {
		curve = curve || 1
		var skill_level = 0
		for (var u = 0; u < TABLES.EXP_SKILL.length; u++) {
			if (curve == 1) {
				if (skill_exp >= TABLES.EXP_SKILL[u]) {
					skill_level++
				}
			} else {
				if (skill_exp >= TABLES["EXP_SKILL"+curve][u]) {
					skill_level++
				}
			}
			
		}
		return skill_level + 1
	}
	const getSkillCurrentExpOfLevel = (skill_exp, skill_curve) => {
		skill_curve = skill_curve || 1
		let expcurve = skill_curve == 1 ? "" : skill_curve
		let skill_current_level = getSkillLevelByExp(skill_exp, skill_curve)

		let skill_base_exp_of_level = TABLES["EXP_SKILL"+expcurve][skill_current_level-2] || 0
		return skill_exp - skill_base_exp_of_level
	}
	const getSkillCurrentLevelTotalExp = (skill_exp, skill_curve) => {
		skill_curve = skill_curve || 1
		let expcurve = skill_curve == 1 ? "" : skill_curve

		let skill_current_level = getSkillLevelByExp(skill_exp, skill_curve)
		let skill_base_exp_of_level = TABLES["EXP_SKILL"+expcurve][skill_current_level-2] || 0
		let skill_max_exp_of_level = TABLES["EXP_SKILL"+expcurve][skill_current_level-1] || TABLES["EXP_SKILL"+expcurve][TABLES.EXP_CHAR.length-1]
		return skill_max_exp_of_level - skill_base_exp_of_level
	}

	/* exp bonus */
	const getTotalActiveSkillLevel = () => {
		let totalLevel = 0

		for (var adata in DATA.player.actives) { 
			if (DATA.player.actives[adata].unlocked === true) {
				totalLevel += getSkillLevelByExp(DATA.player.actives[adata].exp, parseInt(DATA.player.actives[adata].curve))
			}
		}
		return totalLevel
	}
	const getCharacterBonusExp = () => {
		let activeskill_bonus = TABLES.EXP_BONUS.per_activeskill_level * getTotalActiveSkillLevel()

		let route_asia_effective_max_stage = DATA.player.max_stage.asia * (1 + TABLES.regions_data.asia.multiplier) + (DATA.player.max_stage.asia > 0 ? TABLES.regions_data.asia.offset : 0)
		let route_europe_effective_max_stage = DATA.player.max_stage.europe * (1 + TABLES.regions_data.europe.multiplier) + (DATA.player.max_stage.europe > 0 ? TABLES.regions_data.europe.offset : 0)
		let route_earth = Math.sqrt(route_asia_effective_max_stage + route_europe_effective_max_stage) / 30

		let route_asgard_effective_max_stage = DATA.player.max_stage.asgard * (1 + TABLES.regions_data.asgard.multiplier) + (DATA.player.max_stage.asgard > 0 ? TABLES.regions_data.asgard.offset : 0)
		let route_valhalla_effective_max_stage = DATA.player.max_stage.valhalla * (1 + TABLES.regions_data.valhalla.multiplier) + (DATA.player.max_stage.valhalla > 0 ? TABLES.regions_data.valhalla.offset : 0)
		let route_ninerealms = Math.sqrt(route_asgard_effective_max_stage + route_valhalla_effective_max_stage) / 30

		let killcount_bonus = Math.sqrt(DATA.player.lts.killedenemies) / 20

		return {
			askill: toDecimal(activeskill_bonus, 2),
			route_earth: toDecimal(route_earth, 2),
			route_ninerealms: toDecimal(route_ninerealms, 2),
			route_worlds: toDecimal(route_earth + route_ninerealms, 2),
			killcount   : toDecimal(killcount_bonus, 2),
			total : toDecimal(activeskill_bonus + route_earth + route_ninerealms + killcount_bonus,2)
		}
	}
	/* every Awakening Stage reduce the exp */
	const getCharacterExpRatio = () => {
		return Math.max(1 / (Math.pow(1.04, DATA.player.awaken_stage < 9000 ? DATA.player.awaken_stage : 9000)), 1e-324)
	}

	const getPassiveModelByID = (passiveID) => {
		for (var i = 0; i < PASSIVES.length; i++) {
			if (PASSIVES[i][0] == passiveID) {
				return PASSIVES[i]
			}
		}
	}

	const getWeaponPassiveIDByClass = (weaponClass) => {
		let weaponType = getWeaponTypeByWeaponClass(weaponClass)
		for (var i = 0; i < PASSIVES.length; i++) {
			if (PASSIVES[i][6] === "weapontype" && PASSIVES[i][7] === weaponType) { return PASSIVES[i][0] }
			else if (PASSIVES[i][8] === "weapontype" && PASSIVES[i][9] === weaponType) { return PASSIVES[i][0] }
			else if (PASSIVES[i][10] === "weapontype" && PASSIVES[i][11] === weaponType) { return PASSIVES[i][0] }
			else if (PASSIVES[i][12] === "weapontype" && PASSIVES[i][13] === weaponType) { return PASSIVES[i][0] }
			else if (PASSIVES[i][14] === "weapontype" && PASSIVES[i][15] === weaponType) { return PASSIVES[i][0] }
		};
	}

	const updatePassives = () => {
		if (DATA.player.awaken_stage > 0
			&& DATA.player.passives.hasOwnProperty(0) == false) {
			DATA.player.passives[0] = {
				unlocked:true
			}
		}
		for (var i = 0; i < PASSIVES.length; i++) {
			if (DATA.player.passives.hasOwnProperty(PASSIVES[i][0]) === false) { /*create passive*/
				DATA.player.passives[PASSIVES[i][0]] = {
					unlocked:false
				}
				if (PASSIVES[i][5] !== null) {
					DATA.player.passives[PASSIVES[i][0]].exp = 0
				}
			} else {
				if (PASSIVES[i][5] !== null && DATA.player.passives[PASSIVES[i][0]].hasOwnProperty("exp") === false) {
					DATA.player.passives[PASSIVES[i][0]].exp = 0
				}
			}
			if (TABLES.passivesPerClass.hasOwnProperty(PASSIVES[i][3]) === false) {
				TABLES.passivesPerClass[PASSIVES[i][3]] = []
				TABLES.passivesPerClass[PASSIVES[i][3]].push(PASSIVES[i][0])
			}
			
			/*update passive*/
			let curCharLevel = getCharacterLevelByExp()
			if (DATA.player.awaken_stage > 0) {
				curCharLevel = 101
			}
			/* check if unlocked */
			if (PASSIVES[i][1] === "charlevel" 
				&& (PASSIVES[i][2] <= curCharLevel)
				&& DATA.player.passives[PASSIVES[i][0]].unlocked === false) {
				DATA.player.passives[PASSIVES[i][0]].unlocked = true
			} else if (PASSIVES[i][1] === "charlevel" 
				&& PASSIVES[i][2] > curCharLevel
				&& DATA.player.passives[PASSIVES[i][0]].unlocked !== false) {
				DATA.player.passives[PASSIVES[i][0]].unlocked = false
			} else if (PASSIVES[i][1] === "awaken" 
				&& PASSIVES[i][2] <= DATA.player.awaken_stage
				&& DATA.player.passives[PASSIVES[i][0]].unlocked === false) {
				DATA.player.passives[PASSIVES[i][0]].unlocked = true
			} else if (PASSIVES[i][1] === "awaken" 
				&& PASSIVES[i][2] > DATA.player.awaken_stage
				&& DATA.player.passives[PASSIVES[i][0]].unlocked !== false) {
				DATA.player.passives[PASSIVES[i][0]].unlocked = false
			}

		}
	}

	const updatePassive = (passiveID,exp) => {
		if (DATA.player.passives.hasOwnProperty(passiveID) === false) {
			console.warn(passiveID+" property not found")
			return false
		}
		DATA.player.passives[passiveID].exp += exp
	}

	const getActiveModelByID = (activeID) => {
		for (var i = 0; i < ACTIVES.length; i++) {
			if (ACTIVES[i][0] == activeID) {
				return ACTIVES[i]
			}
		}
	}

	const getActiveHitCount = (activeID) => {
		activeID = activeID || 1
		let hitcount = 0
		for (var i = 17; i < ACTIVES[activeID-1].length; i += 2) {
			if (ACTIVES[activeID-1][i] !== null) {
				hitcount++
			}
		};
		return hitcount ? hitcount : 1
	}

	/* getActiveHits(activeID)
	 * return [hitdmg,hitduration]
	 */
	const getActiveHits = (activeID) => {
		activeID = activeID || 1
		let hitdmg = 0
		let hitduration = ACTIVES[activeID-1][16]
		for (var i = 17; i < ACTIVES[activeID-1].length; i += 2) {
			if (ACTIVES[activeID-1][i] !== null) {
				hitdmg += ACTIVES[activeID-1][i]
				if (ACTIVES[activeID-1][i+1] !== null) {
					hitduration += ACTIVES[activeID-1][i+1]
				}
			}
		};
		return [hitdmg,hitduration]
	}

	const getItemByID = (itemID) => {
		for (var i = 0; i < DATA.player.inventory.length; i++) {
			if (DATA.player.inventory[i].id === itemID) {
				return DATA.player.inventory[i]
			}
		};
	}

	const getItemModelByID = (itemID) => {
		let itemModel = {
				item_id: 	itemID,
				type: 	ITEMS[itemID][0],
				class: 	ITEMS[itemID][1],
				grade: 	ITEMS[itemID][2] || 1,
				name: 	ITEMS[itemID][3] || ITEMS[itemID][1],
				cost: 	ITEMS[itemID][4] || 100,
				focus:  ITEMS[itemID][5] || null,
				buff_type: 			ITEMS[itemID][6] || null,
				buff_duration: 	ITEMS[itemID][7] || null,
				buff_amount: 		ITEMS[itemID][8] || null,
				base_dmg: 			ITEMS[itemID][9] || null, 
				aspd_min: 			ITEMS[itemID][10] || null, 
				aspd_max: 			ITEMS[itemID][11] || null, 
				aspd: ITEMS[itemID][10] !== null && ITEMS[itemID][11] !== null ? toDecimal(rngmm(ITEMS[itemID][10], ITEMS[itemID][11]),3) : null, 

		}
		return itemModel
	}

	const updateItemObject = (iObj, stage, quality, aspd) => {
		iObj = iObj || null
		stage = stage || 10
		quality = quality || null
		aspd = aspd || 1

		if (iObj === null) { return false }
		let newIObject = JSON.parse(JSON.stringify(iObj))
		if (iObj.type === "w") {
			newIObject.dmg = iObj.base_dmg * (1 + stage/(10 + Math.log(stage)*3)) * (1 + quality/300)
		}
		if (quality === null) {
			quality = toDecimal(rngmm(TABLES.ITEM_QUALITY_MIN[iObj.grade-1], TABLES.ITEM_QUALITY_MAX[iObj.grade-1]))
		}
		newIObject.stage = stage
		newIObject.quality = quality
		newIObject.aspd = aspd
		newIObject.sell =  toDecimal(iObj.cost * (1 + stage/(10 + Math.log(stage)*30)) * (1 + quality/500), 0)
		if (newIObject.hasOwnProperty("id") === false) {
			newIObject.id = DATA.player.lastitemid + 1
			DATA.player.lastitemid = newIObject.id
		}
		return newIObject
	}

	const damageMultiplier = (dmg, bonus) => {
		let totalratio = 1 + bonus || 1
		let totaldmg = dmg * totalratio || totalratio
		return [totaldmg, totalratio]
	}

	const getPassiveBonusValue = (bonus) => {
		let bonusvalue = 0
		/* get bonus from passive */
		for (var pid in DATA.player.passives) {
			if (pid == 0) { continue}
			else if (DATA.player.passives[pid].unlocked === true) {
				/* check passive bonuses */
				if (PASSIVES[pid-1][6] === bonus && PASSIVES[pid-1][7] !== null) { bonusvalue += parseFloat(PASSIVES[pid-1][7]) }
				if (PASSIVES[pid-1][8] === bonus && PASSIVES[pid-1][9] !== null) { bonusvalue += parseFloat(PASSIVES[pid-1][9]) }
				if (PASSIVES[pid-1][10] === bonus && PASSIVES[pid-1][11] !== null) { bonusvalue += parseFloat(PASSIVES[pid-1][11]) }
				if (PASSIVES[pid-1][12] === bonus && PASSIVES[pid-1][13] !== null) { bonusvalue += parseFloat(PASSIVES[pid-1][13]) }
				if (PASSIVES[pid-1][14] === bonus && PASSIVES[pid-1][15] !== null) { bonusvalue += parseFloat(PASSIVES[pid-1][15]) }
			}
		}
		return bonusvalue
	}

	const findPassiveBonusWithValue = (bonus, value) => {
		/* get bonus from passive */
		for (var pid in DATA.player.passives) {
			if (pid == 0) { continue}
			else if (DATA.player.passives[pid].unlocked === true) {
				/* check passive bonuses */
				if (PASSIVES[pid-1][6] === bonus && PASSIVES[pid-1][7].toString() === value.toString()) { return PASSIVES[pid-1][0] }
				if (PASSIVES[pid-1][8] === bonus && PASSIVES[pid-1][9].toString() === value.toString()) { return PASSIVES[pid-1][0] }
				if (PASSIVES[pid-1][10] === bonus && PASSIVES[pid-1][11].toString() === value.toString()) { return PASSIVES[pid-1][0] }
				if (PASSIVES[pid-1][12] === bonus && PASSIVES[pid-1][13].toString() === value.toString()) { return PASSIVES[pid-1][0] }
				if (PASSIVES[pid-1][14] === bonus && PASSIVES[pid-1][15].toString() === value.toString()) { return PASSIVES[pid-1][0] }
			}
		}
		return false
	} 

	const getActiveSkillBonusPerLevel = (skill_id, bonuskey) => {
		let skillbonus = 0
		let skill_exp  	= DATA.player.actives[skill_id].exp
		let skill_power = DATA.player.actives[skill_id].power
		let skill_type  = DATA.player.actives[skill_id].type ? DATA.player.actives[skill_id].type : TABLES.defaultActiveSkillType
		let skill_curve = DATA.player.actives[skill_id].curve
		let skill_level = getSkillLevelByExp(skill_exp, skill_curve)
		for (var bonus in TABLES.activeSkillBonusPerLevel[skill_type]) {
			if (bonus === bonuskey) {
				skillbonus += TABLES.activeSkillBonusPerLevel[skill_type][bonus] * skill_level
			}
		}
		return skillbonus
	}

	const sumProperty = (object, property) => {
		let value = 0
		for (var prop in object) {
			if (prop.includes(property)) {
				value += object[prop]
			}
		}
		return value
	}

	const getWeaponSkillCalculated = (weaponkind_id, weapon_dmg, weapon_aspd, skill_id) => {
		let weapon_passive_id = getWeaponPassiveIDByClass(weaponkind_id != 0 ? getItemModelByID(getItemByID(weaponkind_id).item_id).class : TABLES.defaultWeapon.class)
		let passive_bonus = PASSIVES[weapon_passive_id-1][5] * getSkillLevelByExp(DATA.player.passives[weapon_passive_id].exp)
		let dmg_f = getPassiveBonusValue("dmg_f")
		let dmg_p = getPassiveBonusValue("dmg_p") + DATA.player.awaken_stage * 0.33
		let skill_dmg_p = getActiveSkillBonusPerLevel(skill_id, "dmg_p")
		let skill_def_pen = getActiveSkillBonusPerLevel(skill_id, "defpen_p")
		let skill_stun = getActiveSkillBonusPerLevel(skill_id, "mobtimer_p")
		let skill_stun_duration = 1 + getPassiveBonusValue("mobtimer_duration")
		let rawActive = {
			delay0:  ACTIVES[skill_id-1][16],
			hit1:  ACTIVES[skill_id-1][17], delay1:  ACTIVES[skill_id-1][18],
			hit2:  ACTIVES[skill_id-1][19], delay2:  ACTIVES[skill_id-1][20],
			hit3:  ACTIVES[skill_id-1][21], delay3:  ACTIVES[skill_id-1][22],
			hit4:  ACTIVES[skill_id-1][23], delay4:  ACTIVES[skill_id-1][24],
			hit5:  ACTIVES[skill_id-1][25], delay5:  ACTIVES[skill_id-1][26],
			hit6:  ACTIVES[skill_id-1][27], delay6:  ACTIVES[skill_id-1][28],
			hit7:  ACTIVES[skill_id-1][29], delay7:  ACTIVES[skill_id-1][30],
			hit8:  ACTIVES[skill_id-1][31], delay8:  ACTIVES[skill_id-1][32],
			hit9:  ACTIVES[skill_id-1][33], delay9:  ACTIVES[skill_id-1][34],
			hit10: ACTIVES[skill_id-1][35], delay10: ACTIVES[skill_id-1][36],
			hit11: ACTIVES[skill_id-1][37], delay11: ACTIVES[skill_id-1][38],
			hit12: ACTIVES[skill_id-1][39], delay12: ACTIVES[skill_id-1][40],
			hit13: ACTIVES[skill_id-1][41], delay13: ACTIVES[skill_id-1][42],
			hit14: ACTIVES[skill_id-1][43], delay14: ACTIVES[skill_id-1][44],
			hit15: ACTIVES[skill_id-1][45], delay15: ACTIVES[skill_id-1][46],
			hit16: ACTIVES[skill_id-1][47], delay16: ACTIVES[skill_id-1][48],
			hit17: ACTIVES[skill_id-1][49], delay17: ACTIVES[skill_id-1][50],
			hit18: ACTIVES[skill_id-1][51], delay18: ACTIVES[skill_id-1][52],
			hit19: ACTIVES[skill_id-1][53], delay19: ACTIVES[skill_id-1][54],
			hit20: ACTIVES[skill_id-1][55], delay20: ACTIVES[skill_id-1][56],
			hit21: ACTIVES[skill_id-1][57], delay21: ACTIVES[skill_id-1][58],
			hit22: ACTIVES[skill_id-1][59], delay22: ACTIVES[skill_id-1][60],
			hit23: ACTIVES[skill_id-1][61], delay23: ACTIVES[skill_id-1][62],
			hit24: ACTIVES[skill_id-1][63], delay24: ACTIVES[skill_id-1][64],
			hit25: ACTIVES[skill_id-1][65], delay25: ACTIVES[skill_id-1][66],
			hit26: ACTIVES[skill_id-1][67], delay26: ACTIVES[skill_id-1][68],
			hit27: ACTIVES[skill_id-1][69], delay27: ACTIVES[skill_id-1][70],
			hit28: ACTIVES[skill_id-1][71], delay28: ACTIVES[skill_id-1][72],
			hit29: ACTIVES[skill_id-1][73], delay29: ACTIVES[skill_id-1][74],
			hit30: ACTIVES[skill_id-1][75], delay30: ACTIVES[skill_id-1][76],
		}
		let ca = {
			delay0:  weapon_aspd * rawActive.delay0,
		}
		if (rawActive.hit1 !== null && rawActive.delay1 !== null) {
			ca.hit1 = (1 + passive_bonus) * weapon_dmg * rawActive.hit1 * (1 + dmg_p + skill_dmg_p) + dmg_f
			ca.delay1 = weapon_aspd * rawActive.delay1
			ca.power = ACTIVES[skill_id-1][6]
		}
		if (rawActive.hit2 !== null && rawActive.delay2 !== null) {ca.hit2 = (1 + passive_bonus) * weapon_dmg * rawActive.hit2 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay2 = weapon_aspd * rawActive.delay2}
		if (rawActive.hit3 !== null && rawActive.delay3 !== null) {ca.hit3 = (1 + passive_bonus) * weapon_dmg * rawActive.hit3 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay3 = weapon_aspd * rawActive.delay3}
		if (rawActive.hit4 !== null && rawActive.delay4 !== null) {ca.hit4 = (1 + passive_bonus) * weapon_dmg * rawActive.hit4 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay4 = weapon_aspd * rawActive.delay4}
		if (rawActive.hit5 !== null && rawActive.delay5 !== null) {ca.hit5 = (1 + passive_bonus) * weapon_dmg * rawActive.hit5 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay5 = weapon_aspd * rawActive.delay5}
		if (rawActive.hit6 !== null && rawActive.delay6 !== null) {ca.hit6 = (1 + passive_bonus) * weapon_dmg * rawActive.hit6 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay6 = weapon_aspd * rawActive.delay6}
		if (rawActive.hit7 !== null && rawActive.delay7 !== null) {ca.hit7 = (1 + passive_bonus) * weapon_dmg * rawActive.hit7 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay7 = weapon_aspd * rawActive.delay7}
		if (rawActive.hit8 !== null && rawActive.delay8 !== null) {ca.hit8 = (1 + passive_bonus) * weapon_dmg * rawActive.hit8 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay8 = weapon_aspd * rawActive.delay8}
		if (rawActive.hit9 !== null && rawActive.delay9 !== null) {ca.hit9 = (1 + passive_bonus) * weapon_dmg * rawActive.hit9 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay9 = weapon_aspd * rawActive.delay9}
		if (rawActive.hit10 !== null && rawActive.delay10 !== null) {ca.hit10 = (1 + passive_bonus) * weapon_dmg * rawActive.hit10 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay10 = weapon_aspd * rawActive.delay10}
		if (rawActive.hit11 !== null && rawActive.delay11 !== null) {ca.hit11 = (1 + passive_bonus) * weapon_dmg * rawActive.hit11 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay11 = weapon_aspd * rawActive.delay11}
		if (rawActive.hit12 !== null && rawActive.delay12 !== null) {ca.hit12 = (1 + passive_bonus) * weapon_dmg * rawActive.hit12 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay12 = weapon_aspd * rawActive.delay12}
		if (rawActive.hit13 !== null && rawActive.delay13 !== null) {ca.hit13 = (1 + passive_bonus) * weapon_dmg * rawActive.hit13 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay13 = weapon_aspd * rawActive.delay13}
		if (rawActive.hit14 !== null && rawActive.delay14 !== null) {ca.hit14 = (1 + passive_bonus) * weapon_dmg * rawActive.hit14 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay14 = weapon_aspd * rawActive.delay14}
		if (rawActive.hit15 !== null && rawActive.delay15 !== null) {ca.hit15 = (1 + passive_bonus) * weapon_dmg * rawActive.hit15 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay15 = weapon_aspd * rawActive.delay15}
		if (rawActive.hit16 !== null && rawActive.delay16 !== null) {ca.hit16 = (1 + passive_bonus) * weapon_dmg * rawActive.hit16 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay16 = weapon_aspd * rawActive.delay16}
		if (rawActive.hit17 !== null && rawActive.delay17 !== null) {ca.hit17 = (1 + passive_bonus) * weapon_dmg * rawActive.hit17 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay17 = weapon_aspd * rawActive.delay17}
		if (rawActive.hit18 !== null && rawActive.delay18 !== null) {ca.hit18 = (1 + passive_bonus) * weapon_dmg * rawActive.hit18 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay18 = weapon_aspd * rawActive.delay18}
		if (rawActive.hit19 !== null && rawActive.delay19 !== null) {ca.hit19 = (1 + passive_bonus) * weapon_dmg * rawActive.hit19 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay19 = weapon_aspd * rawActive.delay19}
		if (rawActive.hit20 !== null && rawActive.delay20 !== null) {ca.hit20 = (1 + passive_bonus) * weapon_dmg * rawActive.hit20 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay20 = weapon_aspd * rawActive.delay20}
		if (rawActive.hit21 !== null && rawActive.delay21 !== null) {ca.hit21 = (1 + passive_bonus) * weapon_dmg * rawActive.hit21 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay21 = weapon_aspd * rawActive.delay21}
		if (rawActive.hit22 !== null && rawActive.delay22 !== null) {ca.hit22 = (1 + passive_bonus) * weapon_dmg * rawActive.hit22 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay22 = weapon_aspd * rawActive.delay22}
		if (rawActive.hit23 !== null && rawActive.delay23 !== null) {ca.hit23 = (1 + passive_bonus) * weapon_dmg * rawActive.hit23 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay23 = weapon_aspd * rawActive.delay23}
		if (rawActive.hit24 !== null && rawActive.delay24 !== null) {ca.hit24 = (1 + passive_bonus) * weapon_dmg * rawActive.hit24 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay24 = weapon_aspd * rawActive.delay24}
		if (rawActive.hit25 !== null && rawActive.delay25 !== null) {ca.hit25 = (1 + passive_bonus) * weapon_dmg * rawActive.hit25 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay25 = weapon_aspd * rawActive.delay25}
		if (rawActive.hit26 !== null && rawActive.delay26 !== null) {ca.hit26 = (1 + passive_bonus) * weapon_dmg * rawActive.hit26 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay26 = weapon_aspd * rawActive.delay26}
		if (rawActive.hit27 !== null && rawActive.delay27 !== null) {ca.hit27 = (1 + passive_bonus) * weapon_dmg * rawActive.hit27 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay27 = weapon_aspd * rawActive.delay27}
		if (rawActive.hit28 !== null && rawActive.delay28 !== null) {ca.hit28 = (1 + passive_bonus) * weapon_dmg * rawActive.hit28 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay28 = weapon_aspd * rawActive.delay28}
		if (rawActive.hit29 !== null && rawActive.delay29 !== null) {ca.hit29 = (1 + passive_bonus) * weapon_dmg * rawActive.hit29 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay29 = weapon_aspd * rawActive.delay29}
		if (rawActive.hit30 !== null && rawActive.delay30 !== null) {ca.hit30 = (1 + passive_bonus) * weapon_dmg * rawActive.hit30 * (1 + dmg_p + skill_dmg_p) + dmg_f; ca.delay30 = weapon_aspd * rawActive.delay30}

		ca.delay = sumProperty(ca, "delay")
		ca.hit = sumProperty(ca, "hit")

		return {
			item_id: weaponkind_id,
			item_class: weaponkind_id != 0 ? getItemModelByID(getItemByID(weaponkind_id).item_id).class : null,
			item_name: weaponkind_id != 0 ? getItemModelByID(getItemByID(weaponkind_id).item_id).name : TABLES.defaultWeapon.class,
			weapon_type: getWeaponTypeByWeaponClass(weaponkind_id != 0 ? getItemModelByID(getItemByID(weaponkind_id).item_id).class : TABLES.defaultWeapon.class),
			weapon_passive: weapon_passive_id,
			item_dmg: weapon_dmg,
			item_aspd: weapon_aspd,
			skill_id: skill_id,
			dmg_bonus_per_hit: dmg_f,
			dmg_bonus_percent: dmg_p,
			skill_bonus_percent: skill_dmg_p,
			skill_def_pen:       skill_def_pen,
			skill_stun:          skill_stun,
			skill_stun_duration: skill_stun_duration,
			skill: ca
		}
	}

	const canUseActive = (activeID, setup) => {
		let ican = false
		if (ACTIVES[activeID-1][7] === setup
			|| ACTIVES[activeID-1][8] === setup
			|| ACTIVES[activeID-1][9] === setup
			|| ACTIVES[activeID-1][10] === setup
			|| ACTIVES[activeID-1][11] === setup
			|| ACTIVES[activeID-1][12] === setup
			|| ACTIVES[activeID-1][13] === setup
			|| ACTIVES[activeID-1][14] === setup
			|| ACTIVES[activeID-1][15] === setup) {
			return true
		} else {
			return false
		}
	}

	const getActiveSkillSetups = (activeID) => {
		let asSetups = []

		if (ACTIVES[activeID-1][7] !== null) { asSetups.push(ACTIVES[activeID-1][7]) }
		if (ACTIVES[activeID-1][8] !== null) { asSetups.push(ACTIVES[activeID-1][8]) }
		if (ACTIVES[activeID-1][9] !== null) { asSetups.push(ACTIVES[activeID-1][9]) }
		if (ACTIVES[activeID-1][10] !== null) { asSetups.push(ACTIVES[activeID-1][10]) }
		if (ACTIVES[activeID-1][11] !== null) { asSetups.push(ACTIVES[activeID-1][11]) }
		if (ACTIVES[activeID-1][12] !== null) { asSetups.push(ACTIVES[activeID-1][12]) }
		if (ACTIVES[activeID-1][13] !== null) { asSetups.push(ACTIVES[activeID-1][13]) }
		if (ACTIVES[activeID-1][14] !== null) { asSetups.push(ACTIVES[activeID-1][14]) }
		if (ACTIVES[activeID-1][15] !== null) { asSetups.push(ACTIVES[activeID-1][15]) }
		return asSetups
	}

	function addSkillToCombo() {
		/* TO DO: check if enough power to add */
		let skill_id = parseInt(this.getAttribute("data-skillid"))
		if ((DATA.player.actives[skill_id].power + DATA.player.comboPowerUsed) <= getPassiveBonusValue("combo_power")) {
			DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo].push(skill_id)
		}
	}

	const updateActives = () => {
		/* default skills */
		for (var i = 0; i < ACTIVES.length; i++) {
			if (DATA.player.actives.hasOwnProperty(ACTIVES[i][0]) === false
				&& ACTIVES[i][1].length > 0
				&& ACTIVES[i][2] !== null
				&& ACTIVES[i][4].length > 0) { /*create passive*/
				DATA.player.actives[ACTIVES[i][0]] = {
					unlocked: undefined,
					type: undefined,
					curve: 1,
					power: ACTIVES[i][6] || 1,
					exp:   0,
				}
				if (ACTIVES[i][3].includes("_")) {
					let skill_typeArr = ACTIVES[i][3].split("_")
					DATA.player.actives[ACTIVES[i][0]].type = skill_typeArr[0]
					DATA.player.actives[ACTIVES[i][0]].curve = skill_typeArr[1]
				} else {
					DATA.player.actives[ACTIVES[i][0]].type = ACTIVES[i][3]
				}
			} else {
				if (ACTIVES[i][3].includes("_")) {
					let skill_typeArr = ACTIVES[i][3].split("_")
					DATA.player.actives[ACTIVES[i][0]].type = skill_typeArr[0]
					DATA.player.actives[ACTIVES[i][0]].curve = skill_typeArr[1]
				} else {
					DATA.player.actives[ACTIVES[i][0]].type = ACTIVES[i][3]
					DATA.player.actives[ACTIVES[i][0]].curve = ""
				}
				DATA.player.actives[ACTIVES[i][0]].power = ACTIVES[i][6] || 1
			}
			if (TABLES.activesPerClass.hasOwnProperty(ACTIVES[i][4]) === false) {
				TABLES.activesPerClass[ACTIVES[i][4]] = ACTIVES[i][0]
			}
			
			/*update active*/
			let curCharLevel = getCharacterLevelByExp()
			if (DATA.player.awaken_stage > 0) {
				curCharLevel = 101
			}
			/* check if unlocked */
			if (ACTIVES[i][1].length > 0
				&& ACTIVES[i][2] !== null
				&& ACTIVES[i][4].length > 0) {
				if (ACTIVES[i][1] === "charlevel" 
					&& ACTIVES[i][2] <= curCharLevel 
					&& DATA.player.actives[ACTIVES[i][0]].unlocked === false) {
					DATA.player.actives[ACTIVES[i][0]].unlocked = true
				} else if (ACTIVES[i][1] === "charlevel" 
					&& ACTIVES[i][2] > curCharLevel 
					&& DATA.player.actives[ACTIVES[i][0]].unlocked === true) {
					DATA.player.actives[ACTIVES[i][0]].unlocked = false
				} else if (ACTIVES[i][1].startsWith("wield_") 
					&&  getSkillLevelByExp(DATA.player.passives[TABLES.passivesPerClass[ACTIVES[i][1]][0]].exp) >=  ACTIVES[i][2]) {
					DATA.player.actives[ACTIVES[i][0]].unlocked = true
				} else if (ACTIVES[i][1].startsWith("wield_") 
					&&  getSkillLevelByExp(DATA.player.passives[TABLES.passivesPerClass[ACTIVES[i][1]][0]].exp) <  ACTIVES[i][2]) {
					DATA.player.actives[ACTIVES[i][0]].unlocked = false
				} else if (ACTIVES[i][1] !== "charlevel" && !ACTIVES[i][1].startsWith("wield_") 
					&& DATA.player.actives[TABLES.activesPerClass[ACTIVES[i][1]]].unlocked === true
					&& getSkillLevelByExp(DATA.player.actives[TABLES.activesPerClass[ACTIVES[i][1]]].exp, DATA.player.actives[TABLES.activesPerClass[ACTIVES[i][1]]].curve) >=  ACTIVES[i][2]) {
					DATA.player.actives[ACTIVES[i][0]].unlocked = true
				} else if (ACTIVES[i][1] !== "charlevel" && !ACTIVES[i][1].startsWith("wield_") 
					&& getSkillLevelByExp(DATA.player.actives[TABLES.activesPerClass[ACTIVES[i][1]]].exp, DATA.player.actives[TABLES.activesPerClass[ACTIVES[i][1]]].curve) <  ACTIVES[i][2]) {
					DATA.player.actives[ACTIVES[i][0]].unlocked = false
				} else {
					/* FIRST UPDATE */
					if (ACTIVES[i][1] === "charlevel" 
						&& ACTIVES[i][2] <= curCharLevel 
						&& DATA.player.actives[ACTIVES[i][0]].unlocked === undefined) {
						DATA.player.actives[ACTIVES[i][0]].unlocked = true
					} else if (ACTIVES[i][1] === "charlevel" 
						&& ACTIVES[i][2] > curCharLevel 
						&& DATA.player.actives[ACTIVES[i][0]].unlocked === undefined) {
						DATA.player.actives[ACTIVES[i][0]].unlocked = false
					} else if (ACTIVES[i][1] === "charlevel" 
						&& ACTIVES[i][2] <= curCharLevel 
						&& DATA.player.actives[ACTIVES[i][0]].unlocked === true) {
						/*console.log("no prob, stay true")*/
					} else if (ACTIVES[i][1] === "charlevel" 
						&& ACTIVES[i][2] > curCharLevel 
						&& DATA.player.actives[ACTIVES[i][0]].unlocked === false) {
						/*console.log("no prob, stay false")*/
					} else {
						/* case 1 : required skill is unlocked but not enough level */
						//console.warn("updateActives exception:", ACTIVES[i])
					}
				}

			}
			/* TODO : update type and curve in case the data is updated */
			/*update active end*/
		}
	}

	const updateActive = (activeID,exp) => {
		if (DATA.player.actives.hasOwnProperty(activeID) === false) {
			console.warn(activeID+" property not found")
			return false
		}
		DATA.player.actives[activeID].exp += exp
	}

	const getItemCost = (item) => {
		item = item || 0
		if (item.hasOwnProperty("type")
			&& item.type == "c" 
			&& item.hasOwnProperty("stage")) {
			return Math.floor(ITEMS[item.item_id][4] * Math.sqrt(parseFloat(item.stage)))
		}
	}

	const getWeaponDamage = (item) => {
		
	}

	const addItemInventory = (object, source) => {
		object = object || null
		source = source || null
		/* can't add if inventory full*/
		if (DATA.player.inventory.length >= getPassiveBonusValue("inventory_base") + getPassiveBonusValue("inventory")) {
			return false
		}

		if (object.type === "c" 
			&& object.hasOwnProperty("stage")) {
			DATA.player.ekk += getItemCost(object)
			if (source === "loot") {
				DATA.player.lts.looted_ekk += getItemCost(object)
			}
			return true
		}
		if (object === null || object.hasOwnProperty("item_id") === false) {return false}
		/* create id if new item */
		var thisItem = JSON.parse(JSON.stringify(object))
		/* get the model with correct attributes */
		let tiModel = getItemModelByID(thisItem.item_id)
		/* update the attributes of the item */
		let updatedItem = updateItemObject(
			tiModel, 
			thisItem.hasOwnProperty("stage")? thisItem.stage : null, 
			thisItem.hasOwnProperty("quality")? thisItem.quality : null,
			tiModel.aspd)

		if (source === "loot" && updatedItem.grade === 6) {
			DATA.player.lts.looted_legendary++
		} else if (source === "loot" && updatedItem.grade === 7) {
			DATA.player.lts.looted_mythical++
		}
		//console.log(updatedItem)
		DATA.player.inventory.push(updatedItem)
		let forceSave = updatedItem.grade >= 5 ? true : false
		if (DATA.player.currentStageIsTown === true && updatedItem.grade <= 5) {
			saveData()
		} else if (forceSave === true) {
			saveData(forceSave)
		}
		return true
	}

	const removeItemInventory = (id) => {
		
	}

	const updateItemInventory = (id, object) => {
		
	}

	const getItemFromInventoryByID = (itemid) => {
		for (var i = 0; i < DATA.player.inventory.length; i++) {
			if (DATA.player.inventory[i].hasOwnProperty("id") === true && DATA.player.inventory[i].id === parseInt(itemid)) {
				return DATA.player.inventory[i]
			}
		}
	}

	const getMonsterModelByID = (monsterID) => {
		for (var i = 0; i < MONSTERS.length; i++) {
			if (MONSTERS[i][0] == monsterID)
				return MONSTERS[i]
		}
		return false
	}

	const getStageModelByStage = (stage) => {
		let stagemodel = []
		for (var i = 0; i < STAGES.length; i++) {
			if (stage >= STAGES[i][0]) {
				stagemodel = STAGES[i]
			}
		}

		return stagemodel
	}

	const createMonster = (monsterID, stage) => {
		var monsterModel = getMonsterModelByID(monsterID)

		var mData = {
			name 		: monsterModel[2],
			id 			: monsterModel[0],
			level  	: stage,
			rank  	: monsterModel[6] || 0,
			exp  		: toDecimal(monsterModel[3] * Math.pow(stage, 1+Math.pow(stage,0.18)/42) * (1 + monsterModel[6] || 0)),
			maxhp  	: toDecimal(monsterModel[4] * Math.pow(stage, 1+Math.pow(stage,0.18)/250) * (1 + monsterModel[6] || 0)),
			hp  		: toDecimal(monsterModel[4] * Math.pow(stage, 1+Math.pow(stage,0.18)/250) * (1 + monsterModel[6] || 0)),
			defpct  : toDecimal(monsterModel[6] !== null ? TABLES.MONSTERDEF_PER_RANK[monsterModel[6]] : TABLES.MONSTERDEF_PER_RANK[0]),
			def     : toDecimal((monsterModel[6] !== null ? TABLES.MONSTERDEF_PER_RANK[monsterModel[6]] : TABLES.MONSTERDEF_PER_RANK[0]) * monsterModel[4] * Math.pow(stage, 1+Math.pow(stage,0.18)/50)),
			timer  	: monsterModel[5],
			loot    : [
				monsterModel[7],
				monsterModel[8],
				monsterModel[9],
				monsterModel[10],
				monsterModel[11],
				monsterModel[12],
				monsterModel[13],
				monsterModel[14],
				monsterModel[15],
				monsterModel[16],
				monsterModel[17],
				monsterModel[18]
			],
			timestamp: 	null,
		}

		const takeDamage = (dmg, defpen, mobtimer, mobtimerduration) => {
			defpen = defpen || 0
			mobtimer = mobtimer || 0
			mobtimerduration = mobtimerduration || 1

			//var computedDMG = Math.max(0, dmg - mData.def * (1 - defpen / (1 + mData.rank)))
			var computedDMG = dmg * (100 / (80 + (Math.sqrt(mData.level) * (1 + mData.rank) * (1 + mData.defpct ))) * (1 - defpen))
			computedDMG = computedDMG / (1 + Math.pow(mData.rank, 2))
			mData.hp -= computedDMG
			mData.hp = Math.max(0, mData.hp)

			let stunned = false
			if (mobtimer > 0 && rngmm(0, 1000) < Math.floor(mobtimer * 1000)) {
				mData.timestamp += mobtimerduration * 1000 / (1 + mData.rank)
				stunMonster(mobtimerduration * 1000 / (1 + mData.rank) / 1000, undefined, DATA.player.settings.uianimation)
				stunned = true
			}

			/* SHOW FLOATING NUMBER */
			damageMonster(computedDMG, undefined, DATA.player.settings.uianimation)
			if (computedDMG !== 0 || stunned === true) {
				return true
			} else {
				return false
			}
		}

		return {
			takeDamage:takeDamage,
			id: 	() => { return mData.id},
			name: 	() => { return mData.name},
			exp: 		() => { return mData.exp},
			maxhp: 	() => { return mData.maxhp},
			hp: 		() => { return mData.hp},
			level: 		() => { return mData.level},
			rank: 		() => { return mData.rank},
			timer: 	() => { return mData.timer},
			loot: 	() => { return mData.loot},
			start: 	() => {
				if(mData.timestamp === null) {
					mData.timestamp = Date.now() + (mData.timer * 1000) || null
				}
			},
			getTimeleft: () => {
				return Math.max(mData.timestamp - Date.now(),0).toFixed(2)
			},
			extendTime: (seconds) => {
				mData.timestamp += seconds * 1000
			},
		}
	}

	const updateStage = (stage) => {

		stage = Math.min(Math.max(parseInt(stage), 1), TABLES.MAXSTAGE) || 1
		let sdata = getStageModelByStage(stage)

		DATA.player.currentStage = stage
		if (sdata[1] === 0) {/*battle*/
			elebyID("bscreen-t-monster").classList.remove("hidden")
			elebyID("bscreen-t-town").classList.add("hidden")
			DATA.player.currentStageIsTown = false
			let mob_id = null

			if (sdata[3] === null) {
				let mob_list = TABLES.MONSTERS_ID[DATA.player.currentRegion][sdata[2]]
				mob_id = mob_list[Math.floor(Math.random() * mob_list.length)]
			} else { /*special monster*/
				mob_id = sdata[3]
			}
			DATA.player.currentMonster = createMonster(mob_id, getEffectiveStage())

			if (DATA.player.settings.townSell === true) {
				DATA.player.settings.townSell = false
			}
			if (DATA.player.settings.townSalvage === true) {
				DATA.player.settings.townSalvage = false
			}
		} else if (sdata[1] === 1) { /*town*/

			elebyID("bscreen-t-town").classList.remove("hidden")
			elebyID("bscreen-t-monster").classList.add("hidden")
			//console.log("TOWN")
			/* skip town for now */
			DATA.player.currentStageIsTown = true
			DATA.player.currentMonster = null
		}

		if (DATA.player.currentStage > DATA.player.max_stage.all) {
			DATA.player.max_stage.all = DATA.player.currentStage
		}
		if (DATA.player.currentStage > DATA.player.max_stage[DATA.player.currentRegion]) {
			DATA.player.max_stage[DATA.player.currentRegion] = DATA.player.currentStage
		}
		//console.log(DATA)
	}

	/* TOWN */
	const getTowns = () => {
		let towns = []
		for (var i = 0; i < STAGES.length; i++) {
			if (STAGES[i][1] === 1) {
				towns.push(STAGES[i])
			}
		}
		return towns
	}

	const exitTown = (stage) => {

	}


	/* Player data handling */
	const loadData = () => {
		if (JSON.parse(localStorage.getItem('settings')))
			DATA.player.settings		= JSON.parse(localStorage.getItem('settings'))
		if (JSON.parse(localStorage.getItem('lastonline')))
			DATA.player.lastonline		= JSON.parse(localStorage.getItem('lastonline'))
		if (JSON.parse(localStorage.getItem('focus')))
			DATA.player.focus		= JSON.parse(localStorage.getItem('focus'))
		if (JSON.parse(localStorage.getItem('currentRegion')))
			DATA.player.currentRegion		= JSON.parse(localStorage.getItem('currentRegion'))
		if (JSON.parse(localStorage.getItem('currentStage')))
			DATA.player.currentStage		= JSON.parse(localStorage.getItem('currentStage'))
		if (localStorage.getItem('exp_char'))
			DATA.player.exp_char 				= toDecimal(localStorage.getItem('exp_char'))
		if (localStorage.getItem('aura_exp'))
			DATA.player.aura_exp 				= JSON.parse(localStorage.getItem('aura_exp'))
		if (JSON.parse(localStorage.getItem('ekk')))
			DATA.player.ekk 						= JSON.parse(localStorage.getItem('ekk'))
		if (JSON.parse(localStorage.getItem('equipments')))
			DATA.player.equipments 			= JSON.parse(localStorage.getItem('equipments'))
		if (JSON.parse(localStorage.getItem('wieldingsetups')))
			DATA.player.wieldingsetups 	= JSON.parse(localStorage.getItem('wieldingsetups'))
		if (JSON.parse(localStorage.getItem('passives')))
			DATA.player.passives 				= JSON.parse(localStorage.getItem('passives'))
		if (JSON.parse(localStorage.getItem('actives')))
			DATA.player.actives 				= JSON.parse(localStorage.getItem('actives'))
		if (JSON.parse(localStorage.getItem('activesView')))
			DATA.player.activesView 				= JSON.parse(localStorage.getItem('activesView'))
		if (JSON.parse(localStorage.getItem('activescombo')))
			DATA.player.activescombo 		= JSON.parse(localStorage.getItem('activescombo'))
		if (JSON.parse(localStorage.getItem('inventory')))
			DATA.player.inventory 			= JSON.parse(localStorage.getItem('inventory'))
		if (JSON.parse(localStorage.getItem('weapondust')))
			DATA.player.weapondust 			= JSON.parse(localStorage.getItem('weapondust'))
		if (JSON.parse(localStorage.getItem('lastitemid')))
			DATA.player.lastitemid 			= JSON.parse(localStorage.getItem('lastitemid'))
		if (JSON.parse(localStorage.getItem('lastonline')))
			DATA.player.lastonline 			= JSON.parse(localStorage.getItem('lastonline'))
		if (JSON.parse(localStorage.getItem('max_stage')))
			DATA.player.max_stage 			= JSON.parse(localStorage.getItem('max_stage'))
		if (JSON.parse(localStorage.getItem('awaken_stage')))
			DATA.player.awaken_stage 		= JSON.parse(localStorage.getItem('awaken_stage'))
		if (JSON.parse(localStorage.getItem('lts')))
			DATA.player.lts 						= JSON.parse(localStorage.getItem('lts'))
		if (window.location.toString().includes("file"))
			console.log(DATA)
	}

	const saveData = (force) => {
		force = force || false
		if (DATA.player.lastonline > Date.now() - GAMEVAR.saveCooldown && force === false) {
			localStorage.setItem('currentStage',	JSON.stringify(DATA.player.currentStage))
			localStorage.setItem('exp_char', 			DATA.player.exp_char)
			return false
		} else {
			//console.log("saving")
		}
		DATA.player.lastonline = Date.now()
		localStorage.setItem('settings',	JSON.stringify(DATA.player.settings))
		localStorage.setItem('lastonline',	JSON.stringify(DATA.player.lastonline))
		localStorage.setItem('focus',	JSON.stringify(DATA.player.focus))
		localStorage.setItem('currentRegion',	JSON.stringify(DATA.player.currentRegion))
		localStorage.setItem('currentStage',	JSON.stringify(DATA.player.currentStage))
		localStorage.setItem('exp_char', 			DATA.player.exp_char)
		localStorage.setItem('aura_exp', 			JSON.stringify(DATA.player.aura_exp))
		localStorage.setItem('ekk', 					JSON.stringify(DATA.player.ekk))
		localStorage.setItem('equipments', 		JSON.stringify(DATA.player.equipments))
		localStorage.setItem('wieldingsetups',JSON.stringify(DATA.player.wieldingsetups))
		localStorage.setItem('passives', 			JSON.stringify(DATA.player.passives))
		localStorage.setItem('actives', 			JSON.stringify(DATA.player.actives))
		localStorage.setItem('activesView', 	JSON.stringify(DATA.player.activesView))
		localStorage.setItem('activescombo', 	JSON.stringify(DATA.player.activescombo))
		localStorage.setItem('inventory', 		JSON.stringify(DATA.player.inventory))
		localStorage.setItem('weapondust', 		JSON.stringify(DATA.player.weapondust))
		localStorage.setItem('lastitemid', 		JSON.stringify(DATA.player.lastitemid))
		localStorage.setItem('lastonline', 		JSON.stringify(DATA.player.lastonline))
		localStorage.setItem('max_stage', 		JSON.stringify(DATA.player.max_stage))
		localStorage.setItem('awaken_stage', 	JSON.stringify(DATA.player.awaken_stage))
		localStorage.setItem('lts', 					JSON.stringify(DATA.player.lts))
	}

	const battling = () => {
		if (DATA.player.battle.combo !== null) {
			//console.log("battling")
			let now = Date.now()
			
			if (now > DATA.player.battle.timestamp_next_hit && DATA.player.battle.combo[DATA.player.battle.current_combo-1] !== undefined) {
				//console.log("battling1", DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill, DATA.player.battle.current_hit)

				if (DATA.player.battle.current_hit === -1) {
					//console.log("battling11")
					if (DATA.player.battle.combo[DATA.player.battle.current_combo] !== undefined) {

						if (DATA.player.currentPower <= DATA.player.battle.combo[DATA.player.battle.current_combo].skill.power) {
							return
						}
						DATA.player.battle.timestamp_next_hit = now + DATA.player.battle.combo[DATA.player.battle.current_combo].skill.delay0 * 1000
						// it was the last delay, now switch to next combo
						if (DATA.player.battle.combo[DATA.player.battle.current_combo] !== undefined) {
							DATA.player.battle.combo_ts_start = now
							DATA.player.battle.combo_ts_end = now + DATA.player.battle.combo[DATA.player.battle.current_combo].skill.delay * 1000
							DATA.player.currentPower -= DATA.player.battle.combo[DATA.player.battle.current_combo].skill.power
						}
						DATA.player.battle.current_combo++
						DATA.player.battle.current_hit = 1
					} else {
						killCombo()
					}
				} else if (DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill["hit"+DATA.player.battle.current_hit] !== undefined) {
					//console.log("battling12")
					// we can atk
					/* DAMAGE THE MONSTER*/
					/* if buff, base 2 because 100% from base damage and 100% from basic focus buff */
					let finaldmg = DATA.player.settings.aura_focus_dmg === true ? 
						(1 + getAuraStrengthenBonus()) * DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill["hit"+DATA.player.battle.current_hit] : DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill["hit"+DATA.player.battle.current_hit]
					let defensePenetration = DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill_def_pen || 0
					let monsterTimerDelayChance = DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill_stun || 0
					let monsterTimerDelayDuration = DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill_stun_duration || 0
					
					if (DATA.player.settings.aura_focus_combostreak === true) {
						finaldmg = finaldmg * (1 + getComboStreakBonus())
					}
					let canExp = DATA.player.currentMonster.takeDamage(finaldmg, defensePenetration, monsterTimerDelayChance, monsterTimerDelayDuration)
					/* EXP SKILLS */
					if (canExp === true) {
						updateActive(
							DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill_id, 
							toDecimal(Math.sqrt(DATA.player.currentMonster.level()) * (1 + DATA.player.awaken_stage * 0.2) * (1 + DATA.player.currentMonster.rank() + 1) + Math.sqrt(DATA.player.currentMonster.exp()))
							)
						updatePassive(
							DATA.player.battle.combo[DATA.player.battle.current_combo-1].weapon_passive,
							toDecimal(10 * Math.sqrt(DATA.player.currentMonster.level()) * (1 + DATA.player.awaken_stage * 0.2) * (1 + DATA.player.currentMonster.rank() + 1) + Math.sqrt(DATA.player.currentMonster.exp()))
							)
						/* TEMPORARY BONUS */
					}
					
					DATA.player.battle.timestamp_next_hit = now + DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill["delay"+DATA.player.battle.current_hit] * 1000
					
					/* Increase combostreak if activated */
					if (DATA.player.settings.aura_focus_combostreak === true) {
						DATA.player.currentComboStreak++
					}
					
					/* it has the last hit, just need to add the after skill delay */
					if (DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill["hit"+(DATA.player.battle.current_hit+1)] === undefined) {
						DATA.player.battle.current_hit = -1
					} else {
						DATA.player.battle.current_hit++
					}
				} else {
					console.log("???")
				}
			} else if (now > DATA.player.battle.timestamp_next_hit && DATA.player.battle.combo[DATA.player.battle.current_combo-1] === undefined) {
				// kill combo
				// mob die then, collect loot and create a new mob
				// and destroy current combo
				killCombo()
			}
		}
		// we have no combo, need to wait till next frame to call createBattleCombo()
	}

	const killCombo = () => {
		DATA.player.battle.combo = null
		DATA.player.battle.current_combo = null
		DATA.player.battle.current_hit = null
		DATA.player.battle.timestamp_next_hit = null
	}

	const createBattleCombo = () => {
		
		let thisComboID = DATA.player.activescombo.usedcombo || 1

		if (DATA.player.activescombo["combosetup"+thisComboID] && DATA.player.activescombo["combo"+thisComboID].length) {
			let thisCombo = []
			for (var i = 0; i < DATA.player.activescombo["combo"+DATA.player.activescombo.usedcombo].length; i++) {
				let setupname = DATA.player.activescombo["combosetup"+DATA.player.activescombo.usedcombo]
				let rotation = getWeaponComboRotation(setupname)
				let weapon_item_id = DATA.player.wieldingsetups[setupname]["weapon"+rotation[i]] || 0
				let weaponObj = getItemFromInventoryByID(weapon_item_id) || {}
				
				thisCombo.push(cloneObj(getWeaponSkillCalculated(
					weapon_item_id, 
					weaponObj.dmg || TABLES.defaultWeapon.dmg, 
					weaponObj.aspd || TABLES.defaultWeapon.aspd, 
					ACTIVES[DATA.player.activescombo["combo"+DATA.player.activescombo.usedcombo][i]-1][0])))
			}
			if (DATA.player.currentPower <= thisCombo[0].skill.power) {
				return
			}
			DATA.player.battle.combo = thisCombo
			DATA.player.battle.current_combo = 1
			DATA.player.battle.current_hit   = 1
			DATA.player.currentPower -= thisCombo[0].skill.power
			DATA.player.currentComboStreak = 0
			let now = Date.now()
			DATA.player.battle.timestamp_next_hit = now + thisCombo[0].skill.delay0 * 1000
			DATA.player.battle.combo_ts_start = now
			DATA.player.battle.combo_ts_end = now + DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill.delay * 1000
		} else {
			// can't create combo

		}
	}

	const battleLoop = () => {
		if (DATA.player.currentMonster) {
			DATA.player.currentMonster.start()
			if (DATA.player.currentMonster.getTimeleft() <= 0) {
				if (DATA.player.settings.droponfail === true) {
					DATA.player.currentStage--
					DATA.player.settings.autoadvance = false
					elebyID("auto-advance").checked = DATA.player.settings.autoadvance
				}
				updateStage(DATA.player.currentStage)
				saveData()
			} else if (DATA.player.currentMonster.hp() <= 0) {
				let char_exp_gained = (DATA.player.currentMonster.exp() * (1 + getCharacterBonusExp().total)) * getCharacterExpRatio() 
				DATA.player.exp_char += toDecimal(char_exp_gained)
				charExpGained(char_exp_gained, 400, DATA.player.settings.uianimation)
				DATA.player.lts.killedenemies++
				/* LOOT */
				let mobloots = DATA.player.currentMonster.loot()
				for (var i = 0; i < mobloots.length; i++) {
					if (mobloots[i] !== null && Math.floor(rngmm(1, TABLES.ITEM_DROPRATE[i])) === 1) {
						/*GIMMELOOTBITCH*/
						let laaat = {
							type: mobloots[i] === 1 ? "c" : mobloots[i] < 10000 ? "f" : "w",
							item_id:mobloots[i],
							stage: getEffectiveStage()
						}
						addItemInventory(laaat, "loot")
					}
				};
				if (DATA.player.settings.autoadvance === true) {
					if (DATA.player.settings.reverseadvance === true) {
						DATA.player.currentStage--
					} else {
						DATA.player.currentStage++
					}
				}
				
				DATA.player.currentStage = Math.min(DATA.player.currentStage, TABLES.regions_data[DATA.player.currentRegion].max_stage)
				if (DATA.player.currentStage < 1) {
					DATA.player.currentStage = 1
				}
				updateStage(DATA.player.currentStage)
				saveData()
			} else {
				if (DATA.player.battle.combo === null) {
					createBattleCombo()
				}
				battling()
			}
		} else {
			if (DATA.player.currentStageIsTown === true && DATA.player.settings.townstop === false) {
				if (DATA.player.settings.reverseadvance === true) {
					DATA.player.currentStage--
				} else {
					DATA.player.currentStage++
				}
				updateStage(DATA.player.currentStage)
			} else {
				//console.log("rest in town")
			}
		}
		if (getCharacterLevelByExp() === 101 && DATA.player.settings.autoawaken === true) {
			awakenPlayer()
		}
	}

	const getAuraStrengthenBonus = () => {
		return (1 + getPassiveBonusValue("focus_dmg_p")) 
		* (TABLES.AURA.FOCUS_DMG.base + TABLES.AURA.FOCUS_DMG.base_bonus_per_level * getSkillLevelByExp(DATA.player.aura_exp.focus_dmg,2))
	}
	const getAuraStrengthenCost = () => {
		return TABLES.AURA.FOCUS_DMG.cost_per_sec 
		+ (getSkillLevelByExp(DATA.player.aura_exp.focus_dmg,2) - 1
				+ Math.ceil(getPassiveBonusValue("focus_dmg_p"))) * 5
	}
	const getAuraConcentrationBonus = () => {
		let regen = TABLES.AURA.FOCUS_POWER_REGEN.base + getPassiveBonusValue("combo_regen")
		let levelratiobonus = 1 + (TABLES.AURA.FOCUS_POWER_REGEN.base_bonus_per_level/TABLES.AURA.FOCUS_POWER_REGEN.base) * getSkillLevelByExp(DATA.player.aura_exp.focus_power_regen, 5)
		return levelratiobonus * regen
	}
	const getAuraConcentrationCost = () => {
		return TABLES.AURA.FOCUS_POWER_REGEN.cost_per_sec 
		+ toDecimal((getSkillLevelByExp(DATA.player.aura_exp.focus_power_regen, 5) - 1
		+ Math.ceil(Math.pow((TABLES.AURA.FOCUS_POWER_REGEN.base + getPassiveBonusValue("combo_regen")) / getPassiveBonusValue("combo_regen_sec"), 2))) / TABLES.AURA.FOCUS_POWER_REGEN.cost_per_sec / 2)
	}
	const getComboStreakBonus = () => {
		let combobonus = 1 + DATA.player.currentComboStreak
		let bonusratio = TABLES.AURA.FOCUS_COMBO_STREAK.base + TABLES.AURA.FOCUS_COMBO_STREAK.base_bonus_per_level * getSkillLevelByExp(DATA.player.aura_exp.focus_combostreak,2)
		return toDecimal(combobonus * bonusratio,4)
	}
	const getAuraBattleTranceBonus = () => {
		return TABLES.AURA.FOCUS_COMBO_STREAK.base + TABLES.AURA.FOCUS_COMBO_STREAK.base_bonus_per_level * getSkillLevelByExp(DATA.player.aura_exp.focus_combostreak,2)
	}
	const getAuraBattleTranceCost = () => {
		return TABLES.AURA.FOCUS_COMBO_STREAK.cost_per_sec + getSkillLevelByExp(DATA.player.aura_exp.focus_combostreak,2) - 1
	}

	const auraLoop = () => {
		/* auras */
		if (DATA.player.currentMonster !== null) {
			if (DATA.player.settings.aura_focus_dmg === true
				&& (DATA.player.focus - getAuraStrengthenCost() >= 0)) {
				DATA.player.focus -= getAuraStrengthenCost()
			} else if (DATA.player.focus - getAuraStrengthenCost() < 0) {
				DATA.player.settings.aura_focus_dmg = false
				elebyID("aura-focus-dmg").checked = false
				elebyID("aura-focus-dmg").onchange()
			}
			if (DATA.player.settings.aura_focus_power_regen === true
				&& (DATA.player.focus - getAuraConcentrationCost() >= 0)
				&& DATA.player.currentPower < getPassiveBonusValue("combo_power")) {
				DATA.player.focus -= getAuraConcentrationCost()
				/* Regen power */
				DATA.player.currentPower += getAuraConcentrationBonus()/getPassiveBonusValue("combo_regen_sec") 
			} else if (DATA.player.focus - getAuraConcentrationCost() < 0) {
				DATA.player.settings.aura_focus_power_regen = false
				elebyID("aura-focus-power-regen").checked = false
				elebyID("aura-focus-power-regen").onchange()
			}
			if (DATA.player.settings.aura_focus_combostreak === true
				&& (DATA.player.focus - getAuraBattleTranceCost() >= 0)) {
				DATA.player.focus -= getAuraBattleTranceCost()
			} else if (DATA.player.focus - getAuraBattleTranceCost() < 0) {
				DATA.player.settings.aura_focus_combostreak = false
				elebyID("aura-focus-combostreak").checked = false
				elebyID("aura-focus-combostreak").onchange()
			}
		} else if (DATA.player.currentStageIsTown === true) {
			/* regen focus if in town */
			DATA.player.focus += (2 + parseInt(getPassiveBonusValue("focus_idle_regen"))) * (1 + DATA.player.awaken_stage)
		}
		if (DATA.player.focus < 0) {
			DATA.player.focus = 0
		}

		DATA.player.currentPower = toDecimal((getPassiveBonusValue("combo_regen") + (DATA.player.awaken_stage * 0.05))/getPassiveBonusValue("combo_regen_sec") + DATA.player.currentPower, 2) 
		DATA.player.currentPower = Math.min(DATA.player.currentPower, getPassiveBonusValue("combo_power"))

		updateTextByID("aura-focus-dmg-cost", numberPrint(getAuraStrengthenCost()))
		updateTextByID("aura-focus-dmg-value", numberPrint(percent(getAuraStrengthenBonus(),1)))
		updateTextByID("aura-focus-dmg-level", getSkillLevelByExp(DATA.player.aura_exp.focus_dmg, 2))
		updateTextBySelector("#aura-focus-dmg-exp .currentexp", numberPrint(getSkillCurrentExpOfLevel(DATA.player.aura_exp.focus_dmg, 2)))
		updateTextBySelector("#aura-focus-dmg-exp .maxexp", numberPrint(getSkillCurrentLevelTotalExp(DATA.player.aura_exp.focus_dmg, 2)))
		updateProgressBar("#aura-focus-dmg-exp", getSkillCurrentExpOfLevel(DATA.player.aura_exp.focus_dmg, 2), getSkillCurrentLevelTotalExp(DATA.player.aura_exp.focus_dmg, 2))

		updateTextByID("aura-focus-power-regen-cost", numberPrint(getAuraConcentrationCost()))
		updateTextByID("aura-focus-power-regen-value", numberPrint(toDecimal(getAuraConcentrationBonus()/getPassiveBonusValue("combo_regen_sec"), 2)))
		updateTextByID("aura-focus-power-regen-level", getSkillLevelByExp(DATA.player.aura_exp.focus_power_regen, 5))
		updateTextBySelector("#aura-focus-power-regen-exp .currentexp", numberPrint(getSkillCurrentExpOfLevel(DATA.player.aura_exp.focus_power_regen, 5)))
		updateTextBySelector("#aura-focus-power-regen-exp .maxexp", numberPrint(getSkillCurrentLevelTotalExp(DATA.player.aura_exp.focus_power_regen, 5)))
		updateProgressBar("#aura-focus-power-regen-exp", getSkillCurrentExpOfLevel(DATA.player.aura_exp.focus_power_regen, 5), getSkillCurrentLevelTotalExp(DATA.player.aura_exp.focus_power_regen, 5))
		updateTextByID("aura-focus-combostreak-cost", numberPrint(getAuraBattleTranceCost()))
		updateTextByID("aura-focus-combostreak-value", numberPrintWithDecimal(percent(getAuraBattleTranceBonus(), 4)))
		updateTextByID("aura-focus-combostreak-level", getSkillLevelByExp(DATA.player.aura_exp.focus_combostreak, 2))
		updateTextBySelector("#aura-focus-combostreak-exp .currentexp", numberPrint(getSkillCurrentExpOfLevel(DATA.player.aura_exp.focus_combostreak, 2)))
		updateTextBySelector("#aura-focus-combostreak-exp .maxexp", numberPrint(getSkillCurrentLevelTotalExp(DATA.player.aura_exp.focus_combostreak, 2)))
		updateProgressBar("#aura-focus-combostreak-exp", getSkillCurrentExpOfLevel(DATA.player.aura_exp.focus_combostreak, 2), getSkillCurrentLevelTotalExp(DATA.player.aura_exp.focus_combostreak, 2))
	}

	/* Keep this loop at 1 per second */
	const inventoryLoop = () => {
		DATA.player.lts.playtime += 1

		/* wielding setup */
		updateWieldingSetupUnlock()

		/* count available slots */
		let inventorySlots = getPassiveBonusValue("inventory_base") + getPassiveBonusValue("inventory")
		GAMEVAR.inventoryspace = inventorySlots
		updateTextByID("invitemcount", DATA.player.inventory.length)
		updateTextByID("invslots", inventorySlots)
		/* update item inventory */
		for (var i = 0; i < DATA.player.inventory.length; i++) {
			let thisitemID 	= DATA.player.inventory[i].id
			let thisitemmodelID 	= DATA.player.inventory[i].item_id
			let thisitemModel = getItemModelByID(thisitemmodelID)
			thisitemModel.id = thisitemID
			let thisitemUpdated = updateItemObject(
				thisitemModel, 
				DATA.player.inventory[i].stage, 
				DATA.player.inventory[i].quality, 
				DATA.player.inventory[i].aspd)
			if (JSON.stringify(DATA.player.inventory[i]) !== JSON.stringify(thisitemUpdated)) {
				DATA.player.inventory[i] = thisitemUpdated
			}
		}

		/* consume or sell  items */
		let toSell = []
		for (var i = 0; i < DATA.player.inventory.length; i++) {
			if (isEquipped(DATA.player.inventory[i].id) === false
				&& DATA.player.settings["autosell_"+DATA.player.inventory[i].grade] === true
				&& parseInt(DATA.player.inventory[i].stage) < parseInt(DATA.player.settings.autosell_level)
				&& findPassiveBonusWithValue("autosell_grade", "grade_"+DATA.player.inventory[i].grade) !== false
				) {
				toSell.push(i)
				if (elebyID("item-"+DATA.player.inventory[i].id) !== null) {
					elebyID("item-"+DATA.player.inventory[i].id).remove()
				}
				if (DATA.player.inventory[i].item_id > 10000) {
					DATA.player.ekk += toDecimal(DATA.player.inventory[i].sell)
				} else if (DATA.player.inventory[i].item_id >= 1000 && DATA.player.inventory[i].item_id <= 10000) {
					DATA.player.focus += ITEMS[DATA.player.inventory[i].item_id][5] + Math.floor(Math.sqrt(DATA.player.inventory[i].stage))
					/* grimoire*/
					if (ITEMS[DATA.player.inventory[i].item_id][6] !== null
						&& ITEMS[DATA.player.inventory[i].item_id][6].startsWith("grim") 
						&& ITEMS[DATA.player.inventory[i].item_id][8] !== null) {
						if (ITEMS[DATA.player.inventory[i].item_id][6] === "grim_aura_strengthen") {
							DATA.player.aura_exp.focus_dmg += ITEMS[DATA.player.inventory[i].item_id][8]
						} else if (ITEMS[DATA.player.inventory[i].item_id][6] === "grim_aura_concentration") {
							DATA.player.aura_exp.focus_power_regen += ITEMS[DATA.player.inventory[i].item_id][8]
						} else if (ITEMS[DATA.player.inventory[i].item_id][6] === "grim_aura_battletrance") {
							DATA.player.aura_exp.focus_combostreak += ITEMS[DATA.player.inventory[i].item_id][8]
						}
					}
				}
			}
		};
		if (toSell.length) {
			removeFromArray(DATA.player.inventory, toSell)
		}
		/* disable buttons if not unlocked yet*/
		for (var i = 1; i <= 5; i++) {
			if (findPassiveBonusWithValue("autosell_grade", "grade_"+i) === false) {
				if (DATA.player.settings["autosell_"+i] === true) { DATA.player.settings["autosell_"+i] = false }
				elebyID("autosell-"+i).disabled = true
			} else {
				elebyID("autosell-"+i).disabled = false
			}
		};
		
	}
	const initTownRender = () => {
		elebyID("town-market").classList.add("hidden")
		elebyID("town-blacksmith").classList.add("hidden")

		function swapTownSection () {
			let sectionName = this.id.toString().replace("town-nav-", "")
			elebyID("town-nav-portal").classList.remove("selected")
			elebyID("town-nav-market").classList.remove("selected")
			elebyID("town-nav-blacksmith").classList.remove("selected")
			elebyID("town-nav-"+sectionName).classList.add("selected")

			elebyID("town-portal").classList.add("hidden")
			elebyID("town-market").classList.add("hidden")
			elebyID("town-blacksmith").classList.add("hidden")
			elebyID("town-"+sectionName).classList.remove("hidden")
			DATA.player.currentTownTab = sectionName
		}
		elebyID("town-nav-portal").onclick = swapTownSection
		elebyID("town-nav-market").onclick = swapTownSection
		elebyID("town-nav-blacksmith").onclick = swapTownSection

		/* Portal TAB */
		function showRegionalDestinations() {
			DATA.player.currentTownPortalTab = "route"
			updateAttributeByID("town-portal", "class", "route")
		}
		function showWorldsDestinations() {
			DATA.player.currentTownPortalTab = "world"
			updateAttributeByID("town-portal", "class", "world")
		}
		elebyID("town-portal-region-routes").onclick = showRegionalDestinations
		elebyID("town-portal-worlds").onclick = showWorldsDestinations

		/* Market TAB*/
		function showMarketGrimoire() {
			DATA.player.currentTownMarketTab = "grimoire"
			updateAttributeByID("town-market", "class", "grimoire")
		}
		function showMarketFood() {
			DATA.player.currentTownMarketTab = "food"
			updateAttributeByID("town-market", "class", "food")
		}
		function showMarketCrystal() {
			DATA.player.currentTownMarketTab = "crystal"
			updateAttributeByID("town-market", "class", "crystal")
		}
		elebyID("town-market-action-grimoire").onclick = showMarketGrimoire
		elebyID("town-market-action-food").onclick = showMarketFood
		elebyID("town-market-action-crystal").onclick = showMarketCrystal

		/* Blacksmith TAB*/
		// TO DO
	}

	const townRender = () => {
		if (DATA.player.currentStageIsTown === false) {
			if (elebyID("town-sell").checked === true) {
				elebyID("town-sell").checked = false
				elebyID("town-sell").onchange()
			}
			if (elebyID("town-salvage").checked === true) {
				elebyID("town-salvage").checked = false
				elebyID("town-salvage").onchange()
			}
			
			return false
		}

		function goToRoute() {
			let route =	parseInt(this.getAttribute("data-route"))
			let price = toDecimal(Math.abs(route - DATA.player.currentStage)*500)

			if (DATA.player.ekk - price >= 0) {
				DATA.player.currentStage = route
				DATA.player.ekk -= price
				updateStage(DATA.player.currentStage)
				elebyID("town-gate").click()
			}
		}

		function goToRegion() {
			let region =	this.getAttribute("data-region")
			let price = parseInt(this.getAttribute("data-price"))
			let pfocus = 0
			if (this.getAttribute("data-focus")) {
				pfocus = parseInt(this.getAttribute("data-focus"))
			}
			console.log(region)
			if (region === DATA.player.currentRegion) { return false }
			if (DATA.player.ekk - price >= 0 && TABLES.regions.indexOf(region) !== -1) {
				if (pfocus > 0 && DATA.player.focus < pfocus) { return false }
				DATA.player.currentStage = 15
				DATA.player.currentRegion = region
				DATA.player.ekk -= price
				if (pfocus > 0) {
					DATA.player.focus -= pfocus
				}
				updateStage(DATA.player.currentStage)
				if (elebyID("game-container").getAttribute("class").toString().includes(DATA.player.currentRegion) === false) {
					if (elebyID("game-container").getAttribute("class").toString().includes("intown")) {
						updateAttributeByID("game-container", "class", "intown "+DATA.player.currentRegion)
					}
				}
			}
		}

		function buyItem() {
			let itemid = parseInt(this.getAttribute("data-itemid"))
			let itemModel = getItemModelByID(parseInt(this.getAttribute("data-itemid")))
			if (DATA.player.ekk - itemModel.cost >= 0) {
				if (addItemInventory({
					type: "f",
					item_id:itemid,
					stage: 1,
					quality:-500
				}) === true) {
					DATA.player.ekk -= itemModel.cost
					saveData()
				}
			}
		}

		/* body */

		if (DATA.player.currentTownTab === "portal") {
			elebyID("town-portal").classList.add(DATA.player.currentTownPortalTab)
			if (DATA.player.currentTownPortalTab === "route") {
				let portalDestionationsHTML = ""
				for (var i = TABLES.towns.length - 1; i >= 0; i--) {
					if (DATA.player.max_stage[DATA.player.currentRegion] < TABLES.towns[i][0]) { continue }
					let button = iText(
						"destination_route", 
						TABLES.towns[i][0], numberPrint(toDecimal(Math.abs(TABLES.towns[i][0] - DATA.player.currentStage)*500)), 
						TABLES.towns[i][0]+"-button")
					portalDestionationsHTML += button.replace("data-route=\"\"", "data-route=\""+TABLES.towns[i][0]+"\"")
					
				}
				if (elebyID("region-destinations").innerHTML !== portalDestionationsHTML) {
					updateTextByID("region-destinations", portalDestionationsHTML)
					/* add the onclick function */
					for (var i = TABLES.towns.length - 1; i >= 0; i--) {
						if (DATA.player.max_stage[DATA.player.currentRegion] < TABLES.towns[i][0]) { continue }
						let destElement = elebyID("gotoroute-"+TABLES.towns[i][0]+"-button")
						destElement.onclick = goToRoute
					}
				}
			} else if (DATA.player.currentTownPortalTab === "world") {
				for (var i = TABLES.regions.length - 1; i >= 0; i--) {
					if (TABLES.regions[i] === DATA.player.currentRegion) {
						updateTextByID("dest-"+TABLES.regions[i]+"-price", iText("destination_world", "0"))
						updateAttributeByID("gotoworld-"+TABLES.regions[i], "data-price", 0)
					} else {
						let priceToTP = 0
						if (TABLES.regions_data[DATA.player.currentRegion].world === TABLES.regions_data[TABLES.regions[i]].world) {
							priceToTP = TABLES.regions_data[TABLES.regions[i]].price

							updateTextByID("dest-"+TABLES.regions[i]+"-price", iText("destination_world", priceToTP))
							updateAttributeByID("gotoworld-"+TABLES.regions[i], "data-price", priceToTP)
						} else {
							let focusToTP = 0
							priceToTP = TABLES.regions_data[TABLES.regions[i]].price + TABLES.regions_world_cost[TABLES.regions_data[TABLES.regions[i]].world].ekk
							focusToTP = TABLES.regions_world_cost[TABLES.regions_data[TABLES.regions[i]].world].focus

							updateTextByID("dest-"+TABLES.regions[i]+"-price", iText("destination_newworld", priceToTP, focusToTP))
							updateAttributeByID("gotoworld-"+TABLES.regions[i], "data-price", priceToTP)
							updateAttributeByID("gotoworld-"+TABLES.regions[i], "data-focus", focusToTP)
						}
					}
					if (typeof elebyID("gotoworld-"+TABLES.regions[i]).onclick !== "function") {
						updateAttributeByID("gotoworld-"+TABLES.regions[i], "data-region", TABLES.regions[i])
						elebyID("gotoworld-"+TABLES.regions[i]).onclick = goToRegion
					}
				}
			}
		} else if (DATA.player.currentTownTab === "market") {
			if (DATA.player.currentTownMarketTab === "grimoire") {
				let marketGrimoireShopHTML = ""
				for (var i = 0; i < TABLES.townsGrimoirePerRegion[DATA.player.currentRegion].length; i++) {
					let grimoireModel = getItemModelByID(TABLES.townsGrimoirePerRegion[DATA.player.currentRegion][i])
					let grimoireHTML = iText(
						"market_grimoire", 
						"class_grade_"+grimoireModel.grade, /*grade*/
						grimoireModel.name, /*name*/
						grimoireModel.cost, /*cost*/
						"market-grimoire-"+TABLES.townsGrimoirePerRegion[DATA.player.currentRegion][i],/*item_id*/
						ITEMS[TABLES.townsGrimoirePerRegion[DATA.player.currentRegion][i]][8]) 

					marketGrimoireShopHTML += grimoireHTML.replace("data-itemid=\"\"", "data-itemid=\""+TABLES.townsGrimoirePerRegion[DATA.player.currentRegion][i]+"\"")
				}
				if (elebyID("town-market-grimoire").innerHTML !== marketGrimoireShopHTML) {
					updateTextByID("town-market-grimoire", marketGrimoireShopHTML)
					for (var i = 0; i < TABLES.townsGrimoirePerRegion[DATA.player.currentRegion].length; i++) {
						let grimoireModel = getItemModelByID(TABLES.townsGrimoirePerRegion[DATA.player.currentRegion][i])
						elebyID("market-grimoire-"+TABLES.townsGrimoirePerRegion[DATA.player.currentRegion][i]).onclick = buyItem
					}
				}
			} else if (DATA.player.currentTownMarketTab === "food") {
				// TO DO
			} else if (DATA.player.currentTownMarketTab === "crystal") {
				// TO DO	
			}
		} else if (DATA.player.currentTownTab === "blacksmith") {
			updateTextByID("epic-dust-count", numberPrint(DATA.player.weapondust.epic))
			updateTextByID("legendary-dust-count", numberPrint(DATA.player.weapondust.legendary))
			updateTextByID("mythical-dust-count", numberPrint(DATA.player.weapondust.mythical))
		} else {

		}
	}

	const battleRender = () => {
		if (DATA.player.currentMonster !== null) {
			let domMonsterid 		= elebyID("monsterid")
			let domMonstername 	= elebyID("monstername")
			let domMonsterhp 		= elebyID("monster-currenthp")
			let domMonstermaxhp = elebyID("monster-maxhp")

			updateTextByID("monsterid", DATA.player.currentMonster.id())
			updateTextByID("monsterrank", iText("monster_rank_"+DATA.player.currentMonster.rank()))
			let resizeMonsterName = DATA.player.currentMonster.name() !== elebyID("monsternameval").innerHTML ? true : false
			updateTextByID("monsternameval", DATA.player.currentMonster.name())
			if (resizeMonsterName === true) {
				shrink()
			}
			updateTextByID("timeleft", toDecimal(DATA.player.currentMonster.getTimeleft()/1000,1) + "s")
			/* route number*/
			updateTextByID("route", DATA.player.currentStage)
			/* render progress bar*/
			updateProgressBar("#monstertimer", DATA.player.currentMonster.getTimeleft()/1000, DATA.player.currentMonster.timer())
			updateProgressBar("#monsterhp", DATA.player.currentMonster.hp(), DATA.player.currentMonster.maxhp())
			/* render numbers */
			updateTextBySelector("#monsterhp .currenthp", numberPrint(Math.floor(DATA.player.currentMonster.hp())))
			updateTextBySelector("#monsterhp .maxhp", numberPrint(Math.floor(DATA.player.currentMonster.maxhp())))

		} else {
			updateTextByID("regionname", capFirst(DATA.player.currentRegion))
			updateTextByID("townid", DATA.player.currentStage)
		}

		/* display skillbar */
		if (DATA.player.settings.uianimation === true
			&& DATA.player.battle.combo_ts_start !== null
			&& DATA.player.battle.combo_ts_end !== null) {
			let combomax = (DATA.player.battle.combo_ts_end - DATA.player.battle.combo_ts_start) * 10
			let curprog = Date.now() - DATA.player.battle.combo_ts_start
			let percentprog = percent((curprog*10/combomax), 4)
			elebyID("cur-skill-percent").style.width = Math.min(percentprog, 100) + "%"
			

			let timeforcurhit = DATA.player.battle.combo !== null ? 
				DATA.player.battle.combo[DATA.player.battle.current_combo-1] !== undefined ? 
					DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill.delay0 : 0 : 0
			let totalhits = getActiveHitCount(DATA.player.battle.combo !== null ? 
				DATA.player.battle.combo[DATA.player.battle.current_combo-1] !== undefined ? 
					DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill_id : 0 : 1)
			for (var i = totalhits; i < 30; i++) {
				elebyID("cur-skill-hit-"+(i+1)).classList.add("hidden")
			};
			for (var i = 0; i < totalhits; i++) {
				elebyID("cur-skill-hit-"+(i+1)).classList.remove("hidden")
				elebyID("cur-skill-hit-"+(i+1)).style.left = Math.min(timeforcurhit * 1000000 / combomax, 100) + "%"
				if (DATA.player.battle.combo !== null 
					&& DATA.player.battle.combo[DATA.player.battle.current_combo-1] !== undefined 
					&& DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill.hasOwnProperty("delay"+(i+1)) === true) {
					timeforcurhit += DATA.player.battle.combo[DATA.player.battle.current_combo-1].skill["delay"+(i+1)]
				}
			}
			
		}

		elebyID("curpower-count").innerHTML = numberPrint(toDecimal(DATA.player.currentPower,2))
		elebyID("maxpower-count").innerHTML = numberPrint(getPassiveBonusValue("combo_power"))
		elebyID("powerregen-count").innerHTML = numberPrint(toDecimal((getPassiveBonusValue("combo_regen") + (DATA.player.awaken_stage * 0.05))/getPassiveBonusValue("combo_regen_sec"), 1))
		elebyID("powerregen-count-focus").innerHTML = DATA.player.settings.aura_focus_power_regen === true ? 
			iText("power_regen_focus",numberPrint(toDecimal(getAuraConcentrationBonus()/getPassiveBonusValue("combo_regen_sec") , 2))) : " "

		elebyID("curfocus").innerHTML = numberPrint(DATA.player.focus)

		/* use this loop instead of aura because more fps */
		updateTextByID("aura-focus-combostreak-streak", numberPrintWithDecimal(percent(getComboStreakBonus(),2)))

		updateAttributeByID("bsettings-player", "data-awakenstage", DATA.player.awaken_stage)
		updateTextByID("awakenstage-value", DATA.player.awaken_stage)

		/*display player level*/
		let domplayerlevel 	= elebyID("playerlevel-value")
		let domplayercurexp = elebyID("player-currentexp")
		let domplayermaxexp = elebyID("player-maxexp")
		updateTextByID("playerlevel-value", getCharacterLevelByExp())
		let charcurexp = getCharacterCurrentExpOfLevel()
		updateTextByID("player-currentexp", numberPrint(charcurexp))
		let charmaxexp = getCharacterCurrentLevelTotalExp()
		updateTextByID("player-maxexp", numberPrint(charmaxexp))

		updateProgressBar("#playerexp", charcurexp, charmaxexp)


		updateAttributeByID("playerexp", "data-playerlevel", getCharacterLevelByExp())

		if (DATA.player.awaken_stage > 2) {
			updateAttributeByID("autoawaken-button", "class", "")
		} else {
			updateAttributeByID("autoawaken-button", "class", "hidden")
		}
	}

	const initWieldingSetupsRender = () => {
		let domWieldingSetupModel 	 = elebyID("ws-id")
		ELEMENTMODELS.wieldingtype = domWieldingSetupModel.cloneNode(true)
		domWieldingSetupModel.className += " hidden"
		/* passive skills */
		let domWieldingSetupContainer 	 = elebyID("wieldingsetups-list")
		for (var wt in WIELDINGTYPES) {
			let domps 	 = elebySelector("#wieldingsetups-list #ws-"+wt)
			if (domps === null) {
				let thisWS 		= ELEMENTMODELS.wieldingtype.cloneNode(true)

				thisWS.id = "ws-"+wt

				let char_level = getCharacterLevelByExp()
				let unlockedAttr = "data-unlocked"
				if (WIELDINGTYPES[wt].hasOwnProperty("awaken") === true
					&& DATA.player.awaken_stage >= WIELDINGTYPES[wt].awaken) {
					thisWS.setAttribute(unlockedAttr, "true")
				} else if (WIELDINGTYPES[wt].hasOwnProperty("awaken") === false
					&& char_level >= WIELDINGTYPES[wt].requirement) {
					thisWS.setAttribute(unlockedAttr, "true")
				} else {
					thisWS.setAttribute(unlockedAttr, "false")
				}

				let weaponAmountAttr = "data-weaponamount"
				if (WIELDINGTYPES[wt].hasOwnProperty("weapontype3") === true) {
					thisWS.setAttribute(weaponAmountAttr, "3")
				} else if (WIELDINGTYPES[wt].hasOwnProperty("weapontype2") === true) {
					thisWS.setAttribute(weaponAmountAttr, "2")
				} else {
					thisWS.setAttribute(weaponAmountAttr, "1")
				}

				ELEMENTS.wieldingSetups[wt] = thisWS
				domWieldingSetupContainer.appendChild(thisWS)

				/* update */
				let domwsName 	 = elebySelector("#ws-"+wt+" .ws-setup-name")
				domwsName.innerHTML = iText("wieldingsetup_"+wt)

				/* Weapon Rotation */
				let wcb = []
				let rotationHTML = ""
				if (WIELDINGTYPES[wt].hasOwnProperty("weaponcomborotation") === false) {
					wcb = [1]
				} else {
					wcb = WIELDINGTYPES[wt].weaponcomborotation
				}
				for (var i = 0; i < wcb.length; i++) {
					if (i !== 0) { rotationHTML += "&nbsp;>&nbsp;"}
					rotationHTML += wcb[i].toString()
				};

				let domwsRotation 	 = elebySelector("#ws-"+wt+" .rotation-value")
				domwsRotation.innerHTML = rotationHTML

				let domwsWeaponList1 = elebySelector("#ws-"+wt+" .ws-wa-1 .weaponlist")
				let thisWL1 = ""
				for (var i = 0; i < WIELDINGTYPES[wt].weapontype1.length; i++) {
					if (i > 0) { thisWL1 += ", "}
					thisWL1 += iText("weaponlist_weapon", WIELDINGTYPES[wt].weapontype1[i])
				};
				domwsWeaponList1.innerHTML = thisWL1

				if (WIELDINGTYPES[wt].hasOwnProperty("weapontype2") === true) {
					let domwsWeaponList2 = elebySelector("#ws-"+wt+" .ws-wa-2 .weaponlist")
					let thisWL2 = ""
					for (var i = 0; i < WIELDINGTYPES[wt].weapontype2.length; i++) {
						if (i > 0) { thisWL2 += ", "}
						thisWL2 += iText("weaponlist_weapon", WIELDINGTYPES[wt].weapontype2[i])
					};
					domwsWeaponList2.innerHTML = thisWL2
				}
				if (WIELDINGTYPES[wt].hasOwnProperty("weapontype3") === true) {
					let domwsWeaponList3 = elebySelector("#ws-"+wt+" .ws-wa-3 .weaponlist")
					let thisWL3 = ""
					for (var i = 0; i < WIELDINGTYPES[wt].weapontype3.length; i++) {
						if (i > 0) { thisWL3 += ", "}
						thisWL3 += iText("weaponlist_weapon", WIELDINGTYPES[wt].weapontype3[i])
					};
					domwsWeaponList3.innerHTML = thisWL3
				}
				
				let slot1 = elebySelector("#ws-"+wt+" .ws-slot1")
				let slot2 = elebySelector("#ws-"+wt+" .ws-slot2")
				let slot3 = elebySelector("#ws-"+wt+" .ws-slot3")
				slot1.id = "ws-slot1-"+wt
				slot2.id = "ws-slot2-"+wt
				slot3.id = "ws-slot3-"+wt

				slot1.setAttribute("data-wsid",wt)
				slot1.setAttribute("data-slot","1")
				slot2.setAttribute("data-wsid",wt)
				slot2.setAttribute("data-slot","2")
				slot3.setAttribute("data-wsid",wt)
				slot3.setAttribute("data-slot","3")

				slot1.onclick = updateWieldingSetupSelectWeapon
				slot2.onclick = updateWieldingSetupSelectWeapon
				slot3.onclick = updateWieldingSetupSelectWeapon

				elebySelector("#ws-"+wt+" .ws-ws-stats").id = "ws-ws-stats-"+wt
				elebySelector("#ws-"+wt+" .ws-ws-selection").id = "ws-ws-selection-"+wt

				/* create model once */
				if (!ELEMENTMODELS.wsitem) {
					ELEMENTMODELS.wsitem = elebySelector("#ws-"+wt+" .ws-item").cloneNode(true)
				}
				elebySelector("#ws-"+wt+" .ws-item").classList.add("hidden")
			}
		}
	}

	const isEquipped = (itemID) => {
		for (var setup in DATA.player.wieldingsetups) {
			if (DATA.player.wieldingsetups[setup].weapon1 === parseInt(itemID)) {
				return setup+"-weapon1"
			} else if (DATA.player.wieldingsetups[setup].hasOwnProperty("weapon2") 
				&& DATA.player.wieldingsetups[setup].weapon2 === parseInt(itemID)) {
				return setup+"-weapon2"
			} else if (DATA.player.wieldingsetups[setup].hasOwnProperty("weapon3") 
				&& DATA.player.wieldingsetups[setup].weapon3 === parseInt(itemID)) {
				return setup+"-weapon3"
			}
		}
		return false
	}

	const unequip = (itemID) => {
		for (var setup in DATA.player.wieldingsetups) {
			if (DATA.player.wieldingsetups[setup].weapon1 === parseInt(itemID)) {
				DATA.player.wieldingsetups[setup].weapon1 = null
				return true
			} else if (DATA.player.wieldingsetups[setup].hasOwnProperty("weapon2") 
				&& DATA.player.wieldingsetups[setup].weapon2 === parseInt(itemID)) {
				DATA.player.wieldingsetups[setup].weapon2 = null
				return true
			} else if (DATA.player.wieldingsetups[setup].hasOwnProperty("weapon3") 
				&& DATA.player.wieldingsetups[setup].weapon3 === parseInt(itemID)) {
				DATA.player.wieldingsetups[setup].weapon3 = null
				return true
			}
		}
		return false
	}

	function addToSlot() {
		let wsid = this.getAttribute("data-wsid")
		let slot = this.getAttribute("data-slot")
		let itemid = this.getAttribute("data-id")

		if (isEquipped(itemid)) {
			unequip(itemid)
		}
		DATA.player.wieldingsetups[wsid]["weapon"+slot] = parseInt(itemid)
		elebySelector("#ws-"+wsid+" .ws-slot"+slot).click()
	}

	function updateWieldingSetupSelectWeapon() {
		let wsid = this.getAttribute("data-wsid")
		let slot = this.getAttribute("data-slot")
		let selectContainer = elebyID("ws-ws-selection-"+wsid)

		/* remove highlights */
		var sslot = document.getElementsByClassName("selectingslot");
		while (sslot.length)
		    sslot[0].className = sslot[0].className.replace(/\bselectingslot\b/g, "")
		var sslting = document.getElementsByClassName("selecting");
		while (sslting.length)
		    sslting[0].className = sslting[0].className.replace(/\bselecting\b/g, "")

		if (selectContainer.classList.contains("selecting") 
			&& selectContainer.getAttribute("data-slot").toString() === slot.toString()) { /* close */
			selectContainer.classList.remove("selecting")
			this.classList.remove("selectingslot")
			return true
		} else if (selectContainer.classList.contains("selecting") 
			&& selectContainer.getAttribute("data-slot").toString() !== slot.toString()) { /* swap slot */
			/* nothing to do */
		} else { /* open */
			selectContainer.classList.add("selecting")
		}

		/* highlight the slot */
		this.classList.add("selectingslot")
		selectContainer.setAttribute("data-slot", slot)
		selectContainer.innerHTML = ""
		for (var i = 0; i < DATA.player.inventory.length; i++) {
			if (DATA.player.inventory[i].hasOwnProperty("id") === false) {
				inventoryLoop()
			}
			let thisID = DATA.player.inventory[i].id
			/* need this because if the setup select is called multiple times in other setups, it will crash as it can not have twice the same id */
			let thisIDplusUniqueID = thisID.toString() + "-" + toDecimal(rngmm(100000000,100000000000)).toString()
			if (!isNumeric(thisID)) { continue }
			if (WIELDINGTYPES[wsid]["weapontype"+slot].indexOf(getWeaponTypeByWeaponClass(DATA.player.inventory[i].class)) !== -1) {
				if (isEquipped(thisID) === false || isEquipped(thisID) !== wsid+"-weapon"+slot) {
					let selectableItem = ELEMENTMODELS.wsitem.cloneNode(true)
					selectableItem.id = "ws-item-"+thisIDplusUniqueID
					selectContainer.appendChild(selectableItem)

					selectableItem.onclick = addToSlot
					elebySelector("#ws-item-"+thisIDplusUniqueID+" .ws-item-name").id = "ws-item-name-"+thisIDplusUniqueID
					elebySelector("#ws-item-"+thisIDplusUniqueID+" .ws-dps-value").id = "ws-item-dps-"+thisIDplusUniqueID
					let thisDPS = toDecimal(DATA.player.inventory[i].dmg/DATA.player.inventory[i].aspd)
					updateAttributeByID("ws-item-"+thisIDplusUniqueID, "data-wsid", wsid)
					updateAttributeByID("ws-item-"+thisIDplusUniqueID, "data-slot", slot)
					updateAttributeByID("ws-item-"+thisIDplusUniqueID, "data-id", thisID)
					updateAttributeByID("ws-item-"+thisIDplusUniqueID, "data-grade", DATA.player.inventory[i].grade)
					updateAttributeByID("ws-item-"+thisIDplusUniqueID, "data-dps", thisDPS)
					elebyID("ws-item-"+thisIDplusUniqueID).style.order = toDecimal(thisDPS)
					let isEquippedPrefix = isEquipped(thisID) ? "[E] " : ""
					updateTextByID("ws-item-name-"+thisIDplusUniqueID, isEquippedPrefix+DATA.player.inventory[i].name)
					updateTextByID("ws-item-dps-"+thisIDplusUniqueID, iText("wswsdpsaspd",numberPrint(thisDPS),numberPrint(toDecimal(DATA.player.inventory[i].aspd,2))))
				}
			}
		}

		if (selectContainer.innerHTML === "") {
			selectContainer.innerHTML = "No weapon"
		}
	}

	const initPassivesRender = () => {
		let domPassiveSkillModel 	 = elebyID("ps-skill-id")
		ELEMENTMODELS.passiveskill = domPassiveSkillModel.cloneNode(true)
		domPassiveSkillModel.className += " hidden"
		/* passive skills */
		let domPassiveSkillContainer 	 = elebyID("passiveskills-list")
		for (var i = 0; i < PASSIVES.length; i++) {
			let domps 	 = elebySelector("#passiveskills-list #ps-skill-"+PASSIVES[i][0])
			if (domps === null) {
				let thisPS 		= ELEMENTMODELS.passiveskill.cloneNode(true)
				let thispsID 	= PASSIVES[i][0]
				let thispsModel = getPassiveModelByID(thispsID)

				thisPS.id = "ps-skill-"+thispsID

				thisPS.setAttribute("data-unlocked", "false"); 
				thisPS.setAttribute("data-canexp", "false"); 
				if (thispsModel[5] !== null) {
					thisPS.setAttribute("data-canexp", "true"); 
				}
				thisPS.children[0].setAttribute("data-id", thispsID)
				thisPS.children[0].classList.add("passive-"+thispsID)
				if (thisPS.children[1].children[0].className == "ps-name") {
					thisPS.children[1].children[0].innerHTML = thispsModel[4]
				}
				if (thisPS.children[1].children[3].className == "passiveskill-exp") {
					thisPS.children[1].children[3].id = "ps-exp-"+thispsID
				}

				//console.log(thisPS)

				ELEMENTS.passiveskills[thispsID] = thisPS
				domPassiveSkillContainer.appendChild(thisPS)

				let domPSReq = elebySelector("#ps-skill-"+thispsID+" #ps-req-id")
				domPSReq.id = "ps-req-"+thispsID
				domPSReq.innerHTML = iText(PASSIVES[i][1],PASSIVES[i][2])

				let domPSEffects = elebySelector("#ps-skill-"+thispsID+" .ps-effect")
				let psEffectsHtml = ""
				if (PASSIVES[i][6] !== null && PASSIVES[i][7] !== null) { psEffectsHtml += iText(PASSIVES[i][6], PASSIVES[i][7]) }
				if (PASSIVES[i][8] !== null && PASSIVES[i][9] !== null) { psEffectsHtml += "<br>" + iText(PASSIVES[i][8], PASSIVES[i][9]) }
				if (PASSIVES[i][10] !== null && PASSIVES[i][11] !== null) { psEffectsHtml += "<br>" + iText(PASSIVES[i][10], PASSIVES[i][11]) }
				if (PASSIVES[i][12] !== null && PASSIVES[i][13] !== null) { psEffectsHtml += "<br>" + iText(PASSIVES[i][12], PASSIVES[i][13]) }
				if (PASSIVES[i][14] !== null && PASSIVES[i][15] !== null) { psEffectsHtml += "<br>" + iText(PASSIVES[i][14], PASSIVES[i][15]) }
				domPSEffects.innerHTML = psEffectsHtml

				if (DATA.player.passives[thispsID].hasOwnProperty("exp")) {
					let domSkillTooltipLevel = elebySelector("#ps-exp-"+thispsID+" .level")
					domSkillTooltipLevel.id = "ps-exp-level-value-"+thispsID
					let domSkillImgLevel = elebySelector("#ps-skill-"+thispsID+" .slevel")
					domSkillImgLevel.id = "ps-skill-slevel-value-"+thispsID
					let domSkillcurexp = elebySelector("#ps-exp-"+thispsID+" .currentexp")
					domSkillcurexp.id = "ps-exp-currentexp-value-"+thispsID
					let domSkillmaxexp = elebySelector("#ps-exp-"+thispsID+" .maxexp")
					domSkillmaxexp.id = "ps-exp-maxexp-value-"+thispsID
					let domSkillbonusdmg = elebySelector("#ps-exp-"+thispsID+" .ps-bonusdmg")
					domSkillbonusdmg.id = "ps-exp-ps-bonusdmg-value-"+thispsID
				}
			}
		}
	}

	const initActivesRender = () => {

		let activeskillsSetupHTML = ""
		for (var wt in WIELDINGTYPES) {
			if (DATA.player.wieldingsetups.hasOwnProperty(wt) !== false && DATA.player.wieldingsetups[wt].unlocked === true) {
				if (DATA.player.activesView === null && wt === TABLES.defaultWeapon.class) {
					activeskillsSetupHTML += iText("activeskillsetupselect", "wieldingsetup_"+wt, wt, "selected=\"selected\"")
				} else if (DATA.player.activesView === wt) {
					activeskillsSetupHTML += iText("activeskillsetupselect", "wieldingsetup_"+wt, wt, "selected=\"selected\"")
				} else {
					activeskillsSetupHTML += iText("activeskillsetupselect", "wieldingsetup_"+wt, wt, " ")
				}
			}
		}
		updateTextByID("activeskills-setupselection",activeskillsSetupHTML)
		function setSetup() {
			if (DATA.player.activesView !== this.value) {
				DATA.player.activesView = this.value
				elebyID("activeskills-list").innerHTML = ""
				setActivesOfCurrentSetup()
				refreshActiveskillsRender()
			}
		}
		elebyID("activeskills-setupselection").onchange = setSetup


		let domActiveSkillModel 	 = elebyID("as-skill-id")
		ELEMENTMODELS.activeskill = domActiveSkillModel.cloneNode(true)
		domActiveSkillModel.className += " hidden"
		setActivesOfCurrentSetup()
		refreshActiveskillsRender()
	}

	const setActivesOfCurrentSetup = () => {
		let setupActives = []

		for (var i = 0; i < ACTIVES.length; i++) {
			let thisasID 	= ACTIVES[i][0]
			let setupsArr = getActiveSkillSetups(thisasID)
			if (setupsArr.length) {
				for (var iSetup = 0; iSetup < setupsArr.length; iSetup++) {
					if (WIELDINGTYPES[setupsArr[iSetup]].hasOwnProperty("hidden")) { continue }
					else if (DATA.player.activesView === setupsArr[iSetup]) {
						setupActives.push(thisasID)
					}
				}
			}
		}
		DATA.player.activesViewSkills = setupActives
	}

	const refreshActiveskillsRender = () => {
		GAMEVAR.refreshingActiveskill = true
		/* active skills */
		let domActiveSkillContainer 	 = elebyID("activeskills-list")
		for (var i = 0; i < ACTIVES.length; i++) {
			if (DATA.player.activesViewSkills.indexOf(ACTIVES[i][0]) === -1) { continue }
			let domps 	 = elebySelector("#activeskills-list #as-skill-"+ACTIVES[i][0])
			if (domps === null) {
				let thisAS 		= ELEMENTMODELS.activeskill.cloneNode(true)
				let thisasID 	= ACTIVES[i][0]
				let thisasModel = getActiveModelByID(thisasID)

				thisAS.id = "as-skill-"+thisasID
				if (ACTIVES[i][4].includes("placeholder")) {
					thisAS.classList.add("hidden")
				}
				thisAS.setAttribute("data-unlocked", "false")
				thisAS.setAttribute("data-canexp", "false")
				if (thisasModel[5] !== null) {
					thisAS.setAttribute("data-canexp", "true")
				}
				thisAS.children[0].setAttribute("data-id","#"+thisasID)
				thisAS.children[0].classList.add("active-"+thisasID)
				if (thisAS.children[1].children[0].className == "as-name") {
					thisAS.children[1].children[0].innerHTML = thisasModel[5]
				}
				if (thisAS.children[1].children[4].className == "activeskill-exp") {
					thisAS.children[1].children[4].id = "as-exp-"+thisasID
				}

				//console.log(thisAS)

				ELEMENTS.activeskills[thisasID] = thisAS
				domActiveSkillContainer.appendChild(thisAS)

				let domPSReq = elebySelector("#as-skill-"+thisasID+" #as-req-id")
				domPSReq.id = "as-req-"+thisasID

				if (ACTIVES[i][1] == "charlevel") {
					domPSReq.innerHTML = iText(ACTIVES[i][1],ACTIVES[i][2])
				} else if (ACTIVES[i][1].startsWith("wield_") && TABLES.passivesPerClass.hasOwnProperty(ACTIVES[i][1])) {
					domPSReq.innerHTML = iText("reqpassive",PASSIVES[TABLES.passivesPerClass[ACTIVES[i][1]]-1][4], ACTIVES[i][2])
				} else if (TABLES.activesPerClass.hasOwnProperty(ACTIVES[i][1])) {
					domPSReq.innerHTML = iText("reqactive",ACTIVES[TABLES.activesPerClass[ACTIVES[i][1]]-1][5], ACTIVES[i][2])
				} else {
					//console.warn("req not found for ", ACTIVES[i])
				}


				let domASEffects = elebySelector("#as-skill-"+thisasID+" .as-effect")
				let asEffectsHtml = iText("skill_hit","astype_"+ACTIVES[i][3].split("_")[0], getActiveHitCount(ACTIVES[i][0])) + "<br>"
				let skillhits = getActiveHits(ACTIVES[i][0])
				asEffectsHtml += iText("skillhit_dmg_p", skillhits[0]) + "<br>"
				asEffectsHtml += iText("skillhit_duration_p", skillhits[1]) + "<br>"
				domASEffects.id = "as-skill-as-effect-value-"+thisasID
				domASEffects.innerHTML = asEffectsHtml

				if (DATA.player.actives[thisasID].hasOwnProperty("exp")) {
					let domSkillTooltipLevel = elebySelector("#as-exp-"+thisasID+" .level")
					domSkillTooltipLevel.id = "as-exp-level-value-"+thisasID
					let domSkillImgLevel = elebySelector("#as-skill-"+thisasID+" .slevel")
					domSkillImgLevel.id = "as-skill-slevel-value-"+thisasID
					let domSkillcurexp = elebySelector("#as-exp-"+thisasID+" .currentexp")
					domSkillcurexp.id = "as-exp-currentexp-value-"+thisasID
					let domSkillmaxexp = elebySelector("#as-exp-"+thisasID+" .maxexp")
					domSkillmaxexp.id = "as-exp-maxexp-value-"+thisasID
					let domSkillbonusdmg = elebySelector("#as-exp-"+thisasID+" .as-bonus")
					domSkillbonusdmg.id = "as-exp-as-bonus-value-"+thisasID
				}

				let domASsetups = elebySelector("#as-skill-"+thisasID+" #as-setups-id")
				domASsetups.id = "as-setup-" + thisasID
				let setupsArr = getActiveSkillSetups(thisasID)
				if (setupsArr.length) {
					let setupsHTML = iText("list_of_setups_using_active")
					for (var iSetup = 0; iSetup < setupsArr.length; iSetup++) {
						if (WIELDINGTYPES[setupsArr[iSetup]].hasOwnProperty("hidden")) { continue }
						setupsHTML += "- " + iText("wieldingsetup_"+setupsArr[iSetup]) + "<br>"
					}
					domASsetups.innerHTML = setupsHTML
				}
			}
		}

		GAMEVAR.refreshingActiveskill = false
	}

	const initCombolistRender = () => {
		let domComboSkillModel 	 = elebyID("comboskill-id")
		ELEMENTMODELS.comboskill = domComboSkillModel.cloneNode(true)
		domComboSkillModel.className += " hidden"
		let domCombolistSkillModel 	 = elebyID("combolist-skill-id")
		ELEMENTMODELS.combolistskill = domCombolistSkillModel.cloneNode(true)
		domCombolistSkillModel.className += " hidden"

		/* combo skills */
		/* nothing to do, here*/

		/* combo list skills */
		refreshComboInventorySkillListRender()
	}

	const refreshComboInventorySkillListRender = () => {
		let domComboSkillContainer 	 = elebyID("comboskill-lists-skills")
		elebyID("comboskill-lists-skills").innerHTML = ""
		for (var i = 0; i < ACTIVES.length; i++) {
			if (DATA.player.actives[i+1].unlocked === true && canUseActive(i+1, DATA.player.activescombo["combosetup"+DATA.player.activescombo.viewcombo])) {
				let domps 	 = elebySelector("#comboskill-lists-skills #combolist-skill-"+ACTIVES[i][0])
				if (domps === null) {
					let thisCA 		= ELEMENTMODELS.combolistskill.cloneNode(true)
					let thiscaID 	= ACTIVES[i][0]
					let thiscaModel = getActiveModelByID(thiscaID)

					thisCA.id = "combolist-skill-"+thiscaID

					thisCA.setAttribute("data-canuse", "false")
					thisCA.setAttribute("data-power", ACTIVES[i][6])

					domComboSkillContainer.appendChild(thisCA)

					updateAttributeBySelector("#combolist-skill-"+thiscaID+" .combolist-skill-add", "data-skillid", ACTIVES[i][0])
					updateTextBySelector("#combolist-skill-"+thiscaID+" .cbl-name-value", ACTIVES[i][5])
					updateTextBySelector("#combolist-skill-"+thiscaID+" .cbl-power-value", ACTIVES[i][6])

					let thisAddButton = elebySelector("#combolist-skill-"+thiscaID+" .combolist-skill-add")
					thisAddButton.onclick = addSkillToCombo
				}
			}
		}
	}

	function buyItem() {
		/* don't buy if inventory full*/

		/* force disable auto consume items */

	}

	function consumeItem() {
		let item_id = parseInt(this.getAttribute("data-itemid"))
		let stage_val = parseInt(this.getAttribute("data-stage"))
		let inv_id = parseInt(this.getAttribute("data-id"))

		let consumed = false
		let thisItemObject = getItemFromInventoryByID(inv_id)
		console.log("nomnom")
		if (isEquipped(thisItemObject.id) !== false) {
			return false
		}

		/* town sell */
		if (DATA.player.currentStageIsTown === true
			&& DATA.player.settings.townSell === true) {
			if (thisItemObject.class.includes("Grim") === true) {
				consumed = false
			} else {
				DATA.player.ekk += toDecimal(thisItemObject.sell * (1 + DATA.player.awaken_stage * 0.25))
				consumed = true
			}
		}
		/* town salvage */
		else if (DATA.player.currentStageIsTown === true
			&& DATA.player.settings.townSalvage === true
			&& thisItemObject.type === "w"
			&& thisItemObject.grade >= 5) {
			if (thisItemObject.grade === 5) {
				DATA.player.weapondust.epic += toDecimal(log10(thisItemObject.stage) * thisItemObject.quality)
			} else if (thisItemObject.grade === 6) {
				DATA.player.weapondust.legendary += toDecimal(log10(thisItemObject.stage) * thisItemObject.quality)
			} else if (thisItemObject.grade === 7) {
				DATA.player.weapondust.mythical += toDecimal(log10(thisItemObject.stage) * thisItemObject.quality)
			}
			consumed = true
		}
		/* eat consumable */
		else if (
			DATA.player.settings.townSell === false
			&& DATA.player.settings.townSalvage === false	
			&& item_id >= 1000 && item_id <= 10000) {
			DATA.player.focus += ITEMS[item_id][5] + Math.floor(Math.sqrt(stage_val))
			/* grimoire*/
			if (ITEMS[item_id][6] !== null
				&& ITEMS[item_id][6].startsWith("grim") 
				&& ITEMS[item_id][8] !== null) {
				if (ITEMS[item_id][6] === "grim_aura_strengthen") {
					DATA.player.aura_exp.focus_dmg += ITEMS[item_id][8]
				} else if (ITEMS[item_id][6] === "grim_aura_concentration") {
					DATA.player.aura_exp.focus_power_regen += ITEMS[item_id][8]
				} else if (ITEMS[item_id][6] === "grim_aura_battletrance") {
					DATA.player.aura_exp.focus_combostreak += ITEMS[item_id][8]
				}
			}
			consumed = true
		}

		/* remove from inventory if consumed */
		if (consumed === true) {
			let removeID = []
			for (var i = 0; i < DATA.player.inventory.length; i++) {
				if (DATA.player.inventory[i].id === inv_id){
					removeID.push(i)
					break
				}
			}
			removeFromArray(DATA.player.inventory, removeID)
			this.remove()
			saveData()
		}
	}

	const initItemsInventoryRender = () => {
		let domInventoryItemModel 	 = elebySelector("#inventory-items #item-id")
		ELEMENTMODELS.item = domInventoryItemModel.cloneNode(true)
		domInventoryItemModel.className += " hidden"
		/* active skills */
		let domInventoryItemContainer 	 = elebyID("inventory-items")
		for (var i = 0; i < DATA.player.inventory.length; i++) {
			let domii = elebyID("item-"+DATA.player.inventory[i].id)
			if (domii === null) {
				let ti 		= ELEMENTMODELS.item.cloneNode(true)

				let tiID 	= DATA.player.inventory[i].id
				ti.id = "item-"+tiID
				domInventoryItemContainer.appendChild(ti)
				ti.ondblclick = consumeItem

				elebySelector("#item-"+tiID+" .item-img").id = "item-img-"+tiID
				elebySelector("#item-"+tiID+" .item-name").id = "item-name-"+tiID
				elebySelector("#item-"+tiID+" .item-quality").id = "item-quality-"+tiID
				if (DATA.player.inventory[i].hasOwnProperty("type") 
					&& DATA.player.inventory[i].type === "w") {

					elebySelector("#item-"+tiID+" .item-type").id = "item-type-"+tiID
					elebySelector("#item-"+tiID+" .item-weapontype").id = "item-weapontype-"+tiID
					elebySelector("#item-"+tiID+" .dps-value").id = "item-dps-"+tiID
					elebySelector("#item-"+tiID+" .dmg-value").id = "item-dmg-"+tiID
					elebySelector("#item-"+tiID+" .aspd-value").id = "item-aspd-"+tiID
				}
				elebySelector("#item-"+tiID+" .item-effect").id = "item-effect-"+tiID
				elebySelector("#item-"+tiID+" .item-stage").id = "item-stage-"+tiID
				elebySelector("#item-"+tiID+" .item-grade").id = "item-grade-"+tiID
				elebySelector("#item-"+tiID+" .item-sell-value").id = "item-sell-"+tiID

				elebySelector("#item-"+tiID+" .item-img-stage").id = "item-img-stage-"+tiID
			}
		}

	}


	const initRender = () => {
		initTownRender()
		initWieldingSetupsRender()
		initPassivesRender()
		initActivesRender()
		initCombolistRender()
		initItemsInventoryRender()
		GAMEVAR.initialized = true

		/* Town buttons */
		elebyID("town-exit").onclick = function() {
			DATA.player.currentStageIsTown = false
			if (DATA.player.settings.reverseadvance === true) {
				DATA.player.currentStage--
			} else {
				DATA.player.currentStage++
			}
			updateAttributeByID("game-container", "class", "")
			updateStage(DATA.player.currentStage)
		}


		function townSellCheck () {
			DATA.player.settings.townSell = this.checked
			DATA.player.settings.townSalvage = false
			elebyID("town-salvage").checked = false
		}
		function townSalvageCheck () {
			DATA.player.settings.townSalvage = this.checked
			DATA.player.settings.townSell = false
			elebyID("town-sell").checked = false
		}
		elebyID("town-sell").checked = false
		elebyID("town-salvage").checked = false

		elebyID("town-sell").onchange = townSellCheck
		elebyID("town-salvage").onchange = townSalvageCheck

		/* aura */
		function auraFocusDmgCheck () { DATA.player.settings.aura_focus_dmg = this.checked }
		function auraFocusPowerRegenCheck () { DATA.player.settings.aura_focus_power_regen = this.checked }
		function auraFocusCombostreakCheck () { DATA.player.settings.aura_focus_combostreak = this.checked }
		elebyID("aura-focus-dmg").onchange = auraFocusDmgCheck
		elebyID("aura-focus-power-regen").onchange = auraFocusPowerRegenCheck
		elebyID("aura-focus-combostreak").onchange = auraFocusCombostreakCheck
		elebyID("aura-focus-dmg").checked = DATA.player.settings.aura_focus_dmg || false
		elebyID("aura-focus-power-regen").checked = DATA.player.settings.aura_focus_power_regen || false
		elebyID("aura-focus-combostreak").checked = DATA.player.settings.aura_focus_combostreak || false
		/* battle settings */
		function townstopCheck () {
			DATA.player.settings.townstop = this.checked
		}
		function autoadvanceCheck () {
			DATA.player.settings.autoadvance = this.checked
		}
		function reverseadvanceCheck () {
			DATA.player.settings.reverseadvance = this.checked
		}
		function droponfailCheck () {
			DATA.player.settings.droponfail = this.checked
		}
		function autoawakenCheck () {
			DATA.player.settings.autoawaken = this.checked
		}
		function uianimationCheck () {
			DATA.player.settings.uianimation = this.checked
		}
		elebyID("town-stop").checked = DATA.player.settings.townstop
		elebyID("auto-advance").checked = DATA.player.settings.autoadvance
		elebyID("reverse-advance").checked = DATA.player.settings.reverseadvance
		elebyID("drop-on-fail").checked = DATA.player.settings.droponfail
		elebyID("auto-awaken").checked = DATA.player.settings.autoawaken
		elebyID("ui-animation").checked = DATA.player.settings.uianimation

		elebyID("town-stop").onchange = townstopCheck
		elebyID("auto-advance").onchange = autoadvanceCheck
		elebyID("reverse-advance").onchange = reverseadvanceCheck
		elebyID("drop-on-fail").onchange = droponfailCheck
		elebyID("auto-awaken").onchange = autoawakenCheck
		elebyID("ui-animation").onchange = uianimationCheck

		/* PLAYER : Awakening*/
		

		elebyID("awakennow").onclick = awakenPlayer

		/* inventory settings */
		function autosell1Check () { DATA.player.settings.autosell_1 = this.checked }
		function autosell2Check () { DATA.player.settings.autosell_2 = this.checked }
		function autosell3Check () { DATA.player.settings.autosell_3 = this.checked }
		function autosell4Check () { DATA.player.settings.autosell_4 = this.checked }
		function autosell5Check () { DATA.player.settings.autosell_5 = this.checked }
		function autosellLevelCheck () { DATA.player.settings.autosell_level = parseInt(this.value) }

		elebyID("autosell-1").checked = DATA.player.settings.autosell_1 || false
		elebyID("autosell-2").checked = DATA.player.settings.autosell_2 || false
		elebyID("autosell-3").checked = DATA.player.settings.autosell_3 || false
		elebyID("autosell-4").checked = DATA.player.settings.autosell_4 || false
		elebyID("autosell-5").checked = DATA.player.settings.autosell_5 || false
		elebyID("autosell-level").value = DATA.player.settings.autosell_level || 100

		elebyID("autosell-1").onchange = autosell1Check
		elebyID("autosell-2").onchange = autosell2Check
		elebyID("autosell-3").onchange = autosell3Check
		elebyID("autosell-4").onchange = autosell4Check
		elebyID("autosell-5").onchange = autosell5Check
		elebyID("autosell-level").onchange = autosellLevelCheck
	}

	/* loop renders */
	const statsRender = () => {

		/* CHARACTER */
		let expbonus = getCharacterBonusExp()
		updateTextByID("charexpbonus-total", numberPrint(percent(expbonus.total)))
		updateTextByID("charexpbonus-askill", numberPrint(percent(expbonus.askill)))
		updateTextByID("charexpbonus-maxroute", numberPrint(percent(expbonus.route_worlds)))
		updateTextByID("charexpbonus-world-earth-maxroute", numberPrint(percent(expbonus.route_earth)))
		updateTextByID("charexpbonus-world-ninerealms-maxroute", numberPrint(percent(expbonus.route_ninerealms)))

		updateTextByID("charexpbonus-killcount", numberPrint(percent(expbonus.killcount)))


		let expratio = getCharacterExpRatio()
		updateTextByID("charexpratio-total", "x"+numberShort(expratio))

		updateTextByID("item-inventory-size", numberPrint(getPassiveBonusValue("inventory_base") + getPassiveBonusValue("inventory")))


		updateTextByID("skillexpbonus-total", numberPrint(percent(DATA.player.awaken_stage * 0.2)))

		/* BATTLE */
		let dmgbonus_passive = getPassiveBonusValue("dmg_p")
		updateTextByID("dmgbonus-total", numberPrint(percent(dmgbonus_passive + DATA.player.awaken_stage * 0.33)))
		updateTextByID("dmgbonus-pskill", numberPrint(percent(dmgbonus_passive)))
		updateTextByID("dmgbonus-astage", numberPrint(percent(DATA.player.awaken_stage * 0.33)))

		let dmgflatbonus_passive = getPassiveBonusValue("dmg_f")
		updateTextByID("dmgflatbonus-total", numberPrint(dmgflatbonus_passive))
		updateTextByID("dmgflatbonus-pskill", numberPrint(dmgflatbonus_passive))

		/* LIFETIME STATS */
		updateTextByID("lts-timeplayed", toHHMMSS(DATA.player.lts.playtime))
		updateTextByID("lts-killedenemies", numberPrint(DATA.player.lts.killedenemies))
		updateTextByID("lts-looted-ekk", numberPrint(DATA.player.lts.looted_ekk))
		updateTextByID("lts-looted-legendary", numberPrint(DATA.player.lts.looted_legendary))
		updateTextByID("lts-looted-mythical", numberPrint(DATA.player.lts.looted_mythical))
		updateTextByID("maxstage-total", numberPrint(DATA.player.max_stage.all))
		updateTextByID("maxstage-earth", numberPrint(Math.max(DATA.player.max_stage.asia, DATA.player.max_stage.europe)))
		updateTextByID("maxstage-asia", numberPrint(DATA.player.max_stage.asia))
		updateTextByID("maxstage-europe", numberPrint(DATA.player.max_stage.europe))
		updateTextByID("maxstage-ninerealms", numberPrint(Math.max(DATA.player.max_stage.asgard, DATA.player.max_stage.asgard)))
		updateTextByID("maxstage-asgard", numberPrint(DATA.player.max_stage.asgard))
	}

	const wieldingSetupRender = () => {
		for (var wt in WIELDINGTYPES) {
			if (ELEMENTS.wieldingSetups.hasOwnProperty(wt)) {
				let thisWS 		= ELEMENTS.wieldingSetups[wt]

				thisWS.id = "ws-"+wt

				let char_level = getCharacterLevelByExp()
				let unlockedAttr = "data-unlocked"
				if (WIELDINGTYPES[wt].hasOwnProperty("awaken") === true
					&& DATA.player.awaken_stage >= WIELDINGTYPES[wt].awaken) {
					thisWS.setAttribute(unlockedAttr, "true")
				} else if (WIELDINGTYPES[wt].hasOwnProperty("awaken") === false
					&& char_level >= WIELDINGTYPES[wt].requirement) {
					thisWS.setAttribute(unlockedAttr, "true")
				} else {
					thisWS.setAttribute(unlockedAttr, "false")
				}

				if (DATA.player.wieldingsetups[wt].hasOwnProperty("weapon1")) {
					//updateAttributeBySelector("#ws-slot1-"+wt+" .ws-wp-weapon", "src", DATA.player.wieldingsetups[wt].weapon1 || "")
					var wp1item = getItemByID(DATA.player.wieldingsetups[wt].weapon1) || null
					if (wp1item !== null) {
						let itemname = wp1item.name+"<br>"+ numberPrint(toDecimal(wp1item.dmg/wp1item.aspd)) + "&nbsp;DPS"
						updateAttributeByID("ws-slot1-"+wt, "data-grade", wp1item.grade)
						updateTextBySelector("#ws-slot1-"+wt+" .slot-equipment", itemname)
					} else {
						updateAttributeByID("ws-slot1-"+wt, "data-grade", 0)
						updateTextBySelector("#ws-slot1-"+wt+" .slot-equipment", "")
					}
				}
				if (DATA.player.wieldingsetups[wt].hasOwnProperty("weapon2")) {
					//updateAttributeBySelector("#ws-slot2-"+wt+" .ws-wp-weapon", "src", DATA.player.wieldingsetups[wt].weapon2 || "")
					var wp2item = getItemByID(DATA.player.wieldingsetups[wt].weapon2) || null
					if (wp2item !== null) {
						let itemname = wp2item.name+"<br>"+ numberPrint(toDecimal(wp2item.dmg/wp2item.aspd)) + "&nbsp;DPS"
						updateAttributeByID("ws-slot2-"+wt, "data-grade", wp2item.grade)
						updateTextBySelector("#ws-slot2-"+wt+" .slot-equipment", itemname)
					} else {
						updateAttributeByID("ws-slot2-"+wt, "data-grade", 0)
						updateTextBySelector("#ws-slot2-"+wt+" .slot-equipment", "")
					}
				}
				if (DATA.player.wieldingsetups[wt].hasOwnProperty("weapon3")) {
					//updateAttributeBySelector("#ws-slot3-"+wt+" .ws-wp-weapon", "src", DATA.player.wieldingsetups[wt].weapon3 || "")
					var wp3item = getItemByID(DATA.player.wieldingsetups[wt].weapon3) || null
					if (wp3item !== null) {
						let itemname = wp3item.name+"<br>"+ numberPrint(toDecimal(wp3item.dmg/wp3item.aspd)) + "&nbsp;DPS"
						updateAttributeByID("ws-slot3-"+wt, "data-grade", wp3item.grade)
						updateTextBySelector("#ws-slot3-"+wt+" .slot-equipment", itemname)
					} else {
						updateAttributeByID("ws-slot3-"+wt, "data-grade", 0)
						updateTextBySelector("#ws-slot3-"+wt+" .slot-equipment", "")
					}
				}
				
			}
		}

	}

	const passiveInventoryRender = () => {
		for (var pdata in DATA.player.passives) { 
			if (ELEMENTS.passiveskills.hasOwnProperty(pdata) === false) {
				continue
			}
			/* do stuff */ 
			if (ELEMENTS.passiveskills[pdata].getAttribute("data-unlocked") !== DATA.player.passives[pdata].unlocked.toString()) {
				ELEMENTS.passiveskills[pdata].setAttribute("data-unlocked", DATA.player.passives[pdata].unlocked.toString())
			}

			/* passive unlock weapon */
			if (DATA.player.passives[pdata].hasOwnProperty("exp")) {
				let skill_exp  	= DATA.player.passives[pdata].exp
				let skill_level = getSkillLevelByExp(skill_exp)
				let skill_curexp = getSkillCurrentExpOfLevel(skill_exp)
				let skill_maxexp = getSkillCurrentLevelTotalExp(skill_exp)
				let skill_bonusdmg = PASSIVES[parseInt(pdata)-1][5]

				updateTextByID("ps-exp-level-value-"+pdata, skill_level)
				updateTextByID("ps-skill-slevel-value-"+pdata, skill_level)
				updateProgressBar("#ps-exp-"+pdata, skill_curexp, skill_maxexp)
				updateTextByID("ps-exp-currentexp-value-"+pdata, numberPrint(skill_curexp))
				updateTextByID("ps-exp-maxexp-value-"+pdata, numberPrint(skill_maxexp))
				updateTextByID("ps-exp-ps-bonusdmg-value-"+pdata, skill_bonusdmg * skill_level)
			}
			//console.log(pdata, ELEMENTS.passiveskills[pdata])
		}
	}

	const activeInventoryRender = () => {
		if (GAMEVAR.refreshingActiveskill === true) { return false }
		for (var adata in DATA.player.actives) { 
			if (DATA.player.activesViewSkills.indexOf(parseInt(adata)) === -1) { continue }
			/* do stuff */ 
			if (ELEMENTS.activeskills[adata].getAttribute("data-unlocked") !== DATA.player.actives[adata].unlocked.toString()) {
				ELEMENTS.activeskills[adata].setAttribute("data-unlocked", DATA.player.actives[adata].unlocked.toString())
			}

			/* active unlock weapon */
			if (DATA.player.actives[adata].hasOwnProperty("exp")) {
				let skill_exp  	= DATA.player.actives[adata].exp
				let skill_power  	= DATA.player.actives[adata].power
				let skill_type  = DATA.player.actives[adata].type ? DATA.player.actives[adata].type : TABLES.defaultActiveSkillType
				let skill_curve = DATA.player.actives[adata].curve
				let skill_level = getSkillLevelByExp(skill_exp, skill_curve)
				let skill_curexp = getSkillCurrentExpOfLevel(skill_exp, skill_curve)
				let skill_maxexp = getSkillCurrentLevelTotalExp(skill_exp, skill_curve)

				updateTextByID("as-exp-level-value-"+adata, skill_level)
				updateTextByID("as-skill-slevel-value-"+adata, skill_level)
				updateProgressBar("#as-exp-"+adata, skill_curexp, skill_maxexp)
				updateTextByID("as-exp-currentexp-value-"+adata, numberPrint(skill_curexp))
				updateTextByID("as-exp-maxexp-value-"+adata, numberPrint(skill_maxexp))

				let asbonusHTML = ""
				let skillbonus = 0
				for (var bonus in TABLES.activeSkillBonusPerLevel[skill_type]) {
					asbonusHTML += iText("activebonus_"+bonus, null, toDecimal(TABLES.activeSkillBonusPerLevel[skill_type][bonus] * skill_level * 100,2)) + "<br>"
					if (bonus === "dmg_p") {
						skillbonus += TABLES.activeSkillBonusPerLevel[skill_type][bonus] * skill_level
					}
				}
				updateTextByID("as-exp-as-bonus-value-"+adata, asbonusHTML)

				let asEffectsHtml = iText("skill_power", skill_power) + "<br>"
				asEffectsHtml += iText("skill_hit","astype_"+skill_type, getActiveHitCount(adata)) + "<br>"
				let skillhits = getActiveHits(adata)
				let dmgmod = damageMultiplier(skillhits[0], skillbonus)
				asEffectsHtml += iText("skillhit_dmg_p", skillhits[0], dmgmod[1], percent(dmgmod[0],1)) + "<br>"
				asEffectsHtml += iText("skillhit_duration_p", skillhits[1]) + "<br>"
				updateTextByID("as-skill-as-effect-value-"+adata, asEffectsHtml)
			}
			

			//console.log(adata, ELEMENTS.activeskills[adata])
		}
	}

	/* called when init,awakening, and swapping combo view */
	const comboSetupRender = () => {
		if (DATA.player.activescombo.usedcombo === 0) {
			DATA.player.activescombo.usedcombo = 1
		}
		let currentcombo = DATA.player.activescombo.usedcombo > 0 ? DATA.player.activescombo.usedcombo : 1

		/* retrieve select options */
		let comboSetupHTML = ""
		for (var wt in WIELDINGTYPES) {
			if (DATA.player.wieldingsetups.hasOwnProperty(wt) !== false && DATA.player.wieldingsetups[wt].unlocked === true) {
				if (DATA.player.activescombo["combosetup"+DATA.player.activescombo.viewcombo] === null && wt === TABLES.defaultWeapon.class) {
					comboSetupHTML += iText("comboselect", "wieldingsetup_"+wt, wt, "selected=\"selected\"")
				} else if (DATA.player.activescombo["combosetup"+DATA.player.activescombo.viewcombo] === wt) {
					comboSetupHTML += iText("comboselect", "wieldingsetup_"+wt, wt, "selected=\"selected\"")
				} else {
					comboSetupHTML += iText("comboselect", "wieldingsetup_"+wt, wt, " ")
				}
			}
		}

		elebyID("navcombo"+DATA.player.activescombo.viewcombo).classList.add("shown")
		elebyID("navcombo"+DATA.player.activescombo.usedcombo).classList.add("used")

		function switchCombo() {
			let comboid = parseInt(this.getAttribute("data-comboid"))
			let comboreq = parseInt(this.getAttribute("data-req"))

			if (comboreq <= DATA.player.awaken_stage) {
				DATA.player.activescombo.viewcombo = comboid

				elebyID("navcombo1").classList.remove("shown")
				elebyID("navcombo2").classList.remove("shown")
				elebyID("navcombo3").classList.remove("shown")
				elebyID("navcombo4").classList.remove("shown")
				elebyID("navcombo"+comboid).classList.add("shown")

				comboSetupRender()
				elebyID("comboskills").innerHTML = ""
				comboInventoryRender()
			}

		}
		elebyID("navcombo1").onclick = switchCombo
		elebyID("navcombo2").onclick = switchCombo
		elebyID("navcombo3").onclick = switchCombo
		elebyID("navcombo4").onclick = switchCombo


		updateAttributeByID("use-combo", "data-comboid", DATA.player.activescombo.viewcombo)
		function useCombo() {
			let comboid = parseInt(this.getAttribute("data-comboid"))
			DATA.player.activescombo.usedcombo = comboid
			killCombo()

			elebyID("navcombo1").classList.remove("used")
			elebyID("navcombo2").classList.remove("used")
			elebyID("navcombo3").classList.remove("used")
			elebyID("navcombo4").classList.remove("used")
			elebyID("navcombo"+comboid).classList.add("used")
		}
		elebyID("use-combo").onclick = useCombo

		updateTextByID("combo-setupselection",comboSetupHTML)
		function setSetup() {
			if (DATA.player.activescombo["combosetup"+DATA.player.activescombo.viewcombo] !== this.value) {
				DATA.player.activescombo["combosetup"+DATA.player.activescombo.viewcombo] = this.value
				DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo] = []
				elebyID("comboskills").innerHTML = ""
				refreshComboInventorySkillListRender()
			}
		}
		elebyID("combo-setupselection").onchange = setSetup
	}

	const comboInventoryRender = () => {
		updateAttributeByID("combolist", "data-awakenstage", DATA.player.awaken_stage)
		/* retrieve combo skills */
		/* WARNING TO DO : need to empty the #comboskills when switching combos or change setup or delete skill */
		let setupname = DATA.player.activescombo["combosetup"+DATA.player.activescombo.viewcombo]
		let rotation = getWeaponComboRotation(setupname)

		if (DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo][0] !== null) {
			let maxduration = 0
			let powerused = 0
			for (var i = 0; i < DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo].length; i++) {
				//console.log(DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo][i])
				if (i >= 99) { break }
				if (elebyID("comboskill-"+i) === null) {
					let createNewSkillElement = ELEMENTMODELS.comboskill.cloneNode(true)
					createNewSkillElement.id = "comboskill-"+i
					elebyID("comboskills").appendChild(createNewSkillElement)
				}

				let thisComboSkill = elebyID("comboskill-"+i)
				/* set the ids if its not already */
				if (elebyID("comboskill-name-"+i) === null) {
					elebySelector("#comboskill-"+i+" #comboskill-name-id").id = "comboskill-name-"+i
				}
				if (elebyID("comboskill-weapon-"+i) === null) {
					elebySelector("#comboskill-"+i+" #comboskill-weapon-id").id = "comboskill-weapon-"+i
				}
				if (elebyID("comboskill-power-"+i) === null) {
					elebySelector("#comboskill-"+i+" #comboskill-power-id").id = "comboskill-power-"+i
				}
				if (elebyID("comboskill-duration-"+i) === null) {
					elebySelector("#comboskill-"+i+" #comboskill-duration-id").id = "comboskill-duration-"+i
				}
				if (elebyID("comboskill-damage-"+i) === null) {
					elebySelector("#comboskill-"+i+" #comboskill-damage-id").id = "comboskill-damage-"+i
				}
				let weapon_item_id = DATA.player.wieldingsetups[setupname]["weapon"+rotation[i]] || 0
				let weaponObj = getItemFromInventoryByID(weapon_item_id) || {}
				
				let skilldata = getWeaponSkillCalculated(weapon_item_id, weaponObj.dmg || TABLES.defaultWeapon.dmg, weaponObj.aspd || TABLES.defaultWeapon.aspd, ACTIVES[DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo][i]-1][0])

				updateTextByID("comboskill-weapon-"+i, iText("comboskill_weapon",rotation[i],skilldata.item_dmg,skilldata.item_aspd))
				updateTextByID("comboskill-name-"+i,ACTIVES[DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo][i]-1][5])
				updateTextByID("comboskill-power-"+i,ACTIVES[DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo][i]-1][6])

				updateTextByID("comboskill-duration-"+i,iText("comboskill_stat_duration",skilldata.skill.delay))
				
				if (DATA.player.settings.aura_focus_dmg === true) {
					let damagebonusfromfocus = 0
					damagebonusfromfocus = toDecimal((getAuraStrengthenBonus()) * skilldata.skill.hit)
					updateTextByID("comboskill-damage-"+i,iText("comboskill_stat_dmg_withfocus",toDecimal(skilldata.skill.hit),damagebonusfromfocus))
				} else {
					updateTextByID("comboskill-damage-"+i,iText("comboskill_stat_dmg",toDecimal(skilldata.skill.hit)))
				}
				maxduration += skilldata.skill.delay
				powerused +=   ACTIVES[DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo][i]-1][6]
			}
			DATA.player.comboPowerUsed = powerused
			updateTextByID("combo-setup-comboduration", toDecimal(maxduration,2) || "0")
			updateTextByID("combo-setup-powerused", powerused || "0")
			updateTextByID("combo-setup-maxpower", getPassiveBonusValue("combo_power"))

			/* remove */
		}

		comboInventorySkillListRender()

		if (DATA.player.comboPowerUsed > getPassiveBonusValue("combo_power")) {
			DATA.player.activescombo["combo"+DATA.player.activescombo.viewcombo].pop()
			comboInventoryRender()
		}
	}

	const comboInventorySkillListRender = () => {
		/* list of available skills */
		for (var adata in DATA.player.actives) { 
			if (DATA.player.actives[adata].unlocked === true && canUseActive(adata, DATA.player.activescombo["combosetup"+DATA.player.activescombo.viewcombo])) {
				if (elebyID("combolist-skill-"+adata) === null) {
					refreshComboInventorySkillListRender()
				}
				updateAttributeByID("combolist-skill-"+adata, "data-canuse", "true")
				let skill_exp  	= DATA.player.actives[adata].exp
				let skill_power  	= DATA.player.actives[adata].power
				let skill_type  = DATA.player.actives[adata].type ? DATA.player.actives[adata].type : TABLES.defaultActiveSkillType
				let skill_curve = DATA.player.actives[adata].curve
				let skill_level = getSkillLevelByExp(skill_exp, skill_curve)

				updateTextBySelector("#combolist-skill-"+adata+" .cbl-level-value", skill_level.toString())

				let skillbonus = 0
				for (var bonus in TABLES.activeSkillBonusPerLevel[skill_type]) {
					if (bonus === "dmg_p") {
						skillbonus += TABLES.activeSkillBonusPerLevel[skill_type][bonus] * skill_level
					}
				}
				let skillhits = getActiveHits(adata)
				let dmgmod = damageMultiplier(skillhits[0], skillbonus)
				
				updateTextBySelector("#combolist-skill-"+adata+" .combolist-skill-dmg", iText("comboskill_dmg",percent(dmgmod[0],1)))
				updateTextBySelector("#combolist-skill-"+adata+" .combolist-skill-duration", iText("skillhit_duration_p",skillhits[1]))
			}
		}
	}

	const itemsInventoryRender = () => {
		for (var i = 0; i < DATA.player.inventory.length; i++) {
			if (DATA.player.inventory[i].hasOwnProperty("id") === false) {
				inventoryLoop()
			}
			if (!isNumeric(DATA.player.inventory[i].id)) { continue }
			let domii = elebyID("item-"+DATA.player.inventory[i].id)
			let tiID 	= DATA.player.inventory[i].id

			if (domii === null) {
				let domInventoryItemContainer 	 = elebyID("inventory-items")
				let ti 		= ELEMENTMODELS.item.cloneNode(true)
				ti.id = "item-"+tiID
				domInventoryItemContainer.appendChild(ti)
				ti.ondblclick = consumeItem

				elebySelector("#item-"+tiID+" .item-img").id = "item-img-"+tiID
				elebySelector("#item-"+tiID+" .item-name").id = "item-name-"+tiID
				elebySelector("#item-"+tiID+" .item-quality").id = "item-quality-"+tiID
				if (DATA.player.inventory[i].hasOwnProperty("type") 
					&& DATA.player.inventory[i].type === "w") {
					elebySelector("#item-"+tiID+" .item-type").id = "item-type-"+tiID
					elebySelector("#item-"+tiID+" .item-weapontype").id = "item-weapontype-"+tiID
					elebySelector("#item-"+tiID+" .dps-value").id = "item-dps-"+tiID
					elebySelector("#item-"+tiID+" .dmg-value").id = "item-dmg-"+tiID
					elebySelector("#item-"+tiID+" .aspd-value").id = "item-aspd-"+tiID
				}
				elebySelector("#item-"+tiID+" .item-effect").id = "item-effect-"+tiID
				elebySelector("#item-"+tiID+" .item-stage").id = "item-stage-"+tiID
				elebySelector("#item-"+tiID+" .item-grade").id = "item-grade-"+tiID
				elebySelector("#item-"+tiID+" .item-sell-value").id = "item-sell-"+tiID

				elebySelector("#item-"+tiID+" .item-img-stage").id = "item-img-stage-"+tiID
			}

			updateAttributeByID("item-"+tiID, "data-type", DATA.player.inventory[i].type)
			updateAttributeByID("item-"+tiID, "data-id", DATA.player.inventory[i].id)
			updateAttributeByID("item-"+tiID, "data-itemid", DATA.player.inventory[i].item_id)
			updateAttributeByID("item-"+tiID, "data-grade", DATA.player.inventory[i].grade)
			updateAttributeByID("item-"+tiID, "data-stage", DATA.player.inventory[i].stage)
			updateAttributeByID("item-"+tiID, "data-equipped", isEquipped(DATA.player.inventory[i].id) ? true : false)
			updateAttributeByID("item-img-"+tiID, "alt", DATA.player.inventory[i].item_id)
			

			updateTextByID("item-name-"+tiID, DATA.player.inventory[i].name)
			updateTextByID("item-quality-"+tiID, iText("grade_"+DATA.player.inventory[i].grade))
			if (DATA.player.inventory[i].hasOwnProperty("type") 
				&& DATA.player.inventory[i].type === "w") {
				updateTextByID("item-type-"+tiID, iText(getWeaponTypeByWeaponClass(DATA.player.inventory[i].class)))
				updateTextByID("item-weapontype-"+tiID, DATA.player.inventory[i].class)
				updateTextByID("item-dps-"+tiID, numberPrint(toDecimal(DATA.player.inventory[i].dmg/DATA.player.inventory[i].aspd,1)))
				updateTextByID("item-dmg-"+tiID, numberPrint(toDecimal(DATA.player.inventory[i].dmg)))
				updateTextByID("item-aspd-"+tiID, DATA.player.inventory[i].aspd)
			}
			if (DATA.player.inventory[i].focus !== null) {
				let itemEffects = iText("item_food_focus", numberPrint(toDecimal(DATA.player.inventory[i].focus + Math.floor(Math.sqrt(DATA.player.inventory[i].stage)))))
				if (ITEMS[DATA.player.inventory[i].item_id][6] !== null && ITEMS[DATA.player.inventory[i].item_id][6].startsWith("grim")) {
					itemEffects += "<br>" + iText("item_food_"+ITEMS[DATA.player.inventory[i].item_id][6], ITEMS[DATA.player.inventory[i].item_id][8])
					itemEffects += "<br>" + iText("item_food_grimoire_notice")
				}
				itemEffects += "<br>" + iText("item_food_notice") 
				updateTextByID("item-effect-"+tiID, itemEffects)
			}
			updateTextByID("item-stage-"+tiID, numberPrint(toDecimal(DATA.player.inventory[i].stage)))
			updateTextByID("item-grade-"+tiID, numberPrint(toDecimal(DATA.player.inventory[i].quality)))
			updateTextByID("item-sell-"+tiID, numberPrint(toDecimal(DATA.player.inventory[i].sell)))

			updateTextByID("item-img-stage-"+tiID, iText("item_lv",numberShort(toDecimal(DATA.player.inventory[i].stage))))
		}

		updateTextByID("playerekk", numberPrint(DATA.player.ekk))
	}

	const inventoryRender = () => {
		if (GAMEVAR.initialized === false) { return false}

		if (GAMEVAR.renderInitialized === false
			|| DATA.player.currentStageIsTown === true) {
			townRender()
		}
		if (GAMEVAR.renderInitialized === false
			|| elebyID("g-in-equipments").getAttribute("class").toString().includes("hidden") === false) {
			statsRender()
		}
		/* wielding setups */
		if (GAMEVAR.renderInitialized === false
			|| elebyID("g-in-wieldingsetups").getAttribute("class").toString().includes("hidden") === false) {
			wieldingSetupRender()
		}
		/* passive skills */
		if (GAMEVAR.renderInitialized === false
			|| elebyID("g-in-passives").getAttribute("class").toString().includes("hidden") === false) {
			passiveInventoryRender()
		}
		/* active skills */
		if (GAMEVAR.renderInitialized === false
			|| elebyID("g-in-actives").getAttribute("class").toString().includes("hidden") === false) {
			activeInventoryRender()
		}
		/* combo inventory */
		//comboInventoryRender()
		/* item inventory */
		if (GAMEVAR.renderInitialized === false
			|| elebyID("g-in-inventory").getAttribute("class").toString().includes("hidden") === false) {
			itemsInventoryRender()
		}
		
		if (GAMEVAR.renderInitialized === false) { 
			GAMEVAR.renderInitialized = true
			elebyID("game-loading").classList.add("hidden")
		}
	}	

	const updateProgressBar = (selector, progress, max) => {
		if (elebyID(selector.replace(/^#+/, "")+"-progress") === null) {
			elebySelector(selector+" .progress").id = selector.replace(/^#+/, "")+"-progress"
		}
		let domProgress 	 = elebyID(selector.replace(/^#+/, "")+"-progress")
		let width = Math.min(100, Math.round(progress / max * 100 * 100) / 100)

		if (domProgress.style.width !== width + '%') {
			domProgress.style.width = width + '%'
		}
	}

	const runGame = () => {
		let _battleIntervalId = setInterval(battleLoop, 1000 / 50)
		let _auraIntervalId = setInterval(auraLoop, 1000 / 1)
		let _inventoryIntervalId = setInterval(inventoryLoop, 1000 / 1)
		let _passiveIntervalId = setInterval(updatePassives, 1000 / 1)
		let _activeIntervalId = setInterval(updateActives, 1000 / 1)
		let _uiIntervalId = setInterval(battleRender, 1000 / 20)
		let _uiComboInventoryIntervalId = setInterval(comboInventoryRender, 1000 / 1)
		let _uiInventoryIntervalId = setInterval(inventoryRender, 1000 / 3)

	}

	return {
		init:init,
		run:runGame,
		charlevel:getCharacterLevelByExp,
		curexp:getCharacterCurrentExpOfLevel,
		maxexp:getCharacterCurrentLevelTotalExp,
		setExp: (exp) => {	
			DATA.player.exp_char += exp
			return DATA.player.exp_char
		},
		setAwaken: (stage) => {	
			DATA.player.awaken_stage = stage
			return DATA.player.awaken_stage
		},
		setPlayer:setPlayer,
		addItem:addItemInventory,
		setPassiveExp:updatePassive,
		setActiveExp:updateActive,
		goto: (stage) => {
			DATA.player.currentStage = stage
			updateStage(stage)
		},
		getActiveHitCount:getActiveHitCount,
		getTables: () => { return TABLES },
		getElements: () => { return ELEMENTS },
	}
}

const game = gameClass()

game.init()
game.run()
game.setPlayer()

