import { useMovieTopRatedList } from '@tmdb-interview/data-access';

export default function App() {
  const { data } = useMovieTopRatedList();
  console.log('>>> ', data);
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Nx Monorepo</p>
        <h1>Hello world from client-web</h1>
        <p className="description">
          This React + TypeScript app lives inside an Nx workspace and is ready
          for you to extend.
        </p>
      </section>
    </main>
  );
}
