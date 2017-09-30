const PASSIVES = [
    [ 1,"charlevel",1,"focusdamage","Focus: Damage",null,"dmg_f",10,"dmg_p",0.2,"focus_dmg_p",1,"",null,"",null],
    [ 2,"charlevel",5,"focusdamage","Focus: Damage 2",null,"dmg_f",25,"dmg_p",0.3,"focus_dmg_p",0.5,"",null,"",null],
    [ 3,"charlevel",10,"focusdamage","Focus: Damage 3",null,"dmg_f",80,"dmg_p",0.5,"focus_dmg_p",0.5,"",null,"",null],
    [ 4,"charlevel",25,"focusdamage","Focus: Damage 4",null,"dmg_f",160,"dmg_p",0.5,"focus_dmg_p",0.5,"",null,"",null],
    [ 5,"charlevel",50,"focusdamage","Focus: Damage 5",null,"dmg_f",300,"dmg_p",0.5,"focus_dmg_p",0.5,"",null,"",null],
    [ 6,"charlevel",1,"combopower","Combo",null,"combo_power",5,"combo_regen",6,"combo_regen_sec",10,"",null,"",null],
    [ 7,"charlevel",2,"combopower","Combo 2",null,"combo_power",2,"combo_regen",1,"",null,"",null,"",null],
    [ 8,"charlevel",3,"combopower","Combo 3",null,"combo_power",3,"combo_regen",1,"",null,"",null,"",null],
    [ 9,"charlevel",5,"combopower","Combo 4",null,"combo_power",3,"combo_regen",1,"",null,"",null,"",null],
    [ 10,"charlevel",7,"combopower","Combo 5",null,"combo_power",4,"combo_regen",1,"",null,"",null,"",null],
    [ 11,"charlevel",10,"combopower","Combo 6",null,"combo_power",4,"combo_regen",2,"",null,"",null,"",null],
    [ 12,"charlevel",15,"combopower","Combo 7",null,"combo_power",4,"combo_regen",1,"",null,"",null,"",null],
    [ 13,"charlevel",20,"combopower","Combo 8",null,"combo_power",5,"combo_regen",2,"",null,"",null,"",null],
    [ 14,"charlevel",25,"combopower","Combo 9",null,"combo_power",5,"combo_regen",1,"",null,"",null,"",null],
    [ 15,"charlevel",30,"combopower","Combo 10",null,"combo_power",5,"combo_regen",2,"",null,"",null,"",null],
    [ 16,"charlevel",35,"combopower","Combo 11",null,"combo_power",5,"combo_regen",1,"",null,"",null,"",null],
    [ 17,"charlevel",40,"combopower","Combo 12",null,"combo_power",6,"combo_regen",2,"",null,"",null,"",null],
    [ 18,"charlevel",45,"combopower","Combo 13",null,"combo_power",6,"combo_regen",1,"",null,"",null,"",null],
    [ 19,"charlevel",50,"combopower","Combo 14",null,"combo_power",6,"combo_regen",3,"combo_regen_sec",-1,"",null,"",null],
    [ 20,"charlevel",60,"combopower","Combo 15",null,"combo_power",6,"combo_regen",3,"",null,"",null,"",null],
    [ 21,"charlevel",70,"combopower","Combo 16",null,"combo_power",6,"combo_regen",3,"",null,"",null,"",null],
    [ 22,"charlevel",80,"combopower","Combo 17",null,"combo_power",10,"combo_regen",3,"combo_regen_sec",-1,"",null,"",null],
    [ 23,"charlevel",90,"combopower","Combo 18",null,"combo_power",10,"combo_regen",3,"",null,"",null,"",null],
    [ 24,"charlevel",100,"combopower","Combo 19",null,"combo_power",10,"combo_regen",3,"",null,"",null,"",null],
    [ 25,"charlevel",1,"inventory","Inventory",null,"inventory_base",20,"",null,"",null,"",null,"",null],
    [ 26,"charlevel",2,"inventory_limit","Inventory: Extended Slot Limit",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 27,"charlevel",3,"inventory_limit","Inventory: Extended Slot Limit 2",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 28,"charlevel",5,"inventory_limit","Inventory: Extended Slot Limit 3",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 29,"charlevel",7,"inventory_limit","Inventory: Extended Slot Limit 4",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 30,"charlevel",10,"inventory_limit","Inventory: Extended Slot Limit 5",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 31,"charlevel",13,"inventory_limit","Inventory: Extended Slot Limit 6",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 32,"charlevel",16,"inventory_limit","Inventory: Extended Slot Limit 7",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 33,"charlevel",19,"inventory_limit","Inventory: Extended Slot Limit 8",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 34,"charlevel",23,"inventory_limit","Inventory: Extended Slot Limit 9",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 35,"charlevel",27,"inventory_limit","Inventory: Extended Slot Limit 10",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 36,"charlevel",31,"inventory_limit","Inventory: Extended Slot Limit 11",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 37,"charlevel",35,"inventory_limit","Inventory: Extended Slot Limit 12",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 38,"charlevel",40,"inventory_limit","Inventory: Extended Slot Limit 13",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 39,"charlevel",45,"inventory_limit","Inventory: Extended Slot Limit 14",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 40,"charlevel",50,"inventory_limit","Inventory: Extended Slot Limit 15",null,"inventory",8,"",null,"",null,"",null,"",null],
    [ 41,"charlevel",55,"inventory_limit","Inventory: Extended Slot Limit 16",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 42,"charlevel",61,"inventory_limit","Inventory: Extended Slot Limit 17",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 43,"charlevel",67,"inventory_limit","Inventory: Extended Slot Limit 18",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 44,"charlevel",73,"inventory_limit","Inventory: Extended Slot Limit 19",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 45,"charlevel",79,"inventory_limit","Inventory: Extended Slot Limit 20",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 46,"charlevel",86,"inventory_limit","Inventory: Extended Slot Limit 21",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 47,"charlevel",93,"inventory_limit","Inventory: Extended Slot Limit 22",null,"inventory",4,"",null,"",null,"",null,"",null],
    [ 48,"charlevel",100,"inventory_limit","Inventory: Extended Slot Limit 23",null,"inventory",8,"",null,"",null,"",null,"",null],
    [ 49,"charlevel",10,"autosell","Auto sell: Cheap Quality",null,"autosell_grade","grade_1","",null,"",null,"",null,"",null],
    [ 50,"charlevel",20,"autosell","Auto sell: Common Quality",null,"autosell_grade","grade_2","",null,"",null,"",null,"",null],
    [ 51,"charlevel",30,"autosell","Auto sell: Uncommon Quality",null,"autosell_grade","grade_3","",null,"",null,"",null,"",null],
    [ 52,"charlevel",50,"autosell","Auto sell: Rare Quality",null,"autosell_grade","grade_4","",null,"",null,"",null,"",null],
    [ 53,"charlevel",80,"autosell","Auto sell: Epic Quality",null,"autosell_grade","grade_5","",null,"",null,"",null,"",null],
    [ 54,"charlevel",1,"wield_martialart","Martial Art",1,"weapontype","BareHands","weapontype","HandFist","",null,"",null,"",null],
    [ 55,"charlevel",1,"wield_1hsword","One-handed Sword",1,"weapontype","Straightshortswords","weapontype","Straightonehandedswords","weapontype","Axelikeswords","",null,"",null],
    [ 56,"charlevel",1,"wield_1hcurvedsword","One-handed Curved Sword",1,"weapontype","Curvedshortswords","weapontype","Curvedonehandedswords","",null,"",null,"",null],
    [ 57,"charlevel",5,"wield_dagger","Dagger",1,"weapontype","Daggers","",null,"",null,"",null,"",null],
    [ 58,"charlevel",10,"wield_2hsword","Two-handed Sword",1,"weapontype","Twohandedgreatswords","",null,"",null,"",null,"",null],
    [ 59,"charlevel",10,"wield_2hcurvedsword","Two-handed Curved Sword",1,"weapontype","Curvedtwohandedswords","",null,"",null,"",null,"",null],
    [ 60,"charlevel",15,"wield_1haxe","One-handed Axe",1,"weapontype",null,"",null,"",null,"",null,"",null],
    [ 61,"charlevel",20,"wield_spear","Spear",1,"weapontype",null,"",null,"",null,"",null,"",null],
    [ 62,"charlevel",25,"wield_2haxe","Two-handed Axe",1,"weapontype",null,"",null,"",null,"",null,"",null],
    [ 63,"charlevel",30,"wield_mace","Mace",1,"weapontype",null,"",null,"",null,"",null,"",null],
    [ 64,"charlevel",35,"wield_polearm","Polearm",1,"weapontype",null,"",null,"",null,"",null,"",null],
    [ 65,"charlevel",40,"wield_hook","Hook Sword",1,"weapontype","HookSwords","",null,"",null,"",null,"",null],
    [ 66,"awaken",1,"awakening","Force of the Mountain",null,"inventory",10,"dmg_f",600,"combo_regen",5,"",null,"",null],
    [ 67,"awaken",2,"awakening","Force of the Sky",null,"inventory",10,"focus_dmg_p",3,"combo_power",5,"",null,"",null],
    [ 68,"awaken",3,"awakening","Force of the Sea",null,"combo_power",3,"combo_regen",7,"inventory",10,"",null,"",null],
    [ 69,"awaken",5,"awakening","Thunder",null,"dmg_f",2500,"combo_power",12,"inventory",10,"",null,"",null],
    [ 70,"awaken",10,"awakening","Elder Wisdom",null,"dmg_p",1,"focus_dmg_p",10,"combo_power",10,"combo_regen",8,"combo_regen_sec",-1],
    [ 71,"awaken",20,"awakening","Spirit Awakening",null,"dmg_f",2500,"dmg_p",1,"combo_power",10,"combo_regen",3,"combo_regen_sec",-1],
    [ 72,"awaken",30,"awakening","Spirit of the Nature",null,"dmg_f",4500,"dmg_p",1,"combo_power",10,"combo_regen",3,"combo_regen_sec",-1],
    [ 73,"awaken",50,"awakening","Spirit of the Demon",null,"dmg_f",6500,"dmg_p",2,"combo_power",10,"combo_regen",3,"combo_regen_sec",-1],
    [ 74,"awaken",70,"awakening","Spirit of the Dragon",null,"dmg_f",8500,"dmg_p",2,"combo_power",10,"combo_regen",3,"combo_regen_sec",-1],
    [ 75,"awaken",100,"awakening","Spirit of the Phoenix",null,"dmg_f",12500,"dmg_p",3,"combo_power",10,"combo_regen",3,"combo_regen_sec",-1]
];