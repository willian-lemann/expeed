import { GluegunTemplate } from "gluegun";
import { FolderBuilder } from "../interfaces/FolderBuilder";
import { Props } from "../interfaces/Props";

const TemplateBuilder = async (template: GluegunTemplate, props: Props, folderBuilder: FolderBuilder[]) => {
   folderBuilder.forEach(async config => {
      await template.generate({
         template: config.template,
         target: config.target,
         props: config.props ? props : null
      })
   });
};

export default TemplateBuilder;