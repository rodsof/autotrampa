import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import "./assets/css/master.css";*/

import Navigation from "./components/navbar.component";
import MobileNavigation from "./components/mobileNavbar.component";

/*index*/
import MainSlider from "./components/mainSlider.component";
import MainFind from "./components/mainFind.component";
import IndexWelcome from "./components/indexWelcome.component";
import IndexCarosel from "./components/indexCarosel.component";
import IndexServices from "./components/indexServices.component";
import IndexInspection from "./components/indexInspection.component";
import IndexProgress from "./components/indexProgress.component";
import IndexTop from "./components/indexTop.component";
import IndexSteps from "./components/indexSteps.component";
import IndexBrn from "./components/indexBrn.component";
import IndexVips from "./components/indexVips.component";
import IndexTeam from "./components/indexTeam.component";
import IndexReviews from "./components/indexReviews.component";
import IndexNews from "./components/indexNews.component";
import IndexAdvert from "./components/indexAdvert.component";
import IndexGalery from "./components/indexGalery.component";
import IndexFooter from "./components/indexFooter.component";
/*about */
import AboutInfo from "./components/aboutInfo.component";
import AboutMain from "./components/aboutMain.component";
import AboutAdvantages from "./components/aboutAdvantages.component";
/*news*/
import NewsMain from "./components/newsMain.component";
/*carList*/
import CarListMain from "./components/carListMain.component";
/*contact*/
import Contact from "./components/contact.component";

function App() {
  return (
    <Switch>
      <div
        class="l-theme animated-css animsition"
        data-header="sticky"
        data-header-top="200"
      >
        <div data-canvas="container">
          <MobileNavigation />
          <Navigation />
          <Route exact path="/">
            <MainSlider />
            <MainFind />
            <IndexWelcome />
            {/*<IndexCarosel />*/}
            <IndexServices />
            {/*<IndexInspection />*/}
            <IndexAdvert />
            <IndexProgress />
            <IndexTop />
            <IndexSteps />
            {/*<IndexBrn />
               <IndexVips />*/}
            {/*<IndexTeam />*/}
            {/**/}
            {/*<IndexReviews />*/}
            {/*<IndexNews />*/}
            {/*<IndexGalery />*/}
            <IndexFooter />
          </Route>
          <Route exact path="/about">
            <main>
              <AboutInfo />
              <AboutMain />
              <IndexInspection />
              <IndexProgress />
              <AboutAdvantages />
            </main>
            <IndexFooter />
          </Route>
          <Route exact path="/news">
            <NewsMain />
            <IndexFooter />
          </Route>
          <Route exact path="/carList">
            <CarListMain />
            <IndexFooter />
          </Route>
          <Route exact path="/contact">
            <Contact />
            <IndexFooter />
          </Route>
        </div>
      </div>
    </Switch>
  );
}

export default App;
