const projectStringBuilder = (projectArray) => {
  console.log(projectArray);
  let strang = '';
  for (let i = 0; i < projectArray.length; i++) {
    strang += `<div class="panel panel-default col-xs-4 col-sm-3 projectContent">`;
    strang += `<div class="panel-body">`;
    strang +=  `<h3>${projectArray[i].title}</h3>`;
    strang += `<p>${projectArray[i].description}</p>`;
    strang += `</div>`;
    strang += `</div>`;
  }
  printToDom(strang,'#projects');
};

const blogStringBuilder = (blogArray) => {
  let leftstrang = '';
  let rightStrang = '';
  for (let i = 0; i < blogArray.length; i++) {
    if (i % 2 === 0) {
      leftstrang += `<div class="panel panel-default col-xs-12 col-sm-12">`;
      leftstrang +=  `<div class="panel-body rightBlog">`;
      leftstrang +=    `<h2>${blogArray[i].title}</h2>`;
      leftstrang +=    `<p>${blogArray[i].post}</p>`;
      leftstrang +=  `</div>`;
      leftstrang += `</div>`;
    } else {
      rightStrang += `<div class="panel panel-default col-xs-12 col-sm-12">`;
      rightStrang +=  `<div class="panel-body leftBlog">`;
      rightStrang +=   `<h2>${blogArray[i].title}</h2>`;
      rightStrang +=   `<p>${blogArray[i].post}</p>`;
      rightStrang +=  `</div>`;
      rightStrang += `</div>`;
    }
  }
  printToDom(leftstrang,'#blogLeft');
  printToDom(rightStrang,'#blogRight');
};

const printToDom = (string, whereToPrint) => {
  $(whereToPrint).html(string);
};

module.exports = {
  projectStringBuilder,
  blogStringBuilder,
};
