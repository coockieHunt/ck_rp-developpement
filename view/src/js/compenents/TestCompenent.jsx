import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import { connect } from "react-redux";

export class TestCompenent extends React.Component{
    constructor(props) {
        super(props);
    }

   
    render(){
        return <><h1> test :  {this.props.valueTest} </h1></> 
    }

}


const mapStateToProps = state => {
    return {
        valueTest : state.content
    }
}

const mapDispatchToProps = dispatch => {
    return true
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(TestCompenent)


