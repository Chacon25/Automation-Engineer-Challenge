class VerifyCB {
    constructor() {
        this.ChooseParking = '#ParkingLot'
    }

    VerifyCB = (ChooseParking) => {

        cy.get(this.ChooseParking).select(ChooseParking)

    }

}

export default new VerifyCB 