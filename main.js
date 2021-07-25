canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
car_x=0;
car_y=0;
car_width=70;
car_height=70;
background_image="parkingLot.jpg";
car_image="concrete-road.png";
function add() {

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = car_image;
   
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0 ,0, canvas.width, canvas.height)
}

function uploadcar(){
    ctx.drawImage(car_imgTag,car_x, car_y, car_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(car_y >0)
    {
    car_y -=10;
        uploadBackground();
        uploadcar();
    }
}

function down()
{
    if(car_y <=500)
    {
        car_y +=10;
        uploadBackground();
        uploadcar();
    }
}

function left()
{
    if(car_x > 0)
    {
        car_x -=10;
        uploadBackground();
        uploadcar();
    }
}

function right ()
{
    if(car_x <=700)
    {
        car_x +=10;
        uploadBackground();
        uploadcar();
    }
}