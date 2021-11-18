class User {
  id: number;
  name: string;

  constructor(name: string) {
    this.id = Math.random();
    this.name = name;
  }
}

export default User; // class와 type을 동시에 export
