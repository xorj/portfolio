import { ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

/*Pages*/
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

const routes = [
  { text: "Início", link: "/", component: null },
  { text: "Projetos", link: "/projetos", component: <Projects /> },
  { text: "Sobre Mim", link: "/sobre", component: <About /> },
  { text: "Contato", link: "/contato", component: <Contact /> },
];

function App() {
  const [selectedLink, setSelectedLink] = useState(window.location.pathname);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
          routes={routes}
        />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={`${route.link}${index}`}
              exact
              path={route.link}
              render={() => route.component}
            />
          ))}
        </Switch>
        {/* <Footer/> */}
        <Footer setSelectedLink={setSelectedLink} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
