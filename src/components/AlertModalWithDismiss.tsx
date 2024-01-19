import React from 'react';
import ReactModal from 'react-modal';

const AlertModalWithDismiss = ({ onRequestClose, contentLabel, children }: {onRequestClose: any, contentLabel: any, children: any}) => {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          textAlign: 'center',
        },
      }}
    >
      {children}
      <button onClick={onRequestClose} style={{ marginTop: '20px' }}>
        Dismiss
      </button>
    </ReactModal>
  );
};

export default AlertModalWithDismiss;