void smallestInMatrix(List<List<int>> mat){
  int smallest = mat[0][0];
  for(var i = 0 ; i < mat.length ; i++){
    for(var j = 0 ; j < mat[i].length ; j++){
      if(mat[i][j] < smallest){
        smallest = mat[i][j];
      }
    }
  }
  print(smallest);
}

void main() {
  smallestInMatrix([[1,2,3,4,5],[0,-1,-6,-9,0]]);
}