var board = [ 
    [null, "O", null, null, null, null, null, null, null, null],
    [null, null, "O", null, null, null, null, null, null, null],
    [null, null, null, "O", null, null, null, null, null, null],
    [null, null, null, null, "O", null, null, null, null, null],
    [null, null, null, null, null, "O", null, null, null, null],
    [null, null, null, null, null, null, "O", null, null, null],
    [null, null, null, null, null, null, null, "O", null, null],
    [null, null, null, null, null, null, null, null, "O", null],
    [null, null, null, null, null, null, null, null, null, "O"],
    [null, null, null, null, null, null, null, null, "O", null]
    ];
    
    // Rover Object Goes Here
    // ======================
       var rover = {
        direccion: "N",
        x: 0,
        y: 0,
        travelLog: array = []
        }
    // ======================

    function errorMove() {
        console.log("Danger! Terreno inexplorado!!");
    } 

    function errorObstac() {
        console.log("Danger! No puedo moverme Obstaculo a la vista!!");
    }

    function turnLeft(rover){
      console.log("turnLeft was called!");
      switch (rover.direccion){
        case "S":
            rover.direccion = "W";
            console.log("direccion:", rover.direccion);
        //    console.log("rover.direccion")
        break;
        case "E":
            rover.direccion = "S";      
            console.log("direccion:", rover.direccion);
        //    console.log("te giras al north")
        break;
        case "W":
            rover.direccion = "N";      
            console.log("direccion:", rover.direccion);
        //    console.log("te giras al south")
        break;
        default:
            rover.direccion = "E";      
            console.log("direccion:", rover.direccion);
        //    console.log("te giras al west")
        break;
      }
    
    }
    
    function turnRight(rover){
      console.log("turnRight was called!");
      switch (rover.direccion){
        case "S":
            rover.direccion = "E";
        //    console.log("te giras al west")
        break;
        case "E":
            rover.direccion = "N";      
        //    console.log("te giras al south")
        break;
        case "W":
            rover.direccion = "S";      
        //    console.log("te giras al north")
        break;
        default:
            rover.direccion = "W";      
        //    console.log("te giras al east")
        break;
      }
    
    }
    
    function moveForward(rover){
     // console.log("moveForward was called")
     var log = "X: ".concat(rover.x,", Y: ",rover.y);
      if (log !== rover.travelLog[(rover.travelLog.length -1)]){
        console.log("moveForward was called")
        rover.travelLog.push(log);
      }
      switch (rover.direccion){
        case "S":
            if (rover.y > 0){
                if (board[rover.y - 1][rover.x] !== "O"){
                    rover.y = rover.y - 1;  
                } else {
                    errorObstac();
                }    
            } else {
                errorMove();
            }
        //    console.log("te mueves al south")
        break;
        case "E":
                if (rover.x < 9){
                    if (board[rover.y][rover.x + 1] !== "O"){
                        rover.x = rover.x + 1; 
                    } else {
                        errorObstac();
                    }    
                } else {
                    errorMove();
                }   
        //    console.log("te mueves al east")
        break;
        case "W":
                if (rover.x > 0){
                    if (board[rover.y][rover.x - 1] !== "O"){    
                        rover.x = rover.x - 1;  
                    } else {
                        errorObstac();
                    } 
                } else {
                    errorMove();
                }  
        //    console.log("te mueves al west")
        break;
        default:
            if (rover.y < 9){
                if (board[rover.y + 1][rover.x] !== "O"){
                    rover.y = rover.y + 1;
                } else {
                    errorObstac();
                }
            } else {
                errorMove();
            }
        //    console.log("te mueves al north")
        break;
    
        }
        console.log("Estoy en la posicion :", "direccion:", rover.direccion, "posicion x:", rover.x, "posicion y:", rover.y);
    }
    function moveBackward(rover){
             // console.log("moveForward was called")
     var log = "X: ".concat(rover.x,", Y: ",rover.y);
     if (log !== rover.travelLog[(rover.travelLog.length -1)]){
       console.log("moveForward was called")
       rover.travelLog.push(log);
     }
     switch (rover.direccion){
       case "S":
            if (rover.y < 9){
                if (board[rover.y + 1][rover.x] !== "O"){
                   rover.y = rover.y + 1;  
                } else {
                   errorObstac();
                }    
           } else {
               errorMove();
            }
       //    console.log("te mueves al south")
       break;
       case "E":
                if (rover.x > 0){
                    if (board[rover.y][rover.x - 1] !== "O"){
                       rover.x = rover.x - 1; 
                    } else {
                       errorObstac();
                    }    
                } else {
                   errorMove();
                }   
       //    console.log("te mueves al east")
       break;
       case "W":
                if (rover.x < 9){
                    if (board[rover.y][rover.x + 1] !== "O"){    
                       rover.x = rover.x + 1;  
                    } else {
                       errorObstac();
                    } 
                } else {
                   errorMove();
                }  
       //    console.log("te mueves al west")
       break;
       default:
            if (rover.y > 0){
                if (board[rover.y - 1][rover.x] !== "O"){
                   rover.y = rover.y - 1;
                } else {
                   errorObstac();
                }
            } else {
               errorMove();
            }
       //    console.log("te mueves al north")
       break;   
       }
       console.log("Estoy en la posicion :", "direccion:", rover.direccion, "posicion x:", rover.x, "posicion y:", rover.y);
   }
    
    function goWard(rover, list){
       for (var i = 0; i < list.length ;i++ ){
        switch (list.charAt(i)){
            case "f":
                moveForward(rover);
                // console.log("Se mueve hacia delante");
            break;
            case "r":
                turnRight(rover);
                // console.log("se mueve hacia la derecha");
            break;
            case "l":
                turnLeft(rover);
                // console.log("se mueve hacia la izquierda");
            break;
            case "b":
                moveBackward(rover);
                // console.log("se mueve hacia detras");
            break;
            default:
                console.log("No conozco esa funcion, prueba de nuevo")
            break;
       } 
    }
    console.log(rover.travelLog);
    }