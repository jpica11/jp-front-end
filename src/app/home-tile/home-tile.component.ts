import {Component} from '@angular/core';
import {Skill} from '../../models/skill';

@Component({
  selector: 'jp-home-tile',
  templateUrl: './home-tile.component.html',
  styleUrls: ['./home-tile.component.scss']
})
export class HomeTileComponent {

  TILES: Array<Skill> = [
    {
      skillTitle: 'Cloud Technologies',
      iconPath: '../../assets/cloud-technologies.jpg',
      skillText: ``,
      iconAlt: `Cloud technology image`
    },
    {
      skillTitle: 'Development',
      iconPath: '../../assets/development.jpg',
      skillText: `I develop and design backend microservices to apply business logic and interact with data. `
        + `I use java 8+ with a variety of spring frameworks such as spring boot, spring jpa, and spring cloud.`,
      iconAlt: `Icon of a server`
    },
    {
      skillTitle: 'Architecture and Design',
      iconPath: '../../assets/design.jpg',
      skillText: `3+ years of AWS experience using services such lambda, ec2, s3, dynamo, and more!`,
      iconAlt: `Icon of a cloud`
    },
    {
      skillTitle: 'Leadership',
      iconPath: '../../assets/leadership.jpg',
      skillText: `I wrote and maintain code for user facing websites, with the goal to provide the best `
        + `interface and experience as possible. I achieved this by applying the basics of html, css, and javascript to `
        + `an author driven AEM site, and integrating custom angular components.`,
      iconAlt: `Icon of a puzzle piece`
    },
  ];

}
