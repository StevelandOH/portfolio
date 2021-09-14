import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Resume from './components/Resume';
import Phone from './components/Phone';
import Loader from './components/Loader';

function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, []);

    return (
        <>
            <Switch>
                <Route exact path="/">
                    {loaded ? <Phone /> : <Loader />}
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
