import React, { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

//  School Bus Booking System React components
import MDBox from "components/MDBox";

//  School Bus Booking System React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

//  School Bus Booking System React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

//  School Bus Booking System React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

//  School Bus Booking System React routes
import routes from "routes";

//  School Bus Booking System React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";

class App extends React.Component() {

  render() {
   // const [controller, dispatch] = useMaterialUIController();
    /*const {
      miniSidenav,
      direction,
      layout,
      openConfigurator,
      sidenavColor,
      transparentSidenav,
      whiteSidenav,
      darkMode,
    } = controller;*/
    // const [onMouseEnter, setOnMouseEnter] = useState(false);
    // const [rtlCache, setRtlCache] = useState(null);
    // const { pathname } = useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(
      () => localStorage.getItem('logged_user') !== null
    );

    /*// Cache for the rtl
    useMemo(() => {
      const cacheRtl = createCache({
        key: "rtl",
        stylisPlugins: [rtlPlugin],
      });
  
      setRtlCache(cacheRtl);
    }, []);
  
    // Open sidenav when mouse enter on mini sidenav
    const handleOnMouseEnter = () => {
      if (miniSidenav && !onMouseEnter) {
        setMiniSidenav(dispatch, false);
        setOnMouseEnter(true);
      }
    };
  
    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
      if (onMouseEnter) {
        setMiniSidenav(dispatch, true);
        setOnMouseEnter(false);
      }
    };
  
    // Change the openConfigurator state
    const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  
    // Setting the dir attribute for the body element
    useEffect(() => {
      document.body.setAttribute("dir", direction);
    }, [direction]);
  
    // Setting page scroll to 0 when changing the route
    useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }, [pathname]);*/

    const getRoutes = (allRoutes) =>
      allRoutes.map((route) => {
        if (route.collapse) {
          return getRoutes(route.collapse);
        }

        if (route.route) {
          return <Route exact path={route.route} element={route.component} key={route.key} />;
        }

        return null;
      });


    return isLoggedIn !== false ? (
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName=" School Bus Booking"
              routes={routes}
            //onMouseEnter={handleOnMouseEnter}
            //onMouseLeave={handleOnMouseLeave}
            />
            {/*<Configurator />
          {configsButton}*/}
          </>
        )}

        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/tables" />} />
        </Routes>

      </ThemeProvider>
    ) : (
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName=" School Bus Booking"
              routes={routes}
            //onMouseEnter={handleOnMouseEnter}
            //onMouseLeave={handleOnMouseLeave}
            />
            {/*<Configurator />
          {configsButton}*/}
          </>
        )}

        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
        </Routes>

      </ThemeProvider>
    );
  }
}
export default App;