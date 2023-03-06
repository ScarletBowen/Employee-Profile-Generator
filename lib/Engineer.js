// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, ID, email, github) {
        // calling employee constructor 
        super (name, ID, email);

        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

     // override employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 