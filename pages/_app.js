import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <footer>footer</footer>
      <style jsx global>{`
        a {
          color: white;
        }

        .active {
          color: red;
        }
      `}</style>
    </>
  );
}
