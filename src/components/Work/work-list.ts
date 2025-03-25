import SunSeshAZ from '../../assets/images/sunsesh-az.png';
import ReactRPG from '../../assets/images/react-rpg.png';
import AmpSkate from '../../assets/images/amp-skate.png';
import SAVGThread from '../../assets/images/savg-thread.png';
import Medium from '../../assets/images/medium.png';
import Hackster from '../../assets/images/hackster.png';

interface WorkItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

export const workList: Array<WorkItem> = [
  {
    title: 'SunSesh AZ',
    description: `
      SunSesh AZ is a weekly longboard meetup that I founded in Tempe, AZ. Partnered with
      Loaded and Orangatang, our goal is to grow the local longboard community "one skater
      at a time". We provide information and resources to help new skaters learn
      dancing, freestyle or even downhill!
    `,
    link: 'https://www.instagram.com/sunsesh_az',
    image: SunSeshAZ,
  },
  {
    title: 'React RPG',
    description: `
      React RPG is an open-source game that I created from scratch with React and Redux.
      A fork was created by a group in New Zealand that implements a light version of
      Dungeons and Dragons: 5th Edition. Recently that fork has been merged, giving way
      to React RPG: 2nd Edition!
    `,
    link: 'https://react-rpg.com',
    image: ReactRPG,
  },
  {
    title: 'Amp Skate',
    description: `
      Amp Skate was a web app to foster community, provide information and teach people
      how to learn longboard tricks. Working with a team from Los Angeles and Italy, I
      led the development of the web app, API and CMS that helped amp up skaters in cities
      all over the world!
    `,
    link: 'https://www.instagram.com/amp__skate',
    image: AmpSkate,
  },
  {
    title: 'SAVG Thread',
    description: `
      SAVG Thread was a clothing brand that I founded in Tempe, AZ. I experimented with
      embroidery, bleaching and cut 'n sew. By working with a local manufacturer, I
      produced a run of hand-made kimonos. The kimono design was even featured at the
      runway of PHX Fashion Week!
    `,
    link: 'https://www.instagram.com/savgthread',
    image: SAVGThread,
  },
  {
    title: 'Medium Articles',
    description: `Here you can read some articles I've written mostly about my experiences writing React RPG.`,
    link: 'https://medium.com/@andrewsteinheiser',
    image: Medium,
  },
  {
    title: 'Hackster.io Articles',
    description: `Here you can read some old articles I wrote as an Intern at Octoblu. I was tasked with creating use cases for the IoT platform and documenting the process to inspire other developers.`,
    link: 'https://www.hackster.io/andrewstein',
    image: Hackster,
  },
];
