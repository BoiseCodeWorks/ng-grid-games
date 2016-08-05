;(function(){

  angular.module('gridGames', [])
    .component('grid', {
      template: `
        <div class="grid">
          <div class="row" ng-repeat="row in $ctrl.grid">
            <div class="cell" ng-repeat="cell in row" ng-class="{on: cell.on}" ng-click="$ctrl.cellClick(cell)">
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
        if(cell.row > 0){
        let north = $ctrl.grid[cell.row-1][cell.col]
        north.on = !north.on
        }
        if(cell.row < $ctrl.size-1){
        let south = $ctrl.grid[cell.row+1][cell.col]
        south.on = !south.on
        }
        if(cell.col > 0){
        let west = $ctrl.grid[cell.row][cell.col-1]
        west.on = !west.on
        }
        if(cell.col < $ctrl.size-1){
        let east = $ctrl.grid[cell.row][cell.col+1]
        east.on = !east.on
        }
        cell.on = !cell.on
      }

      $ctrl.$onInit = function(){
        console.log('Making the grid')
        makeGrid()
        console.log('The grid has been made')
      }

    }

}());