import { Colum2 } from '../../compenents/style'
import { Svg} from '../../compenents/svg'
import React from 'react'


class Bottom_bar extends React.Component{
    render(){
        return<div className="bottom_bar">
            <Colum2  
                left= {
                    <>
                        <Svg variable="save"/>
                    </>

                } 
                right= {
                    <>
                        <Svg variable="thirst"/>
                        <Svg variable="food"/>
                        <Svg variable="armor"/>
                        <Svg variable="heart"/>
                    </>
                } 
            />
        </div> 
    }
}

class Alert extends React.Component{
    render(){
        return <div id="alert">
                <div className="alert-icon" style={{backgroundColor: this.props.color}}><Svg variable={this.props.icon} /></div>
                <div className="alert-content">
                    <h1 style={{color: this.props.color}}>{this.props.title}</h1>
                    <p>{this.props.content}</p>
                </div>
        </div>
    }
}

export function Background_game(){
    return <>
        <Alert icon="ok" color="#fcba03" title="this is title" content="this is content je raconte ma vie blablbabla"/>
        <Bottom_bar/>
    </>
}
