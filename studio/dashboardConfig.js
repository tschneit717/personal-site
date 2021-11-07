export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '618853b112808f98bf43b32f',
                  title: 'Sanity Studio',
                  name: 'personal-site-studio-dv5xv9ib',
                  apiId: '0b759ead-b45b-48de-bc6c-ab3e7fb6bce4'
                },
                {
                  buildHookId: '618853b167d540f250074a33',
                  title: 'Portfolio Website',
                  name: 'personal-site-web-uv84rmud',
                  apiId: '94d7fcc2-3c29-4451-81a6-2b7a51b0285f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tschneit717/personal-site',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://personal-site-web-uv84rmud.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
