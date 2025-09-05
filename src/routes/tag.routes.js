import { Router } from "express";
import { createTag, deleteTag, getAlltags, getTagById, updateTag } from "../controllers/tag.controllers.js";

const routerTag = Router();

routerTag.post('/', createTag);
routerTag.get('/', getAlltags);
routerTag.get('/:id', getTagById);
routerTag.put('/:id', updateTag);
routerTag.delete('/:id', deleteTag);

export default routerTag;

