import {
  styled,
  Anchor,
  Box,
  Grid,
  Text,
  EM,
  Flex,
} from '@maximeheckel/design-system';
import Logo from '@theme/components/Logo';
import Link from 'next/link';

const FooterBlock = styled('footer', {
  background: 'var(--maximeheckel-colors-body)',
  paddingTop: 'var(--space-8)',
  transition: '0.5s',
  width: '100%',

  hr: {
    height: '1px',
    width: '100%',
    background: 'var(--maximeheckel-border-color)',
    border: 'none',
  },
});

const FooterWrapper = styled(Flex, {
  paddingTop: 'var(--space-4)',
  paddingBottom: 'var(--space-4)',
  width: '100%',
  margin: '0px auto',
  gridColumn: '2',
});

const FooterContent = styled(Flex, {
  height: 'var(--space-8)',
  width: '100%',
});

// TODO: Make more modular
const Footer = () => (
  <FooterBlock data-testid="footer">
    <hr />
    <Grid columns="medium" gapX={4}>
      <FooterWrapper direction="column" justifyContent="space-evenly" gap={6}>
        <Grid columns={3} css={{ width: '100%' }}>
          <Box>
            <Text size={1}>
              <Grid>
                <Link href="/" passHref>
                  <Anchor discreet>Home</Anchor>
                </Link>
              </Grid>
            </Text>
          </Box>
          <Box>
            <Text size={1}>
              <Grid>
                <Anchor
                  discreet
                  href="https://github.com/MaximeHeckel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Anchor>
              </Grid>
            </Text>
          </Box>
          <Box>
            <Text size={1}>
              <Grid>
                <Anchor
                  discreet
                  href="https://maximeheckel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </Anchor>
              </Grid>
            </Text>
          </Box>
        </Grid>
        <FooterContent alignItems="center" justifyContent="space-between">
          <Text
            as="p"
            css={{ margin: 0 }}
            size="1"
            variant="primary"
            weight="3"
          >
            © {new Date().getFullYear()} Dinh Thanh Hai (Đinh Thanh Hải) ——{' '}
            <EM size="2">Vietnam</EM>
          </Text>
          <Logo alt="Dinh's logo" size={48} />
        </FooterContent>
      </FooterWrapper>
    </Grid>
  </FooterBlock>
);

export { Footer };
