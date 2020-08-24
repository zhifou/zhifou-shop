import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/home';
import List from '../pages/list';
import Detail from '../pages/detail';
import Page404 from '../pages/404';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={List} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path='/404' component={Page404} />
            {/* <Route component={Page404}/> */}
        </Switch>
    </HashRouter>
);

export default BasicRoute;