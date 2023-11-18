class Key {
  private keyId: number;

  constructor(keyId: number) {
    if (typeof keyId !== "number" || isNaN(keyId)) {
      throw new Error("Invalid key ID. Please provide a valid number.");
    }
    this.keyId = keyId;
  }

  getKeyId() {
    return this.keyId;
  }

  checkCompatibility(otherKey: Key) {
    return this.keyId === otherKey.getKeyId();
  }
}

class MyHouse {
  private doorKey: Key;

  constructor(key: Key) {
    if (!(key instanceof Key)) {
      throw new Error("Invalid key object.");
    }
    this.doorKey = key;
  }

  openDoor(personKey: Key) {
    if (this.doorKey.checkCompatibility(personKey)) {
      console.log("Door is opening");
    } else {
      console.log("False key");
    }
  }

  comeIn(person: Person) {
    if (this.isAuthorised(person)) {
      console.log(`${person.getName()} enters the house.`);
    } else {
      console.log(`${person.getName()} can't enter the house.`);
    }
  }

  private isAuthorised(person: Person): boolean {
    return this.doorKey.checkCompatibility(person.getKey());
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    if (!(key instanceof Key)) {
      throw new Error("Invalid key object for person.");
    }
    this.key = key;
  }

  getKey() {
    return this.key;
  }

  getName() {
    return "Vugar Gasimov";
  }
}

const key = new Key(123);

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
