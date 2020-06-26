import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import { connect } from "react-redux";

export class TestCompenent extends React.Component{
    constructor(props) {
        super(props);
    }

   
    render(){
        return <><h1> test :  {} </h1></> 
    }

}

// export default connect((state, ownProps) => {
//     console.log(state)

//     return {
//         TestCompenent:  state.testcompenent
//     }
// }, (dispatch) => {
//     console.log(dispatch)
//     return {
//         state
//     }
// })(TestCompenent);

const mapStateToProps = state => {

    return {value : state.value}
}

export default connect(mapStateToProps) (TestCompenent)


