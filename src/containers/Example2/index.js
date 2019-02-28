/* This is an example container using Redux */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';


class Example2Container extends Component
{
    render()
    {
        return <div>
            I am a container just to showcase navigation and Redux.
            {!this.props.example_value&&<p>The global state.example_value has not changed</p>}
            {this.props.example_value&&<p>This is the current value of the global state.example_value: <b>{this.props.example_value}</b></p>}
            <br />
            <br />
            <Link to="/">Go back to Home Page -></Link>
            
        </div>
    }
}


const mapStateToProps= state =>
{
    /* 
        We map the state of the reducer tot he props of the container, in this case we map the example_value property from the reducer state, to the container properties, so it can be accessed as "this.props.example_value"
    */
    return {
        example_value:state.example.example_value
    }
};
    
/*
    Finally instead of exporting the Container, we export the return value of connect. Here you may want to apply or include other middleware.
*/
export default withRouter(connect(mapStateToProps,{})(Example2Container));