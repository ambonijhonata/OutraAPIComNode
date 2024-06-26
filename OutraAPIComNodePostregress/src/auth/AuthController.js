class AuthController {
    constructor(service) {
        this.service = service;
    }

    async register(request) {
        const { name, email, password } = request.body;
        //const name = request.body.name
        //const email = request.body.email
        //const password = request.body.password                        

        console.log(request.body.name)
        console.log(name)
        console.log(email)
        console.log(password)
        if (!name || !email || !password) {
            return { code: 400, body: { message: "name, email and password are required." } };
        }

        try {
            const user = await this.service.register(name, email, password);
            return { code: 201, body: user };
        } catch (error) {
            return { code: 400, body: { message: error.message } };
        }
    }

    async login(request) {
        const { email, password } = request.body;

        if (!email || !password) {
            return { code: 400, body: { message: "email and password are required." } };
        }

        try {
            const body = await this.service.login(email, password);
            return { code: 200, body };
        } catch (error) {
            return { code: 400, body: { message: error.message } };
        }
    }
}

module.exports = AuthController;