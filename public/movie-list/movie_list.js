/**
 * Created by zedan on 3/3/2017.
 */

function MovieListController(MoviesService,$state){
    var vm=this;
    vm.title="Movie List";
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

    vm.movie_list=[];
    vm.searchbox_input="";
    function getMessageTextUrl(){
        var messageText="";
        var messageText = getParameterByName('s');
        if(messageText!="") {
            MoviesService.searchMovies(messageText).then(function (result) {
                    if (result != null) {
                        vm.movie_list = result;
                    }
                }, function (err) {
                }
            );
        }
    }

    vm.searchForFilm=function(){
        var messageText = vm.searchbox_input;
        if(messageText !="") {
            MoviesService.searchMovies(messageText).then(function (result) {
                    if (result != null) {
                        vm.movie_list = result;
                    }
                }, function (err) {
                }
            );
        }

    }




    vm.GoToMovieProfile=function(id){
        console.log("print"+id);
        var url = $state.href('movie_profile', {id:id});
        window.open(url, '_blank');
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

    vm.refresh=function(){
        getMessageTextUrl();
    }

    vm.see_movie="?????? ??????";
    vm.refresh();


}
