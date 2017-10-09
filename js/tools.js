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
	return toDecimal(Math.floor(number * 100),decimal)
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

function numberPrint(x, separator) {
	separator = separator || ","
	if (x > 1e15) {
		x = numberShort(x)
	} else {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
	}
}
function numberPrintWithDecimal(x, separator) {
	separator = separator || ","
	var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts.join(".");
}

function numberShort(x) {
	let order = ["K", "M", "B", "T",  "KT", "MT", "BT", "TT", "K2T", "?"]
	let range = [1e3, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24, 1e27, 1e300]

	if (x < range[0]) { return x }
	for (var i = 0; i < range.length; i++) {
		if (x > range[i+1]) { continue }
		return Math.floor(x/range[i]).toString() + order[i]
	};
}

const cloneObj = (obj) => {
	return JSON.parse(JSON.stringify(obj))
}

/* sorting */

function wswsByDPS(a,b) {
  if (a.getAttribute("data-dps") < b.getAttribute("data-dps"))
     return -1;
  if (a.getAttribute("data-dps") > b.getAttribute("data-dps"))
    return 1;
  return 0;
}

function removeFromArray(array, indexes) {
	let newArray = array
	for (var i = indexes.length -1; i >= 0; i--)
   	newArray.splice(indexes[i],1);
  return newArray
}

/* temporary floating text */

function damageMonster(number, duration) {
	let newDamage = elebyID("floatingtexttest").cloneNode(true)
	newDamage.innerHTML = numberPrint(toDecimal(number))
	newDamage.id = "tempfloatingdmg-" + Math.floor(rngmm(1000000,100000000)).toString()
	//newDamage.style.marginTop = Math.floor(rngmm(20,30)).toString() + "px"
	//newDamage.style.marginLeft = "-" + Math.floor(rngmm(60,245)).toString() + "px"
	newDamage.style.marginTop = Math.floor(rngmm(24,26)).toString() + "px"
	newDamage.style.marginLeft = "-" + Math.floor(rngmm(144,147)).toString() + "px"
	elebyID("bscreen-t-monster").appendChild(newDamage)
	newDamage.classList.add("show")
	setTimeout(function(){ newDamage.remove() }, 900);
}

function stunMonster(number, duration) {
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
	setTimeout(function(){ newDamage.remove() }, 900);
}

function charExpGained(number, duration) {
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

function shrink()
{
    var textSpan = elebyID("monsternameval");
    var textDiv = elebyID("monstername");
    let textDivWidth = 300
    textSpan.style.fontSize = "20px"
    let textSpanWidth = textSpan.offsetWidth
    let newFontSize = Math.max(Math.floor((textDivWidth / textSpanWidth) * 20 * 0.7), 8)
    newFontSize = Math.min(newFontSize, 25)
    textSpan.style.fontSize = newFontSize.toString() + "px"
}