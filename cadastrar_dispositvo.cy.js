/// <reference types="cypress"/>
describe('Cadastrar Dispositivo', () => {
    
    it('Cadastrar dispositivo com sucesso', () => {
        cy.request({
            method: 'POST', 
            url: 'https://api.restful-api.dev/objects',
            body: {
                name: "computador da Amanda",
                data: {
                    year: 2021,
                    price: 2021.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }).then((response) => {
            console.log(response) // armazenar o resultado
            expect(response.status).to.eql(200)
            expect(response.body.id).to.not.be.empty
            expect(response.body.name).to.eql('computador da Amanda')
        })            
    })

})
