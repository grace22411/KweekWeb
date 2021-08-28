import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import APP_PATHS from '../../constants/appPath';
import LoginView from "../home/auth/LoginView";
import Search from "../Dashboard/SearchPage/Search"
import Transaction from '../Dashboard/TransactionPage/Transaction';


const AppView =  ()  => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route  path={APP_PATHS.URLS.AUTH.LOGIN} component={LoginView} />
                    <Route  path={APP_PATHS.URLS.DASHBOARD.SEARCH} component={Search} />
                    <Route  path={APP_PATHS.URLS.HOME} component={Search} />
                    <Route  path='auth' component={Search} />
                    <Route  path={APP_PATHS.URLS.DASHBOARD.TRANSACTION} component={Transaction} />
                </Switch>
            </Router>
        </div>
    )
};

export default AppView;
