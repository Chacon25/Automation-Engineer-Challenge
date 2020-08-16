class VerifyRB{
    constructor(){}

    VerifyRB = (StartingTimeSet,LeavingTimeSet) =>{

        if (StartingTimeSet == 'AM')
        cy.get(':nth-child(2) > :nth-child(2) > [value="AM"]').click()
        else
        cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
        
        if(LeavingTimeSet == 'AM')
        cy.get(':nth-child(3) > :nth-child(2) > [value="AM"]').click()
        else
        cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()


    }

}
export default new VerifyRB