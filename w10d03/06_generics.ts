interface Container<T> {
  name: string;
  contents: T;
}

const numContainer: Container<number> = {
  name: 'number container',
  contents: 42
};

const boolContainer: Container<boolean> = {
  name: 'bool container',
  contents: true,
};
