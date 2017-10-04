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
            lastScore:400000,
            minLevel:5,
            maxLevel:15,
            textMsg:'Start',
            challengeMsg:'Start Challenge',
            myLevel:1,
            heart:1,
            scoreToDone:10000,
            lastTenScore:[1030,12149,3320,2748,6022,3988],
            highestScore:0
            
        }

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

          }  else if(this.state.result>=120000){
            this.setState({
               myLevel:10,
               scoreToDone:150000,
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
//lastScore:15000 
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
    startMyGame=()=>{
        console.log(11111)
        
        this.setState({
            startGame:!this.state.startGame,
            randomNum:-1,
            numberOfButtons:3,  
            disabled:true,
            difficulties:-1,
            result:0,
            myLevel:1,
            heart:1,
            scoreToDone:10000,
            lastScore:3000,
            textMsg:"start",
             minLevel:5,
            maxLevel:15,
           
        })
    }
    updateNumberOfButtons=(event)=>{

        //set min and max

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

        if(this.state.heart>0){
            console.log('A')
            
        
        if(myTotal<this.state.lastScore){
            let myHeart = this.state.heart;
            let NewArray=this.state.lastTenScore;
            let smallestNum=3000000;
            let newResult=this.state.result+myTotal;
            NewArray.map((x)=>{
                if(x<smallestNum){
                    smallestNum=x;
                }
            });
            for(var i=0;i<NewArray.length;i++){
                if(NewArray[i]==smallestNum){
                    NewArray[i]=newResult;
                }
            }
             
             this.setState({
                disabled:true,
                result:newResult,
                resetColor:"grey",
                lastScore:myTotal,
                challengeMsg:'Continue Challenge',
                heart:myHeart+1,
                textMsg:myNewMsg
                

             })

            
        }else{
             
            if(this.state.heart>1){
                if(this.state.result>120000){
                    let myHeart = this.state.heart;
                    let NewArray=this.state.lastTenScore;
                    let smallestNum=3000000;
                    let newResult=this.state.result-myTotal;
                    NewArray.map((x)=>{
                        if(x<smallestNum){
                            smallestNum=x;
                        }
                    });
                    for(var i=0;i<NewArray.length;i++){
                        if(NewArray[i]==smallestNum){
                            NewArray[i]=newResult;
                        }
                    }
                      this.setState({
                        disabled:true,
                        result:newResult,
                        resetColor:"grey",
                        lastScore:myTotal,
                        challengeMsg:'Continue Challenge',
                        heart:myHeart-1,
                        lastTenScore:NewArray
                     })
                    
                }else{                 
                    let myHeart = this.state.heart;
                    let NewArray=this.state.lastTenScore;
                    let smallestNum=3000000;
                    let newResult=this.state.result-myTotal;
                    NewArray.map((x)=>{
                        if(x<smallestNum){
                            smallestNum=x;
                        }
                    });
                    for(var i=0;i<NewArray.length;i++){
                        if(NewArray[i]==smallestNum){
                            NewArray[i]=newResult;
                        }
                    }
                       this.setState({
                        disabled:true,
                        result:this.state.result-myTotal,
                        resetColor:"grey",
                        lastScore:myTotal,
                        challengeMsg:'Continue Challenge',
                        heart:myHeart-1,
                        lastTenScore:NewArray
                        
                      })

                }
            }else{
                 myNewMsg="Good Luck Next Time";
                 let myHeart = this.state.heart;
                 let NewArray=this.state.lastTenScore;
                 let smallestNum=3000000;
                 let newResult=this.state.result-myTotal;
                 NewArray.map((x)=>{
                     if(x<smallestNum){
                         smallestNum=x;
                     }
                 });
                 for(var i=0;i<NewArray.length;i++){
                     if(NewArray[i]==smallestNum){
                         NewArray[i]=newResult;
                     }
                 }
                 this.setState({
                disabled:true,
                result:this.state.result-myTotal,
                resetColor:"grey",
                lastScore:myTotal,
                challengeMsg:'Continue Challenge',
                heart:myHeart-1,
                   textMsg:myNewMsg,                
                   lastTenScore:NewArray
                   
                   
                    
               })
             }
             
        }
        
             
        } 
        
        
        
        
    }
    AddMoreButtons=()=>{
        let buttons=[];
        for(var i=0;i<this.state.numberOfButtons;i++){
            if(i==this.state.randomNum){
            if(this.state.resetColor==="red"){
                buttons.push(<Button disabled={this.state.disabled} click={this.getResult} class={this.state.resetColor} number={" "+(i+1)}/>)
            }else{
                buttons.push(<Button disabled={this.state.disabled} click={this.getResult}  number={" "+(i+1)}/>)
                
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
                    if(this.state.heart>0 ){
                        return(
                            <div>
                                <h1>Level {this.state.myLevel}</h1>
                                <h4>heart {this.state.heart}</h4>
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
                      //  <h1>{this.state.textMsg}</h1>
                        
                            return(
                                <div>
                                    <h1>Game Over {this.state.textMsg}</h1>

                                    <h1>Level {this.state.myLevel}</h1>
                                    <h4>heart {this.state.heart}</h4>
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
                return(
                    <div>
                                <h1>Level {this.state.myLevel}</h1>
                                <h4>heart {this.state.heart}</h4>

                        <h2>Set The difficulties to Start the game </h2>
                    <button class="blue" onClick={this.startMyGame} > End</button>
                     <input type="number" placeholder="update the difficulties" onChange={this.updateNumberOfButtons}/>
                     <h3>{this.state.textMsg}</h3>
                     <h3>You Should Get {this.state.scoreToDone} To go next level</h3>

 
                    </div>
                    )
            }
            
        }else{
            return(
                <div>
                <button class="gold" onClick={this.startMyGame}> Start</button>
                <input type="number" onChange={this.updateNumberOfButtons} disabled/>
                 </div>
                )
        }
            
                }
        
    }

 

export default GameComponents