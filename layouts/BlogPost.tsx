import {
  Anchor,
  Box,
  css,
  Flex,
  Grid,
  Pill,
  Text,
} from '@maximeheckel/design-system';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import siteConfig from 'config/site';
import Layout from '@theme/layout';
import TableOfContent from '@theme/components/TableOfContent';
import Hero from '@theme/components/Hero';
import WebmentionCount from '@theme/components/Webmentions/WebmentionCount';
import { Post, ReadingTime } from 'types/post';

interface Props {
  children: React.ReactNode;
  frontMatter: Post & { readingTime: ReadingTime };
  ogImage: string;
}

const contentClass = css({
  padding: 'var(--space-5) 0px',
  gridColumn: '2',
  color: 'var(--maximeheckel-colors-typeface-secondary)',

  h3: {
    marginTop: '2em',
  },

  section: {
    marginTop: '5em',
  },
});

const BlogLayout = ({ children, frontMatter }: Props) => {
  const { date, updated, slug, title, readingTime, cover } = frontMatter;
  const path = `/posts/${slug}/`;
  const postUrl = `${siteConfig.url}${path}`;

  const headerProps = {
    title,
    offsetHeight: 80,
    showProgressBarOnMobile: true,
  };

  const [ids, setIds] = React.useState<Array<{ id: string; title: string }>>(
    []
  );

  React.useEffect(() => {
    setTimeout(() => {
      const titles = document.querySelectorAll('h2');
      const idArrays = Array.prototype.slice
        .call(titles)
        .map((title) => ({ id: title.id, title: title.innerText })) as Array<{
        id: string;
        title: string;
      }>;
      setIds(idArrays);
    }, 500);
  }, [slug]);

  return (
    <Layout footer={true} header={true} headerProps={headerProps}>
      {/*<Seo*/}
      {/*  title={title}*/}
      {/*  desc={subtitle}*/}
      {/*  image={ogImage}*/}
      {/*  path={path}*/}
      {/*  date={date}*/}
      {/*  updated={updated}*/}
      {/*/>*/}
      <article className="h-entry">
        <Grid columns="small" gapX={4}>
          <Hero>
            <Box
              css={{
                marginBottom: '24px',
                fontSize: 'var(--font-size-2)',
              }}
            >
              <Link href="/" passHref>
                <Anchor arrow="left" data-testid="home-link" discreet>
                  Home
                </Anchor>
              </Link>
            </Box>
            <Hero.Title
              className="p-name"
              data-testid={`project-title-${title}`}
            >
              {title}
            </Hero.Title>
            <Hero.Info>
              <Flex
                css={{
                  marginBottom: 'var(--space-3)',
                }}
                wrap="wrap"
              >
                <Text
                  as="p"
                  size="1"
                  variant="tertiary"
                  weight="3"
                  css={{ marginBottom: '0px' }}
                >
                  {format(new Date(Date.parse(date)), 'MMMM d, yyyy')} /{' '}
                  {readingTime.text} /
                </Text>
                <WebmentionCount target={postUrl} />
              </Flex>
              <Flex
                css={{
                  marginLeft: '-var(--space-2)',
                }}
              >
                <Pill variant="info">
                  Last Updated{' '}
                  {format(new Date(Date.parse(updated)), 'MMMM d, yyyy')}
                </Pill>
              </Flex>
            </Hero.Info>
            {cover ? <Hero.Img className="u-photo" src={cover} /> : null}
          </Hero>
          <TableOfContent ids={ids} />
          <Box className={contentClass()}>{children}</Box>
        </Grid>
      </article>
    </Layout>
  );
};

export default BlogLayout;
