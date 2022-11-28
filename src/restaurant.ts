import { Review } from "./review"
import { Bediende } from "./personel"
import { Bezorger } from "./personel"

class Restaurant {
    name: string
    owner: string
    bediening: Bediende
    reviews: Review
    stars: number
    bezorgers: Bezorger
    openedAt: Date
    constructor(
        name: string,
        owner: string,
        bediening: Bediende,
        reviews: Review,
        stars: number,
        bezorgers: Bezorger,
        openedAt: Date,
    ){
        this.name = name
        this.owner = owner
        this.bediening = bediening
        this.reviews = reviews
        this.stars = stars
        this.bezorgers = bezorgers
        this.openedAt = openedAt
    }
    getName(){
        return this.name
    }
    getOwner(){
        return this.owner
    }
    getBediening(){
        return this.bediening
    }
    getReviews(){
        return this.reviews
    }
    getStars(){
        return this.stars
    }
    getBezorgers(){
        return this.bezorgers
    }
    getOpenAt(){
        return this.openedAt
    }
}

// QUESTION: how to import and use an instant of a class from another file? Or should I declare the const like below?
const bediende = new Bediende('Willem', 2450, '0612345687', new Date(2022, 1, 25))
const bezorger1 = new Bezorger('Johan', 2100, '0645327812', new Date(2020, 11, 1))
const bezorger2 = new Bezorger('Kim', 2150, '0645346812', new Date(2021, 6, 1))
const review = new Review('Karenn', 1.7, 'The food was super good and the waiters were nice even though it was super busy. But I was set at a table close to the bathroom. Unacceptable so I will not return here and give a 1.7/5. Did not leave a tip.', new Date(2022, 11, 28))


const restaurant = new Restaurant
restaurant.name = 'Garone'
restaurant.owner = 'Hendrik'
restaurant.stars = 4 
// restaurant.reviews = Review.length
restaurant.openedAt = new Date(1999,11,25)

console.log(restaurant)