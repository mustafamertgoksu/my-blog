// interface Datas
interface Datas {
  siteTitle: string;
  siteDescription: string;
  info: string;
  aboutParagraph: string;
}

export const datas: Datas = {
  siteTitle: 'Mustafa Mert Goksu',
  siteDescription:
    'Mustafa Mert Göksu is a frontend developer based in Ankara, Turkey',
  info: 'Student, Developer',
  aboutParagraph:
    "I'm a student and frontend developer in Turkey. I love making software. I like playing chess and solving cube. I'm currently studying to get a good high school ",
};

export const TechsIcons: any[] = [
  {
    name: 'HTML',
    image: '/images/html5.svg',
    color: '#E34F26',
    dark: false,
  },
  {
    name: 'CSS',
    image: '/images/css3.svg',
    color: '#1572B6',
    dark: false,
  },
  {
    name: 'JavaScript',
    image: '/images/javascript.svg',
    color: '#F7DF1E',
    dark: false,
  },
  {
    name: 'TypeScript',
    image: '/images/typescript.svg',
    color: '#3178C6',
    dark: false,
  },
  {
    name: 'React',
    image: '/images/react.svg',
    color: '#61DAFB',
    dark: false,
  },
  {
    name: 'Next.js',
    dark: true,
  },
  {
    name: 'Gatsby',
    image: '/images/gatsby.svg',
    color: '#663399',
    dark: false,
  },
  {
    name: 'Tailwindcss',
    image: '/images/tailwindcss.svg',
    color: '#06B6D4',
    dark: false,
  },
  {
    name: 'Styled Components',
    image: '/images/styledcomponents.svg',
    color: '#DB7093',
    dark: false,
  },
  {
    name: 'Redux',
    image: '/images/redux.svg',
    color: '#764ABC',
    dark: false,
  },
  {
    name: 'React Query',
    image: '/images/reactquery.svg',
    color: '#FF4154',
    dark: false,
  },
  {
    name: 'Node.js',
    image: '/images/nodedotjs.svg',
    color: '#339933',
    dark: false,
  },
  {
    name: 'Nest.js',
    image: '/images/nestjs.svg',
    color: '#E0234E',
    dark: false,
  },
  {
    name: 'Jest',
    image: '/images/jest.svg',
    color: '#C21325',
    dark: false,
  },
  {
    name: 'GraphQL',
    image: '/images/graphql.svg',
    color: '#E10098',
    dark: false,
  },
  {
    name: 'Passport',
    image: '/images/passport.svg',
    color: '#34E27A',
    dark: false,
  },
  {
    name: 'PostgreSQL',
    image: '/images/postgresql.svg',
    color: '#4169E1',
    dark: false,
  },
  {
    name: 'Docker',
    image: '/images/docker.svg',
    color: '#2496ED',
    dark: false,
  },
  {
    name: 'Git',
    image: '/images/git.svg',
    color: '#F05032',
    dark: false,
  },
  {
    name: 'Yarn',
    image: '/images/yarn.svg',
    color: '#2C8EBB',
    dark: false,
  },
  {
    name: 'NX  CLI',
    image: '/images/nx.svg',
    color: '#143055',
    dark: false,
  },
];

export const SocialLinks: object[] = [
  {
    github: 'https://github.com/mustafamertgoksu/',
  },
  {
    medium: 'https://medium.com/@mustafamertgoksu',
  },
  {
    spotify: 'https://open.spotify.com/user/31vqhfol3es4uawhpzhqgi2cz4nq',
  },
  {
    chess: 'https://chess.com/member/mustafamertgokssu',
  },
];

export const githubRepositoriesURL: string =
  'https://api.github.com/users/mustafamertgoksu/repos';

interface Discussion {
  repo: string;
  id: string;
  category: string;
  categoryId: string;
  mapping: string;
  reactionsEnabled: string;
  emitMetadata: string;
  theme: string;
}

export const githubDiscussion: Discussion = {
  repo: 'mustafamertgoksu/my-blog',
  id: 'R_kgDOHzAtew',
  category: 'General',
  categoryId: 'DIC_kwDOHzAte84CQuhn',
  mapping: 'pathname',
  reactionsEnabled: '0',
  emitMetadata: '0',
  theme: 'dark',
};

type Projects = any;

export const topProjects: Projects = [
  {
    name: 'My Website',
    description: 'My personal website',
    html_url: 'https://github.com/mustafamertgoksu/my-website',
    language: 'TypeScript',
    stargazers_count: '1',
    image: '/images/typescript.svg',
  },
  {
    name: 'Quiz App',
    description: 'Quiz App with React and TypeScript',
    html_url: 'https://github.com/mustafamertgoksu/Quiz-App',
    language: 'TypeScript',
    stargazers_count: '5',
    image: '/images/typescript.svg',
  },
  {
    name: 'Countries App',
    description: 'Frontend Mentor countries app solution with Next.js',
    language: 'TypeScript',
    stargazers_count: '3',
    html_url: 'https://github.com/mustafamertgoksu/countries-app',
    image: '/images/typescript.svg',
  },
  {
    name: 'Chatlify',
    description:
      'Chatlify is a open source chat app built with Next.js and Socket.io',
    language: 'TypeScript',
    stargazers_count: '3',
    html_url: 'https://github.com/mustafamertgoksu/chatlify',
    image: '/images/typescript.svg',
  },
  {
    name: 'Typing Test App',
    description: ' Typing Test App with ReactJS ',
    language: 'JavaScript',
    stargazers_count: '2',
    html_url: 'https://github.com/mustafamertgoksu/typing-test-app',
    image: '/images/javascript.svg',
  },
];

const NextIcon = '/nextdotjs.svg';
const NextLightIcon = '/nextdotjslight.svg';