import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectMysolutionTest extends Schema.Component {
  collectionName: 'components_project_mysolution_tests';
  info: {
    displayName: 'partenaires logo';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
  };
}

export interface ProjectPartner extends Schema.Component {
  collectionName: 'components_project_partners';
  info: {
    displayName: 'partner';
    icon: 'user';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    cover: Attribute.Media;
    title: Attribute.String;
  };
}

export interface ProjectProbleme extends Schema.Component {
  collectionName: 'components_project_problemes';
  info: {
    displayName: 'Probleme';
    icon: 'question';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Text;
    images: Attribute.Media;
    description2: Attribute.Text;
  };
}

export interface ProjectProjectComponent extends Schema.Component {
  collectionName: 'components_project_project_components';
  info: {
    displayName: 'temoignage';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    country: Attribute.String;
    photo_person: Attribute.Media;
    testimony: Attribute.Text;
  };
}

export interface ProjectSolution extends Schema.Component {
  collectionName: 'components_project_solutions';
  info: {
    displayName: 'Solution';
    icon: 'check';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    solutionImage: Attribute.Media;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project.mysolution-test': ProjectMysolutionTest;
      'project.partner': ProjectPartner;
      'project.probleme': ProjectProbleme;
      'project.project-component': ProjectProjectComponent;
      'project.solution': ProjectSolution;
    }
  }
}
