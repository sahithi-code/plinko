class Plinko {
constructor(x,y,r){

var options={
    isStatic:true
}
this.x=x;
this.y=y;
this.r=r

this.body=Bodies.circle(x,y,r-20, options)
World.add(world, this.body);

}
display()
{
    
    var paperpos=this.body.position;		

    push()
    translate(paperpos.x, paperpos.y);
    ellipseMode(CENTER)
    ellipseMode(CENTER)
    ellipse(this.x,this.y,this.r,this.r)
    
 
    pop()
   
}}  