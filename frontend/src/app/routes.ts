import {ProjectCmp} from "./project/project-cmp";
import {WorkerCmp} from "./worker/worker/worker-cmp";
import {ProjectResolver} from "./store/resolver/project-resolver";

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
      team: ProjectResolver
    }
  },
  {
    path: 'worker/:id',
    component: WorkerCmp
  },
];
