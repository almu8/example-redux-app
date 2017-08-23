import {ProjectCmp} from "./project/project-cmp";
import {WorkerCmp} from "./worker/worker/worker-cmp";
import {ProjectResolver} from "./store/resolver/project-resolver";
import {WorkerResolver} from "./store/resolver/worker-resolver";

export const appRoutes = [
  {
    path: '',
    redirectTo: '/project/1',
    pathMatch: 'full'
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
