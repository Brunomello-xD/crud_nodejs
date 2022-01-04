import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCateroriesController } from './controllers/GetAllCategoriesController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { DeleteVideosController } from './controllers/DeleteVideosController';
import { UpdateVideoController } from './controllers/UpdateVideoController';
import { GetAllVideosController } from './controllers/GetAllVideosController';

const routes = Router();

// [X] C - CREATE - POST
// [X] R - READ - GET
// [X] U - UPDATE - PUT
// [X] D - DELETE - DELETE

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCateroriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.delete("/videos/:id", new DeleteVideosController().handle);
routes.put("/videos/:id", new UpdateVideoController().handle)

export { routes }
