angular.module('formlyApp').controller('MainController',MainController);

 


function MainController($scope){
	
	$scope.feedBack={};


	$scope.feedBackFields=[ 
		{
            key: 'name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'First Name',
                placeholder: 'Name',
                required: true,
                class:'inputBox'
            },

        },

        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'email',
                placeholder: 'email',
                required: true
            },

            validators:{
                validateEmail:function($viewValue,$modelValue,scope){
                    var value = $modelValue || $viewValue;
                    return validateEmailFun(value) ;
                }
            }

        },

        {
            key: 'feedBack',
            type: 'textarea',
            templateOptions: {
                type: 'text',
                label: 'feedBack',
                placeholder: 'Type your feedBack here',
                required: true
            },

        },


	]	
	
function validateEmailFun(value){
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);
}

}