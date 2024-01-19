import React, { useEffect, useState } from 'react';
import styles from './Snackbar.module.css'; // Create a CSS module for styling

interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ open, message, onClose }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`${styles.snackbar} ${isOpen ? styles.open : ''}`}>
      <span>{message}</span>
      <button onClick={handleClose}>&times;</button>
    </div>
  );
};

export default Snackbar;