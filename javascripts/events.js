const firebaseApi = require('./firebase');

const showProjects = (e) => {
  $(document).on('click', '.portfolio', (e) => {
    firebaseApi.getProjects()
      .then((results) => {
        console.log(results);

      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const showBlogs = (e) => {
  $(document).on('click', '.blogs', (e) => {
    firebaseApi.getBlogs()
      .then((results) => {
        console.log(results);

      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const initializer = () => {
  showProjects();
  showBlogs();
};

module.exports = {
  initializer,
};
