import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";



export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router.get('', this.GetJobs)
    }

    async GetJobs(request, response, next) {
        try {
            const jobs = await jobsService.GetJobs()
            response.send(jobs)
        } catch (error) {
            next(error)
        }
    }
}