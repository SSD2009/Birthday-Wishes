var canvas = new fabric.Canvas('mycanvas');
 var x= document.getElementById("myAudio");

var blockimgobject="";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        blockimgobject=Img;

        blockimgobject.scaleToWidth(700);
        blockimgobject.scaleToHeight(510);
        blockimgobject.set({
            top:0,
            left:0
        });
        canvas.add(blockimgobject);
        });	
}

function playSound(){
	x.play();
}
