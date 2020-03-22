module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Generate an application component boilerplate',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path:
                    'src/components/{{camelCase name}}/{{camelCase name}}.component.tsx',
                templateFile: 'plop-templates/component/component.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/{{camelCase name}}/{{camelCase name}}.styles.ts',
                templateFile:
                    'plop-templates/component/component.styles.ts.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/{{camelCase name}}/{{camelCase name}}.spec.tsx',
                templateFile: 'plop-templates/component/component.spec.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{camelCase name}}/index.ts',
                templateFile: 'plop-templates/component/index.ts.hbs',
            },
        ],
    });
};
