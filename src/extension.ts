import * as https from "https";
import * as vscode from "vscode";

function tryOpenApiDoc(symbol: string) {
  const url =
    "https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/" +
    symbol +
    ".html";
  const options = {
    method: "HEAD",
  };
  https
    .request(url, options, (res) => {
      if (res.statusCode === 200) {
        const uri = vscode.Uri.parse(url);
        vscode.env.openExternal(uri);
        console.log("Found Vulkan API for '" + symbol + "'");
      } else {
        console.log("Couldn't find Vulkan API for '" + symbol + "'");
      }
    })
    .end();
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "vulkan-api-docs.openApiDoc",
    () => {
      const editor = vscode.window.activeTextEditor;
      const document = editor?.document;
      const selection = editor?.selection;
      if (selection !== undefined) {
        const range = document?.getWordRangeAtPosition(selection.start);
        const symbol = document?.getText(range);
        if (symbol !== undefined) {
          // Maybe symbol is valid as is
          tryOpenApiDoc(symbol);
          // Maybe symbol is a (vk::)Type
          tryOpenApiDoc("Vk" + symbol);
          const upperSymbol = symbol.charAt(0).toUpperCase() + symbol.slice(1);
          // Maybe symbol is a (type.)functionCall or (vk::)functionCall
          tryOpenApiDoc("vk" + upperSymbol);
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
