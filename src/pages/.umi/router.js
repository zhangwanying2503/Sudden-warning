import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'D:/讲课资料/大实训二/project/practical_training/src/pages/.umi/LocaleWrapper.jsx'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/account",
        "exact": true,
        "component": require('../account/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/account_behavior",
        "exact": true,
        "component": require('../account_behavior/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/buffs_group",
        "exact": true,
        "component": require('../buffs_group/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/content_monitoring",
        "exact": true,
        "component": require('../content_monitoring/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/correlation_analysis",
        "exact": true,
        "component": require('../correlation_analysis/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/dept",
        "exact": true,
        "component": require('../dept/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/function",
        "exact": true,
        "component": require('../function/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/group",
        "exact": true,
        "component": require('../group/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/group_characteristics",
        "exact": true,
        "component": require('../group_characteristics/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/keywords",
        "exact": true,
        "component": require('../keywords/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/log",
        "exact": true,
        "component": require('../log/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/operation",
        "exact": true,
        "component": require('../operation/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/role",
        "exact": true,
        "component": require('../role/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/user",
        "exact": true,
        "component": require('../user/index.js').default,
        "_title": "project",
        "_title_default": "project"
      },
      {
        "path": "/monitoring_configuration",
        "exact": false,
        "component": require('../monitoring_configuration/_layout.js').default,
        "routes": [
          {
            "path": "/monitoring_configuration/accountNumber",
            "exact": true,
            "component": require('../monitoring_configuration/accountNumber.js').default,
            "_title": "project",
            "_title_default": "project"
          },
          {
            "path": "/monitoring_configuration/groups",
            "exact": true,
            "component": require('../monitoring_configuration/groups.js').default,
            "_title": "project",
            "_title_default": "project"
          },
          {
            "path": "/monitoring_configuration",
            "exact": true,
            "component": require('../monitoring_configuration/index.js').default,
            "_title": "project",
            "_title_default": "project"
          },
          {
            "component": () => React.createElement(require('D:/讲课资料/大实训二/project/practical_training/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
            "_title": "project",
            "_title_default": "project"
          }
        ],
        "_title": "project",
        "_title_default": "project"
      },
      {
        "component": () => React.createElement(require('D:/讲课资料/大实训二/project/practical_training/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "project",
        "_title_default": "project"
      }
    ],
    "_title": "project",
    "_title_default": "project"
  },
  {
    "component": () => React.createElement(require('D:/讲课资料/大实训二/project/practical_training/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "project",
    "_title_default": "project"
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
<RendererWrapper0>
          <Router history={history}>
      { renderRoutes(routes, props) }
    </Router>
        </RendererWrapper0>
  );
}
