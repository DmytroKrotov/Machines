import { Machine } from "./Machine";
export class Machines
{
    machines:Machine[]=[];
    constructor(machines:Machine[])
    {
        this.machines=machines;
    }
}