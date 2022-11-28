// Base class
class Personel{
    private name: string
    private startedAt: Date
    private salary: number
    private phoneNo: string
    constructor(options: PersonelOptions){
        this.name = options.name
        this.startedAt = options.startedAt
        this.salary = options.salary
        this.phoneNo = options.phoneNo
    }
    getName(){
        return this.name
    }
    getStartedAt(){
        return this.startedAt
    }
    getSalary(){
        return this.salary
    }
    getPhoneNo(){
        return this.phoneNo
    }
}

interface PersonelOptions{
    name: string,
    startedAt: Date,
    salary: number,
    phoneNo: string
}


export class Waiter extends Personel{
    
}

export class Delivery extends Personel{
}