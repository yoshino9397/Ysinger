var Matt = 80;
var Simon = 45;
var students =["Matt","Simon"]

var minLimit = 51;

function　testScore(score1,score2){
if (score1>minLimit && score2>minLimit){
  console.log('They passed!');
  return;
}else if(score1<minLimit && score2<minLimit){
  console.log('They failed..');
  return;
}else if(score1<minLimit && score2>minLimit){
  console.log(students[0]+" failed..");
  console.log("Score is " + score1);
}else{
  console.log(students[1]+" failed..");
  console.log("Score is " + score2);
}
}

testScore(Matt,Simon)