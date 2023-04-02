module.exports = {
    api: {
        output: {
            mode: 'tags-split',
            target: 'index.ts',
            schemas: 'model',
            workspace: 'src/api',
            client: 'swr',
            mock: false,
            override: {
                mutator: {
                    path: './client.ts',
                    name: 'customInstance',
                },
            },
        },
        input: {
            target: 'https://raw.githubusercontent.com/morning-night-guild/platform-app/feature/issue%23101/api/openapi.yaml',
        },
    },
};
