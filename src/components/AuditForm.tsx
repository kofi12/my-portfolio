'use client';
import { useState } from 'react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';
import { AUDIT_MAILTO, CONTACT_EMAIL } from '../lib/site';

type Fields = {
  name: string;
  email: string;
  business: string;
  appUrl: string;
  builtWith: string;
  worry: string;
};

type FieldName = keyof Fields;
type Errors = Partial<Record<FieldName, string>>;

const EMPTY: Fields = { name: '', email: '', business: '', appUrl: '', builtWith: '', worry: '' };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = 'Add your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = 'Add a real email address.';
  if (fields.business.trim().length < 2) errors.business = 'Add the business or app name.';
  if (fields.appUrl.trim() && !/^https?:\/\/\S+$/i.test(fields.appUrl.trim())) {
    errors.appUrl = 'Use a full link, starting with https://.';
  }
  if (fields.worry.trim().length < 20) errors.worry = 'Say a little more about what you’re worried about.';
  return errors;
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {optional ? <span className="field-optional"> (optional)</span> : null}
      </label>
      {children}
      {error ? <p id={errorId} className="field-error">{error}</p> : null}
    </div>
  );
}

export default function AuditForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorKind, setErrorKind] = useState<'unavailable' | 'rate' | 'send' | 'invalid' | ''>('');

  const set = (key: FieldName) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((current) => ({ ...current, [key]: event.target.value }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus('idle');
      return;
    }
    setStatus('sending');
    setErrorKind('');
    try {
      const response = await fetch('/api/app-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, website }),
      });
      const data = await response.json().catch(() => ({})) as { ok?: boolean; error?: string; fields?: Errors };
      if (response.ok && data.ok) {
        setStatus('sent');
        setFields(EMPTY);
        return;
      }
      if (data.fields) setErrors(data.fields);
      setErrorKind(data.error === 'unavailable' || data.error === 'rate' || data.error === 'send' ? data.error : 'invalid');
      setStatus('error');
    } catch {
      setErrorKind('send');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div id="app-audit-form" className="card audit-form" role="status">
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, lineHeight: 1.2, marginBottom: 12 }}>Request sent.</h3>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>I’ll reply to the email you gave.</p>
      </div>
    );
  }

  const inputProps = (key: FieldName) => ({
    id: key,
    name: key,
    value: fields[key],
    onChange: set(key),
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  });

  return (
    <form id="app-audit-form" className="card audit-form" onSubmit={onSubmit} noValidate>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, lineHeight: 1.2, marginBottom: 8 }}>Request an app audit</h3>
      <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
        Tell me about the app. I’ll reply by email.
      </p>

      <Field id="name" label="Name" error={errors.name}>
        <input {...inputProps('name')} type="text" autoComplete="name" required />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input {...inputProps('email')} type="email" autoComplete="email" required />
      </Field>
      <Field id="business" label="Business or app name" error={errors.business}>
        <input {...inputProps('business')} type="text" required />
      </Field>
      <Field id="appUrl" label="Link to the app" optional error={errors.appUrl}>
        <input {...inputProps('appUrl')} type="url" inputMode="url" placeholder="https://" />
      </Field>
      <Field id="builtWith" label="What it was built with" optional error={errors.builtWith}>
        <input {...inputProps('builtWith')} type="text" />
      </Field>
      <Field id="worry" label="What you’re worried about" error={errors.worry}>
        <textarea {...inputProps('worry')} rows={5} required />
      </Field>

      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </div>

      {status === 'error' ? (
        <p className="field-error" role="alert" style={{ marginBottom: 16 }}>
          {errorKind === 'rate'
            ? 'Please wait a few minutes and try again.'
            : 'The form couldn’t send just now.'}
          {' '}
          <a href={AUDIT_MAILTO} className="text-link" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Email {CONTACT_EMAIL} instead.
          </a>
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request an app audit'}
      </button>
    </form>
  );
}
