'use strict';

import * as Marionette from 'backbone.marionette';
import * as _ from 'underscore';
import * as Handlebars from 'handlebars';

Marionette.TemplateCache.prototype.compileTemplate = (rawTemplate: any): any => {
  if (_.isFunction(rawTemplate)) {
    return rawTemplate;
  } else {
    return Handlebars.compile(rawTemplate);
  }
};
Marionette.TemplateCache.prototype.loadTemplate = (templateId: string): any => {
  let template: any;

  if (Handlebars.templates && Handlebars.templates[templateId]) {
    template = Handlebars.templates[templateId];
  } else {
    template = templateId;
  }

  return template;
};

export default class View<TModel extends Backbone.Model> extends Marionette.View<Backbone.Model> {}
