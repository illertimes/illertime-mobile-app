angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('illertimes', {
    url: '/page1',
    templateUrl: 'templates/illertimes.html',
    controller: 'illertimesCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('beginPage', {
    url: '/page3',
    templateUrl: 'templates/beginPage.html',
    controller: 'beginPageCtrl'
  })

  .state('startingYour', {
    url: '/page4',
    templateUrl: 'templates/startingYour.html',
    controller: 'startingYourCtrl'
  })

  .state('help', {
    url: '/Help',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

  .state('signup', {
    url: '/page11',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});