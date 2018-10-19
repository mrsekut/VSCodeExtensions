'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension!');

  let cmd1 = vscode.commands.registerCommand('extension.sayHello', () => {
    vscode.window.showInformationMessage('Hello World!');
  });

  let cmd2 = vscode.commands.registerCommand('extension.calc', () => {
    vscode.window
      .showInputBox({
        prompt: 'Tiny Calculator: ',
        validateInput: param => {
          var regex = /\d+\s*[-+*/]\s*\d/;
          return regex.test(param) ? '' : 'input: number [-+*/] number';
        }
      })
      .then(value => {
        if (value == undefined) return;
        let result = eval(value);
        vscode.window.showInformationMessage(value + '=' + result);
      });
  });

  context.subscriptions.push(cmd1);
  context.subscriptions.push(cmd2);
}

export function deactivate() {}
