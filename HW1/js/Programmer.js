class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }

  set lang(value) {
    return this._lang += ', ' + value;
  }

  get lang() {
    return this._lang;
  }

  get salary() {
    return this._salary * 3;
  }
}