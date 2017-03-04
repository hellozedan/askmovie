/**
 * Created by zedan on 3/3/2017.
 */

function MovieProfileController(MoviesService,$state){
    var vm=this;
    vm.title="Movie Profile";
/*
    function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }


    var id = getParameterByName('id');*/
    var id = $state.params.id;
/*    var id='58bad03f3ad01130ac781c7a';*/
    vm.movie={};
    MoviesService.getMovieByID(id).then(function (result) {
            if (result != null) {
                vm.movie = result;

            }
        }, function (err) {
        }
    );


    vm.GoToMovieLink=function(url){

        var url = $state.href('AdsPage', {url:url});
        window.open(url, '_blank');
    }

    vm.AddBadforLink=function(index){
        vm.movie.links[index].bad++;
    /*    vm.movie.links.push({
            bad:2,
            url:'www.facebook.com'
        })
*/
        MoviesService.edit(vm.movie).then(function (result) {

            }, function (err) {
            }
        );
    }

    vm.AddGoodforLink=function(index){
        vm.movie.links[index].good++;
        /*    vm.movie.links.push({
         bad:2,
         url:'www.facebook.com'
         })
         */
        MoviesService.edit(vm.movie).then(function (result) {

            }, function (err) {
            }
        );
    }


}
