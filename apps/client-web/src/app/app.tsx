import { useMovieTopRatedList } from '@tmdb-interview/data-access';

export default function App() {
  const { data } = useMovieTopRatedList();
  console.log('>>>', data);

  return (
    <main className="grid min-h-screen place-items-center px-6 py-10">
      <section className="w-full max-w-3xl rounded-[28px] border border-card-border bg-card-bg p-8 shadow-hero backdrop-blur-[18px] sm:p-12">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-page-accent">
          Nx Monorepo
        </p>
        <h1 className="m-0 text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95]">
          Hello world from client-web
        </h1>
        <p className="mt-5 max-w-[34rem] text-[1.05rem] leading-7 text-page-muted">
          This React, TypeScript, Nx, and Tailwind app is now wired to TanStack
          Query and the generated TMDB client.
        </p>
      </section>
    </main>
  );
}
