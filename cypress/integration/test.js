
import VerifyTextBox from '../support/VerifyTextbox'
import VerifyRB from '../support/VerifyRB';
import VerifyCB from '../support/VerifyCB'
describe('Testing Parking Cost Calculator' ,()=>{

    beforeEach(()=>{

        cy.visit('http://www.shino.de/parkcalc/')

    })

    it('Verify Textbox  ' , ()=> {

        VerifyTextBox.Verifytextbox('8/4/2020','8/3/2020','2:00', '3:00')
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



})