"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delivery = exports.Waiter = void 0;
// Base class
class Personel {
    constructor(options) {
        this.name = options.name;
        this.startedAt = options.startedAt;
        this.salary = options.salary;
        this.phoneNo = options.phoneNo;
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
class Waiter extends Personel {
}
exports.Waiter = Waiter;
class Delivery extends Personel {
}
exports.Delivery = Delivery;
