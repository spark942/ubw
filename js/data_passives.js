const PASSIVES = [[1,"charlevel",1,"focusdamage","Focus: Damage",null,"dmg_f",10,"dmg_p",0.2,"focus_dmg_p",1,"",null,"",null],[2,"charlevel",10,"focusdamage","Focus: Damage 2",null,"dmg_f",25,"dmg_p",0.3,"focus_dmg_p",0.5,"",null,"",null],[3,"charlevel",20,"focusdamage","Focus: Damage 3",null,"dmg_f",80,"dmg_p",0.5,"focus_dmg_p",0.5,"",null,"",null],[4,"charlevel",30,"focusdamage","Focus: Damage 4",null,"dmg_f",160,"dmg_p",0.5,"focus_dmg_p",0.5,"",null,"",null],[5,"charlevel",50,"focusdamage","Focus: Damage 5",null,"dmg_f",300,"dmg_p",0.5,"focus_dmg_p",0.5,"",null,"",null],[6,"charlevel",1,"combopower","Combo",null,"combo_power",5,"combo_regen",6,"combo_regen_sec",10,"",null,"",null],[7,"charlevel",2,"combopower","Combo 2",null,"combo_power",2,"combo_regen",1,"",null,"",null,"",null],[8,"charlevel",3,"combopower","Combo 3",null,"combo_power",3,"combo_regen",1,"",null,"",null,"",null],[9,"charlevel",5,"combopower","Combo 4",null,"combo_power",3,"combo_regen",1,"",null,"",null,"",null],[10,"charlevel",7,"combopower","Combo 5",null,"combo_power",4,"combo_regen",1,"",null,"",null,"",null],[11,"charlevel",10,"combopower","Combo 6",null,"combo_power",4,"combo_regen",2,"",null,"",null,"",null],[12,"charlevel",15,"combopower","Combo 7",null,"combo_power",4,"combo_regen",1,"",null,"",null,"",null],[13,"charlevel",20,"combopower","Combo 8",null,"combo_power",5,"combo_regen",2,"",null,"",null,"",null],[14,"charlevel",25,"combopower","Combo 9",null,"combo_power",5,"combo_regen",1,"",null,"",null,"",null],[15,"charlevel",30,"combopower","Combo 10",null,"combo_power",5,"combo_regen",2,"",null,"",null,"",null],[16,"charlevel",35,"combopower","Combo 11",null,"combo_power",5,"combo_regen",1,"",null,"",null,"",null],[17,"charlevel",40,"combopower","Combo 12",null,"combo_power",6,"combo_regen",2,"",null,"",null,"",null],[18,"charlevel",45,"combopower","Combo 13",null,"combo_power",6,"combo_regen",1,"",null,"",null,"",null],[19,"charlevel",50,"combopower","Combo 14",null,"combo_power",6,"combo_regen",3,"combo_regen_sec",-1,"",null,"",null],[20,"charlevel",60,"combopower","Combo 15",null,"combo_power",6,"combo_regen",3,"",null,"",null,"",null],[21,"charlevel",70,"combopower","Combo 16",null,"combo_power",6,"combo_regen",3,"",null,"",null,"",null],[22,"charlevel",80,"combopower","Combo 17",null,"combo_power",10,"combo_regen",3,"combo_regen_sec",-1,"",null,"",null],[23,"charlevel",90,"combopower","Combo 18",null,"combo_power",10,"combo_regen",3,"",null,"",null,"",null],[24,"charlevel",100,"combopower","Combo 19",null,"combo_power",10,"combo_regen",3,"",null,"",null,"",null],[25,"charlevel",1,"inventory","Inventory",null,"inventory_base",20,"",null,"",null,"",null,"",null],[26,"charlevel",2,"inventory_limit","Inventory: Extended Slot Limit",null,"inventory",4,"",null,"",null,"",null,"",null],[27,"charlevel",3,"inventory_limit","Inventory: Extended Slot Limit 2",null,"inventory",4,"",null,"",null,"",null,"",null],[28,"charlevel",5,"inventory_limit","Inventory: Extended Slot Limit 3",null,"inventory",4,"",null,"",null,"",null,"",null],[29,"charlevel",7,"inventory_limit","Inventory: Extended Slot Limit 4",null,"inventory",4,"",null,"",null,"",null,"",null],[30,"charlevel",10,"inventory_limit","Inventory: Extended Slot Limit 5",null,"inventory",4,"",null,"",null,"",null,"",null],[31,"charlevel",13,"inventory_limit","Inventory: Extended Slot Limit 6",null,"inventory",4,"",null,"",null,"",null,"",null],[32,"charlevel",16,"inventory_limit","Inventory: Extended Slot Limit 7",null,"inventory",4,"",null,"",null,"",null,"",null],[33,"charlevel",19,"inventory_limit","Inventory: Extended Slot Limit 8",null,"inventory",4,"dmg_p",0.4,"",null,"",null,"",null],[34,"charlevel",23,"inventory_limit","Inventory: Extended Slot Limit 9",null,"inventory",4,"",null,"",null,"",null,"",null],[35,"charlevel",27,"inventory_limit","Inventory: Extended Slot Limit 10",null,"inventory",4,"",null,"",null,"",null,"",null],[36,"charlevel",31,"inventory_limit","Inventory: Extended Slot Limit 11",null,"inventory",4,"",null,"",null,"",null,"",null],[37,"charlevel",35,"inventory_limit","Inventory: Extended Slot Limit 12",null,"inventory",4,"",null,"",null,"",null,"",null],[38,"charlevel",40,"inventory_limit","Inventory: Extended Slot Limit 13",null,"inventory",4,"",null,"",null,"",null,"",null],[39,"charlevel",45,"inventory_limit","Inventory: Extended Slot Limit 14",null,"inventory",4,"",null,"",null,"",null,"",null],[40,"charlevel",50,"inventory_limit","Inventory: Extended Slot Limit 15",null,"inventory",8,"dmg_p",0.6,"",null,"",null,"",null],[41,"charlevel",55,"inventory_limit","Inventory: Extended Slot Limit 16",null,"inventory",4,"",null,"",null,"",null,"",null],[42,"charlevel",61,"inventory_limit","Inventory: Extended Slot Limit 17",null,"inventory",4,"",null,"",null,"",null,"",null],[43,"charlevel",67,"inventory_limit","Inventory: Extended Slot Limit 18",null,"inventory",4,"",null,"",null,"",null,"",null],[44,"charlevel",73,"inventory_limit","Inventory: Extended Slot Limit 19",null,"inventory",4,"",null,"",null,"",null,"",null],[45,"charlevel",79,"inventory_limit","Inventory: Extended Slot Limit 20",null,"inventory",4,"",null,"",null,"",null,"",null],[46,"charlevel",86,"inventory_limit","Inventory: Extended Slot Limit 21",null,"inventory",4,"",null,"",null,"",null,"",null],[47,"charlevel",93,"inventory_limit","Inventory: Extended Slot Limit 22",null,"inventory",4,"dmg_p",0.8,"",null,"",null,"",null],[48,"charlevel",100,"inventory_limit","Inventory: Extended Slot Limit 23",null,"inventory",8,"",null,"",null,"",null,"",null],[49,"charlevel",10,"autosell","Auto sell: Cheap Quality",null,"autosell_grade","grade_1","",null,"",null,"",null,"",null],[50,"charlevel",20,"autosell","Auto sell: Common Quality",null,"autosell_grade","grade_2","",null,"",null,"",null,"",null],[51,"charlevel",30,"autosell","Auto sell: Uncommon Quality",null,"autosell_grade","grade_3","",null,"",null,"",null,"",null],[52,"charlevel",50,"autosell","Auto sell: Rare Quality",null,"autosell_grade","grade_4","",null,"",null,"",null,"",null],[53,"charlevel",80,"autosell","Auto sell: Epic Quality",null,"autosell_grade","grade_5","",null,"",null,"",null,"",null],[54,"charlevel",1,"wield_martialart","Martial Art",1,"weapontype","BareHands","weapontype","HandFist","",null,"",null,"",null],[55,"charlevel",1,"wield_1hsword","One-handed Sword",1,"weapontype","Straightshortswords","weapontype","Straightonehandedswords","",null,"",null,"",null],[56,"charlevel",1,"wield_1hcurvedsword","One-handed Curved Sword",1,"weapontype","Curvedshortswords","weapontype","Curvedonehandedswords","weapontype","Axelikeswords","",null,"",null],[57,"charlevel",5,"wield_dagger","Dagger",1,"weapontype","Daggers","",null,"",null,"",null,"",null],[58,"charlevel",10,"wield_2hsword","Two-handed Sword",1,"weapontype","Twohandedgreatswords","",null,"",null,"",null,"",null],[59,"charlevel",10,"wield_2hcurvedsword","Two-handed Curved Sword",1,"weapontype","Curvedtwohandedswords","",null,"",null,"",null,"",null],[60,"charlevel",15,"wield_1haxe","One-handed Axe",1,"weapontype","Axes","",null,"",null,"",null,"",null],[61,"charlevel",20,"wield_spear","Spear",1,"weapontype","Spears","",null,"",null,"",null,"",null],[62,"charlevel",25,"wield_2haxe","Two-handed Axe",1,"weapontype","TwohandedAxes","",null,"",null,"",null,"",null],[63,"charlevel",30,"wield_mace","Mace",1,"weapontype","Maces","",null,"",null,"",null,"",null],[64,"charlevel",35,"wield_polearm","Polearm",1,"weapontype","Polearms","",null,"",null,"",null,"",null],[65,"charlevel",40,"wield_2hmace","Two-handed Mace",1,"weapontype","TwohandedMaces","",null,"",null,"",null,"",null],[66,"charlevel",41,"wield_shield","Shield",1,"weapontype","Shields","",null,"",null,"",null,"",null],[67,"charlevel",60,"wield_hook","Hook Sword",1,"weapontype","HookSwords","",null,"",null,"",null,"",null],[68,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[69,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[70,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[71,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[72,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[73,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[74,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[75,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[76,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[77,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[78,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[79,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[80,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[81,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[82,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[83,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[84,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[85,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[86,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[87,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[88,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[89,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[90,"charlevel",50,"mindrest","Mind Rest",null,"focus_idle_regen",2,"",null,"",null,"",null,"",null],[91,"charlevel",80,"mindrest","Mind Rest 2",null,"focus_idle_regen",6,"",null,"",null,"",null,"",null],[92,"awaken",1,"mindrest","Mind Rest 3",null,"focus_idle_regen",10,"",null,"",null,"",null,"",null],[93,"awaken",10,"mindrest","Mind Rest 4",null,"focus_idle_regen",20,"",null,"",null,"",null,"",null],[94,"awaken",100,"mindrest","Mind Rest 5",null,"focus_idle_regen",20,"",null,"",null,"",null,"",null],[95,"awaken",1000,"mindrest","Mind Rest 6",null,"focus_idle_regen",100,"",null,"",null,"",null,"",null],[96,"awaken",5000,"mindrest","Mind Rest 7",null,"focus_idle_regen",200,"",null,"",null,"",null,"",null],[97,"awaken",10000,"mindrest","Mind Rest 8",null,"focus_idle_regen",200,"",null,"",null,"",null,"",null],[98,"awaken",30000,"mindrest","Mind Rest 9",null,"focus_idle_regen",500,"",null,"",null,"",null,"",null],[99,"awaken",100000,"mindrest","Mind Rest 10",null,"focus_idle_regen",1000,"",null,"",null,"",null,"",null],[100,"awaken",999999,"placeholder","???",null,"",null,"",null,"",null,"",null,"",null],[101,"awaken",1,"awakening","Force of the Mountain",null,"inventory",10,"dmg_f",750,"dmg_p",1,"combo_regen",1,"mobtimer_duration",1],[102,"awaken",2,"awakening","Force of the Sky",null,"inventory",10,"focus_dmg_p",3,"dmg_p",2,"combo_power",5,"mobtimer_duration",1],[103,"awaken",3,"awakening","Force of the Sea",null,"combo_power",3,"combo_regen",1,"inventory",10,"combo_power",3,"mobtimer_duration",1],[104,"awaken",5,"awakening","Thunder",null,"dmg_f",6887,"combo_power",12,"inventory",10,"combo_power",3,"mobtimer_duration",1],[105,"awaken",10,"awakening","Elder Wisdom",null,"dmg_f",16959,"dmg_p",3,"focus_dmg_p",3,"combo_regen",1,"mobtimer_duration",1],[106,"awaken",20,"awakening","Elder Wisdom 2",null,"dmg_f",41759,"dmg_p",5,"focus_dmg_p",3,"combo_power",3,"mobtimer_duration",1],[107,"awaken",30,"awakening","Elder Wisdom 3",null,"dmg_f",70741,"dmg_p",7,"focus_dmg_p",20,"combo_power",3,"mobtimer_duration",1],[108,"awaken",50,"awakening","Spirit Awakening",null,"dmg_f",137429,"dmg_p",9,"focus_dmg_p",3,"combo_power",20,"combo_regen_sec",-1],[109,"awaken",60,"awakening","Spirit Awakening 2",null,"dmg_f",174186,"dmg_p",11,"focus_dmg_p",3,"combo_power",10,"mobtimer_duration",1],[110,"awaken",70,"awakening","Spirit Awakening 3",null,"dmg_f",212836,"dmg_p",13,"focus_dmg_p",3,"combo_power",10,"mobtimer_duration",1],[111,"awaken",80,"awakening","Spirit Awakening 4",null,"dmg_f",253183,"dmg_p",15,"focus_dmg_p",3,"combo_power",10,"mobtimer_duration",1],[112,"awaken",100,"awakening","Spirit Awakening 5",null,"dmg_f",338391,"dmg_p",17,"focus_dmg_p",20,"combo_power",10,"mobtimer_duration",1],[113,"awaken",150,"awakening","Spirit of the Nature",null,"dmg_f",573241,"dmg_p",19,"focus_dmg_p",5,"combo_regen",1,"mobtimer_duration",1],[114,"awaken",200,"awakening","Spirit of the Nature 2",null,"dmg_f",833216,"dmg_p",21,"focus_dmg_p",5,"combo_power",10,"mobtimer_duration",1],[115,"awaken",250,"awakening","Spirit of the Nature 3",null,"dmg_f",1113630,"dmg_p",23,"focus_dmg_p",5,"combo_power",10,"mobtimer_duration",1],[116,"awaken",350,"awakening","Spirit of the Demon",null,"dmg_f",1724675,"dmg_p",25,"focus_dmg_p",8,"combo_power",20,"combo_regen_sec",-1],[117,"awaken",425,"awakening","Spirit of the Demon 2",null,"dmg_f",2219854,"dmg_p",27,"focus_dmg_p",8,"combo_power",10,"mobtimer_duration",1],[118,"awaken",500,"awakening","Spirit of the Demon 3",null,"dmg_f",2742078,"dmg_p",29,"focus_dmg_p",8,"combo_power",10,"mobtimer_duration",1],[119,"awaken",800,"awakening","Spirit of the Dragon",null,"dmg_f",5051680,"dmg_p",31,"focus_dmg_p",13,"combo_regen",1,"mobtimer_duration",1],[120,"awaken",1200,"awakening","Spirit of the Dragon 2",null,"dmg_f",8557650,"dmg_p",33,"focus_dmg_p",13,"combo_power",10,"mobtimer_duration",1],[121,"awaken",1600,"awakening","Spirit of the Dragon 3",null,"dmg_f",12438697,"dmg_p",35,"focus_dmg_p",13,"combo_power",10,"mobtimer_duration",1],[122,"awaken",2500,"awakening","Spirit of the Phoenix",null,"dmg_f",22219840,"dmg_p",37,"focus_dmg_p",25,"combo_power",20,"combo_regen_sec",-1],[123,"awaken",4000,"awakening","Spirit of the Phoenix 2",null,"dmg_f",40935199,"dmg_p",39,"focus_dmg_p",25,"combo_power",10,"mobtimer_duration",1],[124,"awaken",6000,"awakening","Spirit of the Phoenix 3",null,"dmg_f",69345063,"dmg_p",41,"focus_dmg_p",50,"combo_power",10,"mobtimer_duration",1]];