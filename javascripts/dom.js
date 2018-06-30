const projectStringBuilder = (projectArray) => {
  console.log(projectArray);
  let strang = '';
  for (let i = 0; i < projectArray.length; i++) {
    strang += `<div class="col-sm-4">`;
    strang += `<div class="panel panel-default projectContent">`;
    strang += `<div class="panel-body">`;
    strang +=  `<h3>${projectArray[i].title}</h3>`;
    strang += `<p>${projectArray[i].description}</p>`;
    strang += `</div>`;
    strang += `</div>`;
    strang += `</div>`;
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
