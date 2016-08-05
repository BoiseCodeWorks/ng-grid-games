;(function(){

  angular.module('gridGames', [])
    .component('grid', {
      template: `
        <div class="grid">
          <div class="row" ng-repeat="row in $ctrl.grid">
            <div class="cell" ng-repeat="cell in row" ng-class="{on: cell.on}" ng-mouseOver="$ctrl.cellClick(cell)">
             {{cell.row}}, {{cell.col}}
            </div>
          </div>
        </div>
      `,
      controller: GridController,
      bindings:{
        size: '<'
      }
    })

    function GridController() {
      let $ctrl = this;
      $ctrl.grid = [];
      function makeGrid(){
        for (let row = 0; row < $ctrl.size; row++) {
          $ctrl.grid[row] = []
          for (let col = 0; col < $ctrl.size; col++) {
            $ctrl.grid[row][col] = {row: row, col: col}
          }
        }
      }

      $ctrl.cellClick = function(cell){
        cell.on = !cell.on;
      }

      $ctrl.$onInit = function(){
        console.log('Making the grid')
        makeGrid()
        console.log('The grid has been made')
      }

    }

}());