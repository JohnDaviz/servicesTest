const { describe } = require('yargs')
const UserService = require('./../../app/services/UserService')

describe("Test for UserService",() => {
    
    test("1. Create a new using the UserService ", () =>{
        const user = UserService(1, "JohnDaviz", "John")
        expect(user.username).toBe("JohnDaviz")
        expect(user.name).toBe("john")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})