import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Resume from './components/Resume';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/StephensAwesomeResume">
                    <Resume />
                </Route>
                <Route path="/StephensAwesomeProjects">
                    <Projects />
                </Route>
                <Route>Page Not Found</Route>
            </Switch>
        </>
    );
}

export default App;
