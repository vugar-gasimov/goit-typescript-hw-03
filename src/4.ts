class House {
  door: string;
  key: Key;
  constructor(door: string, key: Key) {
    this.door = door;
    this.key = key;
  }
}
class MyHouse extends House {
  constructor(door: string, key: Key) {
    super(door, key);
  }

  openDoor(personKey: Key) {
    if (this.key === personKey) {
      console.log("Door is opening");
    } else {
      console.log("False key");
    }
  }

  comeIn(person: Person) {
    if (this.key === person.getKey()) {
      console.log(`${person.getName()} enters the house.`);
    } else {
      console.log(`${person.getName()} can't enter the house.`);
    }
  }
}

class Key {
  private keyId: number = Math.random();

  getKeyId() {
    return this.keyId;
  }

  checkCompatibility(otherKey: Key) {}
}

class Person {
  private key: Key;
  private name: string;

  constructor(key: Key, name: string) {
    if (!(key instanceof Key)) {
      throw new Error("Invalid key object for person.");
    }
    this.key = key;
    this.name = name;
  }

  getKey() {
    return this.key;
  }

  getName() {
    return this.name;
  }
}

const key = new Key();

const house = new MyHouse("front door", key);

const person = new Person(key, "Vugar");

house.openDoor(person.getKey());

house.comeIn(person);

export {};
