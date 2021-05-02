import { Collection } from "typescript";
import { User } from "./user";

    export class Role{
        id!: number;
        role!:string;
        users!:Collection<User>;
      //  privileges!:Collection<Privilege>;
    }