import ReactDOM from 'react-dom'
import React from 'react'
import '../css/index.css'

class Incremennt extends React.Component{
    constructor(props){
        super(props)
        this.state = ( {curent_increment : this.props.start} )
        this.timer = null
    }

    componentDidMount(){
        this.timer =  window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmount(){
        window.setTimeout(this.timer)
    }

    tick(){
            this.setState(function (state, props){
                var new_inc = this.state.curent_increment + this.props.step
                if( new_inc > this.props.end ){ new_inc = this.props.end}
                if( new_inc <= this.props.end ){
                    return {curent_increment : new_inc}
                }
            })
    }
    
    
    render(){
        return <span className="incr"> {this.state.curent_increment} </span>
    }
}



function Home(){
    return <div>
        <p>hello world</p>
        <Incremennt start={0} end={100} step={1}/>
    </div>
}

ReactDOM.render(< Home />, document.querySelector('#app'))