const Ship=function(length_parameter){
    let shipLength=length_parameter;
    let hitCounter=0;    

    function hit(){
        if(hitCounter<shipLength){
            hitCounter++;                        
            return true
        }else{    
            return false
        }
    };    
    function isSunk(){
       return hitCounter===shipLength;
    }



    return{
        shipLength,
        hit,
        isSunk

    }
}

module.exports=Ship;