import {Project} from "./project";
import {Contact} from "./contact";

export interface Worker {
  id: number;
  name: string;
  contact?: Contact;
  contactId: number;
  projects: Project[];
}
