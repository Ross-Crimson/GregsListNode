import { dbContext } from "../db/DbContext.js"


class JobsService {
    async GetJobs() {
        const jobs = await dbContext.Jobs.find()
        return jobs
    }

}

export const jobsService = new JobsService