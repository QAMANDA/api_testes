/// <reference types="cypress"/>
describe('Buscar Dispositivo',() => {
    
    it('Buscar dispositivo especifico', () => {
        cy.request({
            method: 'GET', 
            url: 'https://api.restful-api.dev/objects/12'
        }).then((resultado) => {
            console.log(resultado) //armazenar o resultado
            expect(resultado.status).to.eql(200)
            expect(resultado.body.id).to.eql('12')
            expect(resultado.body.name).to.eql('Apple iPad Air')

        })            
    })

})