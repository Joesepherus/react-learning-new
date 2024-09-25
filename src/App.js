import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BuggyTimer from "./BuggyTimer";
import BuggyTimerFixed from "./BuggyTimerFixed";
import BuggyTimerFixed2 from "./BuggyTimerFixed2";
import Stopwatch from "./Stopwatch";
import RefNotUpdating from "./RefNotUpdating";
import RefUpdating from "./RefUpdating";
import RefUpdating2 from "./RefUpdating2";
import VariableNotUpdating from "./VariableNotUpdating";
import Challenge1 from "./refs/Challenge1";
import Challenge2 from "./refs/Challenge2";
import Challenge3 from "./refs/Challenge3";
import Challenge4 from "./refs/Challenge4";
import Focus from "./refs/Focus";
import Scroll from "./refs/Scroll";
import Scroll2 from "./refs/Scroll2";
import RefForwardingDeepDive from "./refs/RefForwardingDeepDive";
import ModifyDOMBreak from "./refs/ModifyDOMBreak";
import Challenge1_refs_dom from "./refs_dom/Challenge1";
import Challenge2_refs_dom from "./refs_dom/Challenge2";
import Challenge3_refs_dom from "./refs_dom/Challenge3";
import Challenge4_refs_dom from "./refs_dom/Challenge4";
import VideoPlayer from "./effects/VideoPlayer";
import InfiniteLoop from "./effects/InfiniteLoop";
import InfiniteLoopFix from "./effects/InfiniteLoopFix";
import VideoPlayerTooManyRenders from "./effects/VideoPlayerTooManyRenders";
import VideoPlayerTooManyRendersFix from "./effects/VideoPlayerTooManyRendersFix";
import ChatRoom from "./effects/ChatRoom";
import Playground from "./effects/Playground";
import Challenge1_effects from "./effects/Challenge1";
import Challenge2_effects from "./effects/Challenge2";
import Challenge3_effects from "./effects/Challenge3";
import Challenge4_effects from "./effects/Challenge4";
import Challenge1_reactive_effects from "./reactive_effects/Challenge1";
import Challenge2_reactive_effects from "./reactive_effects/Challenge2";
import Challenge3_reactive_effects from "./reactive_effects/Challenge3";
import Challenge4_reactive_effects from "./reactive_effects/Challenge4";
import Challenge5_reactive_effects from "./reactive_effects/Challenge5";
import Challenge1_remove_dependencies from "./remove_dependencies/Challenge1";
import Challenge3_remove_dependencies from "./remove_dependencies/Challenge3";
import WithoutReducer from "./reducer/WithoutReducer";
import WithoutContext from "./context/WithoutContext/WithoutContext";
import WithContext from "./context/WithContext/WithContext";
import ReducerWithoutContext from "./reducerAndContext/ReducerWithoutContext/ReducerWithoutContext";
import ReducerWithContext from "./reducerAndContext/ReducerWithContext/ReducerWithContext";
import Preserved from "./preservingState/Preserved/Preserved";
import NotPreserved from "./preservingState/NotPreserved/NotPreserved";
import Nested from "./preservingState/Nested/Nested";
import FixNested from "./preservingState/FixNested/FixNested";
import ReactingToInput from "./reactingToInput/ReactingToInput";
import ReactingToInput_Challenge1 from "./reactingToInput/ReactingToInput_Challenge1";
import ReactingToInput_Challenge2 from "./reactingToInput/ReactingToInput_Challenge2";
import "./styles.css";

// HomePage component that lists all components in cards
function HomePage() {
  const components = [
    { name: "BuggyTimer", path: "/buggy-timer" },
    { name: "BuggyTimerFixed", path: "/buggy-timer-fixed" },
    { name: "BuggyTimerFixed2", path: "/buggy-timer-fixed2" },
    { name: "Stopwatch", path: "/stopwatch" },
    { name: "RefNotUpdating", path: "/ref-not-updating" },
    { name: "RefUpdating", path: "/ref-updating" },
    { name: "RefUpdating2", path: "/ref-updating-2" },
    { name: "VariableNotUpdating", path: "/variable-not-updating" },
    { name: "Challenge1", path: "/challenge1" },
    { name: "Challenge2", path: "/challenge2" },
    { name: "Challenge3", path: "/challenge3" },
    { name: "Challenge4", path: "/challenge4" },
    { name: "Focus", path: "/focus" },
    { name: "Scroll", path: "/scroll" },
    { name: "Scroll2", path: "/scroll-2" },
    { name: "RefForwardingDeepDive", path: "/ref-forwarding-deep-dive" },
    { name: "ModifyDOMBreak", path: "/modify-dom-break" },
    { name: "Challenge1_refs_dom", path: "/challenge1-refs-dom" },
    { name: "Challenge2_refs_dom", path: "/challenge2-refs-dom" },
    { name: "Challenge3_refs_dom", path: "/challenge3-refs-dom" },
    { name: "Challenge4_refs_dom", path: "/challenge4-refs-dom" },
    { name: "VideoPlayer", path: "/video-player" },
    { name: "InfiniteLoop", path: "/infinite-loop" },
    { name: "InfiniteLoopFix", path: "/infinite-loop-fix" },
    {
      name: "VideoPlayerTooManyRenders",
      path: "/video-player-too-many-renders",
    },
    {
      name: "VideoPlayerTooManyRendersFix",
      path: "/video-player-too-many-renders-fix",
    },
    { name: "ChatRoom", path: "/chat-room" },
    { name: "Playground", path: "/playground" },
    { name: "Challenge1_effects", path: "/challenge1-effects" },
    { name: "Challenge2_effects", path: "/challenge2-effects" },
    { name: "Challenge3_effects", path: "/challenge3-effects" },
    { name: "Challenge4_effects", path: "/challenge4-effects" },
    {
      name: "Challenge1_reactive_effects",
      path: "/challenge1-reactive-effects",
    },
    {
      name: "Challenge2_reactive_effects",
      path: "/challenge2-reactive-effects",
    },
    {
      name: "Challenge3_reactive_effects",
      path: "/challenge3-reactive-effects",
    },
    {
      name: "Challenge4_reactive_effects",
      path: "/challenge4-reactive-effects",
    },
    {
      name: "Challenge5_reactive_effects",
      path: "/challenge5-reactive-effects",
    },
    {
      name: "Challenge1_remove_dependencies",
      path: "/challenge1-remove-dependencies",
    },
    {
      name: "Challenge3_remove_dependencies",
      path: "/challenge3-remove-dependencies",
    },
    { name: "WithoutReducer", path: "/without-reducer" },
    { name: "WithoutContext", path: "/without-context" },
    { name: "WithContext", path: "/with-context" },
    { name: "ReducerWithoutContext", path: "/reducer-without-context" },
    { name: "ReducerWithContext", path: "/reducer-with-context" },
    { name: "Preserved", path: "/preserved" },
    { name: "NotPreserved", path: "/not-preserved" },
    { name: "Nested", path: "/nested" },
    { name: "FixNested", path: "/fix-nested" },
    { name: "ReactingToInput", path: "/reacting-to-input" },
    {
      name: "ReactingToInput_Challenge1",
      path: "/reacting-to-input-challenge1",
    },
    {
      name: "ReactingToInput_Challenge2",
      path: "/reacting-to-input-challenge2",
    },
  ];

  return (
    <div>
      <h1>Component List</h1>
      <div>Count: {components.length}</div>
      <div className="card-container">
        {components.map((component) => (
          <div key={component.name} className="card">
            <h2>{component.name}</h2>
            <Link to={component.path}>Go to {component.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// App component with routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buggy-timer" element={<BuggyTimer />} />
        <Route path="/buggy-timer-fixed" element={<BuggyTimerFixed />} />
        <Route path="/buggy-timer-fixed2" element={<BuggyTimerFixed2 />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/ref-not-updating" element={<RefNotUpdating />} />
        <Route path="/ref-updating" element={<RefUpdating />} />
        <Route path="/ref-updating-2" element={<RefUpdating2 />} />
        <Route
          path="/variable-not-updating"
          element={<VariableNotUpdating />}
        />
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/challenge2" element={<Challenge2 />} />
        <Route path="/challenge3" element={<Challenge3 />} />
        <Route path="/challenge4" element={<Challenge4 />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/scroll-2" element={<Scroll2 />} />
        <Route
          path="/ref-forwarding-deep-dive"
          element={<RefForwardingDeepDive />}
        />
        <Route path="/modify-dom-break" element={<ModifyDOMBreak />} />
        <Route path="/challenge1-refs-dom" element={<Challenge1_refs_dom />} />
        <Route path="/challenge2-refs-dom" element={<Challenge2_refs_dom />} />
        <Route path="/challenge3-refs-dom" element={<Challenge3_refs_dom />} />
        <Route path="/challenge4-refs-dom" element={<Challenge4_refs_dom />} />
        <Route path="/video-player" element={<VideoPlayer />} />
        <Route path="/infinite-loop" element={<InfiniteLoop />} />
        <Route path="/infinite-loop-fix" element={<InfiniteLoopFix />} />
        <Route
          path="/video-player-too-many-renders"
          element={<VideoPlayerTooManyRenders />}
        />
        <Route
          path="/video-player-too-many-renders-fix"
          element={<VideoPlayerTooManyRendersFix />}
        />
        <Route path="/chat-room" element={<ChatRoom />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/challenge1-effects" element={<Challenge1_effects />} />
        <Route path="/challenge2-effects" element={<Challenge2_effects />} />
        <Route path="/challenge3-effects" element={<Challenge3_effects />} />
        <Route path="/challenge4-effects" element={<Challenge4_effects />} />
        <Route
          path="/challenge1-reactive-effects"
          element={<Challenge1_reactive_effects />}
        />
        <Route
          path="/challenge2-reactive-effects"
          element={<Challenge2_reactive_effects />}
        />
        <Route
          path="/challenge3-reactive-effects"
          element={<Challenge3_reactive_effects />}
        />
        <Route
          path="/challenge4-reactive-effects"
          element={<Challenge4_reactive_effects />}
        />
        <Route
          path="/challenge5-reactive-effects"
          element={<Challenge5_reactive_effects />}
        />
        <Route
          path="/challenge1-remove-dependencies"
          element={<Challenge1_remove_dependencies />}
        />
        <Route
          path="/challenge3-remove-dependencies"
          element={<Challenge3_remove_dependencies />}
        />
        <Route path="/without-reducer" element={<WithoutReducer />} />
        <Route path="/without-context" element={<WithoutContext />} />
        <Route path="/with-context" element={<WithContext />} />
        <Route
          path="/reducer-without-context"
          element={<ReducerWithoutContext />}
        />
        <Route path="/reducer-with-context" element={<ReducerWithContext />} />
        <Route path="/preserved" element={<Preserved />} />
        <Route path="/not-preserved" element={<NotPreserved />} />
        <Route path="/nested" element={<Nested />} />
        <Route path="/fix-nested" element={<FixNested />} />
        <Route path="/reacting-to-input" element={<ReactingToInput />} />
        <Route
          path="/reacting-to-input-challenge1"
          element={<ReactingToInput_Challenge1 />}
        />
        <Route
          path="/reacting-to-input-challenge2"
          element={<ReactingToInput_Challenge2 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
