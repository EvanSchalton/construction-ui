import { Component } from '@angular/core';

interface IProfile {
  picture_path: string;
  name: string;
  title: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  profiles: IProfile[] = [
    {
      picture_path: "../../../assets/images/male-profile-image-placeholder.png",
      name: "Nicholas Mongeau",
      title: "Owner"
    },
    {
      picture_path: "../../../assets/images/male-profile-image-placeholder.png",
      name: "Nicholas Mongeau",
      title: "Project Lead"
    },
    {
      picture_path: "../../../assets/images/male-profile-image-placeholder.png",
      name: "Nicholas Mongeau",
      title: "Project Lead"
    },
  ]
}
