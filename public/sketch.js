let textArray;
let shapeArray;
let angles = [0,90,180,270];
let marlboroWhite;
let marlboroDark;

function preload() {
  img1 = loadImage("assets/graphics/flavor-v2.png");
  img2 = loadImage("assets/graphics/bold-text.png");
  img3 = loadImage("assets/graphics/country-text.png");
  img4 = loadImage("assets/graphics/experience-text.png");
  img5 = loadImage("assets/graphics/Taste-text.png");
  img6 = loadImage("assets/graphics/neon-rodeo-effect-1.png");
  img7 = loadImage("assets/graphics/neon-rodeo-effect-2.png");
  img8 = loadImage("assets/graphics/neon-rodeo-effect-3.png");	
  img9 = loadImage("assets/graphics/neon-rodeo-effect-4.png");
  img10 = loadImage("assets/graphics/neon-rodeo-effect-5.png");
	//  img7 = loadImage("assets/graphics/surgeon-generals-warning.png");
  textArray = [img1,img2,img3,img4,img5];
  shapeArray = [img6,img7,img8, img9, img10];
  
	
  
  surgeonWarningBlack = loadImage("assets/graphics/surgeon-generals-warning.png");	
  marlboroWhite = loadImage("assets/graphics/Marlboro-man-white-background-wide-v2.png");
  marlboroDark = loadImage("assets/graphics/Marlboro-man-dark-background-wide-v2.png");
  randomMixer(textArray);
  randomMixer(shapeArray);
}


let darkMode = false;
function swapBackground () {
	darkMode = !darkMode;
    surgeonWarningBlack.filter(INVERT);
	draw();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("Click Your Flavor");
  button.position(30,30,"absolute")
  button.mousePressed(swapBackground);
  frameRate(5);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	draw()
}

let maxScale = 2.5;
let scaleIterator = 0;
let steppedScaleIterator = 0.8;
let steppedScaleIteratorTwo = 1.1;
let currentImageIndex = 0;
let currentImageIndexTwo = 1;

function draw() {
//	randomMixer(imagesArray);
	if (width < 1500) {
		push();
		imageMode(CENTER);
		translate(width/2,height/2);
	}
	if (width < 900) {
		scale(0.40);
	}
	
	if (darkMode) {
		   background(50,50,50);
		   image(marlboroDark,0,0,2309,1100);
	}
	else {
		  background(255);
		  image(marlboroWhite,0,0,2309,1100);
	}
	
	if (width < 1500) {
		pop();
	}
	
	if (width < 900) {
		push();
		let y = (height/2) + ((marlboroDark.height * 0.4) / 2);
		console.log(y,height,marlboroDark.height);
		fill(0);
		rect(0,y,width,height);
//		translate(width/2,height/2);
		pop();
	}
	
//    for(let i = 0; i < imagesArray.length; i++) {
//      push();
//      let x = map(Math.random(),0,1,width*0.05,width*0.95);
//      let y = map(Math.random(),0,1,height*0.05,height*0.95);    
//      translate(x, y);
//      angleMode(DEGREES);
//      rotate(random(angles));
//      // rectMode(CENTER);
//      // rect(0,0,150,300);
//      imageMode(CENTER);
//      image(imagesArray[i],0,0,width,height);
//	  image(surgeonWarningBlack,800,256);
//      pop();
//    }
//      noLoop();

	push();
	imageMode(CENTER);
	translate(width/2,height/2);
	if (scaleIterator > maxScale) {
		scaleIterator = 0;
	}
	scale(scaleIterator);
	
	image(surgeonWarningBlack,0,0,800,256);
	pop();
	
	scaleIterator += 0.02;
	
	if (textArray.length > 0) {
		let myImg = textArray[currentImageIndex];
		push();
		translate(width/2,height/2);
		scale(steppedScaleIterator);
		imageMode(CENTER);
		image(myImg,0,0);
//		image(imagesArray[i],0,0,width,height);
		pop();
		
		myImg = shapeArray[currentImageIndexTwo]; // commandeer the myImg to use again
		push();
		translate(width/2,height/2);
		angleMode(DEGREES);
//		let rnd = noise(frameCount * 0.005);
//		let angl = map(rnd,0, 1, 0, 360);
//		console.log(angl);
        rotate(frameCount*20);
		scale(steppedScaleIteratorTwo);
		imageMode(CENTER);
		image(myImg,0,0);
//		image(imagesArray[i],0,0,width,height);
		pop();
		}

	
	steppedScaleIterator += 0.06;
	if (steppedScaleIterator >= 2) {
		steppedScaleIterator = 0.8;
		currentImageIndex = (currentImageIndex + 1) % textArray.length; // modulo equals: divide by and take the remainder

	}
	steppedScaleIteratorTwo += 0.06;
	if (steppedScaleIteratorTwo >= 2) {
		steppedScaleIteratorTwo = 0.8;
		currentImageIndexTwo = (currentImageIndexTwo + 1) % textArray.length; // modulo equals: divide by and take the remainder

	}
}


 function randomMixer (array) {
   let currentIndex = array.length;
   while (currentIndex != 0) {
     let randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
     [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]];
   }
   return array;
 }

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerWidth);
}




// function setup() {
//   angleMode(DEGREES);
//   imageMode(CENTER);
//   createCanvas(window.innerWidth,window.innerHeight);
// }

// function draw() {
//   // background(250);
//   // for(let i = 0; i <imagesArray.length; i++) {
//   //   // push();
//   //   translate(width * 0.5, height * 0.5);
//   //   rotate(50);
//   //   image(imagesArray[i],width*0,height*0,width,height);
//   //   // pop();
//   // }
//   //     noLoop();
// }