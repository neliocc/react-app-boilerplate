/* This is an example component using Redux */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//We will use the example action
import {exampleAction} from '../../redux/actions/exampleAction';

class ExampleComponent extends Component
{
    render()
    {
        return <div>
            This is an example component. That uses Redux.
            
            {this.props.example_value&&<p style={{padding:"40px",fontSize:"12px"}}> By clicking on the button you've triggered the example action and now the property example.example_value in the global state has been changed to: {this.props.example_value} this is just an example of how to use Redux and to show that it actually works.</p>}
            {!this.props.example_value&&<div><button onClick={()=>this.props.exampleAction("You have clicked on the Example Component")}>Click Here!</button></div>}
        </div>
    }
}


const mapStateToProps= state =>
{
    /* 
        We map the state of the reducer tot he props of the component, in this case we map the example_value property from the reducer state, to the component properties, so it can be accessed as "this.props.example_value"
    */
    return {
        example_value:state.example.example_value
    }
};
    /* 
        We define the exampleAction imported from example action, as one of the default properties of the component, so we can do this.props.exampleAction()
    */
    ExampleComponent.propTypes=
    {
        exampleAction:PropTypes.func
    };
/*
    Finally instead of exporting the Component, we export the return value of connect. Here you may want to apply or include other middleware.
*/
export default connect(mapStateToProps,{exampleAction})(ExampleComponent);