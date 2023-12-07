import {
  PageHeaderMenuItem,
  PageHeaderMenuItemObject,
} from '@bit-nimble/design.page-header-menu-item';
import { HeaderRow } from './header-row';
import { HeaderSection } from './header-section';

export type ActionRowProps = {
  actionItems?: PageHeaderMenuItemObject[];
  logoSlot?: React.ReactNode;
  titleSlot?: React.ReactNode;
  openSlot?: React.ReactNode;
  actionSlot?: React.ReactNode;
  noBorder?: boolean;
};

export function ActionRow({
  logoSlot,
  titleSlot,
  openSlot,
  actionItems = [],
  noBorder = false,
}: ActionRowProps) {
  return (
    <HeaderRow
      sx={{
        justifyContent: 'space-between',
        gap: '16px',
        borderBottom: noBorder ? 'none' : '1px solid',
        borderColor: 'divider',
      }}
    >
      <HeaderSection>{logoSlot}</HeaderSection>
      {titleSlot ? <HeaderSection>{titleSlot}</HeaderSection> : null}
      <HeaderSection
        sx={{
          flex: 1,
          justifyContent: 'start',
        }}
      >
        {openSlot}
      </HeaderSection>
      <HeaderSection
        sx={{
          display: 'flex',
          gap: '24px',
          displayDirection: 'column',
        }}
      >
        {actionItems.map((item) => (
          <PageHeaderMenuItem key={item.id} item={item} />
        ))}
      </HeaderSection>
    </HeaderRow>
  );
}
