import React, { useMemo } from 'react';
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
  const { popup } = useShallowSelector(state => ({
    popup: state.base.popup,
  }));

  // init props
  let {
    isOpen = false,
    type = 'alert',
    width = 534,
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
  } = popup;

  return (
    <>
      <PlainModal
        isOpen={isOpen}
        onClick={() => DispatchActions.base_popup({ isOpen: false })}
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
            DispatchActions.base_popup({ isOpen: false });
            if (!!onClick) {
              onClick();
            }
          }}
          onCancel={() => {
            DispatchActions.base_popup({ isOpen: false });
            if (!!onCancel) {
              onCancel();
            }
          }}
        />
      </PlainModal>
    </>
  );
}

export default PopupContainer;
