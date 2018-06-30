const firebaseApi = require('./firebase');
const dom = require('./dom');

const showProjects = (e) => {
  $(document).on('click', '.portfolio', (e) => {
    $('#projects').removeClass('hide');
    $('#middle').addClass('hide');
    $('#blogs').addClass('hide');
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
    $('#blogs').removeClass('hide');
    $('#middle').addClass('hide');
    $('#projects').addClass('hide');
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

const homeRefresh = () => {
  $(document).on('click', '#home', (e) => {
    location.reload();
  });
};

const initializer = () => {
  showProjects();
  showBlogs();
  showContact();
  homeRefresh();
};

module.exports = {
  initializer,
};
