const studentName = 'alice';
const cohort = 'oct 14 2024';
const hasGraduated = false;

// const students = [{}, {}, {}, {}]
const studentOne = ['alice', 'oct 14 2024', false];

studentOne[20]; // undefined

// objects => collections of key/value pairs

const studentOneObj = { 
  cohort: 'oct 14 2024', 
  hasGraduated: false,
  studentName: "alice", 
};

const key = 'studentName';

// square bracket syntax
const result = studentOneObj[key];

// dot syntax
const result2 = studentOneObj.key;

console.log('result2', result2); // reference error or undefined

console.log()
console['log']()

const customer = {
  contactInfo: {
    phoneNumber: '555-5555',
    streetAddress: '123 Fake Street'
  },
};

customer['contactInfo']['streetAddress']
customer.contactInfo.streetAddress
