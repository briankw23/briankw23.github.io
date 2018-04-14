const createBlogPost = (data) =>{
  var blogstring ="";
  for (var j = 0; j <data.blogs.length; j++) {
    blogstring +=`<div class="blogPost">`;
    // blogstring +=`<div>${data.blogs[j].id}</div>`;
    blogstring +=`<h2 class="head">${data.blogs[j].title}</h2>`;
    blogstring +=`<p>${data.blogs[j].date}</p>`;
    blogstring +=`<p>${data.blogs[j].post}</p>`;
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


