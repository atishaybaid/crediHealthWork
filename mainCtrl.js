angular.module('multiSelectApp').controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {

   

    $scope.details = [
        {
            "Name": "Dr. Atul Kumar",
            "Specialty": "Internal Medicine",
            "Hospital_Name": "Max Medcenter",
            "City": "Gurgaon",
            "Area": "Sector 31",
            isCityEnabled: false,
            isHospitalEnabed: false,
            isHospitalChecked: false,
            isCityChecked: false

    },
        {
            "Name": "Dr. Vishesh Bhatia",
            "Specialty": "Orthopaedics",
            "Hospital_Name": "Fortis Memorial Research Institute",
            "City": "Gurgaon",
            "Area": "Huda City Center",
            isCityEnabled: false,
            isHospitalEnabed: false,
            isHospitalChecked: false,
            isCityChecked: false
    }, {
            "Name": "Dr. Ram Charan",
            "Specialty": "Neurology",
            "Hospital_Name": "Apollo Hospitals",
            "City": "Delhi",
            "Area": "Sarita Vihar",
            isCityEnabled: false,
            isHospitalEnabed: false,
            isHospitalChecked: false,
            isCityChecked: false

    },
        {
            "Name": "Dr. (Col) A P Shekhawat",
            "Specialty": "Internal Medicine",
            "Hospital_Name": "Max Hospital",
            "City": "Delhi",
            "Area": "Panchsheel",
            isCityEnabled: false,
            isHospitalEnabed: false,
            isHospitalChecked: false,
            isCityChecked: false
    }, {
            "Name": "Dr. Preeti Saran",
            "Specialty": "Internal Medicine",
            "Hospital_Name": "Asha Multi-specialty Hospital",
            "City": "Noida",
            "Area": "Shahpur - Sector 128",
            isCityEnabled: false,
            isHospitalEnabed: false,
            isHospitalChecked: false,
            isCityChecked: false
    },
        {
            "Name": "Dr. Fardeen Patwari",
            "Specialty": "Internal Medicine",
            "Hospital_Name": "Asha Multi-specialty Hospital",
            "City": "Noida",
            "Area": "Shahpur - Sector 128",
            isCityEnabled: false,
            isHospitalEnabed: false,
            isHospitalChecked: false,
            isCityChecked: false
    }
  ];





    

    $scope.firstFilterChange = function (data) {
        var city = data.City;
        if (data.isCityChecked) {
            for (var i in $scope.details) {
                if ($scope.details[i].City == city) {
                    $scope.details[i].isHospitalEnabed = true;
                }
            }
        } else {
            for (var i in $scope.details) {
                if ($scope.details[i].City == city) {
                    $scope.details[i].isHospitalEnabed = false;
                }
            };

        };
    };
    
     $scope.secondFilterChange = function (data) {
         console.log("in");
        var Hospital_Name = data.Hospital_Name;
         console.log(data.isHospitalChecked);
        if (data.isHospitalChecked) {
            for (var i in $scope.details) {
                if ($scope.details[i].Hospital_Name == Hospital_Name) {
                    $scope.details[i].isCityEnabed = true;
                }
            }
        } else {
            for (var i in $scope.details) {
                if ($scope.details[i].Hospital_Name == Hospital_Name) {
                    $scope.details[i].isCityEnabed = true;
                }
            };

        };
    };



}