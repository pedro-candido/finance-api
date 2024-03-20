import {Response} from "express";
import {User} from "../../Entities/User";

export class UserRepository {
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
        // const user = await UserModel.findOne({
        //     username,
        // });
        //
        // if (!!user) {
        //     await UserModel.findByIdAndDelete(user._id);
        //     return true;
        // }

        return false;
    }
}
