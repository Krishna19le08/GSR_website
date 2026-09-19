import { Eyebrow, ButtonPrimary, ButtonOnDark } from "./components/ui";

export const metadata = {
  title: "Page Not Found — GSR",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col bg-paper">
      <section className="relative isolate flex flex-1 items-center overflow-hidden bg-banyan-deep">
        <div className="absolute inset-0 bg-gradient-to-t from-banyan-deep via-banyan-deep/80 to-banyan-deep/60" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <Eyebrow tone="dark">Error 404</Eyebrow>
          <p
            aria-hidden="true"
            className="mt-4 font-display text-8xl font-bold leading-none tracking-tight text-paper/20 sm:text-9xl"
          >
            404
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            This page has wandered off the path
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-paper/80">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back to the work that matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonPrimary href="/">Back to Home</ButtonPrimary>
            <ButtonOnDark href="/news">News &amp; Stories</ButtonOnDark>
          </div>
        </div>
      </section>
    </main>
  );
}
