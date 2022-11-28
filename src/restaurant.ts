import { Waiter } from "./personel"
import { Delivery } from "./personel"
import { Review } from "./review"

class Restaurant{
    private name: string
    private owner: string
    private waiter
    private reviews
    private stars: number
    private delivery
    private openedAt: Date
    constructor(options: RestaurantOptions){
        this.name = options.name
        this.owner = options.owner
        this.stars = options.stars
        this.openedAt = options.openedAt
        this.waiter = options.waiter
        this.reviews = options.reviews
        this.delivery = options.delivery
    }
    getName(){
        return this.name
    }
    getOwner(){
        return this.owner
    }
    getBediening(){
        return this.waiter
    }
    getReviews(){
        return this.reviews
    }
    getStars(){
        return this.stars
    }
    getBezorgers(){
        return this.delivery
    }
    getOpenedAt(){
        return this.openedAt
    }
    setName(name: string): String{
        this.name = name
        return this.name
    }
    addWaiter(waiter: Waiter){
        this.waiter.push(waiter)
    }
    addDelivery(delivery: Delivery){
        this.delivery.push(delivery)
    }
}

interface RestaurantOptions{
    name: string,
    owner: string,
    waiter: Waiter[],
    reviews: Review[],
    stars: number,
    delivery: Delivery[],
    openedAt: Date
}

let waiter1: Waiter = new Waiter({
    name: 'Tom',
    startedAt: new Date('14-01-2022'),
    salary: 2500,
    phoneNo: '0683941576'
})

let waiter2: Waiter = new Waiter({
    name: 'Mohammed',
    startedAt: new Date('15-06-2019'),
    salary: 2350,
    phoneNo: '0683390176'
})
let waiter3: Waiter = new Waiter({
    name: 'Kootje',
    startedAt: new Date('23-07-2016'),
    salary: 2450,
    phoneNo: '06830192176'
})

let delivery1: Delivery = new Delivery({
    name: 'Willem',
    startedAt: new Date('15-03-2020'),
    salary: 2150,
    phoneNo: '063749173'
})
let delivery2: Delivery = new Delivery({
    name: 'Sarah',
    startedAt: new Date('15-03-2021'),
    salary: 2250,
    phoneNo: '069304173'
})

let review1: Review = new Review({
    author: 'Karenn',
    createdAt: new Date(2022, 11, 28),
    stars: 1.7,
    content: 'The food was super good and the waiters were nice even though it was super busy. But I was set at a table close to the bathroom. Unacceptable, so I will not return here and give a 1.7/5. Did not leave a tip.'
})

let waiter: Waiter[] = new Array()
let delivery: Delivery[] = new Array()
let review: Review[] = new Array()

let rest1: Restaurant = new Restaurant({
    name: 'Garone',
    owner: 'Hendrik',
    stars: 4.2,
    openedAt: new Date('11-04-2018'),
    waiter: waiter,
    reviews: review,
    delivery: delivery,
})

waiter.push(waiter1, waiter2)
delivery.push(delivery1)
review.push(review1)

// // console.log(bediening)
console.log(delivery)
// // console.log(review)
// // rest1.setName('ThisNameIsChanged')
console.log(rest1.addDelivery(delivery2))
console.log(delivery)