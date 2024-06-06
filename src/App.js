import { useRoutes } from "react-router-dom";
import routes from '@/router'

function App() {
  return (
    <>
      <header className='header'>header</header>
      <main className='page'>
        {useRoutes(routes)}
      </main>
      <footer className='footer'>footer</footer>
    </>
  );
}

export default App
