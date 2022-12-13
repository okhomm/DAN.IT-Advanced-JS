class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }
  get salary() {
    return this._salary * 3;
  }
}