'use strict';

import * as fs from 'fs';
import * as path from 'path';
import * as skeleton_template from './skeleton-template';

export function activate(dir: string, biz_name: string){
    const root_path = dir + path.sep + biz_name.toLowerCase().trim();
    const store_path = root_path + path.sep + "store";
    const new_react_component = biz_name.substring(0,1).toUpperCase() + biz_name.substring(1);
    const new_react_style = biz_name.toLowerCase() + "-style";
    const react_component_name = root_path + path.sep + new_react_component + ".jsx";
    const react_component_style_name = root_path + path.sep + new_react_style + ".js";
    const store_actioncreators_name = store_path + path.sep + "actionCreators.js";
    const store_actionTypes_name = store_path + path.sep + "actionTypes.js";
    const store_interface_name = store_path + path.sep + "interface.js";
    const store_reducer_name = store_path + path.sep + "reducer.js";
    const FILE_DEFAULT_CONTENT = "";


    if(!fs.existsSync(root_path)) fs.mkdirSync(root_path);
    if(!fs.existsSync(store_path)) fs.mkdirSync(store_path);
    fs.writeFileSync(react_component_name, skeleton_template.generateComponentTemplate(new_react_component, new_react_style));
    fs.writeFileSync(react_component_style_name, skeleton_template.generateStyleTemplate());
    fs.writeFileSync(store_actioncreators_name, FILE_DEFAULT_CONTENT);
    fs.writeFileSync(store_actionTypes_name, FILE_DEFAULT_CONTENT);
    fs.writeFileSync(store_interface_name, skeleton_template.generateInterfaceTemplate());
    fs.writeFileSync(store_reducer_name, skeleton_template.generateReducerTemplate());

}

