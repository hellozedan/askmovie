/**
 * Created by zedan on 3/3/2017.
 */

function AdsPageController($state){
    var vm=this;
    vm.title="Ads Page";

    vm.url = $state.params.url;
    console.log($state.params);

    vm.ContinueToUrl=function(){
        window.open(vm.url,"_self");
    }

  //method that wait


}
