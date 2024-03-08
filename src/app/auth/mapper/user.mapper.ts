import { Login, User } from "../interface/user.interface";

export const userMapper = (object: Login ): User => {
    const data =  Object.values(object);
    const { user } = data[0];
    const { __typename, ...rest} = user;
 return { ...rest };
}