import {IDayCostRepository} from "./Costs.types";
import {DayCost} from '../../Entities/Costs'
import {Response} from "express";

export class CostsRepository implements IDayCostRepository {
  async registerDay(data) {
    await DayCost.insert(data);
  }

  async get() {
    const dayCost = await DayCost.find();

    return { success: true, message: "Costs listed", dayCost };
  }

  async update(key: string, value: string, data: DayCost) {
    const dayFound = await DayCost.findOne({
      where: {
        [key]: value,
      },
    });

    if (!dayFound) {
      return {
        success: false,
        message: "Day not found",
      };
    }

    await DayCost.update(
      {
        [key]: value,
      },
      data
    );

    return {
      success: true,
      message: `Day ${dayFound.day} updated`,
    };
  }

  async delete(_id: number) {
    const dayFound = await DayCost.findOne({
      where: {
        _id,
      },
    });

    if (!dayFound) {
      return {
        success: false,
        message: "Day not found",
      };
    }

    await DayCost.delete({ _id });

    return {
      success: true,
      message: `Day ${dayFound.day} deleted`,
    };
  }
}