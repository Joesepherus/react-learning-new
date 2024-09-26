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
import Queueing_Challenge1 from "./queueing/Queueing_Challenge1";
import Queueing_Challenge2 from "./queueing/Queueing_Challenge2";
import SingleEvent from "./updatingObjects/SingleEvent";
import NestedObject from "./updatingObjects/NestedObject";
import UpdatingObjectsChallenge1 from "./updatingObjects/UpdatingObjects_Challenge1";
import UpdatingObjectsChallenge2 from "./updatingObjects/UpdatingObjects_Challenge2";
import UpdatingArrays_Challenge1 from "./updatingArrays/UpdatingArrays_Challenge1";
import UpdatingArrays_Challenge2 from "./updatingArrays/UpdatingArrays_Challenge2";
import UpdatingArrays_Challenge3 from "./updatingArrays/UpdatingArrays_Challenge3";
import StateAsSnapshot_Challenge1 from "./stateAsSnapshot/StateAsSnapshot_Challenge1";
import State_RegularVariable from "./state/State_RegularVariable.js";
import State_RegularVariableWithForceUpdate from "./state/State_RegularVariableWithForceUpdate";
import State_StateVariable from "./state/State_StateVariable";
import State_Challenge1 from "./state/State_Challenge1";
import State_Challenge2 from "./state/State_Challenge2";
import State_Challenge3 from "./state/State_Challenge3";
import State_Challenge4 from "./state/State_Challenge4";
import Events_Challenge1 from "./events/Events_Challenge1";
import Events_Challenge2 from "./events/Events_Challenge2";

import "./styles.css";

const components = [
  { name: "BuggyTimer", path: "/buggy-timer", element: BuggyTimer },
  {
    name: "BuggyTimerFixed",
    path: "/buggy-timer-fixed",
    element: BuggyTimerFixed,
  },
  {
    name: "BuggyTimerFixed2",
    path: "/buggy-timer-fixed2",
    element: BuggyTimerFixed2,
  },
  { name: "Stopwatch", path: "/stopwatch", element: Stopwatch },
  {
    name: "RefNotUpdating",
    path: "/ref-not-updating",
    element: RefNotUpdating,
  },
  { name: "RefUpdating", path: "/ref-updating", element: RefUpdating },
  { name: "RefUpdating2", path: "/ref-updating-2", element: RefUpdating2 },
  {
    name: "VariableNotUpdating",
    path: "/variable-not-updating",
    element: VariableNotUpdating,
  },
  { name: "Challenge1", path: "/challenge1", element: Challenge1 },
  { name: "Challenge2", path: "/challenge2", element: Challenge2 },
  { name: "Challenge3", path: "/challenge3", element: Challenge3 },
  { name: "Challenge4", path: "/challenge4", element: Challenge4 },
  { name: "Focus", path: "/focus", element: Focus },
  { name: "Scroll", path: "/scroll", element: Scroll },
  { name: "Scroll2", path: "/scroll-2", element: Scroll2 },
  {
    name: "RefForwardingDeepDive",
    path: "/ref-forwarding-deep-dive",
    element: RefForwardingDeepDive,
  },
  {
    name: "ModifyDOMBreak",
    path: "/modify-dom-break",
    element: ModifyDOMBreak,
  },
  {
    name: "Challenge1_refs_dom",
    path: "/challenge1-refs-dom",
    element: Challenge1_refs_dom,
  },
  {
    name: "Challenge2_refs_dom",
    path: "/challenge2-refs-dom",
    element: Challenge2_refs_dom,
  },
  {
    name: "Challenge3_refs_dom",
    path: "/challenge3-refs-dom",
    element: Challenge3_refs_dom,
  },
  {
    name: "Challenge4_refs_dom",
    path: "/challenge4-refs-dom",
    element: Challenge4_refs_dom,
  },
  { name: "VideoPlayer", path: "/video-player", element: VideoPlayer },
  { name: "InfiniteLoop", path: "/infinite-loop", element: InfiniteLoop },
  {
    name: "InfiniteLoopFix",
    path: "/infinite-loop-fix",
    element: InfiniteLoopFix,
  },
  {
    name: "VideoPlayerTooManyRenders",
    path: "/video-player-too-many-renders",
    element: VideoPlayerTooManyRenders,
  },
  {
    name: "VideoPlayerTooManyRendersFix",
    path: "/video-player-too-many-renders-fix",
    element: VideoPlayerTooManyRendersFix,
  },
  { name: "ChatRoom", path: "/chat-room", element: ChatRoom },
  { name: "Playground", path: "/playground", element: Playground },
  {
    name: "Challenge1_effects",
    path: "/challenge1-effects",
    element: Challenge1_effects,
  },
  {
    name: "Challenge2_effects",
    path: "/challenge2-effects",
    element: Challenge2_effects,
  },
  {
    name: "Challenge3_effects",
    path: "/challenge3-effects",
    element: Challenge3_effects,
  },
  {
    name: "Challenge4_effects",
    path: "/challenge4-effects",
    element: Challenge4_effects,
  },
  {
    name: "Challenge1_reactive_effects",
    path: "/challenge1-reactive-effects",
    element: Challenge1_reactive_effects,
  },
  {
    name: "Challenge2_reactive_effects",
    path: "/challenge2-reactive-effects",
    element: Challenge2_reactive_effects,
  },
  {
    name: "Challenge3_reactive_effects",
    path: "/challenge3-reactive-effects",
    element: Challenge3_reactive_effects,
  },
  {
    name: "Challenge4_reactive_effects",
    path: "/challenge4-reactive-effects",
    element: Challenge4_reactive_effects,
  },
  {
    name: "Challenge5_reactive_effects",
    path: "/challenge5-reactive-effects",
    element: Challenge5_reactive_effects,
  },
  {
    name: "Challenge1_remove_dependencies",
    path: "/challenge1-remove-dependencies",
    element: Challenge1_remove_dependencies,
  },
  {
    name: "Challenge3_remove_dependencies",
    path: "/challenge3-remove-dependencies",
    element: Challenge3_remove_dependencies,
  },
  { name: "WithoutReducer", path: "/without-reducer", element: WithoutReducer },
  { name: "WithoutContext", path: "/without-context", element: WithoutContext },
  { name: "WithContext", path: "/with-context", element: WithContext },
  {
    name: "ReducerWithoutContext",
    path: "/reducer-without-context",
    element: ReducerWithoutContext,
  },
  {
    name: "ReducerWithContext",
    path: "/reducer-with-context",
    element: ReducerWithContext,
  },
  { name: "Preserved", path: "/preserved", element: Preserved },
  { name: "NotPreserved", path: "/not-preserved", element: NotPreserved },
  { name: "Nested", path: "/nested", element: Nested },
  { name: "FixNested", path: "/fix-nested", element: FixNested },
  {
    name: "ReactingToInput",
    path: "/reacting-to-input",
    element: ReactingToInput,
  },
  {
    name: "ReactingToInput_Challenge1",
    path: "/reacting-to-input-challenge1",
    element: ReactingToInput_Challenge1,
  },
  {
    name: "ReactingToInput_Challenge2",
    path: "/reacting-to-input-challenge2",
    element: ReactingToInput_Challenge2,
  },
  {
    name: "Queueing_Challenge1",
    path: "/queueing-challenge1",
    element: Queueing_Challenge1,
  },
  {
    name: "Queueing_Challenge2",
    path: "/queueing-challenge2",
    element: Queueing_Challenge2,
  },
  {
    name: "SingleEvent",
    path: "/updating-objects-single-event",
    element: SingleEvent,
  },
  {
    name: "NestedObject",
    path: "/updating-objects-nested-object",
    element: NestedObject,
  },
  {
    name: "UpdatingObjectsChallenge1",
    path: "/updating-objects-challenge1",
    element: UpdatingObjectsChallenge1,
  },
  {
    name: "UpdatingObjectsChallenge2",
    path: "/updating-objects-challenge2",
    element: UpdatingObjectsChallenge2,
  },
  {
    name: "UpdatingArrays_Challenge1",
    path: "/updating-arrays-challenge1",
    element: UpdatingArrays_Challenge1,
  },
  {
    name: "UpdatingArrays_Challenge2",
    path: "/updating-arrays-challenge2",
    element: UpdatingArrays_Challenge2,
  },
  {
    name: "UpdatingArrays_Challenge3",
    path: "/updating-arrays-challenge3",
    element: UpdatingArrays_Challenge3,
  },
  {
    name: "StateAsSnapshot_Challenge1",
    path: "/state-as-snapshot-challenge1",
    element: StateAsSnapshot_Challenge1,
  },
  {
    name: "State_RegularVariable",
    path: "/state-regular-variable",
    element: State_RegularVariable,
  },
  {
    name: "State_RegularVariableWithForceUpdate",
    path: "/state-regular-variable-with-force-update",
    element: State_RegularVariableWithForceUpdate,
  },
  {
    name: "State_StateVariable",
    path: "/state-state-variable",
    element: State_StateVariable,
  },
  {
    name: "State_Challenge1",
    path: "state-challenge1",
    element: State_Challenge1,
  },
  {
    name: "State_Challenge2",
    path: "state-challenge2",
    element: State_Challenge2,
  },
  {
    name: "State_Challenge3",
    path: "state-challenge3",
    element: State_Challenge3,
  },
  {
    name: "State_Challenge4",
    path: "state-challenge4",
    element: State_Challenge4,
  },
  {
    name: "Events_Challenge1",
    path: "events-challenge1",
    element: Events_Challenge1,
  },
  {
    name: "Events_Challenge2",
    path: "events-challenge2",
    element: Events_Challenge2,
  },
];

// HomePage component that lists all components in cards
function HomePage() {
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
        {components.map((component) => (
          <Route path={component.path} element={<component.element />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
