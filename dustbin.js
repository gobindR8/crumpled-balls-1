class dustbin{
constructor(x,y,width,height){

this.x=x
this.y=y
this.width=width
this.height=height


 this.bottombody=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
 this.rightbody=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
 this.leftbody=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
 World.add(world,this.rightbody)
World.add(world,this.bottombody)
World.add(world,this.leftbody)
}
display(){


    var posbottom=this.bottombody.position
    var posright=this.rightbody.position
    var posleft=this.leftbody.position
            push()
            translate(posbottom.x,posbottom.y,posbottom.width,posbottom.height)
            rectMode(CENTER)
            stroke(255)
            angleMode(RADIANS)
            fill(255)
            rect(700,700,200,50)
            pop()

            push()
            translate(posright.x,posright.y,posright.width,posright.height)
            rectMode(CENTER)
            stroke(255)
            angleMode(RADIANS)
            fill(255)
            rect(790,620,20,150)
            pop()
             push()
                 translate(posleft.x,posleft.y,posleft.width,posleft.height)
                 rectMode(CENTER)
                 stroke(255)
                 angleMode(RADIANS)
                 fill(255)
                 rect(620,620,20,150)
                 pop()



            
            
}

}