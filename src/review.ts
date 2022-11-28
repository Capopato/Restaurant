export class Review{
    private author: string
    private createdAt: Date
    private stars: number
    private content: string
    constructor(options: ReviewOptions){
        this.author = options.author
        this.createdAt = options.createdAt
        this.stars = options.stars
        this.content = options.content
    }
    getAuthor(){
        return this.author
    }
    getCreatedAt(){
        return this.createdAt
    }
    getStarts(){
        return this.stars
    }
    getContent(){
        return this.content
    }
}

interface ReviewOptions{
    author: string,
    createdAt: Date,
    stars: number,
    content: string,
}