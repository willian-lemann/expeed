import * as fs from 'fs';
import * as command from 'child_process';
import * as loading from 'loading-cli';
import { GluegunToolbox } from 'gluegun';
import { folderBuilder } from '../builders/FolderBuilder';
import TemplateBuilder from '../generate/TemplateBuilder';

module.exports = {
   name: 'generate',
   alias: ['g'],
   run: async (toolbox: GluegunToolbox) => {
      const {
         parameters,
         template,
         print: { error }
      } = toolbox

      if (!parameters.first) {
         error('Name of the project must be specified');
         return;
      }

      const filename = parameters.first

      fs.mkdirSync('src');

      await TemplateBuilder(template, { name: filename }, folderBuilder)

      const loadingtext = 'Generating all folders and files...';

      const load = loading({
         text: loadingtext,
         color: 'blue',
         frames: ["⊶", "⊷"]
      }).start();

      setTimeout(function () {
         load.color = 'green';
         load.text = 'Almost there...';
      }, 2000);

      setTimeout(() => {
         load.succeed('Folders generated succesfully');

         load.start('Installing dependencies...');

         setTimeout(() => {
            command.exec('yarn install', (err, stdout, stdin) => {
               if (err)
                  console.log('Error to execute command', err);

               console.log(stdout);
               load.succeed('Dependencies installed succesfully!');
            });
         }, 2000);

      }, 2000)
   }
}
