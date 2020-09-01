import React from 'react';
import Button from 'topo/Atom/Button';
import { useToasts } from 'topo/utils';

function randomWords() {
  const words = ['foo', 'bar', 'baz'];
  const str = [];
  for (let i = 0; i < Math.floor(Math.random() * 10) + 3; i += 1) {
    str.push(words[Math.floor(Math.random() * (words.length + 1))]);
  }
  return str.join(' ');
}

export default function Demo() {
  const { addToast } = useToasts();
  const appearances = ['info', 'warning', 'error', 'success'];
  return (
    <Button onClick={() => {
      addToast(randomWords(), { appearance: appearances[Math.floor(Math.random() * (appearances.length + 1))] });
    }}
    >
      Toast
    </Button>
  );
}
