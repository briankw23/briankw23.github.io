let fireConfig = {};

const setConfig = (config) => {
  fireConfig = config;
};

const getProjects = () => {
  const allProjectsArray = [];
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'GET',
      url: `${fireConfig.databaseURL}/Projects.json`,
    })
      .done((allProjectsObject) => {
        if (allProjectsObject !== null) {
          Object.keys(allProjectsObject).forEach((fbkey) => {
            allProjectsObject[fbkey].id = fbkey;
            allProjectsArray.push(allProjectsObject[fbkey]);
          });
        }
        resolve(allProjectsArray);
        console.error(allProjectsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getBlogs = () => {
  const allBlogsArray = [];
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'GET',
      url: `${fireConfig.databaseURL}/Blogs.json`,
    })
      .done((allBlogsObject) => {
        if (allBlogsObject !== null) {
          Object.keys(allBlogsObject).forEach((fbkey) => {
            allBlogsObject[fbkey].id = fbkey;
            allBlogsArray.push(allBlogsObject[fbkey]);
          });
        }
        resolve(allBlogsArray);
        console.error(allBlogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getProjects,
  getBlogs,
  setConfig,
};
