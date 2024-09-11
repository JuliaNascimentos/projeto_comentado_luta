class Character{
    #life
    constructor(name){
        this.name = name
        this.#life = 1
        this.maxLife = 1
        this.attack = 0
        this.defense = 0
    }

    // para pegar a vida char
    get life(){
        return this.#life
    }

    // para enviar a nova vida do char

    set life(newLife){
        // verificação para que a vida não fique inferior a 0
        this.#life = newLife < 0 ? 0 : newLife
    }
}
