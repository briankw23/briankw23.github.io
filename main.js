const createBlogPost = (data) =>{
  var blogstring ="";
  for (var j = 0; j <data.blogs.length; j++) {
    blogstring +=`<div class="row post">`;
    blogstring +=`<div class="col-md-2"></div>`;
    blogstring +=`<div class="col-md-8">`;
    // blogstring +=`<div>${data.blogs[j].id}</div>`;
    blogstring +=`<h2>${data.blogs[j].title}</h2><br>`;
    blogstring +=`<h4>${data.blogs[j].date}</h4>`;
    blogstring +=`<p>${data.blogs[j].post}</p>`;
    blogstring +=`</div>`;
    blogstring +=`<div class="col-md-2"></div>`;
    blogstring +=`</div>`;
  }
  printToDom(blogstring, 'blogs');
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
 createBlogPost(data);
}

const http = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "blogs.json");
  myRequest.send();
};

const startApplication = () => {
  http();
};

startApplication();


