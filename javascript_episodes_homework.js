

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();
//will print my name is Keith






score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());
//will return 3




var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

//suspects include jay val harvey rick
//suspect three is Keith




var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

//poirot




var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
//the murderer is rick 


var dog = 'belle';

var outerFunction = function(){
  var dog = 'bruar';

  var innerFunction = function(){
    dog = 'harry';
    console.log('my favourite dog is ', dog );
  }

  innerFunction();
  console.log('honestly though my favourite dog is ', dog );
}

outerFunction();
console.log('nah really my favourite dog is ', dog );
