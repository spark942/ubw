const TEXTS = {
	/* Town */
	destination_route : "<div id=\"gotoroute-{2}\" class=\"destroute\" data-route=\"\"><span class=\"destination-route\">Route #{0}</span><span class=\"destination-price\">Cost {1} Ekk</span></div>",
	destination_world : "Cost {0} Ekk",
	/* battle */
	monster_rank_0 : "",
	monster_rank_1 : "★",
	monster_rank_2 : "★★",
	monster_rank_3 : "★★★",
	monster_rank_4 : "★★★★",
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
	/*stages*/
	europe: "Europe",
	asia  : "Asia",
	special: "Unique",
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
	wieldingsetup_TwohandedSword : 				"Knight",
	wieldingsetup_TwohandedCurvedSword : 		"Samurai",
	wieldingsetup_DualDagger : 					"Assassin",
	wieldingsetup_God : 						"God",
	weaponlist_weapon : "<span class=\"weapontypename\">{0}</span>",
	wswsdpsaspd : "{0} <span class=\"ws-ws-dps\">DPS</span> | {1} <span class=\"ws-ws-aspd\">AR</span>",
	/*passives*/
	charlevel : "Requires character <span class=\"charlevel\">level {0}</span>",
	awaken : "Requires character <span class=\"awakeningstage\">Awakening Stage {0}</span>",
	dmg_f : "Attacks hit for <span class=\"bonusflat\">{0}</span> additional damage",
	dmg_p : "Attacks deal <span class=\"bonuspercent\">+{0}%</span> more damage",
	focus_dmg_p : "Focus <span class=\"bonuspercent\">+{0}%</span> Damage",
	combo_power : "Max Power <span class=\"bonusflat\">+{0}</span>",
	combo_regen : "Power regeneration <span class=\"bonusflat\">+{0}</span>",
	combo_regen_sec : "Power regeneration ticks : <span class=\"bonusflat\">{0}</span> seconds",
	inventory_base  : "Inventory of <span class=\"bonusflat\">{0}</span> slots",
	inventory        : "Extend the inventory by <span class=\"bonusflat\">{0}</span> slots",
	autosell_grade  : "Enable auto-sell for <span class=\"effecttext\">{0}</span> quality",
	weapontype		: "Can use <span class=\"effecttext\">{0}</span> type weapons",
	/*actives*/
	reqpassive : "Requires <span class=\"passiveskillname\">{0}</span> passive skill <span class=\"skilllevel\">level {1}</span>",
	reqactive : "Requires <span class=\"activeskillname\">{0}</span> active skill <span class=\"skilllevel\">level {1}</span> ",
	activebonus_dmg_p : "Increases skill damage by <span class=\"bonuspercent\"><span class=\"as-bonus\">{0}</span>%</span>",
	activebonus_defpen_p : "Increases defense penetration by <span class=\"bonuspercent\"><span class=\"as-bonus\">{0}</span>%</span>",
	activebonus_mobtimer_p : "Increases the chance to add 1 sec to the monster timer by <span class=\"bonuspercent\"><span class=\"as-bonus\">{0}</span>%</span>",
	skill_power : "<span class=\"power\">{0} Power</span>",
	skill_hit : "<div class=\"skillhits\">{0} Type <span class=\"as-hit\">{1}-hit</span> Skill</div>",
	astype_slash : "Slash",
	astype_thrust : "Thrust",
	astype_blunt : "Blunt",
	skillhit_dmg_p : "Deals <span class=\"activedmgtruepercent\">{2}%</span> (<span class=\"activerawpercent\">{0}%</span> x <span class=\"bonuspercent\">{1}</span>) of Weapon Damage",
	skillhit_duration_p : "Duration: <span class=\"activedmgtruepercent\">{0}%</span> of Weapon Attack Speed",
	/* Combos */
	comboselect : "<option value=\"{1}\" {2}>{0}</option>",
	comboselected : "selected=\"selected\"",
	comboskill_dmg : "Deals <span class=\"activedmgtruepercent\">{0}%</span> of Weapon Damage",
	comboskill_weapon : "<span class=\"comborotationid\">W#{0}</span> {1}<span class=\"unit\">DMG</span> | {2}<span class=\"unit\">AS</span>",
	comboskill_stat_duration : 	"{0}s",
	comboskill_stat_dmg : 		"{0}",
	comboskill_stat_dmg_withfocus : 		"{0} <span class=\"orangetext\">(+{1})</span>",
	/* Item */
	item_lv : "Lv.{0}",
	item_food_focus : "Gives {0} Focus after comsuming<br><span class=\"item-note\">Double click to consume</span>"
}