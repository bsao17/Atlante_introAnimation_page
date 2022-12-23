export class Video {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }

    static getVideo = () => {
        console.log( `le nom est ${this.name} et son lien est ${this.link}`)
    }

    static setVideo = (name, link) => {
        this.name = name;
        this.link = link;
    }
}