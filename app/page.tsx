'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="pos-shell">
      {!loaded && <div className="pos-loading">Loading 1911 Café POS…</div>}
      <iframe
        title="1911 Café POS"
        src="/pos/index.html"
        className="pos-frame"
        onLoad={() => setLoaded(true)}
      />
    </main>
  );
}
