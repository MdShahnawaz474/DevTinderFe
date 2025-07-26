import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import EditProfiles from "./components/Edit-profile";
import Matches from "./components/Matches";
import Request from "./components/Request";
// import MultiStepSignup from './components/Signup'
import MultiStepSignup2 from "./components/Signup2";
import Feed from "./components/Feed";
import Premium from "./components/Premium";
import DevTinderLanding2 from "./components/LandingPage2";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
            <Route path="/portfolio" element={<Portfolio />}>
            </Route>
          <Route path="/" element={<Body />}>
            {/* Index route - what shows at the root path */}
            <Route index element={<DevTinderLanding2 />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path='/signup' element={<MultiStepSignup/>} /> */}
            <Route path="/signup" element={<MultiStepSignup2 />} />
            <Route path="/edit-profile" element={<EditProfiles />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/requests" element={<Request />} />
            {/* <Route path="/landing" element={<DevTinderLanding />} /> */}
            {/* <Route path="/landing2" element={<DevTinderLanding2 />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
