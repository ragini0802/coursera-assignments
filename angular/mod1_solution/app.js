!function(){"use strict";function r(r){r.showMessage=function(){var o=function(r){var o=0;if(""===r)return 0;if(void 0!==r)for(var e=r.split(","),t=0;t<e.length;t++)""!==e[t].trim()&&o++;return o}(r.list);o<1?(r.message="Please enter data first",r.textColor={color:"red"},r.borderColor={"border-color":"red"}):o<=3?(r.message="Enjoy!",r.textColor={color:"green"},r.borderColor={"border-color":"green"}):(r.message="Too much!",r.textColor={color:"green"},r.borderColor={"border-color":"green"})}}angular.module("LunchCheck",[]).controller("LunchCheckController",r),r.$inject=["$scope"]}();