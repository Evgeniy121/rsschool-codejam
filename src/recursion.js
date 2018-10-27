var     i=0;
var   arr=[];
function recursion(tree){
  
   
   if (!Array.isArray(arr[i])) arr[i]=[];
  arr[i].push(tree.value);
    if (tree.left){i++;recursion(tree.left);i--}
    if (tree.right){i++;recursion(tree.right); i--}
    
   return arr;

}
module.exports = recursion;