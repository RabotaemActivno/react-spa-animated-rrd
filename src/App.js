import { Header } from "./layout/header";
import { Homepage } from "./pages/homepage";
import { Contacts } from "./pages/contacts";
import { About } from "./pages/about";
import { useTransition, animated } from "react-spring";
import {Routes,
  Route,
  useLocation
} from "react-router-dom";

function App() {

  const location = useLocation()

  const transitions = useTransition(location.pathname, {
    key: location.pathname,
    from: {
      opacity: 0,
      transform: 'translateX(100%)'
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)'
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-100%)'
    }
  })

  return (
    <>
      <Header />
      <main className="container" style={{position:"relative", overflow:'hidden', minHeight: '100vh'}}>
        {transitions((props, item) => (
          <animated.div style={props} key={item}>
            <div style= {{position: "absolute", width: "100%"}}>
              <Routes location={item}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </div>
          </animated.div>
        ))}
      </main>
    </>
  );
}

export default App;
