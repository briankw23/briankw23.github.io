const projectStringBuilder = (projectArray) => {
  let strang = '';
  strang += projectArray;
  printToDom(strang,'#projects');
};

const blogStringBuilder = (blogArray) => {
  let strang = '';
  strang += blogArray;
  printToDom(strang,'#blogs');
};

const printToDom = (string, whereToPrint) => {
  $(whereToPrint).html(string);
};

module.exports = {
  projectStringBuilder,
  blogStringBuilder,
};
