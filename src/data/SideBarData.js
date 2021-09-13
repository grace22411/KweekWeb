import { APP_PATHS } from '../constants/appPath';

export const SidebarData = [
    {
      title: 'Search',
      path:APP_PATHS.URLS.DASHBOARD.SEARCH,
      icon: 'th-large',
    },
    {
      title: 'My Transactions',
      path: APP_PATHS.URLS.DASHBOARD.TRANSACTION,
      icon: 'wallet',
    },
    {
      title: 'My Initiated Invites',
      path:  APP_PATHS.URLS.DASHBOARD.INVITE,
      icon: 'window-restore'
    },
    {
        title: 'My Acceptance Requests',
        path: APP_PATHS.URLS.DASHBOARD.ACCEPTANCE_REQUEST,
        icon: 'box'
      }
    
  ];