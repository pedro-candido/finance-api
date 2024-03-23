import {DayCost} from "../../Entities/Costs";

export interface IDayCostRepository {
    registerDay(data: typeof DayCost.arguments): void;

    get(): Promise<{
        success: boolean;
        message: string;
        dayCost: DayCost[];
    }>;

    update(_id: number, data: DayCost): void;
}