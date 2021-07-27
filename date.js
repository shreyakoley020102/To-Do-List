//jshint esversion:6
exports.getDate=function (){
const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //var day = "";

  return today.toLocaleDateString("en-us", options)
  ;

}

exports.getDay=function (){
  const today = new Date();

  const options = {
    weekday: "long"
  };
  //var day = "";

  return today.toLocaleDateString("en-us", options)
  ;
}
