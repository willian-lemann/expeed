import { FolderBuilder } from "../interfaces/FolderBuilder";

export const folderBuilder: FolderBuilder[] = [
   {
      template: 'folders/UserController.js.ejs',
      target: `src/controllers/UserController.js`,
      props: false
   },

   {
      template: 'folders/UserRoute.js.ejs',
      target: `src/controllers/Routes/UserRoute.js`,
      props: false
   },

   {
      template: 'folders/UserModel.js.ejs',
      target: `src/models/User.js`,
      props: false
   },

   {
      template: 'folders/UserService.js.ejs',
      target: `src/services/UserService.js`,
      props: false
   },

   {
      template: 'folders/BaseRoutes.js.ejs',
      target: `src/routes.js`,
      props: false
   },

   {
      template: 'folders/server.js.ejs',
      target: `src/server.js`,
      props: false
   },

   {
      template: 'folders/.env.js.ejs',
      target: `.env`,
      props: false
   },

   {
      template: 'folders/package.json.js.ejs',
      target: `package.json`,
      props: true
   },

   {
      template: 'folders/procfile.js.ejs',
      target: `Procfile`,
      props: false
   },

   {
      template: 'folders/.gitignore.js.ejs',
      target: `.gitignore`,
      props: false
   },

   {
      template: 'folders/docker-compose.yml.ejs',
      target: `docker-compose.yml`,
      props: false
   },

   {
      template: 'folders/readme.md.ejs',
      target: `README.md`,
      props: true
   }
]