import React from 'react'
import GameComponents from './gameComponent'


class Container extends React.Component{
    render(){
        return(<div>
                <h1 class="red">First simple game using REACT</h1>
                <GameComponents/>
                </div>)
    }
}

export default Container 