import React from 'react';
import { connect } from "react-redux";

export class Dialog extends React.Component{
    constructor(props) {
        super(props);
        console.log("dialog :")
        console.log(this.props)
    }

    render(){
        return <h1>current window : {}</h1>
    }
}

function mapStateToProps(state) {
    return { valueTest: state.DialogReducer }
}

export default connect(mapStateToProps) (Dialog)
