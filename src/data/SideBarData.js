import React from 'react';
import acceptance from "../assets/image/acceptance.png";
import invite from "../assets/image/invite.png";
import search from "../assets/image/search.png";
import transaction from "../assets/image/transaction.png";
import { APP_PATHS } from '../constants/appPath';

export const SidebarData = [
    {
      title: 'Search',
      path:APP_PATHS.URLS.DASHBOARD.SEARCH,
      icon: search ,
    },
    {
      title: 'My Transactions',
      path: APP_PATHS.URLS.DASHBOARD.TRANSACTION,
      icon: transaction,
    },
    {
      title: 'My Initiated Invites',
      path: '/project-fund',
      icon: invite
    },
    {
        title: 'My Acceptance Requests',
        path: '/my-savings',
        icon: acceptance
      }
    
  ];