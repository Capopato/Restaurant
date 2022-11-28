"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personel_1 = require("./personel");
const personel_2 = require("./personel");
const review_1 = require("./review");
class Restaurant {
    constructor(options) {
        this.name = options.name;
        this.owner = options.owner;
        this.stars = options.stars;
        this.openedAt = options.openedAt;
        this.waiter = options.waiter;
        this.reviews = options.reviews;
        this.delivery = options.delivery;
    }
    getName() {
        return this.name;
    }
    getOwner() {
        return this.owner;
    }
    getBediening() {
        return this.waiter;
    }
    getReviews() {
        return this.reviews;
    }
    getStars() {
        return this.stars;
    }
    getBezorgers() {
        return this.delivery;
    }
    getOpenedAt() {
        return this.openedAt;
    }
    setName(name) {
        this.name = name;
        return this.name;
    }
    addWaiter(waiter) {
        this.waiter.push(waiter);
    }
    addDelivery(delivery) {
        this.delivery.push(delivery);
    }
}
let waiter1 = new personel_1.Waiter({
    name: 'Tom',
    startedAt: new Date('14-01-2022'),
    salary: 2500,
    phoneNo: '0683941576'
});
let waiter2 = new personel_1.Waiter({
    name: 'Mohammed',
    startedAt: new Date('15-06-2019'),
    salary: 2350,
    phoneNo: '0683390176'
});
let waiter3 = new personel_1.Waiter({
    name: 'Kootje',
    startedAt: new Date('23-07-2016'),
    salary: 2450,
    phoneNo: '06830192176'
});
let delivery1 = new personel_2.Delivery({
    name: 'Willem',
    startedAt: new Date('15-03-2020'),
    salary: 2150,
    phoneNo: '063749173'
});
let delivery2 = new personel_2.Delivery({
    name: 'Sarah',
    startedAt: new Date('15-03-2021'),
    salary: 2250,
    phoneNo: '069304173'
});
let review1 = new review_1.Review({
    author: 'Karenn',
    createdAt: new Date(2022, 11, 28),
    stars: 1.7,
    content: 'The food was super good and the waiters were nice even though it was super busy. But I was set at a table close to the bathroom. Unacceptable, so I will not return here and give a 1.7/5. Did not leave a tip.'
});
let waiter = new Array();
let delivery = new Array();
let review = new Array();
let rest1 = new Restaurant({
    name: 'Garone',
    owner: 'Hendrik',
    stars: 4.2,
    openedAt: new Date('11-04-2018'),
    waiter: waiter,
    reviews: review,
    delivery: delivery,
});
waiter.push(waiter1, waiter2);
delivery.push(delivery1);
review.push(review1);
// // console.log(bediening)
console.log(delivery);
// // console.log(review)
// // rest1.setName('ThisNameIsChanged')
console.log(rest1.addDelivery(delivery2));
console.log(delivery);
