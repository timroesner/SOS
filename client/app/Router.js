import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HelpView from './HelpView';

const Router = () => (
    <main>
        <Switch>
            <Route path='/' component={HelpView} />
        </Switch>
    </main>
)

export default Router