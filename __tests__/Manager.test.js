const Manager = require('../lib/Manager');

describe('Intern Function', () => {
    const name = "Christopher Lee"
    const id = "1"
    const email = "test@email.com"
    const officeNumber =  "405"
    const person = new Manager(name,id,email,officeNumber);

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
    
    it('returns office number', () => {
        expect(person.officeNumber).toBe(officeNumber)
        expect(person.getOfficeNumber()).toBe("405");
    });

    it('returns role', () => {
        expect(person.getRole()).toBe("Manager");
    });
});