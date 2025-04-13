function extractFile(string) {

    let dirs = string.split('\\');
    let file = dirs.pop();

    let lastComma = file.lastIndexOf('.');
    let fileName = file.substring(0, lastComma);
    let extension = file.substring(lastComma + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
