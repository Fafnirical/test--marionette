'use strict';

import * as Marionette from 'backbone.marionette';
import * as Backbone from 'backbone';
import SiteView from 'views/site-view';

const App = new Marionette.Application({
  region: 'body',
});

App.on('start', (options: Marionette.AppRouterOptions) => {
  Backbone.history.start();
  App.showView(new SiteView());
});

App.start();
