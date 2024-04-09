import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router.get('', this.GetHouses)
        this.router.get('/:houseId', this.GetHouseById)
        this.router.get('/search', this.SearchHouses)
    }

    async GetHouses(request, response, next) {
        try {
            const houses = await housesService.GetHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async GetHouseById(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await housesService.GetHouseById(houseId)
            response.send(house)

        } catch (error) {
            next(error)
        }
    }

    async SearchHouses(request, response, next) {
        try {
            const searchQuery = request.query
            const houses = await housesService.SearchHouses(searchQuery)
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }
}