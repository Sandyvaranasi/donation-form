import { Model } from 'mongoose';
import { User } from './user.model';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(userDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
}
