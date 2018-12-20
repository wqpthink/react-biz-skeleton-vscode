'use strict';

import {commands, window, ExtensionContext} from 'vscode';
import { isNullOrUndefined } from 'util';
import * as skeleton_handle from './skeleton-handle';

export function activate(context: ExtensionContext){
    console.log("Congratulations, your extension react-biz-skeleton-vscode is now active");
    const command = "extension.ReactBizSkeleton";

    let disposable = commands.registerCommand(command, uri => {
        window.showInputBox().then(res => {
            if(isNullOrUndefined(res)) return;
            skeleton_handle.activate(uri.fsPath, res);
        });

    });
    context.subscriptions.push(disposable);
}

export function deactivate(){
    console.log("Note, your extension react-biz-skeleton-vscode is now deactive");
}