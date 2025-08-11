import { RequestHandler } from "express";

export interface ControllerModule {
	[key:string]:RequestHandler
}
