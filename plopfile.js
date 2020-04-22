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
                path:
                    'src/{{directory}}/{{camelCase name}}/{{camelCase name}}.story.tsx',
                templateFile:
                    'plop-templates/component/component.story.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/{{directory}}/{{camelCase name}}/index.ts',
                templateFile: 'plop-templates/component/index.ts.hbs',
            },
        ],
    });

    plop.setGenerator('module', {
        description: 'Generate an application module boilerplate',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Please choose module name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path:
                    'src/modules/{{camelCase name}}/{{camelCase name}}.actions.ts',
                templateFile: 'plop-templates/module/actions.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/modules/{{camelCase name}}/{{camelCase name}}.state.ts',
                templateFile: 'plop-templates/module/state.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/modules/{{camelCase name}}/{{camelCase name}}.selectors.ts',
                templateFile: 'plop-templates/module/selectors.ts.hbs',
            },
            {
                type: 'modify',
                path: 'src/store.ts',
                pattern: /(\/\/<-- IMPORT MODULE STATE -->)/g,
                template:
                    "import { {{ camelCase name }}State } from '@/modules/{{ camelCase name }}/{{ camelCase name }}.state';\n$1",
            },
            {
                type: 'modify',
                path: 'src/store.ts',
                pattern: /(\/\/<-- INJECT MODULE STATE -->)/g,
                template:
                    '{{ camelCase name }}: {{ camelCase name }}State,\n    $1',
            },
        ],
    });
};
