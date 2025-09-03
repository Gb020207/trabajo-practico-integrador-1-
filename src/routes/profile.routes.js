import { Router } from "express";
import { createProfile, deleteProfile, getAllProfiles, getProfilesById, updateProfile } from "../controllers/Profile.controllers.js";

const routeProfile = Router();

routeProfile.get("/", getAllProfiles);
routeProfile.post("/", createProfile);
routeProfile.get("/:id", getProfilesById);
routeProfile.put("/:id", updateProfile);
routeProfile.delete("/:id", deleteProfile);

export default routeProfile;
