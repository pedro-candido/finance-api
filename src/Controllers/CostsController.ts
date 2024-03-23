export class CostsController {
    async registerDay(req, res) {
        return res.json({success: true, message: "Cost created"});
    }

    async get(req, res) {
        return res.json({success: true, message: "Costs listed"});
    }

    async update(req, res) {
        return res.json({success: true, message: "Cost updated"});
    }
}