class CareerData{
    #shortCompanyName
    #companyName
    #jobProfile
    #start
    #end
    #description
    #pointers
    #url
    #projects

    constructor(shortCompanyName,companyName,jobProfile,start,end,description,pointers,url,projects){
        this.#shortCompanyName = shortCompanyName
        this.#companyName = companyName
        this.#jobProfile = jobProfile
        this.#start = start
        this.#end = end
        this.#description = description
        this.#pointers = pointers
        this.#url = url
        this.#projects = projects
    }

    get projects(){
        return this.#projects
    }

    get shortCompanyName(){
        return this.#shortCompanyName
    }
    get companyName(){
        return this.#companyName
    }
    get jobProfile(){
        return this.#jobProfile
    }
    get start(){
        return this.#start
    }
    get end(){
        return this.#end
    }
    get description(){
        return this.#description
    }
    get pointers(){
        return this.#pointers
    }
    get url(){
        return this.#url
    }

}

export default CareerData