/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Response} from "express";
import {ApiResponseStructure} from "../interfaces";

abstract class ApiResponse {
	/**
   * Constructs the api response structure with the given errors
   * @param errors
   */
	async fail(errors: Error[]): Promise<ApiResponseStructure> {
		return {
			success: false,
			data: null,
			errors,
		};
	}


	/**
   * Constructs the api response structure with the given date
   * @param data
   */
	async success(data: any): Promise<ApiResponseStructure> {
		return {
			success: true,
			data: data,
			errors: null,
		};
	}

	/**
 * Constructs the api response structure with the given date
 * @param res sends back response with value stored in locals object
 */
	async sendResponse(res: Response) {
		res.send(res.locals.response);
	}
}

export {ApiResponse};
