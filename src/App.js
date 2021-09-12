import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Resume from './components/Resume';
import Phone from './components/Phone';

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Phone />
                </Route>
                <Route path="/StephensAwesomeResume">
                    <Resume />
                </Route>
                <Route>Page Not Found</Route>
            </Switch>
        </>
    );
}

export default App;
