// Using Manager constructor
const Manager = require("../lib/Manager");

// Creating Manager object
describe("Manager", () => {
    describe("Object", () => {
        test("creates a Manager object", () => {
            const manager = new Manager("Luz", 123, "luzbowen@gmail.com", 3);

            expect(manager.office).toEqual(expect.any(Number));
        });
    });

    // Gets role from getRole
    describe("Role", () => {
        test("gets role of employee", () => {
            const manager = new Manager("Luz", 123, "luzbowen@gmail.com", 3);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});