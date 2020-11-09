import React, { Fragment, useMemo } from 'react';
import { DispatchActions } from 'store/actionCreators';
import PlainModal from 'components/common/modal/PlainModal';
import AppModal from 'components/common/modal/AppModal';
import { useShallowSelector } from 'lib/utils';

// basePopup.isOpen
// basePopup.type
// basePopup.key
// basePopup.dim
// basePopup.onClick
// basePopup.onCancel

/**
 *
 * @param {*} props
 */
function PopupContainer() {
  const { popups } = useShallowSelector(state => ({
    popups: state.app.popups,
  }));

  if (!popups.length) return null;
  return (
    <>
      {popups.map((item, index) => {
        // init props
        const { id } = item;
        const {
          isOpen = false,
          type = 'alert',
          width = 350,
          title = '',
          content = '',
          isTitleDefault = false,
          isContentDefault = false,
          button = '',
          hideButton = false,
          reverseButton = false,
          okText = '',
          okLink = '',
          cancelLink = '',
          key = '',
          align = [],
          dim = true,
          paddingNone = false,
          hideBackdrop = false,
          onClick = () => {},
          onCancel = () => {},
          onExited = () => {},
        } = item.config;
        return (
          <Fragment key={index}>
            <PlainModal
              isOpen={isOpen}
              onClick={() => DispatchActions.remove_popup({ id })}
              onExited={onExited}
              dim={dim}
              width={width}
              hideBackdrop={hideBackdrop}
            >
              <AppModal
                type={type}
                title={title}
                content={content}
                isTitleDefault={isTitleDefault}
                isContentDefault={isContentDefault}
                button={button}
                hideButton={hideButton}
                reverseButton={reverseButton}
                okText={okText || 'Ok'}
                okLink={okLink}
                cancelLink={cancelLink}
                align={align}
                paddingNone={paddingNone}
                onClick={() => {
                  DispatchActions.remove_popup({ id });
                  if (!!onClick) {
                    onClick();
                  }
                }}
                onCancel={() => {
                  DispatchActions.remove_popup({ id });
                  if (!!onCancel) {
                    onCancel();
                  }
                }}
              />
            </PlainModal>
          </Fragment>
        );
      })}
    </>
  );
}

export default PopupContainer;
