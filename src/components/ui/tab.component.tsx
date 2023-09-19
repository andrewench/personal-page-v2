import { Dispatch, FC, SetStateAction } from 'react'

import { styled } from 'styled-components'

type TabRole = 'stack' | 'qr'

interface ITab {
  label: string
  tabRole: TabRole
  currentTab: TabRole
  setTab: Dispatch<SetStateAction<TabRole>>
}

export const Tab: FC<ITab> = ({ label, tabRole, currentTab, setTab }) => {
  return (
    <StyledButton
      currentTab={currentTab}
      tabRole={tabRole}
      onClick={() => setTab(tabRole)}
    >
      {label}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ currentTab: TabRole; tabRole: TabRole }>`
  width: 50%;
  border: none;
  padding: 7px 0;

  &:first-child {
    border-radius: 6px 0 0 6px;
  }

  &:last-child {
    border-radius: 0 6px 6px 0;
  }

  color: ${({ currentTab, tabRole }) =>
    currentTab === tabRole ? '#fff' : '#a3a3a3'};
  background-color: ${({ currentTab, tabRole }) =>
    currentTab === tabRole ? '#3b3b3b' : '#242424'};

  &:hover {
    cursor: pointer;
    color: #aeaeae;
    background-color: #3b3b3b;
  }
`
