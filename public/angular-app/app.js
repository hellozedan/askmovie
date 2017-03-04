/**
 * Created by zedan on 3/3/2017.
 */

angular.module('moviesapp',['ui.router'])
.config(config)
.controller('HomeController',HomeController)
    .controller('AdsPageController',AdsPageController)
.controller('MovieProfileController',MovieProfileController)
.controller('MovieListController',MovieListController);

function config($stateProvider,$urlRouterProvider){
   /* $routeProvider
        .when('/',{
            templateUrl:'angular-app/home.html',
            controller: 'HomeController',
            controllerAs:'vm'

        })
        .when('/movie_profile',{
            templateUrl:'movie-profile/movie_profile.html',
            controller: 'MovieProfileController',
            controllerAs:'vm'

        })
        .when('/AdsPage',{
            templateUrl:'ads_page/ads_page.html',
            controller: 'AdsPageController',
            controllerAs:'vm'

        });*/
    $urlRouterProvider.otherwise('/movie_list');
    $stateProvider
        .state('AdsPage', {
            url:'/AdsPage/:url',
            templateUrl:'ads_page/ads_page.html',
            controller: 'AdsPageController',
            controllerAs:'vm'
        })
        .state('movie_profile',{
            url: "/movie_profile/:id",
            templateUrl:'movie-profile/movie_profile.html',
            controller: 'MovieProfileController',
            controllerAs:'vm'

        })
        .state('movie_list',{
            url:'/movie_list',
            templateUrl:'movie-list/movie_list.html',
            controller: 'MovieListController',
            controllerAs:'vm'

        })
    ;




}


function HomeController(){
    var vm=this;
    vm.title="Home Page App";

    vm.movie={


    }
}

