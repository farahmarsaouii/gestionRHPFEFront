import { Collection } from "typescript";
import { Privilege } from "./Privilege";
import { User } from "./user";

    export class Role{
        id!: number;
        role!:string;
        users!:Collection<User>;
       privileges!:any[];
      
    }