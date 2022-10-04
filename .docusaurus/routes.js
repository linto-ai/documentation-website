import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fr/markdown-page',
    component: ComponentCreator('/fr/markdown-page', '1f4'),
    exact: true
  },
  {
    path: '/fr/tutorials',
    component: ComponentCreator('/fr/tutorials', '19c'),
    exact: true
  },
  {
    path: '/fr/tutorials/archive',
    component: ComponentCreator('/fr/tutorials/archive', 'aea'),
    exact: true
  },
  {
    path: '/fr/tutorials/tadhack',
    component: ComponentCreator('/fr/tutorials/tadhack', 'afa'),
    exact: true
  },
  {
    path: '/fr/tutorials/tags',
    component: ComponentCreator('/fr/tutorials/tags', 'e36'),
    exact: true
  },
  {
    path: '/fr/tutorials/tags/linto',
    component: ComponentCreator('/fr/tutorials/tags/linto', '0d1'),
    exact: true
  },
  {
    path: '/fr/tutorials/tags/tadhack',
    component: ComponentCreator('/fr/tutorials/tags/tadhack', 'f9a'),
    exact: true
  },
  {
    path: '/fr/tutorials/tags/voicelab',
    component: ComponentCreator('/fr/tutorials/tags/voicelab', '109'),
    exact: true
  },
  {
    path: '/fr/tutorials/tutorials_intro',
    component: ComponentCreator('/fr/tutorials/tutorials_intro', 'f3e'),
    exact: true
  },
  {
    path: '/fr/docs',
    component: ComponentCreator('/fr/docs', '6f6'),
    routes: [
      {
        path: '/fr/docs/consumers',
        component: ComponentCreator('/fr/docs/consumers', 'b7b'),
        exact: true,
        sidebar: "consumersSidebar"
      },
      {
        path: '/fr/docs/consumers/apis',
        component: ComponentCreator('/fr/docs/consumers/apis', '458'),
        exact: true,
        sidebar: "consumersSidebar"
      },
      {
        path: '/fr/docs/consumers/conversation-manager',
        component: ComponentCreator('/fr/docs/consumers/conversation-manager', '7fc'),
        exact: true,
        sidebar: "consumersSidebar"
      },
      {
        path: '/fr/docs/developpers',
        component: ComponentCreator('/fr/docs/developpers', '963'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent',
        component: ComponentCreator('/fr/docs/developpers/agent', '182'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients',
        component: ComponentCreator('/fr/docs/developpers/agent/clients', '902'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/android',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/android', 'a07'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/custom_hotwords',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/custom_hotwords', '56a'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/http',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/http', '1a7'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/mqtt',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/mqtt', '702'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/raspberry',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/raspberry', '6c0'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/raspberry/download',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/raspberry/download', 'f75'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/raspberry/hotword',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/raspberry/hotword', 'e6b'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/raspberry/osgenerator',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/raspberry/osgenerator', '126'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/raspberry/rpi_prebuilts',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/raspberry/rpi_prebuilts', 'c49'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/raspberry/rpi_sources',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/raspberry/rpi_sources', 'efc'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/web',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/web', 'f74'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/clients/web/widget',
        component: ComponentCreator('/fr/docs/developpers/agent/clients/web/widget', 'f06'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server',
        component: ComponentCreator('/fr/docs/developpers/agent/server', '01e'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/infrastructure',
        component: ComponentCreator('/fr/docs/developpers/agent/server/infrastructure', '39c'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/post_install',
        component: ComponentCreator('/fr/docs/developpers/agent/server/post_install', 'c86'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/post_install/service-manager',
        component: ComponentCreator('/fr/docs/developpers/agent/server/post_install/service-manager', '8a6'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/post_install/service-manager/acoustic_model',
        component: ComponentCreator('/fr/docs/developpers/agent/server/post_install/service-manager/acoustic_model', '044'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/post_install/service-manager/command_service',
        component: ComponentCreator('/fr/docs/developpers/agent/server/post_install/service-manager/command_service', 'e3e'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/post_install/service-manager/lv_service',
        component: ComponentCreator('/fr/docs/developpers/agent/server/post_install/service-manager/lv_service', 'a24'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/post_install/service-manager/streaming_service_create',
        component: ComponentCreator('/fr/docs/developpers/agent/server/post_install/service-manager/streaming_service_create', 'd48'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/post_install/service-manager/streaming_service_usage',
        component: ComponentCreator('/fr/docs/developpers/agent/server/post_install/service-manager/streaming_service_usage', '130'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/post_install/service-manager/stt_manager_how2use',
        component: ComponentCreator('/fr/docs/developpers/agent/server/post_install/service-manager/stt_manager_how2use', '6db'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/server/stack_deploy',
        component: ComponentCreator('/fr/docs/developpers/agent/server/stack_deploy', '446'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/skills',
        component: ComponentCreator('/fr/docs/developpers/agent/skills', 'ab9'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/skills/components',
        component: ComponentCreator('/fr/docs/developpers/agent/skills/components', '9ae'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/skills/devguide',
        component: ComponentCreator('/fr/docs/developpers/agent/skills/devguide', '5ef'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/skills/devguide/format',
        component: ComponentCreator('/fr/docs/developpers/agent/skills/devguide/format', '695'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/skills/devguide/install_my_skills',
        component: ComponentCreator('/fr/docs/developpers/agent/skills/devguide/install_my_skills', '1c1'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/skills/devguide/make_my_skills',
        component: ComponentCreator('/fr/docs/developpers/agent/skills/devguide/make_my_skills', 'fae'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/agent/skills/list',
        component: ComponentCreator('/fr/docs/developpers/agent/skills/list', '448'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/apis',
        component: ComponentCreator('/fr/docs/developpers/apis', '2aa'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/apis/ASR',
        component: ComponentCreator('/fr/docs/developpers/apis/ASR', 'ce7'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/apis/ASR/dockerrun',
        component: ComponentCreator('/fr/docs/developpers/apis/ASR/dockerrun', '345'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/apis/ASR/models',
        component: ComponentCreator('/fr/docs/developpers/apis/ASR/models', '428'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/apis/ASR/platformrun',
        component: ComponentCreator('/fr/docs/developpers/apis/ASR/platformrun', '462'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/apis/NLP',
        component: ComponentCreator('/fr/docs/developpers/apis/NLP', '2ec'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/apis/TTS',
        component: ComponentCreator('/fr/docs/developpers/apis/TTS', 'd39'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/developpers/meeting',
        component: ComponentCreator('/fr/docs/developpers/meeting', '3ee'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/external',
        component: ComponentCreator('/fr/docs/external', '7d5'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/external/compiledartefacts',
        component: ComponentCreator('/fr/docs/external/compiledartefacts', '89d'),
        exact: true
      },
      {
        path: '/fr/docs/external/docker',
        component: ComponentCreator('/fr/docs/external/docker', 'fdc'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/fr/docs/external/repos',
        component: ComponentCreator('/fr/docs/external/repos', 'a7b'),
        exact: true,
        sidebar: "devSidebar"
      }
    ]
  },
  {
    path: '/fr/',
    component: ComponentCreator('/fr/', '0cd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
