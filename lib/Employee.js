// employee constructor 
class Employee {
    constructor (name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email 
    }

    // returning name from input
    getName () {
        return this.name;
    }

    // returning ID from input
    getId () {
        return this.ID;
    }   

    // returning email from input
    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 
