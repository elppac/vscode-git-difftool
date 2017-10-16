// The module 'vscode' contains the VS Code extensibility API Import the module
// and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated your extension is
// activated the very first time the command is executed
function activate(context) {
    let terminalStack  = [];
    // Use the console to output diagnostic information (console.log) and errors
    // (console.error) This line of code will only be executed once when your
    // extension is activated
    console.log('Congratulations, your extension "git-difftool" is now active!');

    // The command has been defined in the package.json file Now provide the
    // implementation of the command with  registerCommand The commandId parameter
    // must match the command field in package.json
    let disposable = vscode
        .commands
        .registerCommand('extension.runGitDifftool', function (params) {
            // The code you place here will be executed every time your command is executed

            const path = require('path')
            const resourcePath = params._resourceUri.path;
            const dirPath = path.normalize(path.dirname(resourcePath));
            const exec = require('child_process').exec;
            const cmd = `cd ${dirPath} \r\n git difftool -y ${resourcePath}`
            exec(cmd, (err, stdout, stderr) => {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (err) {
                    console.log('error: ' + err);
                }
            });
            //console.log(cmd)
        });

    context
        .subscriptions
        .push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;