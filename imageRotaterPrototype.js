// JavaScript Document

var times;

//global parameters for controlling the sliding.

function slider(numPics, imgWidth, myDiv, mySeconds, myName){
	this.myDiv = myDiv;
	this.myPos = myDiv;
	this.imgWidth = imgWidth;
	this.seconds = mySeconds;
	this.myName = myName;
	this.numPics = numPics;
	this.newPos = 0;
	this.myArray = new Array;
	this.myCounter = 0;
	this.total = 0;
	this.curPos = 0;
	this.difPos = 0;
	this.times;
	
	console.log('NumPics is: ' + numPics + ' imgWidth is:' + imgWidth + ' myDiv is:' + myDiv + ' name is:' + myName);
	this.intialize(numPics, imgWidth, myDiv, myName);
}	



/*this function intializes the postions for sliding.  It is called when the slider is created.
numPics = number of divisons to slide through, 
imgwidth =  the width of the container,
myDiv = name of div that slides
*/
slider.prototype.intialize = function intialize(numPics, imgWidth, myDiv, myName){
/* this part sets up the go to buttons to go to a particular slide */
$(document).ready(function() {
var contentAdded= '';
var loop = numPics;
for(var i=0; i<loop; i++){
contentAdded = contentAdded + '<span id="' + myName +  i + '" onclick="' + myName + '.goTo(' + i + ')"> &bull;</span> ';
}
$(myDiv).parent().after('<div class="centerIt headtxt">' + contentAdded + ' </div>');
});

/* this part fills the array */
while(this.myCounter < numPics){
	this.myArray[this.myCounter] = (imgWidth*this.myCounter)*-1;
	this.myCounter ++;
}	
this.total = numPics - 1;
this.myPos = myDiv;
}
	


/*this function controls forward sliding*/
slider.prototype.moveNext = function(){
	if(this.newPos < this.total)
{this.newPos += 1;}
else
{this.newPos =0;}
	this.curPos = this.myArray[this.newPos];
$(this.myPos).stop().animate({
		left:this.curPos
		}, 800, function (){});
		$('.centerIt span').css('color', 'inherit');
		var mybg = '#' + this.myName + this.newPos;
		$(mybg).css('color', 'blue');
		console.log('move next called');
}

/*this function controls backward sliding*/
slider.prototype.movePrev = function (){
	if(this.newPos > 0)
{this.newPos -= 1;}
else
{this.newPos = this.total;	}
	this.curPos = this.myArray[this.newPos];
$(this.myPos).stop().animate({
		left:this.curPos
		}, 800, function (){});
		$('.centerIt span').css('color', 'inherit');
		var mybg = '#' + this.myName + this.newPos;
		$(mybg).css('color', 'blue');
		console.log('move prev called');
}

/*this function controls forward sliding to a specific location*/	
slider.prototype.goTo = function(arrayNo){
clearTimeout(times);
this.difPos = (this.myArray[arrayNo]);
$(this.myPos).stop().animate({
		left:this.difPos
		}, 800, function (){});
		$('.centerIt span').css('color', 'inherit');
		var mybg = '#' + this.myName + arrayNo;
		$(mybg).css('color', 'blue');
	
}

slider.prototype.timedCount = function(){
	this.moveNext();
	myMethod = this.myName + '.timedCount()'; 
	times = setTimeout(myMethod, this.seconds);
	console.log('timed count called');
	}
	
slider.prototype.pauseCount = function(){
	clearTimeout(times);	
}



