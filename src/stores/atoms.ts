import type { ReactNode } from 'react';
import { atom } from 'jotai';

export interface ModalStateType {
  isOpen: boolean;
  content?: ReactNode;
}

export const modalStateAtom = atom<ModalStateType>({
  isOpen: false,
  content: null,
});
