import { useReferralCookie } from './hooks/useReferralCookie';

import './App.css';

export function App() {
  const host = typeof window !== 'undefined' ? window.location.host : '';
  const { referralIdFromQuery, referralIdInCookie } = useReferralCookie(
    'referral_id',
    { syncFromQuery: false },
  );
  const rawCookies =
    typeof document !== 'undefined' ? document.cookie || '—' : '—';

  return (
    <main className="page">
      <h1>auth.agottani.dev — ler referral</h1>
      <p className="muted">
        Origem atual: <code>{host}</code>
      </p>
      <p className="muted small">
        Este deploy só <strong>lê</strong> o cookie definido pelo app (mesmo nome e{' '}
        <code>Domain=.agottani.dev</code>).
      </p>

      <section className="card">
        <h2>Cookie compartilhado</h2>
        <dl className="grid">
          <dt>
            referral_id (<code>document.cookie</code>)
          </dt>
          <dd>
            <code>{referralIdInCookie ?? '—'}</code>
          </dd>
          <dt>referral_id na query (opcional)</dt>
          <dd>
            <code>{referralIdFromQuery ?? '—'}</code>{' '}
            <span className="muted tiny">
              não grava aqui (<code>syncFromQuery: false</code>)
            </span>
          </dd>
          <dt>Toda a string recebida</dt>
          <dd>
            <code className="wrap">{rawCookies}</code>
          </dd>
        </dl>
      </section>

      <section className="card">
        <h2>Como validar entre subdomínios</h2>
        <ul className="list">
          <li>
            Abra{' '}
            <code>https://app.agottani.dev/?referral_id=XYZ</code> com um valor à
            sua escolha.
          </li>
          <li>
            Depois abra esta página em <code>https://auth.agottani.dev</code> —
            o mesmo <code>referral_id</code> deve aparecer acima se o cookie foi
            gravado com <code>Domain=.agottani.dev</code> em HTTPS (SameSite=Lax em
            navegação top-level do mesmo site).
          </li>
          <li>
            Em <strong>localhost</strong> o cookie do app não cruza para outro host;
            só dá para testar comportamento isolado ou usar os domínios reais.
          </li>
        </ul>
      </section>
    </main>
  );
}
