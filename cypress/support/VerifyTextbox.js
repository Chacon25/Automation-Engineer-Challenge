class VerifyTextbox {
    constructor(){

        this.StartingDate = '#StartingDate'
        this.LeavingDate = '#LeavingDate'
        this.StartingTime = '#StartingTime '
        this.LeavingTime = '#LeavingTime'

    }
    
    Verifytextbox = (StartingDate , LeavingDate,  StartingTime ,LeavingTime) =>{

        cy.get(this.StartingDate).clear().type(StartingDate)
        cy.get(this.LeavingDate).clear().type(LeavingDate)

        cy.get(this.StartingTime).clear().type(StartingTime)
        cy.get(this.LeavingTime).clear().type(LeavingTime)

    }

}
export default new VerifyTextbox