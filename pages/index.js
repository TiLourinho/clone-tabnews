import { container } from "./index.module.css";

function Home() {
  return (
    <>
      <main className={container}>
        <section>
          <img src="/assets/under-construction.png" width="600px" />
          <p>
            A{" "}
            <a
              href="https://github.com/TiLourinho/clone-tabnews"
              target="_blank"
            >
              página
            </a>{" "}
            está em construção! Em breve teremos atualizações.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
