import { Router } from "express";
import { createProfile, deleteProfile, getAllProfiles, getProfilesById, updateProfile } from "../controllers/profile.controllers.js";

const routeProfile = Router();

routeProfile.get("/profile", getAllProfiles);
routeProfile.post("/profile", createProfile);
routeProfile.get("/profile/:id", getProfilesById);
routeProfile.put("/profile/:id", updateProfile);
routeProfile.delete("/profile/:id", deleteProfile);

export default routeProfile;
