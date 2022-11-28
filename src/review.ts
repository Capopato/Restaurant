export class Review{
    author: string
    stars: number
    content: string
    createdAt: Date
    constructor(author: string, stars: number, content: string, createdAt: Date){
        this.author = author
        this.stars = stars
        this.content = content
        this.createdAt = createdAt
    }

    getAuthor(){
        return this.author
    }
    getCreatedAt(){
        return this.createdAt
    }
    getStars(){
        return this.stars
    }
    getContent(){
        return this.content
    }
}

// 1 review declare below
export const review1 = new Review('Karenn', 1.7, 'The food was super good and the waiters were nice even though it was super busy. But I was set at a table close to the bathroom. Unacceptable so I will not return here and give a 1.7/5. Did not leave a tip.', new Date(2022, 11, 28))

