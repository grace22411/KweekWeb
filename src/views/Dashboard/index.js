import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import APP_PATHS from '../../constants/appPath';
// import LoginView from "../home/auth/LoginView";
import LogoutView from "../home/auth/Logout";
import Search from "../Dashboard/SearchPage/Search"
import Transactions from '../Dashboard/TransactionPage/Transaction';
import Invite from '../Dashboard/InitiatedInvitePage/Invite';
import Profile from '../Dashboard/ProfilePage/Profile';
import AcceptedRequest from '../Dashboard/Requests/AcceptedRequest';


const AppView =  ()  => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route  path={APP_PATHS.URLS.AUTH.LOGOUT} component={LogoutView} />
                    <Route  path={APP_PATHS.URLS.DASHBOARD.SEARCH} component={Search} />
                    <Route  path={APP_PATHS.URLS.DASHBOARD.TRANSACTION} component={Transactions} />
                    <Route  path={APP_PATHS.URLS.DASHBOARD.INVITE} component={Invite} />
                    <Route  path={APP_PATHS.URLS.DASHBOARD.ACCEPTANCE_REQUEST} component={AcceptedRequest} />
                    <Route  path={APP_PATHS.URLS.DASHBOARD.PROFILE} component={Profile} />
                    <Route  path={APP_PATHS.URLS.HOME} component={Search} />
                </Switch>
            </Router>
        </div>
    )
};

export default AppView;
