const ACTIVES = [
    [ 1,"charlevel",1,"blunt_3","punch","Punch",1,"God","Hand",null,null,null,null,null,null,null,0.6,0.8,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 2,"punch",30,"blunt_4","strongpunch","Strong Punch",3,"God","Hand",null,null,null,null,null,null,null,0.7,2.95,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 3,"wield_martialart",30,"blunt_5","seriesofpunch","Series of Punch",6,"God","Hand",null,null,null,null,null,null,null,0.6,0.8,0.2,1,0.2,1.2,0.15,1.4,0.1,1.6,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 4,"wield_martialart",36,"thrust_5","seven-sidedstrike","Seven-sided Strike",11,"God","Hand",null,null,null,null,null,null,null,0.5,1.05,0.2,1.35,0.15,1.65,0.1,1.95,0.1,2.25,0.1,2.55,0.1,4,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 5,"seven-sidedstrike",48,"slash_5","criticalpalm","Critical Palm",5,"God","Hand",null,null,null,null,null,null,null,1.3,2,0.3,3,0.2,4,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 6,"wield_martialart",64,"thrust_5","asurastrike","Asura Strike",100,"God","Hand",null,null,null,null,null,null,null,3,0.1,0.3,0.1,0.3,0.1,0.3,0.1,0.3,0.1,1,333,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 7,"wield_martialart",101,"slash_3","placeholder7","Placeholder7",21,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 8,"wield_martialart",101,"slash_3","placeholder8","Placeholder8",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 9,"wield_martialart",101,"slash_3","placeholder9","Placeholder9",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 10,"wield_martialart",101,"slash_3","placeholder10","Placeholder10",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 11,"wield_martialart",101,"slash_3","placeholder11","Placeholder11",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 12,"wield_martialart",101,"slash_3","placeholder12","Placeholder12",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 13,"wield_martialart",101,"slash_3","placeholder13","Placeholder13",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 14,"wield_martialart",101,"slash_3","placeholder14","Placeholder14",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 15,"wield_martialart",101,"slash_3","placeholder15","Placeholder15",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 16,"wield_martialart",101,"slash_3","placeholder16","Placeholder16",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 17,"wield_martialart",101,"slash_3","placeholder17","Placeholder17",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 18,"wield_martialart",101,"slash_3","placeholder18","Placeholder18",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 19,"wield_martialart",101,"slash_3","placeholder19","Placeholder19",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 20,"wield_martialart",101,"slash_3","placeholder20","Placeholder20",1,"God",null,null,null,null,null,null,null,null,0.8,32,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 21,"wield_martialart",1,"slash","horizontalslash","Horizontal Slash",1,"God","SimpleSword",null,null,null,null,null,null,null,0.9,1.15,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 22,"horizontalslash",5,"slash","horizontalarc","Horizontal Arc",2,"God","SimpleSword",null,null,null,null,null,null,null,0.9,1.15,0.6,1.17,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 23,"horizontalarc",10,"slash_2","horizontalsquare","Horizontal Square",4,"God","SimpleSword",null,null,null,null,null,null,null,2.8,1.3,0.1,1.6,0.3,1.4,0.1,1.7,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 24,"charlevel",2,"slash","verticalslash","Vertical Slash",1,"God","SimpleSword",null,null,null,null,null,null,null,0.8,1.17,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 25,"verticalslash",5,"slash","verticalarc","Vertical Arc",2,"God","SimpleSword",null,null,null,null,null,null,null,0.8,1.18,0.7,1.2,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 26,"verticalarc",10,"slash_2","verticalsquare","Vertical Square",4,"God","SimpleSword",null,null,null,null,null,null,null,2.5,1.2,0.2,1.66,0.3,1.38,0.2,1.72,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 27,"horizontalslash",3,"slash","slant","Slant",1,"God","SimpleSword",null,null,null,null,null,null,null,0.75,1.23,0.15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 28,"slant",5,"slash_2","diagonalrush","Diagonal Rush",3,"God","SimpleSword",null,null,null,null,null,null,null,1.5,0.8,0.2,0.8,0.2,1.05,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 29,"charlevel",3,"slash","ragespike","Rage Spike",1,"God","SimpleSword",null,null,null,null,null,null,null,1.7,2.2,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 30,"diagonalrush",20,"thrust","starquintprominence","Star Quint Prominence",17,"God","SimpleSword",null,null,null,null,null,null,null,1.2,1.2,0.3,1.3,0.3,1.4,0.2,1.5,0.2,1.6,0.1,3.2,0.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 31,"charlevel",40,"slash","sharpnail","Sharp Nail",7,"God","SimpleSword",null,null,null,null,null,null,null,0.7,1.2,0.5,1.5,0.9,2.4,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 32,"charlevel",50,"blunt_2","spinningshield","Spinning Shield",4,"God","SimpleSwordAndShield","SimpleCurvedSwordAndShield",null,null,null,null,null,null,0.4,0.8,0.2,0.9,0.2,1.05,0.2,1.2,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 33,"charlevel",20,"slash","sonicleap","Sonic Leap",1,"God","SimpleSword",null,null,null,null,null,null,null,1.4,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 34,"wield_1hsword",95,"thrust_5","vorpalstrike","Vorpal Strike",9,"God","SimpleSword",null,null,null,null,null,null,null,1.3,1.3,0.5,3.85,0.1,12.4,0.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 35,"wield_1hsword",44,"slash","savagefulcrum","Savage Fulcrum",7,"God","SimpleSword",null,null,null,null,null,null,null,1.8,4.44,0.6,4.44,0.4,8.88,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 36,"wield_1hsword",55,"blunt_5","meteorbreak","Meteor Break",27,"God","SimpleSword",null,null,null,null,null,null,null,2.4,15,0.8,0.2,0.3,0.2,0.3,0.2,0.3,15,0.7,0.22,0.1,0.22,0.2,0.22,0.1,0.22,0.2,0.22,0.1,0.22,0.2,35,0.8,0.5,0.1,0.46,0.1,0.42,0.1,0.38,0.1,0.34,0.1,0.3,0.1,0.26,0.1,0.22,0.1,0.18,0.1,0.14,0.1,0.1,0.1,0.06,0.2,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 37,"wield_1hsword",58,"slash_2","phantomrave","Phantom Rave",12,"God","SimpleSword",null,null,null,null,null,null,null,0.6,0.6,0.1,0.7,0.1,0.8,0.1,0.9,0.1,1,0.2,8,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 38,"phantomrave",30,"slash_3","shadowexplosion","Shadow Explosion",4,"God","SimpleSword",null,null,null,null,null,null,null,0.3,1.4,0.3,1.55,0.3,1.6,0.3,1.66,0.3,1.73,0.2,1.8,0.2,1.91,0.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 39,"wield_1hsword",60,"slash","fairyedge","Fairy Edge",12,"God","SimpleSword",null,null,null,null,null,null,null,0.5,1.2,0.4,1.25,0.4,1.3,0.4,1.5,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 40,"fairyedge",15,"slash","silpheedhurricane","Silpheed Hurricane",15,"God","SimpleSword",null,null,null,null,null,null,null,1.1,1.3,0.4,1.4,0.2,1.5,0.1,2.2,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 41,"wield_1hsword",100,"thrust_5","kingdomdawn","Kingdom Dawn",42,"God","SimpleSword",null,null,null,null,null,null,null,1.77,0.95,0.8,1.007,0.784,1.067,0.768,1.131,0.753,1.199,0.738,1.271,0.723,1.348,0.709,1.428,0.695,1.514,0.681,1.605,0.667,1.701,0.654,1.803,0.641,1.912,0.628,2.026,0.615,2.148,0.603,2.277,0.591,2.413,0.579,2.558,0.567,2.712,0.556,2.874,0.545,3.047,0.534,3.230,0.523,3.423,0.513,3.629,0.503,3.846,0.493,4.077,0.483,4.322,0.473,4.581,0.464,4.856,0.454,5.147,1.2],
    [ 42,"",null,"slash","fellcrescent","Fell Crescent",2,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 43,"",null,"slash","leaver","Leaver",5,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 44,"",null,"slash","farrantfullmoon","Farrant Fullmoon",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 45,"",null,"blunt","bearknock","Bear Knock",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 46,"",null,"slash","ovalcrescent","Oval Crescent",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 47,"",null,"slash","deathcreep","Death Creep",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 48,"",null,"slash","lasingchopper","Lasing Chopper",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 49,"",null,"slash","meleeslash","Melee Slash",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 50,"",null,"slash","dancinghellraiser","Dancing Hellraiser",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 51,"",null,"slash","legiondestroyer","Legion Destroyer",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [ 52,"",null,"slash","butterflyillusion","Butterfly Illusion",null,"God","SimpleCurvedSword",null,null,null,null,null,null,null,null,1,null,1,null,1,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
];