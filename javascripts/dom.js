const projectStringBuilder = (projectArray) => {
  console.log(projectArray);
  let strang = '';
  for (let i = 0; i < projectArray.length; i++) {
    strang += `<div class="panel panel-default col-sm-12 projectContent">`;
    strang += `<div class="media">`;
    strang +=   `<div class="media-left">`;
    strang +=     `<a href=${projectArray[i].deployLink}>`;
    strang +=       `<img class="media-object projectLogo" src=${projectArray[i].imgurl} alt="...">`;
    strang +=     `</a>`;
    strang +=   `</div>`;
    strang +=   `<div class="media-body">`;
    strang +=     `<h4 class="media-heading">${projectArray[i].title}</h4>`;
    strang +=       `<p>${projectArray[i].description}</p>`;
    strang +=         `<a href=${projectArray[i].githuburl}><img class="gitLogo""  src="https://image.flaticon.com/icons/svg/25/25231.svg"></a>`;
    strang +=         `<a href=${projectArray[i].deployLink}><img class="linkLogo""  src="https://image.flaticon.com/icons/svg/34/34735.svg"></a>`;
    // strang +=  `<a href=${projectArray[i].githuburl}><img src='github2.png'></a>`;
    strang +=   `</div>`;
    strang += `</div>`;
    strang += `</div>`;

    // strang += `<div class="panel panel-default col-sm-12 projectContent">`;
    // strang += `<div class="panel-body">`;
    // strang +=  `<h3>${projectArray[i].title}</h3>`;
    // strang += `<p>${projectArray[i].description}</p>`;
    // strang += ``;
    // strang += `</div>`;
    // strang += `</div>`;
  }
  printToDom(strang,'#projects');
};

const blogStringBuilder = (blogArray) => {
  let strang = '';
  for (let i = 0; i < blogArray.length; i++) {
    strang += `<div class="panel panel-default col-sm-16 blogContent">`;
    strang +=  `<div class="panel-body">`;
    strang +=    `<h2>${blogArray[i].title}</h2>`;
    strang +=    `<p>${blogArray[i].post}</p>`;
    strang +=  `</div>`;
    strang += `</div>`;
  }
  printToDom(strang,'#blogs');
};

const printToDom = (string, whereToPrint) => {
  $(whereToPrint).html(string);
};

module.exports = {
  projectStringBuilder,
  blogStringBuilder,
};
