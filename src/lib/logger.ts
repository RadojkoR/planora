import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(),'tmp', 'logs.txt');

export function logToFile(message: string) {
  const time = new Date().toISOString();
  const fullMessage = `[${time}] ${message}\n`;
  fs.appendFileSync(logFilePath, fullMessage);
}
