import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(userDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
}
