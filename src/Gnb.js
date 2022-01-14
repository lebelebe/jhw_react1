import React, { Component } from "react";
import $ from "jquery";

class Gnb extends Component{
    constructor(props){
        super(props)
        this.state = {
            jhwlink : this.props.gnblink,
            jhwNm : this.props.gnbtext,
            jhwtg : this.props.gnbtg,
        }
    }

    render(){
        return(
            <li><a href={this.state.jhwlink} target={this.state.jhwtg}>{this.state.jhwNm}</a></li>
        );
    }
}





export default Gnb;
