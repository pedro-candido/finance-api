import {Response} from "express";
import {User} from "../../Entities/User";
import {IUserRepository} from './User.types'

export class UserRepository implements IUserRepository {
    async createUser(data: typeof User.arguments) {
        await User.insert(data);
    }

    async findUser(type: string, value: string) {
        const user = await User.findOneBy({[type]: value});

        return user;
    }

    async getUsers() {
        return await User.find();
    }

    async updateUser(username: string, data: User, res: Response) {
        const item = await this.findUser("username", username);

        if (!item) {
            res.status(404).send("User not found");
            return;
        }

        User.update({username}, data);

        res.status(200).send("User updated");

        return;
    }

    async deleteUser(username: string) {
        const user = await User.findOne({
            where: {
                username,
            }
        });

        if (!!user) {
            await User.findOneBy({
                _id: user._id,
            });
            return true;
        }

        return false;
    }
}
