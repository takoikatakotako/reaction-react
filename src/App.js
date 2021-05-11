import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import List from "./List";
import Detail from "./Detail";
import NotFound from "./NotFound";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={List}/>
                    <Route exact path='/reaction/:directoryName' component={Detail}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}


export default App;
