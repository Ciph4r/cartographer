/******************
 * YOUR CODE HERE *
 ******************/
const triple = (num) =>{
  return num*3
}

const tripleAll = (num) => {
  return num.map(triple)
}
const getNegativeValue =(x) => {
  return x <= 0 ? x : x * -1
}
const negativeValues =(x)=>{
  return x.map(getNegativeValue)
}

const makeQuestion = (s) => {
  return s+'?'
}
const questionings = (s)=>{
  return s.map(makeQuestion)
}
const getInitials = (s)=>{
  return s.split(' ')[0][0]+s.split(' ')[1][0]
}
const changeToInitials = (s)=>{
  return s.map(getInitials)
}
const doubleIfEven = (x)=>{
  return x%2 === 0 ? x*2:x
}
const doubleEven = (x)=>{
  return x.map(doubleIfEven)
}
const titleCaseNames = (s)=>{
  return s.map(z => z.slice(0,1).toUpperCase() + z.slice(1).toLowerCase())
}
const doubleEveryOther = (s)=>{
  return s.map(x => s.indexOf(x)%2 === 0 ? x : x *2)
}


/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
