import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,Switch} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {history} from '../redux/store';

import ExampleContainer from './Example';
import Example2Container from './Example2';

/* This will be your root container, here you will do the navigation and have the common/global components or containers.
*/
class RootContainer extends Component {
  
    render() 
    {
        return  <ConnectedRouter history={history}>
            <Switch>
                <Route path="/example" exact component={Example2Container} />
                <Route component={ExampleContainer} />
            </Switch>
        </ConnectedRouter>;
    }
}

const mapStateToProps= state =>{
    return {...state}
  };

export default connect(mapStateToProps,{})(RootContainer);