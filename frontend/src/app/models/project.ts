import {Worker} from "./worker";

export interface Project {
  id: number;
  name: string;
  description: string;
  workers: any;
}
