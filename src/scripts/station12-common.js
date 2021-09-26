import { getData } from "./station12";

var result = getData();
var elem = document.getElementById("result");
elem.innerHTML = result;