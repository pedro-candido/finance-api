import {IDayCostRepository} from "./Costs.types";
import {DayCost} from '../../Entities/Costs'
import {Response} from "express";

export class CostsRepository implements IDayCostRepository {
    async registerDay(data) {
        await DayCost.insert(data);
    }

    async get() {
        const dayCost = await DayCost.find()

        return {success: true, message: "Costs listed", dayCost};
    }

    async update(key: string, value: string, data: DayCost, res: Response) {
        const dayFound = await DayCost.findOne({
            where: {
                [key]: value,
            }
        });

        if (!dayFound) {
            res.status(404).send("Day not found");
            return {
                success: false,
                message: "Day not found",

            };
        }

        await DayCost.update({
            [key]: value,
        }, data);

        res.status(200).send(`Day ${dayFound.day} updated`);

        return {
            success: true,
            message: `Day ${dayFound.day} updated`,
        };
    }

    async delete(_id: number, res: Response) {
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

        await DayCost.delete({_id});

        res.status(200).send(`Day ${dayFound.day} deleted`);

        return {
            success: true,
            message: `Day ${dayFound.day} deleted`,
        };
    }
}