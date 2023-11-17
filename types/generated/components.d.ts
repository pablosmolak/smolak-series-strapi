import type { Schema, Attribute } from '@strapi/strapi';

export interface EeeeEeee extends Schema.Component {
  collectionName: 'components_eeee_eeees';
  info: {
    displayName: 'eeee';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'eeee.eeee': EeeeEeee;
    }
  }
}
