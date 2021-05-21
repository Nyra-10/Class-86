const { fabric } = require("./fabric");

var canvas=new fabric.Canvas("mycanvas");
var block_image_width=30;
var block_image_height=30;
playerx=10;
playery=10;
var player_object="";
function playerupload(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scateToHeight(140);
        player_object.set({
            top:playery,
left:playerx
        });
        canvas.add(player_object);
    });
};
function objectupload(block_image){
    fabric.Image.fromURL(block_image,function(img){
        block_object=img;
        block_object.scaleToWidth(block_image_width);
block_object.scaleToHeight(block_image_height);
block_object.set({
    top:playery,
    left:playerx
})
canvas.add(block_object);
    })
}