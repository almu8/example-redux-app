import {Project} from "./project";

export interface Worker {
  id: number;
  name: string;
  contactId: number;
  projects: Project[];
}
