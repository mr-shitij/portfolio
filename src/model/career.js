class CareerData{
    #shortCompanyName
    #companyName
    #jobProfile
    #start
    #end
    #description
    #url
    #projects

    constructor(shortCompanyName,companyName,jobProfile,start,end,description,url,projects){
        this.#shortCompanyName = shortCompanyName
        this.#companyName = companyName
        this.#jobProfile = jobProfile
        this.#start = start
        this.#end = end
        this.#description = description
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
    get url(){
        return this.#url
    }

}

export default CareerData