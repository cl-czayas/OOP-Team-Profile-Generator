const Intern = require('../lib/Intern');

describe('Intern Function', () => {
    const name = "Christopher Lee"
    const id = "1"
    const email = "test@email.com"
    const school =  "Test School"
    const person = new Intern(name,id,email,school);

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
    
    it('returns school', () => {
        expect(person.school).toBe(school)
        expect(person.getSchool()).toBe("Test School");
    });

    it('returns role', () => {
        expect(person.getRole()).toBe("Intern");
    });
});