import * as React from 'react';

import App from 'App';
import { Home } from 'View/Home';
import { Advertisement } from 'View/Advertisement';

const NotFound:React.SFC<{}> = ()=><div>Not found</div>;

export const Routes = [
  {
    component: App,
    routes: [

      {
        path: `/`,
        component: Home,
        exact: true,
        alias: 'home'
      },
      {
        path: `/job/:companySlug/:jobSlug`,
        component: Advertisement,
        exact: true,
        alias: 'advertisement'
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
