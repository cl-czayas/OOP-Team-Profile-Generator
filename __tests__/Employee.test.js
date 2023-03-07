const Employee = require('../lib/Employee');

describe('Employee Function', () => {
    const name = "Christopher Lee"
    const id = "1"
    const email = "test@email.com"
    const person = new Employee(name,id,email);

    it('returns name', () => {
        expect(person.name).toBe(name);  
        expect(person.getName()).toBe(name);
    });

    it('returns id', () => {
        expect(person.id).toBe(id);  
        expect(person.getId()).toBe(id);
    });

    it('returns email', () => {
        expect(person.email).toBe(email);  
        expect(person.getEmail()).toBe(email);
    });
    
    it('returns role', () => {
        expect(person.getRole()).toBe("Employee");
    });

});