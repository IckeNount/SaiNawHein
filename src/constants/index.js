import {
  coffee,
  rocket,
  planet,
  laptop,
  psC,
  aeC,
  blenderC,
  aiC,
  prC,
  figmaC,
  noize,
  aerolens,
  waltz,
  aronic,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Graphic Designer',
    icon: laptop,
  },
  {
    title: 'Animator',
    icon: coffee,
  },
  {
    title: 'UI/UX Designer',
    icon: planet,
  },
  {
    title: '3D Artist',
    icon: rocket,
  },
];

const technologies = [
  {
    name: 'Photoshop',
    icon: psC,
  },

  {
    name: 'Illustrator',
    icon: aiC,
  },

  {
    name: 'After Effects',
    icon: aeC,
  },

  {
    name: 'Premiere Pro',
    icon: prC,
  },

  {
    name: 'Figma',
    icon: figmaC,
  },

  {
    name: 'Blender',
    icon: blenderC,
  },
];

const experiences = [
  {
    title: 'Print Designer',
    company_name: 'Waltz Print House',
    icon: waltz,
    iconBg: '#E6DEDD',
    date: 'March 2020 - April 2021',
    points: [
      'Conceptualized and designed print and digital visuals, including packaging dielines.',
      'Ensured CMYK accuracy in packaging, aligning designs with brand guidelines.',
      'Managed plate orders and coordinated print processes within the workplace.',
      'Collaborated with colleagues and clients to achieve project objectives.',
    ],
  },
  {
    title: 'Graphic Designer',
    company_name: 'Aronic Solutions',
    icon: aronic,
    iconBg: '#E6DEDD',
    date: 'April 2021 - Oct 2023',
    points: [
      'Develop innovative strategies for consistent and unique brand identities.',
      'Utilize Adobe Creative Suite, Blender, and Figma for client-focused visuals and intuitive UI/UX design.',
      'Collaborate with cross-functional teams to integrate brands effectively across platforms.',
      'Lead product design and branding initiatives, expand web development skills, mentor juniors, and provide creative direction for project success and innovation.',
    ],
  },
];

const projects = [
  {
    name: 'NOIZE',
    description:
      'An e-commerce platform that prioritizes user-friendly design, allowing users to easily shop artist-designed apparel, customize their own creations, and sell their designs.',
    tags: [
      {
        name: 'Figma',
        color: 'green-text-gradient',
      },
      {
        name: 'Photoshop',
        color: 'blue-text-gradient',
      },
      {
        name: 'Illustrator',
        color: 'pink-text-gradient',
      },
    ],
    image: noize,
    source_code_link:
      'https://www.figma.com/file/F8Rdb63ZpumtHuVY6TSdRy/NOIZE?type=design&mode=design&t=cV6vEgeuU9uywxmM-1',
  },
  {
    name: 'Aerolens',
    description:
      'A photography-sharing platform, where users can navigate location-based image galleries, upload and monetize their professionally captured photographs,',
    tags: [
      {
        name: 'Figma',
        color: 'green-text-gradient',
      },
      {
        name: 'Photoshop',
        color: 'blue-text-gradient',
      },
    ],
    image: aerolens,
    source_code_link:
      'https://www.figma.com/file/t6d6Bw1H6iH3QoOxMZDUnX/AeroLens?type=design&mode=design&t=cV6vEgeuU9uywxmM-1',
  },
];

export { services, experiences, technologies, projects };
