import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18', // Ensure this matches your Vercel/Netlify setting

    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'], // Folder where your .json/.md files live

            // Define your content models here
            models: [
                {
                    name: 'Page', // The technical ID for this model
                    type: 'page', // Tells Stackbit this represents a URL-accessible page
                    urlPath: '/{slug}', // How to build the URL from the file name/fields
                    filePath: 'content/pages/{slug}.json', // Where to save new files
                    fields: [
                        { name: 'title', type: 'string', required: true },
                        { name: 'description', type: 'markdown' }, // or 'string' for simple text
                        {
                            name: 'sections',
                            type: 'list',
                            items: { type: 'model', models: ['Hero', 'Features'] }
                        }
                    ]
                },
                {
                    name: 'Hero', // A reusable component
                    type: 'object', // 'object' means it's a piece of a page, not a page itself
                    fields: [
                        { name: 'heading', type: 'string', default: 'Welcome' },
                        { name: 'subheading', type: 'text' },
                        { name: 'image', type: 'image' }
                    ]
                },
                {
                    name: 'Features',
                    type: 'object',
                    fields: [
                        { name: 'items', type: 'list', items: { type: 'string' } }
                    ]
                }
            ],

            // Where uploaded images go
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        }),
    ],
});
