import React from 'react';
import { connect } from "react-redux";

import {Background_game} from "../window/background"
import {Inventory} from "../window/inventory"

export class Dialog extends React.Component{
    render(){
        const current_window = this.props.window.current
        
        return <>
            {current_window == "background" ?  <Background_game />   :  null}
            {current_window == "inventory" ?  <Inventory />   :  null}
        </>
    }
}

export default connect((state, ownProps) => {
    return {
        window : state.CompenentDialog
    }
}, (dispatch) => {
    return {}
})(Dialog);