
import VerifyTextBox from '../support/VerifyTextbox'
import VerifyRB from '../support/VerifyRB';
import VerifyCB from '../support/VerifyCB'
import Calculate from '../support/Calculate'
describe('Testing Parking Cost Calculator' ,()=>{

    beforeEach(()=>{

        cy.visit('http://www.shino.de/parkcalc/')
        cy.on('uncauht:exception' , (err, runnable) => {
            return false

        })

    })

    it('Verify Textbox  ' , ()=> {

        VerifyTextBox.Verifytextbox('8/4/2020','8/5/2020','2:00', '3:00')
        VerifyTextBox.Verifytextbox('3/12/2020','8/12/2020','1:00', '12:00')
        VerifyTextBox.Verifytextbox('1/1/2019','1/1/2019','4:00', '8:00' )



    })

    it('Verify Radio Button and Button', () => {

        VerifyRB.VerifyRB('PM','PM')
        VerifyRB.VerifyRB('AM','PM')
        VerifyRB.VerifyRB('PM','AM')

    })

    it(' Verify Combobox Select', ()=> {

        VerifyCB.VerifyCB('Valet Parking')
        VerifyCB.VerifyCB('Short-Term Parking')
        VerifyCB.VerifyCB('Economy Parking')
        VerifyCB.VerifyCB('Long-Term Garage Parking')
        VerifyCB.VerifyCB('Long-Term Surface Parking')
        VerifyCB.VerifyCB('Short-Term Parking')
        VerifyCB.VerifyCB('Economy Parking')
        VerifyCB.VerifyCB('Long-Term Garage Parking')
        VerifyCB.VerifyCB('Long-Term Garage Parking')


    })  

    it( 'Verify Button ' ,()=> {

        cy.get('[type="submit"]').click()


    })


    it('Working in Valet Parking  ' , () => {
      
        Calculate.Calculate('Valet Parking' , '8/4/2020' , '8/5/2020' , '3:00','PM' , '3:00', 'PM'  )

       
        cy.get(cy.get('.SubHead > b').contains('$ 36.0'))
    })

    it ('Working in Short-Term Parking ' , ()=> {

        Calculate.Calculate('Short-Term Parking' , '8/4/2020' , '8/5/2020' , '3:00','PM' , '3:00', 'PM'  )

    
        cy.get(cy.get('.SubHead > b').contains('$ 48.0'))
    })
    it('Working in Economy Parking ' , ()=> {
        Calculate.Calculate('Economy Parking', '3/4/2021' , '3/12/2021' , '1:00' ,  'AM' , '9:00' , 'PM')

        cy.get(cy.get('.SubHead > b').contains('$ 72.0'))


    })

    it('Working in Long-Term Garage Parking ',()=> {

        Calculate.Calculate('Long-Term Garage Parking', '5/5/2021' , '5/6/2021' , '2:00','AM' ,'12:00','AM' )
        cy.get(cy.get('.SubHead > b').contains('$ 12.0'))

    } )

    it('Working in Long-Term Surface Parking' , () => {

        Calculate.Calculate('Long-Term Surface Parking','5/5/2021' , '5/5/2021' , '1:00','AM' ,'2:00','PM')
        cy.get(cy.get('.SubHead > b').contains('$ 10.0'))
    } )



})