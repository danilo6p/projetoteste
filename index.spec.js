const request = require("superteste")
const app = require('./server')

describe ('Sample Test', () => {

    it('should test that true === true', () =>{
        const result = true
        expect(result).toBe(true)
    })
})