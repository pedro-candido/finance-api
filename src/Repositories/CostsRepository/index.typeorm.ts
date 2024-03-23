import {IDayCostRepository} from "./Costs.types";
import {DayCost} from '../../Entities/Costs'
import {User} from "../../Entities/User";
import {Response} from "express";

export class CostsRepository implements IDayCostRepository {
    async registerDay(data) {
        await DayCost.insert(data);
    }

    async get() {
        const dayCost = await DayCost.find()

        return {success: true, message: "Costs listed", dayCost};
    }

    async update(_id: number, data: User, res: Response) {
        const dayFound = await DayCost.findOne({
            where: {
                _id,
            }
        });

        if (!dayFound) {
            res.status(404).send("Day not found");
            return {
                success: false,
                message: "Day not found",

            };
        }

        await DayCost.update({_id}, data);

        res.status(200).send(`Day ${dayFound.day} updated`);

        return {
            success: true,
            message: `Day ${dayFound.day} updated`,
        };
    }
}