/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Mohammed Muzakkir Ahmed Student ID: 128158219 Date: 21-05-2022
*
********************************************************************************/ 


console.log("Hello World");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function httpRequest(httpverb,path){



serverVebs=['GET','GET','GET','POST','GET','POST']
serverPaths=['/','/about','/contact','/login','/panel','/logout']
serverResponses=['Welcome to WEB700 Assignment 1','This assignment was prepared by Student Name','Student Name: Student Email','User Logged In','Main Panel','Logout Complete']
  
for(i=0; i<serverPaths.length; i++) {
        if (serverPaths[i]==path){
            if (serverVebs[i]==httpverb) {
                console.log(`200: ${serverResponses[i]}`)
            }
            else{
                console.log(`404: Unable to process ${httpverb} request for ${path}`)

            }
        }
    }
}


function automateTests(){

    testVerbs=['GET','POST']
    testPaths=['/','/about','/contact','/login','/panel','/logout','/randomPath1','randomPath2']

    function randomRequest(){

        
        randVerb=testVerbs[getRandomInt(0,2)]
        randPath=testPaths[getRandomInt(0,8)]

        httpRequest(randVerb,randPath)


    }

    setInterval(randomRequest,1000)
}



automateTests()