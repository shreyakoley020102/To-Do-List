//jshint esversion:6
function getDate(){
let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //var day = "";

  let day = today.toLocaleDateString("en-us", options)
  ;
  return day;
}