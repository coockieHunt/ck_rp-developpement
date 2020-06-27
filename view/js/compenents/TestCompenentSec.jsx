import React from 'react';
import { connect } from "react-redux";

export class TestCompenentSec extends React.Component{
    constructor(props) {
        super(props);
        console.log("test :")
        console.log(this.props)
    }
    
    render(){
        return <><h1> test seconde :  {this.props.valueTest.content} </h1></> 
    }
}

function mapStateToProps(state) {
    return { valueTest: state.CompenentTestSec }
}

export default connect(mapStateToProps) (TestCompenentSec)


