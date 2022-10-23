import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
export const userRouter = express.Router();
import {
	login,
	logout,
	getUser,
	myProfile,
	updateUser,
	addTimeline,
	deleteTimeline,
} from "../controller/User.js";

userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated, myProfile);
userRouter.route("/admin/update").put(isAuthenticated, updateUser);

userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
userRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
