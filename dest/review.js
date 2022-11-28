"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.review1 = exports.Review = void 0;
class Review {
    constructor(author, stars, content, createdAt) {
        this.author = author;
        this.stars = stars;
        this.content = content;
        this.createdAt = createdAt;
    }
    getAuthor() {
        return this.author;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getStars() {
        return this.stars;
    }
    getContent() {
        return this.content;
    }
}
exports.Review = Review;
// 1 review declare below
exports.review1 = new Review('Karenn', 1.7, 'The food was super good and the waiters were nice even though it was super busy. But I was set at a table close to the bathroom. Unacceptable so I will not return here and give a 1.7/5. Did not leave a tip.', new Date(2022, 11, 28));
