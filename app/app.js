import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import WebSdk from 'webapi';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

Application.initializer({
  name: "main",

  initialize: function (application) {

      // $.extend(true, config, application.config);
      // config.api.url = config.api.baseUrl + config.api.namespace;

      // // Make application config accessible to all controllers, views and routes
      // application.register('config:main', config, {instantiate: false});
      // application.inject('route', 'config', 'config:main');
      // application.inject('controller', 'config', 'config:main');
      // application.inject('component', 'config', 'config:main');
      // application.inject('view', 'config', 'config:main');
      // application.inject('service', 'config', 'config:main');

      // // Configure WebSdk Api by set environment variables
      // var pathArray = config.api.baseUrl.split( '/' );
      // var protocol = pathArray[0] + "\\\\";
      // var host = pathArray[2];
      var apiConfig = {
          cache : false,
          host : "api-dev.bimplus.net",
          protocol : "https://"
      };

      // // In case of using localhost as api server, let's use also segment pathArray[3] to correctly configure host
      // if(pathArray[3].length>1)
      // {
      //     apiConfig.host += "/" + pathArray[3];
      // }


      // var qa = window.location.search.replace(/\?|\//g, '').split('&');
      // var qp = [];
      // var queryParams = {};

      // // Workaround for missing query-params-new feature on ember.
      // // TODO: Rewrite when the feature will be integrated into ember stable
      // for (var i = 0, il = qa.length; i < il; i++) {
      //     qp = qa[i].split('=');
      //     queryParams[qp[0]] = qp[1];
      // }

      // window.queryParams = queryParams;

      // Create global websdk_api instance and inject to all parts of the app
      // https://guides.emberjs.com/release/applications/applications-and-instances/
      // https://guides.emberjs.com/release/applications/dependency-injection/
      // 1.)     
      // Create own factory type apiAdapter:main
      var websdk_api = new WebSdk.Api(apiConfig);
      application.register('apiAdapter:main', websdk_api, { instantiate: false });
      // 2.) 
      // Once a factory is registered, it can be "injected" where it is needed.
      application.inject('route', 'apiAdapter', 'apiAdapter:main');
      application.inject('controller', 'apiAdapter', 'apiAdapter:main');
      application.inject('component', 'apiAdapter', 'apiAdapter:main');
      application.inject('model', 'apiAdapter', 'apiAdapter:main');
      application.inject('service', 'apiAdapter', 'apiAdapter:main');


      // window.App = application;

      // window.langArray =  ["en","de","fr","ru","it","es","cs","tr","us"];

      // window.validateLanguage  = function (lang) {

      //     if (lang) {
      //         for (var i = 0; i < window.langArray.length; i++) {
      //             var substr = lang.substring(0, 2);
      //             if (window.langArray[i] === substr.toLowerCase()) {
      //                 if (lang.toLowerCase() !== window.langArray[i]) {
      //                     console.warn("Language :" + lang + " not found, using " + window.langArray[i] + " instead");
      //                 }
      //                 return window.langArray[i];
      //             }
      //         }
      //         console.warn("Language :" + lang + " not found, switching to english.");
      //         return "en"; // fallback
      //     } else {

      //         console.warn("Language undefined, switching to english.");
      //     }

      //     return "en"; // fallback
      // }


      // window.switchLanguage = function(lang, shouldRefresh) {

      //     if (lang) {

      //         var validatedLang = window.validateLanguage(lang);

      //         localStorage.setItem('language', validatedLang );

      //         if (shouldRefresh) {

      //             window.location.reload();

      //         } else {

      //             var newLangStrings =  require("bimexplorer/lang/" + "strings_" + validatedLang.toLowerCase())["default"];

      //             Ember.STRINGS = $.extend(strings, newLangStrings); // replace english strings with strings from new language
      //         }

      //     }

      // };

      // window.refresh = function() {
      //     window.location.reload();
      // };

      // // Define / replace native Promise
      // window.Promise = Ember.RSVP.Promise;

      // Api.initApi(config);

      // var locale = window.navigator.userLanguage || window.navigator.language;
      // moment.locale(locale);

      // var cachedLang = localStorage.getItem('language');

      // cachedLang = window.validateLanguage (cachedLang);

      // var currentlang = (cachedLang === "undefined" || !cachedLang) ? "en" : cachedLang;
      // window.switchLanguage(currentlang);

      // // Show JS heap size in Chrome
      // if (window.performance && window.performance.memory) {

      //     console.log("# JS heap size limit: %s MB", (window.performance.memory.jsHeapSizeLimit / 1e6).toFixed(2))

      // }

      // // /?embedded=1 parameter support, search param anywhere in the url
      // if (window.location.href.indexOf('embedded=1') >= 0) {
      //     window.embedded = true;
      // }

      // if (queryParams.hasOwnProperty('external_client') && queryParams.external_client) {
      //     window.external_client = queryParams.external_client;
      // }

      // if(queryParams.hasOwnProperty('token')) {
      //     window.token = queryParams.token;
      // }
  }
});

export default App;
