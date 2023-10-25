import {
  coffee,
  rocket,
  planet,
  laptop,
  ps,
  ai,
  ae,
  pr,
  blender,
  figma,
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
    icon: ps,
  },
  {
    name: 'Illustrator',
    icon: ai,
  },
  {
    name: 'After Effects',
    icon: ae,
  },
  {
    name: 'Premiere Pro',
    icon: pr,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Blender',
    icon: blender,
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
    date: 'April 2021 - June 2022',
    points: [
      'Develop innovative brand identity strategies for visual consistency and uniqueness.',
      'Use Adobe Creative Suite and Blender for compelling client-focused visuals.',
      'Collaborate with cross-functional teams for brand integration across platforms.',
      'Strive to exceed expectations, delivering memorable, impactful designs that leave an impression.',
    ],
  },
  {
    title: 'Versatile Graphic Designer',
    company_name: 'Aronic Solutions',
    icon: aronic,
    iconBg: '#E6DEDD',
    date: 'June 2022 - Present',
    points: [
      'Lead product design and branding initiatives, crafting compelling visual identities that align with client objectives.',
      'Utilize Figma for intuitive UI/UX design, ensuring seamless user experiences across platforms.',
      'Actively expanding web development skills to collaborate effectively with developers.',
      'Collaborate with teams, mentor juniors, and provide creative direction for project success and innovation.',
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

export { services, technologies, experiences, projects };
