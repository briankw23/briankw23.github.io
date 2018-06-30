const firebaseApi = require('./firebase');
const dom = require('./dom');

const showProjects = (e) => {
  $(document).on('click', '.portfolio', (e) => {
    // $('#projects').removeClass('hide');
    firebaseApi.getProjects()
      .then((results) => {
        console.log(results);
        dom.projectStringBuilder(results);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const showBlogs = (e) => {
  $(document).on('click', '.blogs', (e) => {
    // $('#blogs').removeClass('hide');
    firebaseApi.getBlogs()
      .then((results) => {
        console.log(results);
        dom.blogStringBuilder(results);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const showContact = (e) => {
  $(document).on('click', '.contact', (e) => {
    const email = 'briankw23@gmail.com';
    $('#contactBtn').html(email);
  });
};

const showRefresh = () => {
  $(document).on('click', '.home', (e) => {
    document.reload();
  });
};

const initializer = () => {
  showProjects();
  showBlogs();
  showContact();
  showRefresh();
};

module.exports = {
  initializer,
};
