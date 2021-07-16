class ground {
constructor(x,y,width,height){
this.x=x
this.y=y
this.width=width
this.height=height
this.groundbody=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
World.add(world,this.groundbody)
}
display(){
var posground=this.groundbody.position

push()
translate(posground.x,posground.y)
rectMode(CENTER)
strokeWeight(4)
fill(255,255,0)
rect(0,0,this.width,this.height)
pop()



}






}