class Calculate{
    constructor(){

        this.ParkingLot = '#ParkingLot'
        this.StartingDate = '#StartingDate'
        this.LeavingDate = '#LeavingDate'
        this.StartingTime = '#StartingTime '
        this.LeavingTime = '#LeavingTime'

    }
    Calculate = (ParkingLot,StartingDate ,LeavingDate , StartingTime ,StartingTimeSet, LeavingTime , LeavingTimeSet) =>{

        cy.get(this.ParkingLot).select(ParkingLot)
        cy.get( this.StartingDate).clear().type(StartingDate)
        cy.get(this.LeavingDate).clear().type(LeavingDate)

        if(StartingTimeSet = 'AM')
        cy.get(':nth-child(2) > :nth-child(2) > [value="AM"]')
        else
        cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]')

        if(LeavingTimeSet == 'AM')
        cy.get(':nth-child(3) > :nth-child(2) > [value="AM"]').click()
        else
        cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()

        cy.get(this.StartingTime).clear().type(StartingTime)
        cy.get(this.LeavingTime).clear().type(LeavingTime)

        cy.get('[type="submit"]').click()


    }


}

export default new Calculate