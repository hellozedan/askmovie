/**
 * Created by zedan on 3/3/2017.
 */
function MoviesService($http, $q) {


     /*  var  apiBase= 'http://localhost:5000/api/';*/
       var  apiBase= 'https://askmovie.herokuapp.com/api/';

    return ({
        create: create,
        edit:edit,
        getAllMovies:getAllMovies,
        getMovieByID:getMovieByID,
        getTopxMovies:getTopxMovies,
        deleteMoviesById:deleteMoviesById,
        getLastxMovies:getLastxMovies,
        searchMovies:searchMovies

    });
    function getAllMovies() {
        var deferred = $q.defer();

        $http.get(apiBase+'movies/getAllMovies', { headers: { 'Content-Type': 'application/json' } })
            .then(function (data) {
                deferred.resolve(data.data);
            },
            function (data) {
                /*ConfigurationService.isServerDown(data);*/
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getTopxMovies(x) {
        var deferred = $q.defer();

        $http.get(apiBase+'movies/getTopxMovies?x='+x, { headers: { 'Content-Type': 'application/json' } })
            .then(function (data) {
                deferred.resolve(data.data);
            }
            ,function (data) {
                /*ConfigurationService.isServerDown(data);*/
                deferred.reject(data);
            });

        return deferred.promise;
    }
    function getLastxMovies(x) {
        var deferred = $q.defer();

        $http.get(apiBase+'movies/getLastxMovies?x='+x, { headers: { 'Content-Type': 'application/json' } })
            .then(function (data) {
                deferred.resolve(data.data);
            }
            ,function (data) {
                /*ConfigurationService.isServerDown(data);*/
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function searchMovies(messageText) {
        var deferred = $q.defer();

        $http.get(apiBase+'movies/searchMovies?messageText='+messageText, { headers: { 'Content-Type': 'application/json' } })
            .then(function (data) {
                deferred.resolve(data.data);
            }
            ,function (data) {
                /*ConfigurationService.isServerDown(data);*/
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function getMovieByID(id) {
        var deferred = $q.defer();

        $http.get(apiBase+'movies/getMovieByID?_id=' + id, { headers: { 'Content-Type': 'application/json' } })
            .then(function (data) {
                deferred.resolve(data.data);
            }
            ,function (data) {
                /*          ConfigurationService.isServerDown(data);*/
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function deleteMoviesById(id) {
        var deferred = $q.defer();

        $http.get(apiBase+'movies/deleteMoviesById?_id=' + id, { headers: { 'Content-Type': 'application/json' } })
            .success(function (data) {
                deferred.resolve(data.data);
            })
            .error(function (data) {
                /*          ConfigurationService.isServerDown(data);*/
                deferred.reject(data);
            });

        return deferred.promise;
    }


    function create(body) {
        var deferred = $q.defer();

        $http.post(apiBase+'movies/create', body, { headers: { 'Content-Type': 'application/json' } })
            .success(function (data) {
                deferred.resolve(data);
            }
            ,function (data) {
                /*  ConfigurationService.isServerDown(data);*/
                deferred.reject(data);
            });

        return deferred.promise;
    }

    function edit(body) {
        var deferred = $q.defer();

        $http.post(apiBase+'movies/edit', body)
            .then(function (data) {
                deferred.resolve(data);
            }
            ,function (data) {
                /*  ConfigurationService.isServerDown(data);*/
                deferred.reject(data);
            });

        return deferred.promise;
    }



}

angular
    .module('moviesapp')
    .factory('MoviesService', MoviesService);