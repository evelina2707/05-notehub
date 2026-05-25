import css from './Modal.module.css';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import type { MouseEvent } from 'react';
import { useEffect } from 'react';

interface ModalProps{
  children: ReactNode;
  onClose: () => void;
}


export default function Modal({ children, onClose }: ModalProps) {

useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
  <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick }>
    <div className={css.modal}>
    {children}
    </div>
    </div>,
    document.body
  )
}