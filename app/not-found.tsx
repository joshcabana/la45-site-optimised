export default function NotFound() {
  return (
    <main id="main" className="grid min-h-svh place-items-center px-6 py-24">
      <div className="text-center">
        <h1 className="font-serif text-5xl">404</h1>
        <p className="mt-4 text-lg text-ink/70">This page doesn’t exist.</p>
        <a
          href="/"
          className="mt-6 inline-block rounded-full border border-[rgba(200,164,93,0.4)] px-6 py-3 hover:border-[rgba(200,164,93,0.6)] hover:bg-black/40"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
