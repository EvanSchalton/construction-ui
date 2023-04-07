import { Component } from '@angular/core';

interface ISliderImage {
  image: string;
  thumbImage: string;
  alt: string;
  title: string;
}

interface IProject {
  title: string;
  description: string;
  pictures: ISliderImage[]
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  infinite: boolean = true;
  autoSlide: boolean = false;

  projects: IProject[] = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ligula sem. Nulla neque magna, pellentesque at fermentum quis, maximus et eros. Integer fermentum eget dui nec maximus. Cras ultricies, sem in faucibus hendrerit, nibh odio venenatis sem, sed vestibulum quam nisl eu nisi. Vivamus commodo facilisis porta. Proin egestas, eros sit amet pulvinar iaculis, mauris lectus euismod lacus, suscipit suscipit leo velit et erat. Morbi porta vel nulla eu finibus. Duis vel turpis fermentum, hendrerit libero vel, varius lectus. Mauris vel metus massa. Nullam et molestie nisi. Donec nec tincidunt lectus.",
      pictures: [
        {
          image: 'assets/images/family room - 2.jpeg',
          thumbImage: 'assets/images/family room - 2.jpeg',
          alt: 'alt of image',
          title: 'picture 1'
        },
        {
          image: '../../assets/images/family room - 2.jpeg',
          thumbImage: '../../assets/images/family room - 2.jpeg',
          alt: 'alt of image',
          title: 'picture 2'
        }
      ]
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ligula sem. Nulla neque magna, pellentesque at fermentum quis, maximus et eros. Integer fermentum eget dui nec maximus. Cras ultricies, sem in faucibus hendrerit, nibh odio venenatis sem, sed vestibulum quam nisl eu nisi. Vivamus commodo facilisis porta. Proin egestas, eros sit amet pulvinar iaculis, mauris lectus euismod lacus, suscipit suscipit leo velit et erat. Morbi porta vel nulla eu finibus. Duis vel turpis fermentum, hendrerit libero vel, varius lectus. Mauris vel metus massa. Nullam et molestie nisi. Donec nec tincidunt lectus.",
      pictures: [
        {
          image: 'assets/images/family room - 2.jpeg',
          thumbImage: 'assets/images/family room - 2.jpeg',
          alt: 'alt of image',
          title: 'picture 1'
        },
        {
          image: '../../assets/images/family room - 2.jpeg',
          thumbImage: '../../assets/images/family room - 2.jpeg',
          alt: 'alt of image',
          title: 'picture 2'
        }
      ]
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ligula sem. Nulla neque magna, pellentesque at fermentum quis, maximus et eros. Integer fermentum eget dui nec maximus. Cras ultricies, sem in faucibus hendrerit, nibh odio venenatis sem, sed vestibulum quam nisl eu nisi. Vivamus commodo facilisis porta. Proin egestas, eros sit amet pulvinar iaculis, mauris lectus euismod lacus, suscipit suscipit leo velit et erat. Morbi porta vel nulla eu finibus. Duis vel turpis fermentum, hendrerit libero vel, varius lectus. Mauris vel metus massa. Nullam et molestie nisi. Donec nec tincidunt lectus.",
      pictures: [
        {
          image: 'assets/images/family room - 2.jpeg',
          thumbImage: 'assets/images/family room - 2.jpeg',
          alt: 'alt of image',
          title: 'picture 1'
        },
        {
          image: '../../assets/images/family room - 2.jpeg',
          thumbImage: '../../assets/images/family room - 2.jpeg',
          alt: 'alt of image',
          title: 'picture 2'
        }
      ]
    },
  ]


}
