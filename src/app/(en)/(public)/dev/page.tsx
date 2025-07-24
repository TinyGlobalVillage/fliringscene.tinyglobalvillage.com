'use client';
import { useEffect, useState } from 'react';
import { scaleMap, FontSizeKey } from '@/styles/scaleMap/scaleMap';

const KEY = 'scaleMap-dev';
type BP = FontSizeKey;
type Prop = 'faceWidth';

const PROP: Prop = 'faceWidth';

export default function Dev() {
  const [bp, setBp] = useState<BP>('6.5rem');

  const [val, setVal] = useState<number>(0);

  useEffect(() => {
    // read current value from localStorage or fallback to scaleMap
    const store = JSON.parse(localStorage.getItem(KEY) || '{}');
    const str = store?.[bp]?.[PROP] ?? scaleMap[bp][PROP];
    setVal(parseInt(str, 10));
  }, [bp]);

  const save = (n: number) => {
    const store = JSON.parse(localStorage.getItem(KEY) || '{}');
    store[bp] ??= {};
    store[bp][PROP] = `${n}px`;
    localStorage.setItem(KEY, JSON.stringify(store));
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Dev Slider – {PROP}</h2>

      <label>
        Breakpoint:&nbsp;
        <select value={bp} onChange={e => setBp(e.target.value as BP)}>
          {Object.keys(scaleMap).map(k => <option key={k}>{k}</option>)}
        </select>
      </label>

      <div style={{ margin: '16px 0' }}>
        <input
          type="range" min="50" max="400" value={val}
          onChange={e => {
            const n = Number(e.target.value);
            setVal(n);
            save(n);
          }}
        />
        <span style={{ marginLeft: 8 }}>{val}px</span>
      </div>
    </div>
  );
}
