import Card from "./components/Card";

export default function App() {
  return (
    <main className="container">
      <header className="header">
        <h1>Code Café ☕</h1>
        <p className="subtitle">
          A simple React starter for learning components and interactivity.
        </p>
      </header>

      <section className="grid">
        <Card title="Edit this text" />
        <Card title="Reuse components" />
        <Card title="React basics" />
      </section>

      <footer className="footer">
        <p>Built at Code Café</p>
      </footer>
    </main>
  );
}