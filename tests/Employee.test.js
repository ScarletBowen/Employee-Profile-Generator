// from Employee file
const Employee = require('../lib/Employee');


// Creating Employee object
describe("Employee", () => {
    describe("Object", () => {
        test("creates an employee object", () => {
            const employee = new Employee("Luz", 123, "luz@gmail.com");

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    // Gets name from getName
    describe("Name", () => {
        test("gets employee name", () => {
            const employee = new Employee("Luz", 123, "luz@gmail.com");

            expect(employee.getName()).toEqual(expect.any(String));
        });
    });

    // Gets id from getID
    describe("ID", () => {
        test("gets employee ID", () => {
            const employee = new Employee("Luz", 123, "luz@gmail.com");

            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });

    // Gets email from getEmail
    describe("Email", () => {
        test("gets employee email", () => {
            const employee = new Employee("Luz", 123, "luz@gmail.com");

            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });

    // Gets role from getRole
    describe("Role", () => {
        test("gets role of employee", () => {
            const employee = new Employee("Luz", 123, "luz@gmail.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});