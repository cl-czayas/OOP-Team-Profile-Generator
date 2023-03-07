const Engineer = require('../lib/Engineer');

describe('Employee Function', () => {
    const name = "Christopher Lee"
    const id = "1"
    const email = "test@email.com"
    const github = "cl-czayas"
    const person = new Engineer(name,id,email,github);

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
    
    it('returns github', () => {
        expect(person.github).toBe(github)
        expect(person.getGithub()).toBe("cl-czayas");
    });

    it('returns role', () => {
        expect(person.getRole()).toBe("Engineer");
    });

});