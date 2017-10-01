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

const iText = (code, value, value2, value3) => {
	value = value || null
	value2 = value2 || null
	value3 = value3 || null
	if (TEXTS.hasOwnProperty(code) === false) {
		console.log("TEXTS has no property "+code)
		return ""
	}
	if (TEXTS.hasOwnProperty(value)) {
		value = iText(value)
	} else if (code.endsWith("_p")) {
		value = percent(value, 2)
	}
	var render = value ? TEXTS[code].replace("{0}", isNumeric(value) ? numberPrint(toDecimal(value,2)) : value) : TEXTS[code]
	render = value2 ? render.replace("{1}", isNumeric(value2) ? numberPrint(toDecimal(value2,2)) : value2) : render
	render = value3 ? render.replace("{2}", isNumeric(value3) ? numberPrint(toDecimal(value3,2)) : value3) : render
	return render
}

const percent = (number, decimal) => {
	number = number || 1
	decimal = decimal || 0
	return toDecimal(Math.round(number * 100),decimal)
}

const toDecimal = (number, decimal) => {
	number = number || 1
	decimal = decimal || 0
	var dec = Math.pow(10,decimal)
	return Math.round(number * dec) / dec
}

const isNumeric = (number) => {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function numberPrint(x, separator) {
	separator = separator || ","
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
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