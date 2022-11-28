"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
class Review {
    constructor(options) {
        this.author = options.author;
        this.createdAt = options.createdAt;
        this.stars = options.stars;
        this.content = options.content;
    }
    getAuthor() {
        return this.author;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getStarts() {
        return this.stars;
    }
    getContent() {
        return this.content;
    }
}
exports.Review = Review;
