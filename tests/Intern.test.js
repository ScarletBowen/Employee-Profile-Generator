// Using Intern constructor
const Intern = require("../lib/Intern");

// Creating Intern object
describe("Intern", () => {
    describe("Object", () => {
        test("creates an Intern object", () => {
            const intern = new Intern("Luz", 123, "luzbowen@gmail.com", "UCI");

            expect(intern.school).toEqual(expect.any(String));
        });
    });

    // Gets school from getSchool
    describe("School", () => {
        test("gets employee school", () => {
            const intern = new Intern("Luz", 123, "luzbowen@gmail.com", "UCI");

            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
    });

    // Gets role from getRole
    describe("Role", () => {
        test("gets role of employee", () => {
            const intern = new Intern("Luz", 123, "luzbowen@gmail.com", "UCI");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});