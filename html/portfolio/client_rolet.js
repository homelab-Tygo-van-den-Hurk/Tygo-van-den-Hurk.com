window.onload = function() {// this makes it so that the java scribt only loads after the element have loaded.
       
    /*
    // needed to wait
    function waitSeconds(iMilliSeconds) {
        var counter= 0
            , start = new Date().getTime()
            , end = 0;
        while (counter < iMilliSeconds) {
            end = new Date().getTime();
            counter = end - start;
        }
    }

    // this array will house all the clients 
    let clients = []

    console.log("created array");

    let trick_into_loop = true; // gets it to loop inf, is required for the next loop

    // this will keep adding clients to the array for as long as it can keep finding them                        
    for(let i = 0; trick_into_loop; i++){

        let temp = document.getElementById("client"+ i);

        if(temp != null){ // if it exists add to array
            console.log("added to array");
            clients.push(temp);

        } else { // else there are no more clients, thus we break the loop
            console.log("finished building array");
            trick_into_loop = false;
        }
    }

    // now we loop for every i in clients
    for(let i = 0; i < clients.length; i++){

        console.log("showing client " +  i);
        // this atribute will increase the opasity to 100%
        clients[i].toggleAttribute("display_client");
        waitSeconds(2000);
        console.log("hiding client " + i);
        // now we hide it again
        clients[i].toggleAttribute("display_client");
        waitSeconds(2000);
        
        // this makes it loop
        if(i == clients.length - 1 ){
            i = 0;
        }
    }
    */
}