let fireConfig = {};

const setConfig = (config) => {
  fireConfig = config;
};

// const getProjects = () => {
//   const allProjectsArray = [];
//   return new Promise((resolve,reject) => {
//     $.ajax({
//       method: 'GET',
//       url: `${fireConfig.databaseURL}/Projects.json`,
//     })
//       .done((allProjectsObject) => {
//         if (allProjectsObject !== null) {
//           Object.keys(allProjectsObject).forEach((fbkey) => {
//             allProjectsObject[fbkey].id = fbkey;
//             allProjectsArray.push(allProjectsObject[fbkey]);
//           });
//         }
//         resolve(allProjectsArray);
//       })
//       .fail((error) => {
//         reject(error);
//       });
//   });
// };

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

module.exports = {
  getProjects,
  setConfig,
};
