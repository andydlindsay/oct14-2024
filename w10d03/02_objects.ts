interface Pet {
  breed: string;
  age: number;
}

interface User {
  id?: number;
  username: string;
  password: string;
  pet: Pet;
}

const myObj: User = {
  // id: 1,
  username: 'alice',
  password: '1234',
  pet: {
    breed: 'dog',
    age: 12,
  }
};

const users: User[] = [];

users.push(myObj);
