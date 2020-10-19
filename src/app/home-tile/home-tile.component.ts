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
      technology: [],
      iconAlt: `Cloud technology image`
    },
    {
      skillTitle: 'Development',
      iconPath: '../../assets/development.jpg',
      technology: [],
      iconAlt: `Icon of a server`
    },
    {
      skillTitle: 'Architecture and Design',
      iconPath: '../../assets/design.jpg',
      technology: [],
      iconAlt: `Icon of a cloud`
    },
    {
      skillTitle: 'Leadership',
      iconPath: '../../assets/leadership.jpg',
      technology: [],
      iconAlt: `Icon of a puzzle piece`
    },
  ];

}
