import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {decreaseCounter} from "../redux/actions/counterAction"
import {connect} from 'react-redux'
class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(decreaseCounter())
                }}>
                    1 azalt
                </button>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {action:bindActionCreators(decreaseCounter,dispatch)}
}
export default connect(mapDispatchToProps)(DecreaseCounter)