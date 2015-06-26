angular.module('multiSelectApp').controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
    var checkedCities = [];
    var checkedHospitals = [];
    var checkedAreas=[];


    $scope.details = [
        {
            "Name": "Dr. Atul Kumar",
            "Specialty": "Internal Medicine",
            "Hospital_Name": "Max Medcenter",
            "City": "Gurgaon",
            "Area": "Sector 31",
            isCityEnabled: true,
            isHospitalEnabled: true,
            isAreaEnabled: true,
            isHospitalChecked: false,
            isCityChecked: false,
            isAreaChecked:false

    },
        {
            "Name": "Dr. Vishesh Bhatia",
            "Specialty": "Orthopaedics",
            "Hospital_Name": "Fortis Memorial Research Institute",
            "City": "Gurgaon",
            "Area": "Huda City Center",
            isCityEnabled: true,
            isHospitalEnabled: true,
            isAreaEnabled: true,
            isHospitalChecked: false,
            isCityChecked: false,
            isAreaChecked:false
    }, {
            "Name": "Dr. Ram Charan",
            "Specialty": "Neurology",
            "Hospital_Name": "Apollo Hospitals",
            "City": "Delhi",
            "Area": "Sarita Vihar",
            isCityEnabled: true,
            isHospitalEnabled: true,
            isAreaEnabled: true,
            isHospitalChecked: false,
            isCityChecked: false,
            isAreaChecked:false

    },
        {
            "Name": "Dr. (Col) A P Shekhawat",
            "Specialty": "Internal Medicine",
            "Hospital_Name": "Max Hospital",
            "City": "Delhi",
            "Area": "Panchsheel",
            isCityEnabled: true,
            isHospitalEnabled: true,
            isAreaEnabled: true,
            isHospitalChecked: false,
            isCityChecked: false,
            isAreaChecked:false
    }, {
            "Name": "Dr. Preeti Saran",
            "Specialty": "Internal Medicine",
            "Hospital_Name": "Asha Multi-specialty Hospital",
            "City": "Noida",
            "Area": "Shahpur - Sector 128",
            isCityEnabled: true,
            isHospitalEnabled: true,
            isAreaEnabled: true,
            isHospitalChecked: false,
            isCityChecked: false,
            isAreaChecked:false
    },
        {
            "Name": "Dr. Fardeen Patwari",
            "Specialty": "Internal Medicine",
            "Hospital_Name": "Asha Multi-specialty Hospital",
            "City": "Noida",
            "Area": "Shahpur - Sector 128",
            isCityEnabled: true,
            isHospitalEnabled: true,
            isAreaEnabled: true,
            isHospitalChecked: false,
            isCityChecked: false,
            isAreaChecked:false
    }
  ];







    $scope.firstFilterChange = function (data) {
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



}