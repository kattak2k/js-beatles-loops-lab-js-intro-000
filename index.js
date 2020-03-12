// add solution here
function theBeatlesPlay(musicians, instruments){
 let list = [];
 for (let i = 0; i < musicians.length; i++ ) {
   list.push(`${musicians[i]} plays ${instruments[i]}`);
 };
 return list;
}

function johnLennonFacts(arr){
  let list = [];
  let i = 0;
  while (i < arr.length){
    list.push(`${arr[i]}!!!`);
     i += 1
  }
  /*

  for (let i = 0; i < arr.length; i++ ) {
    list.push(`${arr[i]}!!!`);
  };
  */
  return list;

}

function iLoveTheBeatles(){


}
