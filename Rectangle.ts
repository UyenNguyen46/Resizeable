import {Resizeable} from "./Resizeable";

export class Rectangle  implements Resizeable{
    resize(percent: number) {
        return "Rectangle" +percent;
    }

}