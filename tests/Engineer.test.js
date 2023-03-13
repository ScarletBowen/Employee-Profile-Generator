// Using Engineer constructor
const Engineer = require("../lib/Engineer");

// Creating Engineer object
describe("Engineer", () => {
    describe("Object", () => {
        test("creates an Engineer object", () => {
            const engineer = new Engineer("Luz", 123, "luz@gmail.com", "luzbowen");

            expect(engineer.github).toEqual(expect.any(String));
        });
    });

    // Gets github from gitHub
    describe("GitHub", () => {
        test("gets engineer github value", () => {
            const engineer = new Engineer("Luz", 123, "luz@gmail.com", "luzbowen");

            expect(engineer.getGithub()).toEqual
                expect.stringContaining(engineer.github.toString());
        });
    });

    // Gets role from getRole
    describe("Role", () => {
        test("gets role of employee", () => {
            const engineer = new Engineer("Luz", 123, "luz@gmail.com", "luzbowen");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});