

class Competitor {
    constructor(name, rating = 0.0) {
        this.name = name;
        this.rating= name;
    }

    measure() {
        console.log( this.name + ' starts measuring!' );
    };
}


export default Competitor