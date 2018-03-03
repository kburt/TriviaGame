window.onload = function(){
    
    
    //set up timer to start when button is clicked
    $(".startTimer").on("click", function(){
        var userScore = 0;
        var timerSeconds = 10;
        
        function start(){
    	counter = setInterval(timer, 1000);
        }
        
        function timer(){
            timerSeconds--;
            $(".displayTimer").html(timerSeconds);
            if (timerSeconds === 0){
                stopTimer();
            }
        }
        
        function stopTimer(){
            clearInterval(counter);
        }
        
         //check answers
        $(".bq").on("click", function(){
            while (".bq".valueOf === true){
                userScore++;
            }
            
            })
        
        start();
        console.log(timerSeconds);
        
       
})
}
    