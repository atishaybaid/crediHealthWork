angular.module('multiSelectApp').controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
    $scope.selectedLocalities = [];
    $scope.filteredList = [];




    console.log("controller working");

    $scope.localities = [{
        city: 'Gurgaon',
        isChecked: false
    }, {
        city: 'Delhi',
        isChecked: false
    }, {
        city: 'Noida',
        isChecked: false
    }];

    $scope.hospitals = [{
            name: 'AIMS',
            locality: 'Delhi'
                }, {
            name: 'Forits',
            locality: 'Noida'
                }, {
            name: 'Kailash',
            locality: 'Noida'
                }, {
            name: 'MAX',
            locality: 'Gurgaon'
        }, {
            name: 'Ashwini',
            locality: 'Delhi'
                }, {
            name: 'Dds',
            locality: 'Noida'
                }, {
            name: 'Jaypee',
            locality: 'Noida'
                }, {
            name: 'Guardian',
            locality: 'Gurgaon'
        }
                    ];

    
    $scope.hospitals.forEach(function(hospital){
         $scope.filteredList.push(hospital.name);
    });


    $scope.updateList = function (locality) {
        $scope.filteredList = [];
        console.log("inside  updateList");
        console.log(locality);
        console.log($scope.selectedLocalities);
        if (locality.isChecked) {
            $scope.selectedLocalities.push(locality.city);

        } else {
            var index = $scope.selectedLocalities.indexOf(locality.city);
            $scope.selectedLocalities.splice(index, 1);


        };
        $scope.hospitals.forEach(function (hospital) {
            if ($scope.selectedLocalities.indexOf(hospital.locality) != -1) {
                if ($scope.filteredList.indexOf(hospital.name) == -1) {
                    $scope.filteredList.push(hospital.name);
                }

            }
        });






    }

}