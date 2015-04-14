'use strict';

/**
 * @ngdoc service
 * @name ShoppinPalApp.loginService
 * @description
 * # loginService
 * Service in the ShoppinPalApp.
 */
angular.module('ShoppinPalApp')
  .service('loginService', [
    '$http', /* angular's modules/services/factories etc. */
    'ReportModel', /* loopback models */
    function ($http,
              ReportModel)
    {
      // AngularJS will instantiate a singleton by calling 'new' on this function
      return {

        /**
         * @method getSelectStore
         * Get all selected stores
         */
        getSelectStore : function () {
          return $http({
            url: 'scripts/json/storesReport.json',
            method: 'GET'
          }).then(function (response) {
              return response;
            },
            function (error) {
              alert('Somthing went wrong.');
              console.error(error);
            });
        },

        /**
         * @method getStoreReport
         * Get stores report
         */
        getStoreReport: function () {
          //return ReportModel.findById({id: 1})
          return ReportModel.find({include:['stockOrderLineitemModels']})
            .$promise.then(function(reportModelInstance){
              console.log('reportModelInstance:\n' + JSON.stringify(reportModelInstance,null,2));
              return reportModelInstance.stockOrderLineitemModels();
            },
            function (error) {
              alert('Something went wrong.');
              console.log(error);
            });
        }
      };
    }
  ]);
