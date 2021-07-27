//jshint esversion:6
module.exports.getDate=function (){
let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //var day = "";

  return today.toLocaleDateString("en-us", options)
  ;

}

module.exports.getDay=function (){
  let today = new Date();

  let options = {
    weekday: "long"
  };
  //var day = "";

  return today.toLocaleDateString("en-us", options)
  ;
}

console.log(module.exports);