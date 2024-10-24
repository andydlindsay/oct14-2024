const generatePromise = (name, rejects) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejects) {
        return reject(name);
      }
      resolve(name);
    }, 3000);
  });
};

module.exports = generatePromise;
