export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d078f1c5ec09b1151d31960',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-h249i7du',
                  apiId: '92bbdbb1-a00e-4e74-878f-a024b8676613'
                },
                {
                  buildHookId: '5d078f1c91fc7c82939e86b6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1xhx8gf6',
                  apiId: '258f0f59-1fe2-48ea-8c22-285e98d19322'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/verhulstd/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1xhx8gf6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
