import {Resizeable} from "./Resizeable";

export class Circle implements Resizeable{
    resize(percent: number) {
        return "Circle" + percent;
    }


}
