import { Router } from "express";
import { createTag, deleteTag, getAlltags, getTagById, updateTag } from "../controllers/tag.controllers.js";

const routerTag = Router();

routerTag.post('/tag', createTag);
routerTag.get('/tag', getAlltags);
routerTag.get('/tag/:id', getTagById);
routerTag.put('/tag/:id', updateTag);
routerTag.delete('/tag/:id', deleteTag);

export default routerTag;

