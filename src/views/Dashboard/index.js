import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import APP_PATHS from '../../constants/appPath';
//import LogoutView from "../home/auth/Logout";
import Search from "./SearchPage/Search"
import SearchResult from "./SearchResult/SearchResult"
import Transactions from './TransactionPage/Transaction';
import Invite from './InitiatedInvitePage/Invite.js';
import Profile from './ProfilePage/Profile';
import AcceptedRequest from './Requests/AcceptedRequest';

const AppView =  ()  => {
    return(
        <div>
            <Router>
                <Switch>
                    {/* <Route  path={APP_PATHS.URLS.AUTH.LOGOUT} component={LogoutView} /> */}
                    <Route  path={APP_PATHS.URLS.DASHBOARD.SEARCH} component={Search} />
                    <Route  path={APP_PATHS.URLS.DASHBOARD.SEARCH_RESULT} component={SearchResult} />
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
