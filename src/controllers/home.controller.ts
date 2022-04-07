
import { Request, Response } from "express";
import { About } from "../entity/about";
import { Projects } from "../entity/project";
import {Blog} from "../entity/blog"
import { Skills } from "../entity/skill"
import { Timeline} from "../entity/timeline"

class indexControllers {
    public async display(req: Request, res: Response) {
        let about = await About.find();
        let project = await Projects.find();
        let blog = await Blog.find();
        let skill = await Skills.find();
        let timeline = await Timeline.find();
            res.render('home', { about, project, blog, skill, timeline });
    }

}

export default new indexControllers();

