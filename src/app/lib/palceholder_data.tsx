import { TAbout, TProject } from './definitions';

export const HomeData = {
  hi: "HI!, I'm Jairo",
  roles: '',
  description:
    'The only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.',
  skills: ['Web Designer', 'Frontend Developer'],
  getInTouch: 'Get in touch',
  imageLg: '/avatars/avatarlg.png',
  imageSm: '/avatars/avatarsm.png',
  social: {
    github: 'https://github.com/OcrenSys?tab=repositories',
    medium: 'https://medium.com/@ocrensys',
    likedIn: 'https://www.linkedin.com/in/jairo-martinez-a14b94240/',
  },
};

export const AboutData: TAbout = {
  title: 'What I Do',
  description:
    'I possess extensive knowledge with javascript frameworks, and other cutting-edge technologies',
  imageLg: '/avatars/avatarlg.png',
  imageSm: '/avatars/avatarsm.png',
  skills: [
    {
      id: 1,
      icon: '/tech/angular.png',
      title: 'Angular V17+',
      description:
        'Mastering Angular, I architect and develop robust, scalable applications, leveraging its powerful features to deliver seamless, high-performance user experiences.',
    },

    {
      id: 2,
      icon: '/tech/react.png',
      title: 'React V18+',
      description:
        'In React, I harness declarative syntax and component reusability for efficient UI development, ensuring scalable, interactive, and seamless applications.',
    },
    {
      id: 3,
      icon: '/tech/next.png',
      title: 'NextJS V14+',
      description:
        'Leveraging Next.js, I achieve server-side rendering for optimal performance, SEO benefits, and streamlined development of dynamic, modern web applications.',
    },
    {
      id: 4,
      icon: '/tech/nest.png',
      title: 'NestJS',
      description:
        'With NestJS, I optimize backend development through TypeScript, modular architecture, and efficient dependency injection, ensuring scalable and maintainable server-side applications.',
    },
    {
      id: 5,
      icon: '/tech/ionic.png',
      title: 'Ionic Framework V6+',
      description:
        'In Ionic, I excel at crafting cross-platform mobile apps with a single codebase, offering seamless user experiences across diverse devices.',
    },
  ],
};

export const ProjectData: TProject = {
  title: 'Latest Projects',
  qualities: [
    {
      title: 'Developer Friendly',
      icon: '',
    },
    {
      title: 'Easy to Customize',
      icon: '',
    },
    {
      title: 'Developer Friendly',
      icon: 'Free Lifetime Update',
    },
  ],
  description:
    'My track record of success in delivering high-quality software solutions speaks for itself.',
  items: [
    {
      title: 'Ander Boutique App',
      description:
        'Manage all your IT and non-IT inventory with ease - anytime, anywhere.',
      image: '/projects/1.jpg',
    },
    {
      title: 'Ocrensys Portfolio',
      description:
        'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.',
      image: '/projects/2.jpg',
    },
    {
      title: 'Tatto Landing Page',
      description:
        'Tatoo landing page designed by York01. Connect with them on Dribbble; the global community for designers and creative professionals.',
      image: '/projects/3.jpg',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.',
      image: '/projects/4.jpg',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.',
      image: '/projects/5.jpg',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.',
      image: '/projects/6.jpg',
    },
  ],
};

export const ContactData = {};
