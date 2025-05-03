import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};
type updateUserNameBody = {
    firstName: string;
    lastName: string;
}
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
		});
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
};

const getAllUser = async(c: Context) => {
    try {
        const users = await userModel.getAllUser();
        return c.json(users,200);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const editUserName = async(c:Context) => {
    try {
        const param = c.req.query("id");
        const body = await c.req.json<updateUserNameBody>();

        if (!body.firstName || !body.lastName || param === undefined || param === null) {
            return c.json ({
                success: false,
                data: null,
                msg: "Missing required fields",
            },400)
        }
        if (await userModel.isDuplicate(body.firstName, body.lastName)) {
            return c.json({
                success: false,
                data: null,
                msg: "firstName or lastName is duplicated",
            });
        }
        const data = await userModel.editUserName(parseInt(param), body.firstName, body.lastName);
        return c.json(data,200);
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
export { createUser, getAllUser, editUserName};