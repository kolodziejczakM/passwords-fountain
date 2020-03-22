// eslint-disable-next-line @typescript-eslint/no-var-requires
const promptDirectory = require('inquirer-directory');

module.exports = plop => {
    plop.setPrompt('directory', promptDirectory);
    plop.setGenerator('component', {
        description: 'Generate an application component boilerplate',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Please choose component name:',
            },
            {
                type: 'directory',
                name: 'directory',
                basePath: 'src',
                message: 'Please choose container directory for your files:',
            },
        ],
        actions: [
            {
                type: 'add',
                path:
                    'src/{{directory}}/{{camelCase name}}/{{camelCase name}}.component.tsx',
                templateFile: 'plop-templates/component/component.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/{{directory}}/{{camelCase name}}/{{camelCase name}}.styles.ts',
                templateFile:
                    'plop-templates/component/component.styles.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/{{directory}}/{{camelCase name}}/{{camelCase name}}.spec.tsx',
                templateFile: 'plop-templates/component/component.spec.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/{{directory}}/{{camelCase name}}/index.ts',
                templateFile: 'plop-templates/component/index.ts.hbs',
            },
        ],
    });
};
