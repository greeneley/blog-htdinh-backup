import { css, Icon, VisuallyHidden } from '@dinh/design-system';
import Link from 'next/link';
import { MAX_HEIGHT } from './constants';
import { Separator, Item, KBD } from './Styles';

const commandCenterStaticWrapper = css({
  backgroundColor: 'var(--haidinhthanh-colors-body)',
  maxHeight: `${MAX_HEIGHT}px`,
  overflowY: 'scroll',
});

const CommandCenterStatic = () => (
  <div className={commandCenterStaticWrapper()}>
    <Separator>Shortcuts</Separator>
    <Item data-nohover data-testid="shortcut" key="search-shortcut">
      <span>Command Center</span>
      <div>
        <KBD>ctrl (^)</KBD>
        <KBD>k</KBD>
      </div>
    </Item>
    <Item data-nohover data-testid="shortcut" key="theme-shortcut">
      <span>Switch Theme</span>
      <div>
        <KBD>ctrl (^)</KBD>
        <KBD>t</KBD>
      </div>
    </Item>
    <Separator>Navigation</Separator>
    <Item data-testid="navigation" key="home-navigation">
      <Link href="/" legacyBehavior>
        <a>
          <Icon.Arrow size={4} />
          <span style={{ marginLeft: '20px' }}>Home</span>
        </a>
      </Link>
    </Item>
    <Item data-testid="navigation" key="design-navigation">
      <Link href="/design/" legacyBehavior>
        <a>
          <Icon.Arrow size={4} />
          <span style={{ marginLeft: '20px' }}>Design System</span>
        </a>
      </Link>
    </Item>
    <Separator>Links</Separator>
    <Item data-testid="link" key="github-link">
      <a
        href="https://github.com/greeneley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Github />
        <span style={{ marginLeft: '15px' }}>Github</span>
        <VisuallyHidden as="p">
          Link redirects to my Github page https://github.com/greeneley.
        </VisuallyHidden>
      </a>
    </Item>
    <Item data-testid="link" key="email-link">
      <a
        href="mailto:haithanhdinh.vn@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Contact />
        <span style={{ marginLeft: '15px' }}>Contact</span>
        <VisuallyHidden as="p">
          Link opens your default mail client with my email address
          haithanhdinh.vn@gmail.com prefilled.
        </VisuallyHidden>
      </a>
    </Item>
  </div>
);

export { CommandCenterStatic };
