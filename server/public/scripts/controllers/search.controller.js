giphyApp.controller('SearchController', function ($http) {
    console.log('SearchController started.');
    var vm = this;
    vm.searchResults = [];
    vm.keyword = '';
    vm.randomImage = '';

    // Start by implementing these functions in
    // this controller. Once everything is working,
    // try moving randomSearch and keywordSearch
    // into a service.

    // Search for random giphy images
    vm.randomSearch = function () {
        // YOUR CODE HERE
        $http({
            method: 'GET',
            url: '/giphy/random',

        }).then(function (response) {
            console.log('random search response', response.data);
            vm.randomImage = response.data.data.image_original_url;
        });
    }

    vm.randomSearch();

    // Search for giphy images by keyword
    vm.keywordSearch = function (keyword) {
        // YOUR CODE HERE
        var keyword = 'elf';
        $http({
            method: 'GET',
            url: '/giphy', //query, so you put a ? mark. Copy your API key for that part
            params: {
                q: keyword
            }
        }).then(function (response) {
            console.log('keyword search response', response.data);
            vm.searchResults = response.data.data;
        });
    }

    vm.keywordSearch();
    
});

