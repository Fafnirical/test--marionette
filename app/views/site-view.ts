/// <amd-dependency path="text!views/templates/site.hbs" />

'use strict';

import * as _ from 'underscore';
import View from 'views/base/view';

export default class SiteView extends View<Backbone.Model> {
  constructor(options?: Marionette.LayoutViewOptions<Backbone.Model>) {
    super(_.extend({
      el: '#js-app',
      template: require('text!views/templates/site.hbs'),
    }, options));
  }
}
