import { useState, useEffect, useRef } from 'react';

export default function TypewriterText({ text, speed = 40, pauseMs = 3000, startTyping = true }: { text: string; speed?: number; pauseMs?: number; startTyping?: boolean }) {
  const [displayed, setDisplayed] = useState('');
  const idx = useRef(0);
  const dir = useRef(1);

  useEffect(() => {
    idx.current = 0;
    dir.current = 1;
    setDisplayed('');
  }, [text]);

  useEffect(() => {
    if (!startTyping) return;

    const timer = setTimeout(() => {
      if (dir.current === 1) {
        if (idx.current < text.length) {
          setDisplayed(text.slice(0, idx.current + 1));
          idx.current++;
        } else {
          dir.current = -1;
        }
      } else {
        if (idx.current > 0) {
          setDisplayed(text.slice(0, idx.current - 1));
          idx.current--;
        } else {
          dir.current = 1;
        }
      }
    }, dir.current === 1 ? speed : speed / 2);

    return () => clearTimeout(timer);
  }, [displayed, text, speed, pauseMs, startTyping]);

  return (
    <span>
      {displayed}
      <span style={{ animation: 'blink 0.8s step-end infinite' }}>|</span>
      <style>{'@keyframes blink{50%{opacity:0}}'}</style>
    </span>
  );
}
