import SunSeshAZ from '../../assets/images/sunsesh-az.png';
import ReactRPG from '../../assets/images/react-rpg.png';
import AmpSkate from '../../assets/images/amp-skate.png';
import SAVGThread from '../../assets/images/savg-thread.png';
import OreRushOnline from '../../assets/images/ore-rush-online.png';
import TSOnlineGame from '../../assets/images/ts-online-game.png';

interface WorkItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

export const workList: Array<WorkItem> = [
  {
    title: 'ORO - Ore Rush Online',
    description: `
      Ore Rush Online (ORO) is a mining MMO made entirely with TypeScript,
      using the TS Online Game Template. Follow my progress as I build my first
      online game! I'll be updating the developer log as I develop new features.
      I look forward to experimenting and hearing your feedback!
    `,
    link: 'https://ore-rush.online',
    image: OreRushOnline,
  },
  {
    title: 'TS Online Game Template',
    description: `
      A template for creating real-time, online games using TypeScript! Quickly create
      mmo-style games using React + Phaser for rendering, Colyseus for websockets and
      Electron for native builds! This monorepo contains everything you need to roll out
      updates to your own online game as you build it!
    `,
    link: 'https://ts-game.online',
    image: TSOnlineGame,
  },
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
      to React RPG: 2e!
    `,
    link: 'https://react-rpg.com',
    image: ReactRPG,
  },
  {
    title: 'Amp Skate',
    description: `
      Our goal with Amp Skate was to foster community, provide information and teach people
      how to learn longboard tricks. Working with a team from Los Angeles and Italy, I
      led the development of the web app, API and CMS used by skaters in cities around
      the world!
    `,
    link: 'https://www.instagram.com/amp__skate',
    image: AmpSkate,
  },
  {
    title: 'SAVG Thread',
    description: `
      SAVG Thread was a clothing brand that I founded in Tempe, AZ. I experimented with
      embroidery, bleaching and cut 'n sew. By working with a local manufacturer, I
      produced a run of hand-made kimonos, which got featured at the runway of PHX
      Fashion Week!
    `,
    link: 'https://www.instagram.com/savgthread',
    image: SAVGThread,
  },
];
