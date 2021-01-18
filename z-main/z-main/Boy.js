class Boy extends BaseClass
{
  constructor(x,y){
   super(x,y,200,400);
   this.image=loadImage("Images/boy.png");
  }
 display(){
  this.body.position.x=this.body.position.x;
  this.body.position.y=this.body.position.y;
  super.display();
 }
}