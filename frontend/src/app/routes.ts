import {ProjectCmp} from "./project/project/project-cmp";
import {WorkerCmp} from "./worker/worker/worker-cmp";
import {ProjectResolver} from "./http/resolver/project-resolver";
import {WorkerResolver} from "./http/resolver/worker-resolver";
import {ProjectListCmp} from "./project/project-list/project-list-cmp";
import {ProjectListResolver} from "./http/resolver/project-list-resolver";

export const appRoutes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectListCmp,
    resolve: {
      projectsData: ProjectListResolver
    }
  },
  {
    path: 'project/:id',
    component: ProjectCmp,
    resolve: {
      projectData: ProjectResolver
    }
  },
  {
    path: 'worker/:id',
    component: WorkerCmp,
    resolve: {
      workerData: WorkerResolver
    }
  },
];
