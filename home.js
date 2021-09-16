var students = [
  {name:"John",score1:47,score2:46},
  {name:"Bob", score1:23, score2:24},
  {name:"Nick", score1:40, score2:35},
  {name:"Alex", score1:44, score2:45}
  ];

const studentsScore = new Map([
  ["John",[students[0].score1+students[0].score2]],
  ["Bob ", [students[1].score1+students[1].score2]],
  ["Alex",[students[2].score1+students[2].score2]],
  ["Nick",[students[3].score1+students[3].score2]]
]);

studentsScore.forEach (function(value,nameForKey) {
  var degree;
  if(value>91){
    degree= "A"
  }else if(value>81){
    degree= "B"
  }else if (value>71){
    degree = "C"
  }else if (value>61){
    degree = "D"
  }else if (value>51){
    degree = "E"
  }else{
    degree = "Shit!!"
  }
  console.log(nameForKey +" has "+value+" point,so his degree is "+ degree)
})

