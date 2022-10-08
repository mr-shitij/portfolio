class ProjectData{
    #id
    #title
    #githubLink
    #deployLink
    #description
    #techStack
    constructor(id,title,githubLink,deployLink,description,techStack){
        this.#id = id
        this.#title = title
        this.#githubLink = githubLink
        this.#deployLink = deployLink
        this.#description = description
        this.#techStack = techStack
    }

    get id(){
        return this.#id
    }

    get title(){
        return this.#title
    }

    get githubLink(){
        return this.#githubLink
    }

    get deployLink(){
        return this.#deployLink
    }

    get description(){
        return this.#description
    }
    
    get techStack(){
        return this.#techStack
    }
}

export default ProjectData