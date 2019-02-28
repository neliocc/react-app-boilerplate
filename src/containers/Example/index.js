/* This is an example container using Redux */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
/*
    We will use the example action to showcase how it gets propagated.
*/
import {exampleAction} from '../../redux/actions/exampleAction';

//We will use the example component as an example
import ExampleComponent from '../../components/Example';


class ExampleContainer extends Component
{
    render()
    {
        return <div>
            This is an example Container. That uses Redux.
            {!this.props.example_value&&<div><p style={{padding:"40px",fontSize:"14px"}}>
                If you are seeing this message is becauase you have neither clicked on the button on the Example Container nor on the one on the Example Component.
            </p></div>}
            {this.props.example_value&&<div><p style={{padding:"40px",fontSize:"14px"}}>
                You are seeing this message becauase you have clicked either on the button on the Example Container or on the one on the Example Component. The current value of the global state.example_value is: <b>{this.props.example_value}</b>
            </p></div>}

            <button onClick={()=>this.props.exampleAction("The Container button has been clicked")}>Click this one</button>
            <br />
            <br />
            <ExampleComponent />
            <div>
                You can <Link to="/example">Click Here</Link> to test navigation.
            </div>
            
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
        We define the exampleAction imported from example action, as one of the default properties of the container, so we can do this.props.exampleAction()
    */
    ExampleComponent.propTypes=
    {
        exampleAction:PropTypes.func
    };
/*
    Finally instead of exporting the Container, we export the return value of connect. Here you may want to apply or include other middleware.
*/
export default connect(mapStateToProps,{exampleAction})(ExampleContainer);