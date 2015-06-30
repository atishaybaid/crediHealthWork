angular.module('multiSelectApp').controller('mainCtrl', mainCtrl);

function mainCtrl($scope, dataFetchService) {
    var checkedCities = [];
    var checkedHospitals = [];
    var checkedAreas = [];
    $scope.delhiCount;
    $scope.noidaCount;
    $scope.gurgaonCount;
    
    

   



    
dataFetchService.getCurrentData().then(function (data) {
            
             $scope.details = data.doctors;
            $scope.delhiCount = data.info.count.delhi;
                $scope.noidaCount = data.info.count.noida;
                        $scope.gurgaonCount = data.info.count.gurgaon;


            console.log(data.info.count.delhi);
    
            console.log($scope.details);
        }, function (reject) {
            console.log("rejection");
        });


   






    $scope.firstFilterChange = function (data) {
        console.log("inside ffc");
        var area = data.Area;
        if (data.isAreaChecked) {
            checkedAreas.push(area)
        } else {
            checkedAreas.splice(checkedAreas.indexOf(area), 1);
        };
        for (var i in $scope.details) {
            if (checkedAreas.indexOf($scope.details[i].Area) != -1) {
                $scope.details[i].isHospitalEnabled = true;
            } else {
                $scope.details[i].isHospitalEnabled = false;
            };
            if (checkedAreas.length == 0) {
                for (var i in $scope.details) {
                    $scope.details[i].isHospitalEnabled = true;
                }

            }

        }
        console.log($scope.details);
    };




    $scope.secondFilterChange = function (data) {
        console.log(data);
        var Hospital_Name = data.Hospital_Name;
        console.log(data.isHospitalChecked);
        if (data.isHospitalChecked) {
            console.log("inside iff");
            checkedHospitals.push(Hospital_Name);
        } else {
            checkedHospitals.splice(checkedHospitals.indexOf(Hospital_Name), 1);
        };
        for (var i in $scope.details) {
            if (checkedHospitals.indexOf($scope.details[i].Hospital_Name) != -1) {
                $scope.details[i].isAreaEnabled = true;
            } else {
                $scope.details[i].isAreaEnabled = false;
            };
            if (checkedHospitals.length == 0) {
                for (var i in $scope.details) {
                    $scope.details[i].isEnabled = true;
                }

            }

        }
    };

    $scope.resetButton = function () {
        console.log("hswc");
        for(i in $scope.details){
            $scope.details[i].isCityEnabled=true,
            $scope.details[i].isHospitalEnabled= true,
            $scope.details[i].isAreaEnabled= true,
            $scope.details[i].isHospitalChecked= false,
            $scope.details[i].isCityChecked= false,
            $scope.details[i].isAreaChecked= false
        }
        
        
        
    };







}


