import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SkillNodeService {
  constructor(private http: HttpClient) {}

  getFilesystem() {
    return {
      data: [
        {
          data: {
            name: 'Expertise',
            experience: '',
          },
          children: [
            {
              data: {
                name: 'Java',
                experience: '5yrs.',
              },
            },
            {
              data: {
                name: 'Node.js',
                experience: '4 yrs.',
              },
            },
            {
              data: {
                name: 'FrontEnd',
                experience: '4 yrs.',
                type: 'Folder',
              },
            },
            {
              data: {
                name: 'MongoDB',
                experience: '2 yrs.',
              },
            },
          ],
        },
        {
          data: {
            name: 'Node.js',
            experience: '4 yrs',
          },
          children: [
            {
              data: {
                name: 'Hapi.js',
                experience: '2 yrs.',
              },
            },
            {
              data: {
                name: 'express.js',
                experience: '2 yrs.',
              },
            },
            {
              data: {
                name: 'Seneca',
                experience: '2 yrs.',
              },
            },
            {
              data: {
                name: 'Unit Testing and coverage (Mocha , Chai , Istanbul )',
                experience: '2+ yrs.',
              },
            },
            {
              data: {
                name: 'Mongoose',
                experience: '2 yrs.',
              },
            },
          ],
        },
        {
          data: {
            name: 'FrontEnd',
            experience: '4 yrs',
          },
          children: [
            {
              data: {
                name: 'Angular',
                experience: '2.5 yrs.',
              },
            },
            {
              data: {
                name: 'Typescript',
                experience: '2.5 yrs.',
              },
            },
            {
              data: {
                name: 'PrimeNg , Angular Material',
                experience: '2+ yrs',
              },
            },
            {
              data: {
                name: 'SASS',
                experience: '4 yrs.',
              },
            },
            {
              data: {
                name: 'Unit testing (Jasmine , Protractor)',
                experience: '2+ yrs.',
              },
            },
            {
              data: {
                name: 'React.js',
                experience: '1.5 yrs.',
              },
            },
          ],
        },
        {
          data: {
            name: 'Database',
            experience: '....',
          },
          children: [
            {
              data: {
                name: 'MongoDB',
                experience: '2+ yrs',
              },
            },
            {
              data: {
                name: 'Redis',
                experience: '2+ yrs',
              },
            },
            {
              data: {
                name: 'Postgresql',
                experience: '1+ yrs',
              },
            },
          ],
        },
        {
          data: {
            name: 'Security',
            experience: '3 yrs.',
          },
          children: [
            {
              data: {
                name: 'Passport.js ',
                experience: '....',
              },
            },
            {
              data: {
                name: 'SAML',
                experience: '....',
              },
            },
            {
              data: {
                name: 'OAuth',
                experience: '....',
              },
            },
            {
              data: {
                name: 'JWT ',
                experience: '....',
              },
            },
            {
              data: {
                name: 'Google Captcha',
                experience: '...',
              },
            },
          ],
        },
        {
          data: {
            name: 'Cloud',
            experience: '1+ yrs.',
          },
          children: [
            {
              data: {
                name: 'Microsoft Azure ',
                experience: '1+ yrs',
              },
            },
          ],
        },
        {
          data: {
            name: 'Devops and monitoring',
            experience: '1+ yrs.',
          },
          children: [
            {
              data: {
                name: 'Docker',
                experience: '3+ yrs',
              },
            },
            {
              data: {
                name: 'ELK and Filebeat ',
                experience: '1+ yrs',
              },
            },
          ],
        },
        {
          data: {
            name: 'Tools',
            experience: '...',
          },
          children: [
            {
              data: {
                name: 'Open API(Swagger) ',
                experience: '...',
              },
            },
            {
              data: {
                name: 'WebPack',
                experience: '....',
              },
            },
            {
              data: {
                name: 'ESlint',
                experience: '...',
              },
            },
            {
              data: {
                name: 'Grunt / Gulp ',
                experience: '...',
              },
            },
          ],
        },

        {
          data: {
            name: 'SCM',
            experience: '...',
          },
          children: [
            {
              data: {
                name: 'Github , SVN ',
                experience: '1+ yrs',
              },
            },
          ],
        },
        {
          data: {
            name: 'IOT',
            experience: 'POC',
          },
          children: [
            {
              data: {
                name: 'Raspberry Pi',
                experience: 'POC',
              },
            },
            {
              data: {
                name: 'MQTT',
                experience: 'POC',
              },
            },
            {
              data: {
                name: 'Node-RED',
                experience: 'POC',
              },
            },
          ],
        },
      ],
    };
  }
}
