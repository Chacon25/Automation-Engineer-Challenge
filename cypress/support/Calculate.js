class Calculate{
    constructor(){

        this.StartingDate = '#StartingDate'
        this.LeavingDate = '#LeavingDate'
        this.StartingTime = '#StartingTime '
        this.LeavingTime = '#LeavingTime'

    }
    Calculate = (StartingDate ,LeavingDate , StartingTime ,StartingTimeSet, LeavingTime , LeavingTimeSet) =>{

        cy.get( this.StartingDate).clear().type(StartingDate)
        cy.get(this.LeavingDate).clear().type(LeavingDate)

        if(StartingTimeSet = 'AM')
        cy.get(':nth-child(2) > :nth-child(2) > [value="AM"]')
        else
        cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]')

    }


}