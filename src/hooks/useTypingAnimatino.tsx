import { useState, useEffect } from 'react';

export enum TypePhase {
  Typing,
  Pausing,
  Deleting,
  Stopping,
}

const TYPING_INTERVAL = 200;
const PAUSE_MS = 1500;
const DELETING_INTERVAL = 100;

export const useTypingAnimation = (
  texts: string[]
): {
  typedText: string;
  selectedText: string;
  phase: number;
} => {
  const [phase, setPhase] = useState<TypePhase>(TypePhase.Typing);
  const [typedText, setTypedText] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedHeroTitle = texts[selectedIndex].slice(0, typedText.length + 1);
        if (nextTypedHeroTitle === typedText) {
          setPhase(TypePhase.Pausing);
          return;
        }
        const timeout = setTimeout(() => {
          setTypedText(nextTypedHeroTitle);
        }, TYPING_INTERVAL);
        return () => clearTimeout(timeout);
      }

      case TypePhase.Deleting: {
        if (!typedText) {
          setPhase(TypePhase.Typing);
          setSelectedIndex(selectedIndex + 1);
          return;
        }
        const remainingText = texts[selectedIndex].slice(0, typedText.length - 1);
        const timeout = setTimeout(() => {
          setTypedText(remainingText);
        }, DELETING_INTERVAL);
        return () => clearTimeout(timeout);
      }

      case TypePhase.Pausing:
      default: {
        if (selectedIndex === texts.length - 1) {
          setPhase(TypePhase.Stopping);
          return;
        }
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, PAUSE_MS);
        return () => clearTimeout(timeout);
      }
    }
  }, [texts, typedText, phase, selectedIndex]);

  return { typedText, selectedText: texts[selectedIndex], phase };
};
