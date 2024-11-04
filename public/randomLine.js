class randomLine {
	
	constructor() {
		let X = random(0,windowWidth);
		let Y = random(0,windowHeight);
		let Length = random(50,windowWidth -50);
		let Thickness = random(2,10);
		this.X = X;
		this.Y = Y;
		this.Length = Length;
		this.Thickness = Thickness;
	}
	
	makeLine () {
		strokeWeight(this.Thickness)
		stroke(255,0,0);
		line(this.X,this.Y,this.Length,this.Y);
	}
}