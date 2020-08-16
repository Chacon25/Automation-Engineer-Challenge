
import VerifyTextBox from '../support/VerifyTextbox'
describe('Testing Parking Cost Calculator' ,()=>{

    before(()=>{

        cy.visit('http://www.shino.de/parkcalc/')

    })

    it('Verify Combobox,  Textbox , Radio Button and Button ' , ()=> {

        VerifyTextBox.Verifytextbox('8/4/2020','8/3/2020','2:00', '3:00')
        VerifyTextBox.Verifytextbox('3/12/2020','8/12/2020','1:00', '12:00')
        

    })



})