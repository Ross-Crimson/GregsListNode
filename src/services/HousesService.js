import { dbContext } from "../db/DbContext.js";

class HousesService {
    async GetHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

    async GetHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) throw new Error(`no house with this id: ${houseId}`)
        return house
    }

    async SearchHouses(searchQuery) {
        const houses = await dbContext.Houses.find(searchQuery)
        //const houses = await dbContext.Houses.find({ bathrooms: 3 })
        return houses
    }
}

export const housesService = new HousesService()