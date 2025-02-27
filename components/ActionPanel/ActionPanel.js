import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useAppState } from 'components/App/context';

import GENERAL_ACTIONS from 'data/GeneralAction.json';
import MAIN_COMMANDS from 'data/MainCommand.json';
import MACROS from 'data/MacroIcon.json';
import PET_ACTIONS from 'data/PetAction.json';
import BUDDY_ACTIONS from 'data/BuddyAction.json';
import COMPANY_ACTIONS from 'data/CompanyAction.json';

import ActionGroup from './ActionGroup';
import Tabs from './Tabs';

import styles from './ActionPanel.module.scss';

function ActionPanel({ actions, roleActions }) {
  const { showAllLvl } = useAppState();
  const [activeTab, setActiveTab] = useState('panel-actions');

  function handleTabClick(e) {
    const { target } = e.currentTarget.dataset;
    setActiveTab(target);
  }

  if (!showAllLvl){
    actions = actions.filter(action => !action.upgradable)
  }

  return (
    <div className={styles.actionsPanel}>
      <Tabs onTabClick={(e) => handleTabClick(e)} activeTab={activeTab} />

      { activeTab === 'panel-actions' && (
        <div
          className={styles.panel}
          aria-hidden={activeTab !== 'panel-actions'}
        >
          <ActionGroup actions={actions} title="Job Actions" />

          {(roleActions && roleActions.length) > 0 && (
            <ActionGroup actions={roleActions} title="Role Actions" />
          )}
        </div>
      )}

      { activeTab === 'panel-general' && (
        <div
          className={styles.panel}
          aria-hidden={activeTab !== 'panel-general'}
        >
          <ActionGroup actions={GENERAL_ACTIONS} title="General Actions" />
          <ActionGroup actions={BUDDY_ACTIONS} title="Companion Actions" />
          <ActionGroup actions={PET_ACTIONS} title="Pet Actions" limit={7} />
        </div>
      )}

      { activeTab === 'panel-menu' && (
        <div
          className={styles.panel}
          aria-hidden={activeTab !== 'panel-menu'}
        >
          <ActionGroup actions={MAIN_COMMANDS} title="Menu Commands" />
        </div>
      )}

      { activeTab === 'panel-company' && (
        <div
          className={styles.panel}
          aria-hidden={activeTab !== 'panel-company'}
        >
          <ActionGroup actions={COMPANY_ACTIONS} title="Company Actions" />
        </div>
      )}

      { activeTab === 'panel-macros' && (
        <div
          className={styles.panel}
          aria-hidden={activeTab !== 'panel-macros'}
        >
          <ActionGroup actions={MACROS} title="Macros" />
        </div>
      )}
    </div>
  );
}

ActionPanel.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  roleActions: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default ActionPanel;
