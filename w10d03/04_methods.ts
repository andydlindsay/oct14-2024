interface Author {
  penName: string;
  numBooks: number;
  writeBook?: (title: string) => boolean;
}

const myAuthor: Author = {
  penName: 'Agatha Christie',
  numBooks: 100,
  // writeBook: (title: string) => {
  //   // return true;
  // }
};

const higherOrderFunc = (callback: (age: number) => number) => {};

higherOrderFunc((num: number) => { return 42; });
