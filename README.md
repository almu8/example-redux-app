## Run backend
from root folder:
```
cd backend
npm i
npm start
```

## Run frontend
from root folder:
```
cd frontend
npm i
npm start
```

## Description
How the example works:
```
   1) on the projects page (http://localhost:4200/projects)
        a) if the page is refreshed, a request for backing is made (http://localhost:3000/projects, http://localhost:3000/countries), which returns a list of projects and countries.
        b) if you leave this page and then return, the request will not be made, as it is cached
        c) if you select any item countries list one request will be made and cached,
           you can select one item few times cmp will get  data from store
```
```
   2) on a specific project page (http://localhost:4200/project/1):
        a) if you come from the projects page, you will asked only workers (http://localhost:3000/workers?projId=1)
           request of project getting will stopped by filter, we have project in the store
        b) if we refresh the page, 2 requests will be made (http://localhost:3000/workers?projId=1 и http://localhost:3000/workers?projId=1)
           second request (http://localhost:3000/workers?projId=1) is not needed in this situation, the first response contains workers,
           we can't filter workers by project ids, we are not sure if everyone in the store
        c) if you leave this page and then return, the requests will not be made, as both requests are cached
```
```
   3) the specific worker page (http://localhost:4200/worker/1):
        a) if you go to this page from the project page, then the request will only be to getting a contact, request of worker getting will stopped by filter
        b) if we refresh the page, will request the worker from backend, which contains a contact, request of contact getting will stopped by filter
        c) if you leave this page and then return, the requests will not be made, will stopped by filters
```