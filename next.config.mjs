import nextMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
  pwa: {
    dest: 'public',
    disable: false,
  },
  reactStrictMode: true,
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
