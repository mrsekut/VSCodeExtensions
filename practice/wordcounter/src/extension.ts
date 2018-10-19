'use strict';
import {
  window,
  ExtensionContext,
  commands,
  TextDocument,
  StatusBarItem,
  StatusBarAlignment
} from 'vscode';

export function activate(context: ExtensionContext) {
  let wordCounter = new WordCounter();

  var dispose = commands.registerCommand('extension.sayHello', () => {
    wordCounter.updateWordCount();
  });

  context.subscriptions.push(wordCounter);
  context.subscriptions.push(dispose);
}

export function deactivate() {}

class WordCounter {
  private _statusBarItem: StatusBarItem;
  public updateWordCount() {
    if (!this._statusBarItem) {
      this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
    }

    let editor = window.activeTextEditor;
    let doc = editor.document;

    if (doc.languageId === 'markdown') {
      // let wordCount = this.
    }
  }

  public _getWordCount(doc: TextDocument): number {
    let docContent = doc.getText();

    docContent = docContent.replace(/(< ([^>]+)<)/g, '').replace(/\s+/g, ' ');
    docContent = docContent.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    let wordCount = 0;
    // if(docContent !)

    return wordCount;
  }

  dispose() {
    this._statusBarItem.dispose();
  }
}
