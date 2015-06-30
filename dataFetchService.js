angular.module('multiSelectApp').service("dataFetchService", dataFetchService);


function dataFetchService($q, $http) {
    
    /*this.getCompleteData = function () {
        var url = 'http://testing.credihealth.com/api/v2/search?q=cardiology&city=Delhi%20NCR&type=Doctors&lat=&lng=&loc_id=&radius=&page=1';
        return $q(function (resolve, reject) {
            $http.get(url).
            success(function (data, status, headers, config) {
                if (data) {
                    resolve(data);
                }
            }).
            error(function (data, status, headers, config) {
                reject('api is down');
            })
        });
    };

    this.getCityData = function (city) {
        var city = city;
        var url = 'http://testing.credihealth.com/api/v2/search?q=cardiology&city=' + city;
        return $q(function (resolve, reject) {
            $http.get(url).
            success(function (data, status, headers, config) {
                if (data) {
                    resolve(data);
                }
            }).
            error(function (data, status, headers, config) {
                reject('api is down');
            })
        });
    };

*/
    
    
    this.getCurrentData = function(){
        return $q(function(resolve,reject){
            $http.get('Doctors.json').
            success(function(data,status,headers,config){
                if (data) {
                    resolve(data);
                }
                
            }).
            error(function(data,status,headers,config){
                reject('api is down');  
            })
        });
    }



}