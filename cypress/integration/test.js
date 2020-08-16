
import VerifyTextBox from '../support/VerifyTextbox'
import VerifyRB from '../support/VerifyRB';
import VerifyCB from '../support/VerifyCB'
import Calculate from '../support/Calculate'
describe('Testing Parking Cost Calculator' ,()=>{

    beforeEach(()=>{

        cy.visit('http://www.shino.de/parkcalc/')

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
       /*  VerifyCB.VerifyCB('Valet Parking')
        VerifyTextBox.Verifytextbox('8/4/2020','8/4/2020','2:00', '3:00')
        VerifyRB.VerifyRB('PM','PM')
         */

        // ParkingLot,StartingDate ,LeavingDate , StartingTime ,StartingTimeSet, LeavingTime , LeavingTimeSet
        Calculate.Calculate('Valet Parking' , '8/4/2020' , '8/5/2020' , '3:00','PM' , '3:00', 'PM'  )

        cy.get('[type="submit"]').click()
        cy.get(cy.get('.SubHead > b').contains('$ 36.0'))
    })

    it ('Working in Short-Term Parking ' , ()=> {

        Calculate.Calculate('Short-Term Parking' , '8/4/2020' , '8/5/2020' , '3:00','PM' , '3:00', 'PM'  )

        cy.get('[type="submit"]').click()
        cy.get(cy.get('.SubHead > b').contains('$ 48.0'))
    })



})