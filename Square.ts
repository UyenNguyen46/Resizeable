import {Resizeable} from "./Resizeable";

export class Square implements Resizeable{
    resize(percent: number) {
        return "Square" + percent
    }
}