const createProjectPost = (data) =>{
    var blogstring ="";
    for (var i = 0; i <data.projects.length; i++) {
      blogstring +=`<div class="blogPost">`;
      // blogstring +=`<div>${data.projects[i].id }</div>`;
      blogstring +=`<h2 class="head">${data.projects[i].title}</h2>`;
      blogstring +=`<p>${data.projects[i].imgurl}</p>`;
      blogstring +=`<p>${data.projects[i].description}</p>`;
      blogstring +=`${data.projects[i].githuburl}`;
      blogstring +=`</div>`;
    }
    printToDom(blogstring, 'prj');
  };
  
  const printToDom = (string, divID) => {
    var myDiv = document.getElementById(divID);
    console.log("myDiv:", myDiv);
    myDiv.innerHTML += string;
  };
  const  executeThisCodeIfXHRFails = () => {
    console.log("Error");
  };
  
  function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
   createProjectPost(data);
  }
  
  const http = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "projects.json");
    myRequest.send();
  };
  
  const startApplication = () => {
    http();
  };
  
  startApplication();










// function createProjectCards(){
// var projectstring =[];
// for (var i = 0; i < projects.length; i++) {
// projectstring.push(
// "<div>" + projects[i].id + "</div>" +
// "<h2>" + projects[i].title + "</h2>" +
// "<div>" + projects[i].imgurl +"</div>" +
// "<p>" + projects[i].description + "</p>"+
// "<div>" + projects[i].githuburl + "</div>"
// );
// }
// printToDom(projectstring,"prj");
// };
// function printToDom(string, divID){
// var myDiv = document.getElementById(divID);
// console.log("myDiv:", myDiv);
// myDiv.innerHTML += string;
// }
// createProjectCards();
    