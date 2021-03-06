const TEXTS = {
	/* Town */
	destination_route : "<div id=\"gotoroute-{2}\" class=\"destroute\" data-route=\"\"><span class=\"destination-route\">Town #{0}</span><span class=\"destination-price\">Cost {1} Ekk</span></div>",
	destination_world : "Cost {0} Ekk",
	destination_newworld : "Cost {0} Ekk<br> {1} Focus",
	market_grimoire : "<div id=\"{3}\" class=\"grimoire-item {0}\" data-itemid=\"\">{1} <span class=\"market-item-price\">Cost {2} Ekk</span><span class=\"market-item-bonusvalue\">+{4} EXP</span></div>",
	market_food : "Food: {0}",
	market_Crystal : "",
	/* battle */
	monster_rank_0 : "",
	monster_rank_1 : "★",
	monster_rank_2 : "★★",
	monster_rank_3 : "★★★",
	monster_rank_4 : "★★★★",
	monster_rank_5 : "★★★★★",
	monster_rank_6 : "★★★★★★",
	/* counts*/
	power_regen_focus : "(+{0})",
	/*weapontypes*/
	BareHands				: "Bare hands",
	HandFist				: "Fist",
	Straightshortswords		: "Short Sword",
	Curvedshortswords		: "Curved Short Sword",
	Curvedonehandedswords	: "Curved 1-H Sword",
	Straightonehandedswords	: "One-handed Sword",
	Curvedtwohandedswords	: "Curved 2-H Sword",
	Twohandedgreatswords	: "Two-handed Sword",
	Axelikeswords			: "Axe-like Sword",
	HookSwords				: "Hook Sword",
	Daggers					: "Dagger",
	Axes					: "One-handed Axe",
	TwohandedAxes			: "Two-handed Axe",
	Spears					: "Spear",
	Polearms				: "Polearm",
	Maces					: "One-handed Mace",
	TwohandedMaces			: "Two-handed Mace",
	Shields					: "Shield",
	/*stages*/
	europe: "Europe",
	asia  : "Asia",
	special: "Unique",
	/*grades*/
	class_grade_1 : "grade-cheap",
	class_grade_2 : "grade-common",
	class_grade_3 : "grade-uncommon",
	class_grade_4 : "grade-rare",
	class_grade_5 : "grade-epic",
	class_grade_6 : "grade-legendary",
	class_grade_7 : "grade-mythical",
	/*grades*/
	grade_1 : "Cheap",
	grade_2 : "Common",
	grade_3 : "Uncommon",
	grade_4 : "Rare",
	grade_5 : "Epic",
	grade_6 : "Legendary",
	grade_7 : "Mythical",
	/*wielding setups*/
	wieldingsetup_Hand : 						"Fighter",
	wieldingsetup_SimpleSword : 				"Fencer",
	wieldingsetup_SimpleSwordAndShield : 		"Duelist",
	wieldingsetup_SimpleCurvedSword : 			"Warrior",
	wieldingsetup_SimpleCurvedSwordAndShield : 	"Gladiator",
	wieldingsetup_SimpleDagger : 				"Rogue",
	wieldingsetup_DualDagger : 					"Assassin",
	wieldingsetup_TwohandedSword : 				"Knight",
	wieldingsetup_TwohandedCurvedSword : 		"Samurai",
	wieldingsetup_Barbarian : 					"Barbarian",
	wieldingsetup_Centurion : 					"Centurion",
	wieldingsetup_Berserker : 					"Berserker",
	wieldingsetup_Berserker2 : 					"Berserker's Fury",
	wieldingsetup_Paladin : 					"Paladin",
	wieldingsetup_Crusader : 					"Crusader",
	wieldingsetup_HolyKnight : 					"Holy Knight",
	wieldingsetup_Templar : 					"Templar",
	wieldingsetup_Lancer : 						"Lancer",
	wieldingsetup_ShaolinFist : 				"Shaolin: Explosive Style",
	wieldingsetup_ShaolinSpear : 				"Shaolin: Emperor's Style",
	wieldingsetup_ShaolinMaster : 				"Shaolin: Drunken Style",
	wieldingsetup_God : 						"God",
	weaponlist_weapon : "<span class=\"weapontypename\">{0}</span>",
	wswsdpsaspd : "{0} <span class=\"ws-ws-dps\">DPS</span> | {1} <span class=\"ws-ws-aspd\">AR</span>",
	/*passives*/
	charlevel : "Requires character <span class=\"charlevel\">level {0}</span>",
	awaken : "Requires character <span class=\"awakeningstage\">Awakening Stage {0}</span>",
	dmg_f : "Attacks hit for <span class=\"bonusflat\">{0}</span> additional damage",
	dmg_p : "Attacks deal <span class=\"bonuspercent\">+{0}%</span> more damage",
	focus_dmg_p : "Aura: Stregthen <span class=\"bonuspercent\">+{0}%</span> Damage",
	focus_idle_regen : "Focus Regeneration in Town increased by <span class=\"bonusflat\">{0}</span>",
	combo_power : "Max Power <span class=\"bonusflat\">+{0}</span>",
	combo_regen : "Power regeneration <span class=\"bonusflat\">+{0}</span>",
	combo_regen_sec : "Power regeneration tick duration : <span class=\"bonusflat\">{0}</span> seconds",
	inventory_base  : "Inventory of <span class=\"bonusflat\">{0}</span> slots",
	inventory        : "Extend the inventory by <span class=\"bonusflat\">{0}</span> slots",
	autosell_grade  : "Enable auto-sell for <span class=\"effecttext\">{0}</span> quality",
	weapontype		: "Can use <span class=\"effecttext\">{0}</span> type weapons",
	mobtimer_duration		: "Increase the duration of stun effect by <span class=\"bonusflat\">{0}</span> second",
	/*actives*/
	activeskillsetupselect : "<option value=\"{1}\" {2}>{0}</option>",
	activeskillsetupselected : "selected=\"selected\"",
	reqpassive : "Requires <span class=\"passiveskillname\">{0}</span> passive skill <span class=\"skilllevel\">level {1}</span>",
	reqactive : "Requires <span class=\"activeskillname\">{0}</span> active skill <span class=\"skilllevel\">level {1}</span> ",
	activebonus_dmg_p : "Increases skill damage by <span class=\"bonuspercent\"><span class=\"as-bonus\">{1}</span>%</span>",
	activebonus_defpen_p : "Increases defense penetration by <span class=\"bonuspercent\"><span class=\"as-bonus\">{1}</span>%</span>",
	activebonus_mobtimer_p : "Increases the chance to stun the enemy (extend timer) by <span class=\"bonuspercent\"><span class=\"as-bonus\">{1}</span>%</span>",
	skill_power : "<span class=\"power\">{0} Power</span>",
	skill_hit : "<div class=\"skillhits\">{0} Type <span class=\"as-hit\">{1}-hit</span> Skill</div>",
	astype_slash : "Slash",
	astype_thrust : "Thrust",
	astype_blunt : "Blunt",
	skillhit_dmg_p : "Deals <span class=\"activedmgtruepercent\">{2}%</span> (<span class=\"activerawpercent\">{0}%</span> x <span class=\"bonuspercent\">{1}</span>) of Weapon Damage",
	skillhit_duration_p : "Duration: <span class=\"activedmgtruepercent\">{0}%</span> of Weapon Attack Rate",
	list_of_setups_using_active : "<hr>List of Wielding Setups using this Active Skill<br>",
	/* Combos */
	comboselect : "<option value=\"{1}\" {2}>{0}</option>",
	comboselected : "selected=\"selected\"",
	comboskill_dmg : "Deals <span class=\"activedmgtruepercent\">{0}%</span> of Weapon Damage",
	comboskill_weapon : "<span class=\"comborotationid\">W#{0}</span> {1}<span class=\"unit\">DMG</span> | {2}<span class=\"unit\">AR</span>",
	comboskill_stat_duration : 	"{0}s",
	comboskill_stat_dmg : 		"{0}",
	comboskill_stat_dmg_withfocus : 		"{0} <span class=\"orangetext\">(+{1})</span>",
	/* Item */
	item_lv : "Lv.{0}",
	item_dps_bonus_f : "<span class=\"bonusdmgordps\">+{0}</span>",
	item_dmg_bonus_f : "<span class=\"bonusdmgordps\">+{0}</span>",
	item_food_focus : "Gives {0} Focus after comsuming",
	item_food_grim_aura_strengthen : "Gives {0} EXP to Aura: Strengthen",
	item_food_grim_aura_concentration : "Gives {0} EXP to Aura: Concentration",
	item_food_grim_aura_battletrance : "Gives {0} EXP to Aura: Battle Trance",
	item_food_grimoire_notice : "This item can't be sold",
	item_food_notice : "<span class=\"item-note\">Double click to consume</span>",
	item_bonus_effect_damage_p : "Damage increased by <span class=\"bonuspercent\">{0}%</span><br>",
	item_bonus_effect_defpen_p : "Defense Penetration increased by <span class=\"bonuspercent\">{0}%</span><br>",
	item_bonus_effect_stunrate_p : "Chance to stun increased by <span class=\"bonuspercent\">{0}%</span><br>",
	item_bonus_effect_stunduration_f : "Stun duration increased by <span class=\"bonusflat\">{0}</span> seconds<br>",
}