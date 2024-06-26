import {CostsRepository} from '../Repositories/CostsRepository/index.typeorm'

const repository = new CostsRepository();

export class CostsController {
    async registerDay(req, res) {
        const {costs} = req.body;

        const content = repository.registerDay(costs);

        return res.json(content);
    }

    async get(req, res) {
        const content = repository.get();

        return res.json(content);
    }

    async update(req, res) {
        const {key, value} = req.params;
        const {costs} = req.body;

        const content = await repository.update(key, value, costs);

        if (content?.success) return res.json(content);
    }

    async create(req, res) {
        const {costs} = req.body;

        const content = repository.registerDay(costs);

        return res.json(content);
    }

    async delete(req, res) {
        const {_id} = req.params;

        const content = await repository.delete(_id);

        return res.json(content);
    }
}