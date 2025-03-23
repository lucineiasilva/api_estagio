import auth_Schemas from "../schemas/auth_Schema.js";
import commonResponses from "../schemas/comnonResponses.js";
import * as dotenv from 'dotenv';


dotenv.config();

const authRoutes = {
    "/login": {
        post: {
            tags: ["Auth"],
            summary: "Realiza login",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: { type: "string", example: "dev@gmail.com" },
                                senha: { type: "string", example: "123"},
                            },
                            required: ["email", "senha"]
                        }
                    }
                }
            },
            responses: {
                200: commonResponses[200]("#/components/schemas/RespostaLogin"),
                400: commonResponses[400](),
                401: commonResponses[401]()
            }
        }
    }
};

export default authRoutes;
