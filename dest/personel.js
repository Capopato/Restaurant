"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bediening = exports.bezorger = exports.Bezorger = exports.Bediende = void 0;
class Personel {
    constructor(name, salary, phoneNo, startedAt) {
        this.name = name;
        this.salary = salary;
        this.phoneNo = phoneNo;
        this.startedAt = startedAt;
    }
    getName() {
        return this.name;
    }
    getStartedAt() {
        return this.startedAt;
    }
    getSalary() {
        return this.salary;
    }
    getPhoneNo() {
        return this.phoneNo;
    }
}
class Bediende extends Personel {
    constructor(name, salary, phoneNo, startedAt) {
        super(name, salary, phoneNo, startedAt);
    }
}
exports.Bediende = Bediende;
class Bezorger extends Personel {
    constructor(name, salary, phoneNo, startedAt) {
        super(name, salary, phoneNo, startedAt);
    }
}
exports.Bezorger = Bezorger;
const bezorger1 = new Bezorger('Johan', 2100, '0645327812', new Date(2020, 11, 1));
const bezorger2 = new Bezorger('Kim', 2150, '0645346812', new Date(2021, 6, 1));
exports.bezorger = [bezorger1, bezorger2];
// I declare 2 Waiters below. 
const bediende01 = new Bediende('Tom', 2500, '0612345678', new Date(2019, 8, 14));
const bediende02 = new Bediende('Willem', 2450, '0612345687', new Date(2022, 1, 25));
// QUESTION which of the formatting ways if preferred?
bediende01.name = 'Tom';
bediende01.salary = 2500;
bediende01.phoneNo = '0612345678';
bediende01.startedAt = new Date(2019, 8, 14);
// I convert the 2 waiters from above to 1 array. This array will be called in the creation of let rest (class Restaurant)
exports.bediening = [bediende01, bediende02];
