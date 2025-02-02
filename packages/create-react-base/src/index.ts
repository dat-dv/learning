import { execSync } from 'child_process';
import * as path from 'path';

const args: string[] = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: yarn create-base <project-name>');
  process.exit(1);
}

const projectName: string = args[0];
const currentDir: string = process.cwd().replace("packages/create-react-base", "");
const sourceDir: string = path.resolve(currentDir, 'packages/react-ts-base');
const targetDir: string = path.resolve(currentDir, `packages/${projectName}`);

try {
  execSync(`cp -r ${sourceDir} ${targetDir}`, { stdio: 'inherit' });
  console.log(`Project ${projectName} created successfully.`);
} catch (error) {
  console.error(`Error creating project ${projectName}:`, error);
  process.exit(1);
}