import type { FC } from 'react';

export enum LoginPageDataTestIds {
  Wrapper = 'login-page-wrapper',
  Eyebrow = 'login-page-eyebrow',
  Title = 'login-page-title',
  Description = 'login-page-description',
  Form = 'login-page-form',
  EmailInput = 'login-page-email-input',
  PasswordInput = 'login-page-password-input',
  SubmitButton = 'login-page-submit-button',
}

export interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div data-testid={LoginPageDataTestIds.Wrapper}>
      <p
        className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-page-accent"
        data-testid={LoginPageDataTestIds.Eyebrow}
      >
        Account Access
      </p>
      <h1
        className="m-0 text-[clamp(2.5rem,8vw,4rem)] leading-[0.95]"
        data-testid={LoginPageDataTestIds.Title}
      >
        Sign in to TMDB
      </h1>
      <p
        className="mt-5 max-w-[34rem] text-[1.05rem] leading-7 text-page-muted"
        data-testid={LoginPageDataTestIds.Description}
      >
        This route is ready for authentication flow wiring. For now it gives us
        a dedicated login page in the router.
      </p>
      <form
        className="mt-8 grid gap-4"
        data-testid={LoginPageDataTestIds.Form}
      >
        <label className="grid gap-2 text-sm text-page-muted">
          Email
          <input
            className="rounded-2xl border border-card-border bg-black/20 px-4 py-3 text-base text-page-text outline-none"
            data-testid={LoginPageDataTestIds.EmailInput}
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="grid gap-2 text-sm text-page-muted">
          Password
          <input
            className="rounded-2xl border border-card-border bg-black/20 px-4 py-3 text-base text-page-text outline-none"
            data-testid={LoginPageDataTestIds.PasswordInput}
            placeholder="Enter your password"
            type="password"
          />
        </label>
        <button
          className="mt-2 rounded-full border border-page-accent/50 bg-page-accent px-5 py-3 text-sm font-semibold text-slate-950"
          data-testid={LoginPageDataTestIds.SubmitButton}
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};
