'use strict'

/*Math*/

const fibonacci = (num, memo) => {
	memo = memo || {}

	if (memo[num]) return memo[num]
	if (num <= 1) return 1

	return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
}

const rng = (chance,max) => {
	let result = Math.random() * max + 1 || 0
	return result < chance
}

const rngmm = (min, max) => {
	min = min || 0
	max = max || 1
	return Math.random() * (max - min) + min
}

const log10 = (val) => {
	return Math.log(val) / Math.LN10;
}
/*DOM*/
const elebyID = (id) => {
	return document.getElementById(id)
}

const eleByClass = (classname) => {
	return document.getElementsByClassName(classname)
}

const elebySelector = (selector) => {
	return document.querySelector(selector)
}

const updateTextByID = (elementID, text) => {
	text = text || ""
	let thisElement = elebyID(elementID)
	if (thisElement.innerHTML !== text.toString()) {
		thisElement.innerHTML = text.toString()
	}
}

const updateTextBySelector = (elementSelector, text) => {
	text = text || ""
	let thisElement = elebySelector(elementSelector)
	if (thisElement.innerHTML !== text.toString()) {
		thisElement.innerHTML = text.toString()
	}
}

const updateAttributeByID = (elementID, attribute, value) => {
	let thisElement = elebyID(elementID)
	
	if (thisElement.getAttribute(attribute) !== value.toString()) {
		thisElement.setAttribute(attribute, value.toString())
	}
}

const updateAttributeBySelector = (elementSelector, attribute, value) => {
	let thisElement = elebySelector(elementSelector)
	
	if (thisElement.getAttribute(attribute) !== value.toString()) {
		thisElement.setAttribute(attribute, value.toString())
	}
}

/* substition */

const iText = (code, value, value2, value3, value4, value5) => {
	value = value || null
	value2 = value2 || null
	value3 = value3 || null
	value4 = value4 || null
	value5 = value5 || null
	if (TEXTS.hasOwnProperty(code) === false) {
		console.log("TEXTS has no property "+code)
		return ""
	}
	if (TEXTS.hasOwnProperty(value)) {
		value = iText(value)
	} else if (code.endsWith("_p")) {
		value = percent(value, 4)
	}
	var render = value ? TEXTS[code].replace("{0}", isNumeric(value) ? numberPrint(toDecimal(value,2)) : value.toString()) : TEXTS[code]
	render = value2 ? render.replace("{1}", isNumeric(value2) ? numberPrint(toDecimal(value2,2)) : value2.toString()) : render
	render = value3 ? render.replace("{2}", isNumeric(value3) ? numberPrint(toDecimal(value3,2)) : value3.toString()) : render
	render = value4 ? render.replace("{3}", isNumeric(value4) ? numberPrint(toDecimal(value4,2)) : value4.toString()) : render
	render = value5 ? render.replace("{4}", isNumeric(value5) ? numberPrint(toDecimal(value5,2)) : value5.toString()) : render
	return render
}

const capFirst = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
}

const percent = (number, decimal) => {
	number = number || 0
	decimal = decimal || 0
	if (number === 0) { return 0 }
	return toDecimal(Math.floor(number * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal),decimal)
}

const toDecimal = (number, decimal) => {
	number = number || 0
	decimal = decimal || 0
	var dec = Math.pow(10,decimal)
	if (number === 0) { return 0 }
	return Math.round(number * dec) / dec
}

const toHHMMSS = (seconds) => {
		var sec_num = parseInt(seconds, 10); // don't forget the second param
		var hours   = Math.floor(sec_num / 3600);
		var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		var seconds = sec_num - (hours * 3600) - (minutes * 60);

		if (hours   < 10) {hours   = "0"+hours;}
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}
		return hours+':'+minutes+':'+seconds;
}

const toFix = (i) => {
	var str='';
	do{
		let a = i%10;
		i=Math.trunc(i/10);
		str = a+str;
	}while(i>0)
	return str;
}

const isNumeric = (number) => {
	return !isNaN(parseFloat(number)) && isFinite(number);
}

const numberPrint = (x, separator) => {
	separator = separator || ","
	if (x > 1e15) {
		return numberShort(x,3)
	} else {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
	}
}
const numberPrintWithDecimal = (x, separator) => {
	separator = separator || ","
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
	return parts.join(".");
}

const numberShort = (x , decimal=0) => {
	let order = [
		"e-84", "e-81", "e-78", "e-75", "e-72", "e-69", "e-66", 
		"e-63", "e-60", "e-57", "e-54", "e-51", "e-48", "e-45", 
		"e-42", "e-39", "e-36", "e-33", "e-30", "e-27", "e-24", 
		"e-21", "e-18", "e-15", "e-12", "e-9", "e-6", "e-3", 
		"",
		"K",   "M",   "B",   "T", 	/*1*/
		"KT",  "MT",  "BT",  "TT", 	/*2*/
		"K2T", "M2T", "B2T", "_3T", 	/*3*/
		"K3T", "M3T", "B3T", "_4T", 	/*4*/
		"K4T", "M4T", "B4T", "_5T", 	/*5*/
		"K5T", "M5T", "B5T", "_6T", 	/*6*/
		"K6T", "M6T", "B6T", "_7T", 	/*7*/
		"K7T", "M7T", "B7T", "_8T", 	/*8*/
		"K8T", "M8T", "B8T", "_9T", 	/*9*/
		"K9T", "M9T", "B9T", "_10T", 	/*10*/
		"K10T", "M10T", "B10T", "_11T", /*11*/
		"K11T", "M11T", "B11T", "_12T", /*12*/
		"K12T", "M12T", "B12T", "_13T", /*13*/
		"K13T", "M13T", "B13T", "_14T", /*14*/
		"K14T", "M14T", "B14T", "_15T", /*15*/
		"K15T", "M15T", "B15T", "_16T", /*16*/
		"K16T", "M16T", "B16T", "_17T", /*17*/
		"K17T", "M17T", "B17T", "_18T", /*18*/
		"K18T", "M18T", "B18T", "_19T", /*19*/
		"K19T", "M19T", "B19T", "_20T", /*20*/
		"K20T", "M20T", "B20T", "_21T", /*21*/
		"K21T", "M21T", "B21T", "_22T", /*22*/
		"K22T", "M22T", "B22T", "_23T", /*23*/
		"K23T", "M23T", "B23T", "_24T", /*24*/
		"K24T", "M24T", "B24T", "_25T", /*25*/
		"K25T", "M25T!!!"]
	let range = [
		1e-84 , 1e-81 , 1e-78 , 1e-75 , 1e-72 , 1e-69 , 1e-66, 
		1e-63 , 1e-60 , 1e-57 , 1e-54 , 1e-51 , 1e-48 , 1e-45, 
		1e-42 , 1e-39 , 1e-36 , 1e-33 , 1e-30 , 1e-27 , 1e-24, 
		1e-21 , 1e-18 , 1e-15 , 1e-12 , 1e-9  , 1e-6  , 1e-3 , 
		1e0,
		1e3,   1e6,   1e9,   1e12, /*1*/
		1e15,  1e18,  1e21,  1e24, /*2*/
		1e27,  1e30,  1e33,  1e36, /*3*/
		1e39,  1e42,  1e45,  1e48, /*4*/
		1e51,  1e54,  1e57,  1e60, /*5*/
		1e63,  1e66,  1e69,  1e72, /*6*/
		1e75,  1e78,  1e81,  1e84, /*7*/
		1e87,  1e90,  1e93,  1e96, /*8*/
		1e99,  1e102, 1e105, 1e108, /*9*/
		1e111, 1e114, 1e117, 1e120, /*10*/
		1e123, 1e126, 1e129, 1e132, /*11*/
		1e135, 1e138, 1e141, 1e144, /*12*/
		1e147, 1e150, 1e153, 1e156, /*13*/
		1e159, 1e162, 1e165, 1e168, /*14*/
		1e171, 1e174, 1e177, 1e180, /*15*/
		1e183, 1e186, 1e189, 1e192, /*16*/
		1e195, 1e198, 1e201, 1e204, /*17*/
		1e207, 1e210, 1e213, 1e216, /*18*/
		1e219, 1e222, 1e225, 1e228, /*19*/
		1e231, 1e234, 1e237, 1e240, /*20*/
		1e243, 1e246, 1e249, 1e252, /*21*/
		1e255, 1e258, 1e261, 1e264, /*22*/
		1e267, 1e270, 1e273, 1e276, /*23*/
		1e279, 1e282, 1e285, 1e288, /*24*/
		1e291, 1e294, 1e297, 1e300, /*25*/
		1e303, 1e306] /*26*/

	if (x < range[0]) { return x }
	for (var i = 0; i < range.length; i++) {
		if (x > range[i+1]) { continue }
		return (x/range[i]).toFixed(decimal).toString() + order[i]
	};
}

const cloneObj = (obj) => {
	return JSON.parse(JSON.stringify(obj))
}

/* sorting */

const wswsByDPS = (a,b) => {
	if (a.getAttribute("data-dps") < b.getAttribute("data-dps"))
		 return -1;
	if (a.getAttribute("data-dps") > b.getAttribute("data-dps"))
		return 1;
	return 0;
}

const removeFromArray = (array, indexes) => {
	let newArray = array
	for (var i = indexes.length -1; i >= 0; i--)
		newArray.splice(indexes[i],1);
	return newArray
}

/* temporary floating text */

const damageMonster = (number, duration, isEnabled) => {
	duration = duration || 900
	isEnabled = isEnabled || false
	if (isEnabled === false) { return false }

	let newDamage = elebyID("floatingtexttest").cloneNode(true)
	newDamage.innerHTML = numberPrint(toDecimal(number))
	newDamage.id = "tempfloatingdmg-" + Math.floor(rngmm(1000000,100000000)).toString()
	//newDamage.style.marginTop = Math.floor(rngmm(20,30)).toString() + "px"
	//newDamage.style.marginLeft = "-" + Math.floor(rngmm(60,245)).toString() + "px"
	newDamage.style.marginTop = Math.floor(rngmm(24,26)).toString() + "px"
	newDamage.style.marginLeft = "-" + Math.floor(rngmm(144,147)).toString() + "px"
	elebyID("bscreen-t-monster").appendChild(newDamage)
	newDamage.classList.add("show")
	setTimeout(function(){ newDamage.remove() }, duration);
}

const stunMonster = (number, duration, isEnabled) => {
	duration = duration || 900
	isEnabled = isEnabled || false
	if (isEnabled === false) { return false }

	let newDamage = elebyID("floatingtexttest").cloneNode(true)
	newDamage.classList.add("mobtimerextended")
	newDamage.innerHTML = "+" + numberPrint(toDecimal(number,2)) + "s"
	newDamage.id = "tempfloatingdmg-" + Math.floor(rngmm(1000000,100000000)).toString()
	//newDamage.style.marginTop = Math.floor(rngmm(20,30)).toString() + "px"
	//newDamage.style.marginLeft = "-" + Math.floor(rngmm(60,245)).toString() + "px"
	newDamage.style.marginTop = Math.floor(rngmm(8,10)).toString() + "px"
	newDamage.style.marginLeft = "-" + Math.floor(rngmm(34,37)).toString() + "px"
	elebyID("bscreen-t-monster").appendChild(newDamage)
	newDamage.classList.add("show")
	setTimeout(function(){ newDamage.remove() }, duration);
}

const charExpGained = (number, duration, isEnabled) => {
	isEnabled = isEnabled || false
	if (isEnabled === false) { return false }

	duration = duration || 900
	let newDamage = elebyID("floatingtexttest").cloneNode(true)
	newDamage.classList.add("char-exp-gained")
	newDamage.innerHTML = "+" + numberPrint(toDecimal(number)) + " EXP"
	newDamage.id = "tempfloatingexp-" + Math.floor(rngmm(1000000,100000000)).toString()
	//newDamage.style.marginTop = Math.floor(rngmm(20,30)).toString() + "px"
	//newDamage.style.marginLeft = "-" + Math.floor(rngmm(60,245)).toString() + "px"
	newDamage.style.marginTop = Math.floor(rngmm(24,26)).toString() + "px"
	newDamage.style.marginLeft = "-" + Math.floor(rngmm(144,147)).toString() + "px"
	elebyID("playerexp").appendChild(newDamage)
	newDamage.classList.add("show")
	setTimeout(function(){ newDamage.remove() }, duration);
}

const shrink = () => {
	var textSpan = elebyID("monsternameval");
	var textDiv = elebyID("monstername");
	let textDivWidth = 300
	textSpan.style.fontSize = "20px"
	let textSpanWidth = textSpan.offsetWidth
	let newFontSize = Math.max(Math.floor((textDivWidth / textSpanWidth) * 20 * 0.7), 8)
	newFontSize = Math.min(newFontSize, 25)
	textSpan.style.fontSize = newFontSize.toString() + "px"
}
