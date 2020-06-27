import React from 'react';
import Home from './Home';
import Launch from './Launch';
import LaunchDetail from './LaunchDetail';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Layout from '../components/Layout';

function App() {
    return (
         <Router>
                <Switch>
                    <Route exact path="/">
                        <Layout current={"home"}>
                            <Home />
                        </Layout>

                    </Route>
                    <Route exact path="/history">
                        <Layout  current={"history"}>
                            <Launch/>
                        </Layout>
                    </Route>
                    <Route exact path="/l/:id">
                        <Layout>
                            <LaunchDetail/>
                        </Layout>
                    </Route>
                </Switch>
            </Router>
    );
}

export default App;
