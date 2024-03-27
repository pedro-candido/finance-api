import {DayCost} from "../../Entities/Costs";
import {Response} from "express";

export interface IDayCostRepository {
    registerDay(data: typeof DayCost.arguments): void;

    get(): Promise<{
        success: boolean;
        message: string;
        dayCost: DayCost[];
    }>;

    update(_id: number, data: DayCost, res: Response): void;
}