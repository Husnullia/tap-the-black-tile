
function Board(rows, cols) {
  this.keyCounter = 1;
  this.dataset = [];
  this.rows = rows;
  this.cols = cols;
  this.slideCounter = 0;

  for (var i=0; i<rows; i++) {
    this.addRow();
  }

}

Board.prototype.addRow = function () {
  var row = [];
  for (var i=0; i<this.cols; i++) {row.push(0);}
  var randomSpot = Math.floor(Math.random() * (this.cols));
  row[randomSpot] = 1;
  this.dataset.unshift( {key:this.keyCounter++, row:row} );
}

Board.prototype.removeRow = function () {
  this.dataset.pop();
}

Board.prototype.slide = function () {
  this.removeRow();
  this.addRow();
  this.slideCounter++;
}


