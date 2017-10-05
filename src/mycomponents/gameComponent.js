import React from 'react'
import Button from './button'
import './style.css';
class GameComponents extends React.Component{

    constructor(){
        super();
        this.state={
            numberOfButtons:3,
            startGame:false,
            randomNum:-1,
            className:"red",
            startTime: 0,
            disabled:true,
            result:0,
            resetColor:'red',
            lastScore:5000,
            minLevel:5,
            maxLevel:15,
            textMsg:'Start',
            challengeMsg:'Start Challenge',
            myLevel:1,
            star:1,
            scoreToDone:10000,
            lastTenScore:[4399,429,553,1124,1544,3622,2412,,2223,3412,309],
            highestScore:0,
            playerName:'Demo',
            instructionReader:false
            
        }

    }
     
    updateInstructionReader=() =>{
        this.setState({
            instructionReader:true
        })
    }
    generateRandomNumber = () => {
        this.setState({
            disabled:false,
            
         })
          if(this.state.result==0 && this.state.result<10000){
            this.setState({
                myLevel:1,
                scoreToDone:10000,
                numberOfButtons:5
                
                
            })            
        }

         if(this.state.result>=10000 && this.state.result<15000){
            this.setState({
                myLevel:2,
                scoreToDone:15000,
                numberOfButtons:10
                
            }) 

        } else if(this.state.result>=15000 && this.state.result<20000){
            this.setState({
                myLevel:3,
                scoreToDone:20000,
                numberOfButtons:20
                
            }) 

          }  else if(this.state.result>=20000 && this.state.result<25000){
             this.setState({
                myLevel:4,
                scoreToDone:25000,
                numberOfButtons:30                       
            }) 

           } else if(this.state.result>=25000 && this.state.result<30000){
            this.setState({
               myLevel:5,
               scoreToDone:30000,
               numberOfButtons:40
               
               
           }) 
          } else if(this.state.result>=30000 && this.state.result<35000){
            this.setState({
               myLevel:6,
               scoreToDone:35000,
               numberOfButtons:50
               
               
           }) 
          } else if(this.state.result>=35000 && this.state.result<40000){
            this.setState({
               myLevel:7,
               scoreToDone:40000,
               numberOfButtons:60
               
               
           })

          } else if(this.state.result>=40000 && this.state.result<60000 ){
            this.setState({
               myLevel:8,
               scoreToDone:60000,
               numberOfButtons:70
               
               
           })
          }  else if(this.state.result>=60000 && this.state.result<80000 ){
            this.setState({
               myLevel:9,
               scoreToDone:80000,
               numberOfButtons:80             
           })

          }  else if(this.state.result>=80000 && this.state.result<100000){
            this.setState({
               myLevel:10,
               scoreToDone:100000,
               numberOfButtons:90
           })
          } 


        switch(this.state.myLevel){
            case 1:
            
            let updatelastScore=this.state.lastScore+0;
            this.setState({
                minLevel:5,
                maxLevel:15,
                lastScore:updatelastScore 
                
                
             }) 
            break;
            case 2:
             updatelastScore=this.state.lastScore+0;            
            this.setState({
                minLevel:10,
                maxLevel:20,
                lastScore:updatelastScore
                
                
                
             }) 
            break;
            case 3:this.setState({
                minLevel:20,
                maxLevel:30
             }) 
            break;
            case 4:this.setState({
                minLevel:25,
                maxLevel:35
             }) 
            break;
            case 5:this.setState({
                minLevel:35,
                maxLevel:45
             }) 
            break;
            case 6:this.setState({
                minLevel:55,
                maxLevel:60
             }) 
            break;
            case 7:this.setState({
                minLevel:60,
                maxLevel:70
            })
            break;
            case 8:this.setState({
                minLevel:65,
                maxLevel:75
            }) 
            break;
            case 9:this.setState({
                minLevel:70,
                maxLevel:90
                
            }) 
            break;
            case 10:this.setState({
                minLevel:90,
                maxLevel:100
                
            }) 
            break;
        };

        setTimeout(this.MyRandomNumber, 2000);
        
      }
     MyRandomNumber = () => {
       
        const ranNum = this.getRandomInt(0, this.state.numberOfButtons);
        this.setState({
            randomNum:ranNum,
            startTime: new Date().getTime(),
            resetColor:'red'            
        })

        
      }
 
      getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      updateUserName=(event)=>{
        console.log(event.target.value);
        this.setState({
            playerName:event.target.value
        });
      }
    startMyGame=()=>{
        
        this.setState({
            startGame:!this.state.startGame,
            randomNum:-1,
            numberOfButtons:3,  
            disabled:true,
            difficulties:-1,
            result:0,
            myLevel:1,
            star:1,
            scoreToDone:10000,
            lastScore:5000,
            textMsg:"start",
             minLevel:5,
            maxLevel:15,
            blood:100,
            instructionReader:false
           
        })
    }
    updateNumberOfButtons=(event)=>{

 
        if(event.target.value>=this.state.minLevel && event.target.value<=this.state.maxLevel){
            let myNewMsg='Your Difficulties is '+event.target.value;
            
            this.setState({
                numberOfButtons:event.target.value,
                difficulties:1,
                textMsg: myNewMsg
                
            })
        }else{
            let myNewMsg= 'Plz set the diffculties between '+this.state.minLevel+" and "+this.state.maxLevel; 
            this.setState({
                 textMsg: myNewMsg
            })
        }
       
    }
    getResult=()=>{
        const currTime = new Date().getTime();
        let myTotal=(currTime-this.state.startTime);
        let newResult ;
        let myNewMsg="your Difficulties "+this.state.numberOfButtons;

                 
         if(myTotal<this.state.lastScore){
            let newResult=this.state.result+myTotal;
            
             console.log(newResult)
             if(this.state.blood>0){
                 if(newResult<100000){
                    let myStar = this.state.star;
           
                             this.setState({
                           disabled:true,
                           result:newResult,
                           resetColor:"grey",
                           lastScore:myTotal,
                           challengeMsg:'Continue Challenge',
                           star:myStar+1
                           
                        })
                 }else{
                    let myStar = this.state.star;
                    let newResult=this.state.result+myTotal;
    
                    let NewArray=this.state.lastTenScore;
                    let smallestNum=3000000;
                     NewArray.map((x)=>{
                        if(x<smallestNum){
                         smallestNum=x;
                        }
                    });
                    for(var i=0;i<NewArray.length;i++){
                        if(NewArray[i]==smallestNum && NewArray[i]<newResult){
                                 
                        NewArray[i]=newResult;
                        console.log(NewArray[i]+"k")
                        
                        }
                    }
    
                    this.setState({
                        
                        disabled:true,
                        result:newResult,
                        resetColor:"grey",
                        lastScore:myTotal,
                        challengeMsg:'done',
                        star:myStar+1,
                        lastTenScore:NewArray
                        
                    
                })
                 }
         
            }else{
                let myStar = this.state.star;
                let newResult=this.state.result+myTotal;

                let NewArray=this.state.lastTenScore;
                let smallestNum=3000000;
                 NewArray.map((x)=>{
                    if(x<smallestNum){
                     smallestNum=x;
                    }
                });
                for(var i=0;i<NewArray.length;i++){
                    if(NewArray[i]==smallestNum && NewArray[i]<newResult){
                             
                    NewArray[i]=newResult;
                    console.log(NewArray[i]+"k")
                    
                    }
                }

                this.setState({
                    
                    disabled:true,
                    result:newResult,
                    resetColor:"grey",
                    lastScore:myTotal,
                    challengeMsg:'done',
                    star:myStar+1,
                    lastTenScore:NewArray
                    
                
            })
                
                
            }
        }

       else{
           let myBlooc=this.state.blood-10;
        this.setState({
            blood:myBlooc
        })
   
           if(myBlooc>=10){
            console.log('blood'+this.state.blood)
            
            let myStar = this.state.star;
            newResult=this.state.result-myTotal;
           this.setState({
               
               disabled:true,
               result:newResult,
               resetColor:"grey",
               lastScore:myTotal,
               star:myStar-1,           
       })
       
           }else{
            
            
       
        let myStar = this.state.star;
        let NewArray=this.state.lastTenScore;
        let smallestNum=3000000;
        let newResult=this.state.result-myTotal;
        NewArray.map((x)=>{
            if(smallestNum>x){
             smallestNum=x;
            }
        });
        for(var i=0;i<NewArray.length;i++){
            if(NewArray[i]==smallestNum && newResult> NewArray[i]){
                     NewArray[i]=newResult;
                     console.log(NewArray[i])
                    
                
            } 
        }
 

             this.setState({
               disabled:true,
               result:newResult,
               resetColor:"grey",
               lastScore:myTotal,
               challengeMsg:'Continue Challenge',
               star:myStar-1,
               lastTenScore:NewArray
            })
           
           }} 
        
        
        
    }
    AddMoreButtons=()=>{
        let buttons=[];
        for(var i=0;i<this.state.numberOfButtons;i++){
            if(i==this.state.randomNum){
            if(this.state.resetColor==="red"){
                buttons.push(<Button disabled={this.state.disabled} click={this.getResult.bind(this,true)} class={this.state.resetColor} number={" "+(i+1)}/>)
            }else{
                buttons.push(<Button disabled={this.state.disabled} click={this.getResult.bind(this,true)}  number={" "+(i+1)}/>)
                
            }
            
                
            }else{
                buttons.push(<Button disabled={this.state.disabled} number={" "+(i+1)}/>)
                
            }
        }
        return buttons;
    }

    render(){
        if(this.state.startGame ){
            if(this.state.difficulties>0){
                    if(this.state.blood>0 ){
                        if(this.state.result<100000){
                            return(
                                <div>
                                     <table >
                                    <tr>
                                    <th>Player Name</th>
                                    <th>Level</th>
                                    <th>star</th>
                                    <th>Blood</th>
                                    <th>Difficulties</th>
                                    <th>Last Score</th>
                                    <th>Your score</th>
                                    <th>Next Level Score</th>


                                    </tr>
                                    <tr>
                                    <td>{this.state.playerName}</td>
                                    <td>Level {this.state.myLevel}</td>
                                    <td>Star {this.state.star}</td>
                                    <td>Blod:{this.state.blood} %</td>
                                    <td>{this.state.textMsg}</td>
                                    <td>{this.state.lastScore}</td>
                                    <td>{this.state.result}</td>
                                    <td>{this.state.scoreToDone}</td>
                                    </tr>
                                    
                                </table>

                                     <p> Be Carefull if you blood become Zero you will die!!(each time you get -ve score your blood will decrease 10%)</p>
    
    
                                <button class="blue" onClick={this.startMyGame} > End</button>
                                 <input type="number" placeholder="set the difficulties" onChange={this.updateNumberOfButtons}/>
                                <button class="red" onClick={this.generateRandomNumber}>{this.state.challengeMsg}</button>
                                <h3>{this.state.textMsg}</h3>
                                <br/>  <br/>
                                {this.AddMoreButtons()}
            
                                <h1>Your Score:{this.state.result}</h1>
                                <h3>last Score:{this.state.lastScore}</h3>
    
                                <h3>You Should Get {this.state.scoreToDone} To go next level</h3>
                                 
                                
    
                                <ul>
                                    {this.state.lastTenScore.map((x)=>{
                                        if(x>this.state.highestScore){
                                            this.setState({
                                               highestScore:x
                                            })
                                        }else{
    
                                        }
                                       
                                    })}
    
    
                                    {this.state.lastTenScore.map((x)=>{
                                        if(x>this.state.highestScore){
                                            this.setState({
                                                highestScore:x
                                            })
                                        }else{
    
                                        }
                                        
                                        if(x!=this.state.highestScore){
                                            return <li>{x}</li>
    
                                        }else{
                                            return <li class="heightScore">{x} Heighes Score</li>
                                        }
                                    })}
                                 </ul> 
    
                                </div>
                                )
                        }else{
                            return(
                            <div>
 
                                <h1>Will Done {this.state.playerName} You win</h1>
                                <button class="blue" onClick={this.startMyGame} > Play Again</button>

                                <ul>
                                {this.state.lastTenScore.map((x)=>{
                                    if(x>this.state.highestScore){
                                        this.setState({
                                        highestScore:x
                                        })
                                    }else{
    
                                    }
                                   
                                })}
    
    
                                {this.state.lastTenScore.map((x)=>{
                                    if(x>this.state.highestScore){
                                        this.setState({
                                          highestScore:x
                                        })
                                    }else{
    
                                    }
                                    
                                    if(x!=this.state.highestScore){
                                        return <li class="mylist">{x}</li>
    
                                    }else{
                                        return <li class="mylist heightScore">{x} Heighes Score</li>
                                    }
                                })}
                             </ul> 
    
                            </div>)
                        }
                       
                    }else{
                      //  <h1>{this.state.textMsg}</h1>
                        
                            return(
                                <div>
                                    <h1>Game Over {this.state.playerName} </h1>
                                    <h1>Level {this.state.myLevel}</h1>
                                    <h4>star {this.state.star}</h4>
                                    <h2>Blod:{this.state.blood} %</h2>
                                   <p>Be Carefull if you blood become Zero you will die!!(each time you get -ve score your blood will decrease 10%)</p>

                                <button class="blue" onClick={this.startMyGame} > Play Again</button>
     
                                <br/>  <br/>
                                 
    
                                <ul>
                                {this.state.lastTenScore.map((x)=>{
                                    if(x>this.state.highestScore){
                                        this.setState({
                                        highestScore:x
                                        })
                                    }else{
    
                                    }
                                   
                                })}
    
    
                                {this.state.lastTenScore.map((x)=>{
                                    if(x>this.state.highestScore){
                                        this.setState({
                                          highestScore:x
                                        })
                                    }else{
    
                                    }
                                    
                                    if(x!=this.state.highestScore){
                                        return <li>{x}</li>
    
                                    }else{
                                        return <li class="heightScore">{x} Heighes Score</li>
                                    }
                                })}
                             </ul> 
    
                                 </div>
                                )
                        }
                                
                
            }else{
                if(this.state.instructionReader==false){
                    return(
                    <div>
                        <h1>Hello {this.state.playerName} </h1>
                        <h1>Read The Instruction before start playing </h1>

                        <ul>
                            
                        <li> Game instruction:</li>
                        <br/>
                        <li>  1-Firstly Look to the last score this number should be in your mind.</li>
                        <li>  2-you have to press to the red button and your new score should be less than the last score.</li>
                        <br/>
                        <li>   forexample: </li>
                        <br/>
                        <li>       if your new score less than lastscore</li>
                        <li>       LastScore: 5000</li>
                        <li>       if your new Score: 4999</li>
                        <li>       your result will be 5000+4999 and your new score 9999</li>
                        <br/>
                        <li>        if your new score more than last score</li>
                        <li>        LastScore: 5000</li>
                        <li>       if your new Score: 5100</li>
                        <li>        your result will be 5000-5100 and your new score -100</li>
                        <br/>
                        <li>        if you get +ve score:</li>
                        <li>        you will get + 1 star</li>
                        <br/>
                        <li>       if you get -ve score:</li>
                        <li>        you will get :- 1    :    Star</li>
                        <li>                     - 10 % :   Blood</li>
                        <br/>
                        <li>       When You lose the game:</li>
                        <br/>
                        <li>       your blood at the begining wil be 100%</li>
                        <li>      if you get -ve score will decrease 10%</li>
                        <li>      When your blood become 0% you will lose.</li>
                        <br/>
                        <li>      How to win the Game:</li>
                        <br/>
                        <li>      if you get score 100,000 and if you still have blood </li>
                        <li>      You will win the game.</li>
                        <br/>
                        <li>       Try to get The highest Score </li>
  
                        <br/>

                            
                        </ul>

                        <button onClick={this.updateInstructionReader}>Done</button>
                    </div>
                )
                    
                }else{
                    return(
                        <div>

                               
                                    <h1 class="playernameColor">Welcome <span>{this.state.playerName}</span></h1>
                                    <h2 class="level">Level: <span>{this.state.myLevel}</span></h2>
                                    <h4 class="star">star: <span>{this.state.star}</span></h4>
    
                            <h2 class="difficulties">Set The difficulties to Start the game  </h2>
                            <h2 class="playernameColor">Between {this.state.minLevel} & {this.state.maxLevel} </h2>
                            <h1 class="playernameColor  ">&darr;</h1>
                        
                         <input class="useNameInput" type="number" placeholder="update the difficulties" onChange={this.updateNumberOfButtons}/>
                         <br/><br/>
                         <button class="restartButton" onClick={this.startMyGame} > Restart</button>
                         <br/>
                         <h3 class="myMsg">{this.state.textMsg}</h3>
                         <h3 class="nextLevelPoint">You Should Get {this.state.scoreToDone} To go next level</h3>
    
     
                        </div>
                        )
                }
               
            }
            
        }else{
                 return(
                    <div>
                    <h2 class="playernameColor">Player Name</h2>
                    <input class="useNameInput" onChange={this.updateUserName} type="text" placeholder="write your name here"/>
                    <br/> <br/>
                    <button class="startButton" onClick={this.startMyGame}> Start</button>
                    <p class="firstGAmeInstruction">write your name in the text field and press start to start the game</p>
                     </div>
                    )
            }
            
      
            
                }
        
    }

 

export default GameComponents