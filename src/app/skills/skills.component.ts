import {Component} from '@angular/core';
import {Skill} from '../../models/skill';

@Component({
  selector: 'jp-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  SKILLS: Array<Skill> = [
    {
      skillTitle: 'AWS',
      iconPath: '../../assets/cloudicon.svg',
      technology: ['EC2', 'Dynamo DB', 'S3', 'Lambda'],
      iconAlt: `Icon of a cloud`
    },
    {
      skillTitle: 'DevOps',
      iconPath: '../../assets/toolsicon.svg',
      technology: ['Jenkins', 'Terraform', 'Gitlab CI', 'Docker'],
      iconAlt: `Tools icon`
    },
    {
      skillTitle: 'Service and Data Development',
      iconPath: '../../assets/backendicon.svg',
      technology: ['Java', 'Spring', 'SQL', 'NoSQL', 'Node.js'],
      iconAlt: `Icon of a server`
    },
    {
      skillTitle: 'Frontend Development',
      iconPath: '../../assets/puzzleicon.svg',
      technology: ['Angular 8+', 'Javascript', 'Typescript', 'AEM', 'CSS'],
      iconAlt: `Icon of a puzzle piece`
    },
    {
      skillTitle: 'Testing',
      iconPath: '../../assets/testing-icon.svg',
      technology: ['JUnit/Mockito', 'Jest/Jasmine', 'Cyprus', 'Localstack'],
      iconAlt: `Icon of house`
    },
    {
      skillTitle: 'Methodologies and Leadership',
      iconPath: '../../assets/leadership-icon.svg',
      technology: ['Tech Lead', 'Agile', 'Tech Debt Owner'],
      iconAlt: `Icon of three people`
    },
  ];

}
