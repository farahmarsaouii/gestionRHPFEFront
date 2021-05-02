import { Collection } from "typescript";
import { User } from "./user";

export class Equipe{
    id!: number;
    nomEquipe!:string;
    users!:Collection<User>;
}