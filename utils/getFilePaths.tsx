import fs from 'fs';
import path from 'path';

const folderPath = path.join(process.cwd(), "content");
const noteFilePath = fs.readdirSync(folderPath)

const url_list = noteFilePath.map((path) => path.replace(/\.mdx?$/, ""))

export {
    folderPath,
    url_list
}