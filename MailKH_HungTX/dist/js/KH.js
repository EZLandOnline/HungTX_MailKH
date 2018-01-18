debugger;
var app = angular.module('customer', [])
                .factory('Customers', Customers)
                .controller('customerCtrl', customerCtrl)
                
function customerCtrl($scope, Customers) {
    $scope.customers = Customers.customers;
}
function Customers(){
    var customer ={
            customers : [
                {id:1,name : "Nguyễn Thành Đôn",birthday:"22/10/1996", passport : 187965324, type: "Căn hộ", project: "River Side",value :"3,5 tỷ" },
				{id:2,name : "Trần Xuân Hùng",birthday:"2/04/1996", passport : 187564987, type: "Biệt thự", project: "Central Park",value :"1,2 tỷ" },
				{id:3,name : "Ngô Minh Đức ",birthday:"14/11/1996", passport : 18756423, type: "Căn hộ", project: "Central Park",value :"5,5 tỷ" },
				{id:4,name : "Nguyễn Hoàng Duy",birthday:"12/01/1996", passport :18765423, type: "Biệt thự", project: "River Side",value :"3,5 tỷ" },
                
            ]
    };
    return customer;
}