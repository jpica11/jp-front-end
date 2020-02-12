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
      skillTitle: 'Cloud Technologies',
      iconPath: '../../assets/cloudicon.svg',
      skillText: `3+ years of AWS experience using services such lambda, ec2, s3, dynamo, and more!`,
      iconAlt: `Icon of a cloud`
    },
    {
      skillTitle: 'DevOps',
      iconPath: '../../assets/toolsicon.svg',
      skillText: ``,
      iconAlt: `Tools icon`
    },
    {
      skillTitle: 'Backend Development',
      iconPath: '../../assets/backendicon.svg',
      skillText: `I develop and design backend microservices to apply business logic and interact with data. `
        + `I use java 8+ with a variety of spring frameworks such as spring boot, spring jpa, and spring cloud.`,
      iconAlt: `Icon of a server`
    },
    {
      skillTitle: 'Frontend Development',
      iconPath: '../../assets/puzzleicon.svg',
      skillText: `I wrote and maintain code for user facing websites, with the goal to provide the best `
        + `interface and experience as possible. I achieved this by applying the basics of html, css, and javascript to `
        + `an author driven AEM site, and integrating custom angular components.`,
      iconAlt: `Icon of a puzzle piece`
    },
    {
      skillTitle: 'Testing',
      iconPath: '../../assets/testing-icon.svg',
      skillText: `I strive to maintain a consistently high code coverage by applying the test pyramid methodology.`
        + `This consists of unit testing both frontend and backend code, applying service integration tests, and accounting for UI tests`
        + `whenever necessary. I incorporated a number of testing frameworks, including junit/mockito, jest, localstack, and cyprus.`,
      iconAlt: `Icon of house`
    },
    {
      skillTitle: 'Methodologies and Leadership',
      iconPath: '../../assets/leadership-icon.svg',
      skillText: `Tech lead on an agile team, leading 5+ developers, responsible for delivering and deploying quality code.`
        + `Accountable for writing and owning tech debt stories. I lead code reviews and pair programming exercises.`,
      iconAlt: `Icon of three people`
    },
  ];

}
