import React from 'react'

class Button extends React.Component{

    render(){
        return(<button disabled={this.props.disabled} onClick={this.props.click} class={this.props.class}>Button{this.props.number}</button>);
    }
}
export default Button