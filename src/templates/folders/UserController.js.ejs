const UserService = require('../services/UserService');

module.exports = {

    async index(request, response) {
        const users = await UserService.index();
        return response.json(users);
    },

    async show(request, response) {
        const { id } = request.params;

        const user = await UserService.show(id);
        if (user == null)
            return response.status(404).json();

        return response.json(user);
    },

    async store(request, response) {
        const data = request.body;
        const user = await UserService.store(data);
        return response.json(user);
    },

    async update(request, response) {
        const { id } = request.params;
        const data = request.body;

        const user = await UserService.update(id, data);
        if (user == null)
            return response.status(404).json();

        return response.json(user);
    },

    async destroy(request, response) {
        const { id } = request.params;

        const user = await UserService.destroy(id);

        if (user == null)
            return response.status(404).json()

        return response.status(200).json();
    },
};