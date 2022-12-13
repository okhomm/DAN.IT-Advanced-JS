class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set age(value) {
    if (typeof value == 'number') {
      this._age = value;
    } else {
      console.error('Age must be a number!')
    }
  }

  get age() {
    return this._age;
  }

  set salary(value) {
    if (typeof value == 'number') {
      this._salary = value;
    } else {
      console.error('Salary must be a number!')
    }
  }
  get salary() {
    return this._salary;
  }
}