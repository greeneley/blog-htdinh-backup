import { EM, Flex, Grid, styled, Text } from '@dinh/design-system';
import Logo from '@theme/components/Logo';

const FooterBlock = styled('footer', {
  background: 'var(--haidinhthanh-colors-body)',
  paddingTop: 'var(--space-8)',
  transition: '0.5s',
  width: '100%',

  hr: {
    height: '1px',
    width: '100%',
    background: 'var(--haidinhthanh-border-color)',
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
        <FooterContent alignItems="center" justifyContent="space-between">
          <Text
            as="p"
            css={{ margin: 0 }}
            size="1"
            variant="primary"
            weight="3"
          >
            © {new Date().getFullYear()} Dinh Thanh Hai ——{' '}
            <EM size="2">Viet Nam</EM>
          </Text>
          <Logo alt="Maxime Heckel's logo" size={120} />
        </FooterContent>
      </FooterWrapper>
    </Grid>
  </FooterBlock>
);

export { Footer };
