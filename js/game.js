class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      p1 = createSprite(100,200)
      p2 = createSprite(300,200)
      p3 = createSprite(500,200)
      p4 = createSprite(700,200)
      runners = [p1,p2,p3,p4];
    }
  
    play(){
      form.hide();                                                                                    
     //textSize(30);
      //text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        var x = 200
        var y
        var index = 0
        for(var plr in allPlayers){
          index = index + 1
          x = x + 200
        y = displayHeight - allPlayers[plr].distance 
        runners[index-1].x = x
        runners[index-1].y = y
        if(index === player.index){
          runners[index-1].shapeColor = 'red'
          camera.position.x = displayWidth/2
          camera.position.y = runners[index-1].y
        }
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      drawSprites()
    }
  }
  