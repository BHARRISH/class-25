class Bird extends Base  {

    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display();
    };
  };
  