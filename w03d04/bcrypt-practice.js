const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync();
const plaintextPassword = '1234';

console.log('salt:', salt);

const hash = bcrypt.hashSync(plaintextPassword, salt);

console.log('hash:', hash);

// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt);
//   bcrypt.hash(plaintextPassword, salt, (err, hash) => {
//     console.log('hash', hash);
//   });
// })

bcrypt.genSalt(10)
  .then((salt) => {
    return bcrypt.hash(plaintextPassword, salt);
  })
  .then((hash) => {
    console.log('hash', hash);
  });



// const storedPassword = '$2a$10$Kovivpmfow5gmyu8wecSXuh6jrBjrSSYfpI0Gla52ow2vn1ZH82Jy';

// const result = bcrypt.compareSync('1234', storedPassword);
// console.log('result:', result);
