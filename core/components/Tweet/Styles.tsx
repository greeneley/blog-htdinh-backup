import { css, Shadows, styled } from '@dinh/design-system';

export const TweetWrapper = styled('div', {
  color: 'var(--haidinhthanh-colors-typeface-primary)',
  borderRadius: 'var(--border-radius-2)',
  backgroundColor: 'var(--haidinhthanh-card-background-color)',
  padding: '1rem 1.5rem',
  marginBottom: '2rem',
  width: '100%',

  border: 'solid 1px var(--haidinhthanh-border-color)',
  boxShadow: Shadows[1],

  '@media (max-width: 700px)': {
    /**
     * Make it fullbleed!
     */
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    borderRadius: '0px',
  },
});

export const Avatar = styled('a', {
  display: 'flex',
  height: '46px',
  width: '46px',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const Name = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1rem',
  color: 'var(--haidinhthanh-colors-typeface-primary)',
  textDecoration: 'none',
});

export const ImageGrid = styled('div', {
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: '0.5rem',
  rowGrap: '0.5rem',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
});

export const SingleImageWrapper = styled('div', {
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
});

export const ActionIcons = styled('a', {
  display: 'flex',
  alignItems: 'center',
  marginRight: '1rem',
  color: 'var(--haidinhthanh-colors-typeface-tertiary)',
  textDecoration: 'none',

  svg: {
    marginRight: '0.25rem',
  },
});

export const singleImage = css({
  borderRadius: 'var(--border-radius-2)',
});
