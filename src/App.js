import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Others_BuggyTimer from "./BuggyTimer";
import Others_BuggyTimerFixed from "./BuggyTimerFixed";
import Others_BuggyTimerFixed2 from "./BuggyTimerFixed2";
import Others_Stopwatch from "./Stopwatch";
import Others_RefNotUpdating from "./RefNotUpdating";
import Others_RefUpdating from "./RefUpdating";
import Others_RefUpdating2 from "./RefUpdating2";
import Others_VariableNotUpdating from "./VariableNotUpdating";
import Refs_Challenge1 from "./refs/Challenge1";
import Refs_Challenge2 from "./refs/Challenge2";
import Refs_Challenge3 from "./refs/Challenge3";
import Refs_Challenge4 from "./refs/Challenge4";
import DOMRefs_Focus from "./refs/Focus";
import DOMRefs_Scroll from "./refs/Scroll";
import DOMRefs_Scroll2 from "./refs/Scroll2";
import DOMRefs_RefForwardingDeepDive from "./refs/RefForwardingDeepDive";
import DOMRefs_ModifyDOMBreak from "./refs/ModifyDOMBreak";
import DOMRefs_Challenge1 from "./refs_dom/Challenge1";
import DOMRefs_Challenge2 from "./refs_dom/Challenge2";
import DOMRefs_Challenge3 from "./refs_dom/Challenge3";
import DOMRefs_Challenge4 from "./refs_dom/Challenge4";
import SyncEffects_VideoPlayer from "./effects/VideoPlayer";
import SyncEffects_InfiniteLoop from "./effects/InfiniteLoop";
import SyncEffects_InfiniteLoopFix from "./effects/InfiniteLoopFix";
import SyncEffects_VideoPlayerTooManyRenders from "./effects/VideoPlayerTooManyRenders";
import SyncEffects_VideoPlayerTooManyRendersFix from "./effects/VideoPlayerTooManyRendersFix";
import SyncEffects_ChatRoom from "./effects/ChatRoom";
import SyncEffects_Playground from "./effects/Playground";
import SyncEffects_Challenge1 from "./effects/Challenge1";
import SyncEffects_Challenge2 from "./effects/Challenge2";
import SyncEffects_Challenge3 from "./effects/Challenge3";
import SyncEffects_Challenge4 from "./effects/Challenge4";
import ReactiveEffects_Challenge1 from "./reactive_effects/Challenge1";
import ReactiveEffects_Challenge2 from "./reactive_effects/Challenge2";
import ReactiveEffects_Challenge3 from "./reactive_effects/Challenge3";
import ReactiveEffects_Challenge4 from "./reactive_effects/Challenge4";
import ReactiveEffects_Challenge5 from "./reactive_effects/Challenge5";
import RemovingDependencies_Challenge1 from "./remove_dependencies/Challenge1";
import RemovingDependencies_Challenge3 from "./remove_dependencies/Challenge3";
import ExtractingState_WithoutReducer from "./reducer/WithoutReducer";
import ExtractingState_WithoutContext from "./context/WithoutContext/WithoutContext";
import WithContext from "./context/WithContext/WithContext";
import ScalingUp_ReducerWithoutContext from "./reducerAndContext/ReducerWithoutContext/ReducerWithoutContext";
import ScalingUp_ReducerWithContext from "./reducerAndContext/ReducerWithContext/ReducerWithContext";
import Preserving_Preserved from "./preservingState/Preserved/Preserved";
import Preserving_NotPreserved from "./preservingState/NotPreserved/NotPreserved";
import Preserving_Nested from "./preservingState/Nested/Nested";
import Preserving_FixNested from "./preservingState/FixNested/FixNested";
import ReactingToInput from "./reactingToInput/ReactingToInput";
import ReactingToInput_Challenge1 from "./reactingToInput/ReactingToInput_Challenge1";
import ReactingToInput_Challenge2 from "./reactingToInput/ReactingToInput_Challenge2";
import Queueing_Challenge1 from "./queueing/Queueing_Challenge1";
import Queueing_Challenge2 from "./queueing/Queueing_Challenge2";
import UpdatingObjects_SingleEvent from "./updatingObjects/SingleEvent";
import UpdatingObjects_NestedObject from "./updatingObjects/NestedObject";
import UpdatingObjects_Challenge1 from "./updatingObjects/UpdatingObjects_Challenge1";
import UpdatingObjects_Challenge2 from "./updatingObjects/UpdatingObjects_Challenge2";
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
import FirstComponent_Challenge1 from "./firstComponent/FirstComponent_Challenge1";
import FirstComponent_Challenge2 from "./firstComponent/FirstComponent_Challenge2";
import FirstComponent_Challenge3 from "./firstComponent/FirstComponent_Challenge3";
import FirstComponent_Challenge4 from "./firstComponent/FirstComponent_Challenge4";
import ImportExport_Challenge1 from "./importExport/ImportExport_Challenge1";
import Jsx_Challenge1 from "./jsx/Jsx_Challenge1";
import JSinJSX_Challenge1 from "./JSinJSX/JSinJSX_Challenge1";
import JSinJSX_Challenge2 from "./JSinJSX/JSinJSX_Challenge2";
import JSinJSX_Challenge3 from "./JSinJSX/JSinJSX_Challenge3";
import PassingProps_PropsChange from "./passingProps/PropsChange";
import PassingProps_Challenge1 from "./passingProps/PassingProps_Challenge1";
import PassingProps_Challenge2 from "./passingProps/PassingProps_Challenge2";
import PassingProps_Challenge3 from "./passingProps/PassingProps_Challenge3";
import ConditionalRendering_Challenge1 from "./conditionalRendering/ConditionalRendering_Challenge1";
import ConditionalRendering_Challenge2 from "./conditionalRendering/ConditionalRendering_Challenge2";
import ConditionalRendering_Challenge3 from "./conditionalRendering/ConditionalRendering_Challenge3";
import CustomHooks_IsOnline from "./customHooks/CustomHooks_IsOnline";
import CustomHooks_FormInput from "./customHooks/CustomHooks_FormInput";
import CustomHooks_Chat from "./customHooks/CustomHooks_Chat";
import CustomHooks_Challenge1 from "./customHooks/CustomHooks_Challenge1";

import "./styles.css";

const sections = [
  {
    title: "Your First Component",
    components: [
      {
        name: "FirstComponent_Challenge1",
        path: "first-component-challenge1",
        element: FirstComponent_Challenge1,
      },
      {
        name: "FirstComponent_Challenge2",
        path: "first-component-challenge2",
        element: FirstComponent_Challenge2,
      },
      {
        name: "FirstComponent_Challenge3",
        path: "first-component-challenge3",
        element: FirstComponent_Challenge3,
      },
      {
        name: "FirstComponent_Challenge4",
        path: "first-component-challenge4",
        element: FirstComponent_Challenge4,
      },
    ],
  },
  {
    title: "Importing and Exporting Components",
    components: [
      {
        name: "ImportExport_Challenge1",
        path: "import-export-challenge1",
        element: ImportExport_Challenge1,
      },
    ],
  },
  {
    title: "Writing Markup in JSX",
    components: [
      {
        name: "Jsx_Challenge1",
        path: "jsx-challenge1",
        element: Jsx_Challenge1,
      },
    ],
  },
  {
    title: "JavaScript in JSX with Curly Braces",
    components: [
      {
        name: "JSinJSX_Challenge1",
        path: "js-in-jsx-challenge1",
        element: JSinJSX_Challenge1,
      },
      {
        name: "JSinJSX_Challenge2",
        path: "js-in-jsx-challenge2",
        element: JSinJSX_Challenge2,
      },
      {
        name: "JSinJSX_Challenge3",
        path: "js-in-jsx-challenge3",
        element: JSinJSX_Challenge3,
      },
    ],
  },
  {
    title: "Passing Props to a Component",
    components: [
      {
        name: "PassingProps_PropsChange",
        path: "passing-props-props-change",
        element: PassingProps_PropsChange,
      },
      {
        name: "PassingProps_Challenge1",
        path: "passing-props-challenge1",
        element: PassingProps_Challenge1,
      },
      {
        name: "PassingProps_Challenge2",
        path: "passing-props-challenge2",
        element: PassingProps_Challenge2,
      },
      {
        name: "PassingProps_Challenge3",
        path: "passing-props-challenge3",
        element: PassingProps_Challenge3,
      },
    ],
  },
  {
    title: "Conditional Rendering",
    components: [
      {
        name: "ConditionalRendering_Challenge1",
        path: "conditional-rendering-challenge1",
        element: ConditionalRendering_Challenge1,
      },
      {
        name: "ConditionalRendering_Challenge2",
        path: "conditional-rendering-challenge2",
        element: ConditionalRendering_Challenge2,
      },
      {
        name: "ConditionalRendering_Challenge3",
        path: "conditional-rendering-challenge3",
        element: ConditionalRendering_Challenge3,
      },
    ],
  },
  {
    title: "Responding to Events",
    components: [
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
    ],
  },
  {
    title: "State: A Component's Memory",
    components: [
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
    ],
  },
  {
    title: "State as a Snapshot",
    components: [
      {
        name: "StateAsSnapshot_Challenge1",
        path: "/state-as-snapshot-challenge1",
        element: StateAsSnapshot_Challenge1,
      },
    ],
  },
  {
    title: "Queueing a Series of State Updates",
    components: [
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
    ],
  },
  {
    title: "Updating Objects in State",
    components: [
      {
        name: "UpdatingObjects_SingleEvent",
        path: "/updating-objects-single-event",
        element: UpdatingObjects_SingleEvent,
      },
      {
        name: "UpdatingObjects_NestedObject",
        path: "/updating-objects-nested-object",
        element: UpdatingObjects_NestedObject,
      },
      {
        name: "UpdatingObjects_Challenge1",
        path: "/updating-objects-challenge1",
        element: UpdatingObjects_Challenge1,
      },
      {
        name: "UpdatingObjects_Challenge2",
        path: "/updating-objects-challenge2",
        element: UpdatingObjects_Challenge2,
      },
    ],
  },
  {
    title: "Updating Arrays in State",
    components: [
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
    ],
  },
  {
    title: "Reacting to Input with State",
    components: [
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
    ],
  },
  {
    title: "TODO: Choosing the State Structure",
    components: [],
  },
  {
    title: "TODO: Sharing State Between Components",
    components: [],
  },
  {
    title: "TODO: Preserving and Resetting State",
    components: [
      {
        name: "Preserving_Preserved",
        path: "/preserving-preserved",
        element: Preserving_Preserved,
      },
      {
        name: "Preserving_NotPreserved",
        path: "/preserving-not-preserved",
        element: Preserving_NotPreserved,
      },
      {
        name: "Preserving_Nested",
        path: "/preserving-nested",
        element: Preserving_Nested,
      },
      {
        name: "Preserving_FixNested",
        path: "/preserving-fix-nested",
        element: Preserving_FixNested,
      },
    ],
  },
  {
    title: "TODO: Extracting State Logic into a Reducer",
    components: [
      {
        name: "ExtractingState_WithoutReducer",
        path: "/extracting-state-without-reducer",
        element: ExtractingState_WithoutReducer,
      },
      {
        name: "ExtractingState_WithoutContext",
        path: "/extracting-state-without-context",
        element: ExtractingState_WithoutContext,
      },
      { name: "WithContext", path: "/with-context", element: WithContext },
    ],
  },
  {
    title: "Scaling Up with Reducer and Context",
    components: [
      {
        name: "ScalingUp_ReducerWithoutContext",
        path: "/scaling-up-reducer-without-context",
        element: ScalingUp_ReducerWithoutContext,
      },
      {
        name: "ScalingUp_ReducerWithContext",
        path: "/scaling-up-reducer-with-context",
        element: ScalingUp_ReducerWithContext,
      },
    ],
  },
  {
    title: "Referencing Values with Refs",
    components: [
      {
        name: "Refs_Challenge1",
        path: "/refs-challenge1",
        element: Refs_Challenge1,
      },
      {
        name: "Refs_Challenge2",
        path: "/ref-schallenge2",
        element: Refs_Challenge2,
      },
      {
        name: "Refs_Challenge3",
        path: "/refs-challenge3",
        element: Refs_Challenge3,
      },
      {
        name: "Refs_Challenge4",
        path: "/refs-challenge4",
        element: Refs_Challenge4,
      },
    ],
  },
  {
    title: "Manipulating the DOM with Refs",
    components: [
      {
        name: "DOMRefs_Focus",
        path: "/dom-refs-focus",
        element: DOMRefs_Focus,
      },
      {
        name: "DOMRefs_Scroll",
        path: "/dom-refs-scroll",
        element: DOMRefs_Scroll,
      },
      {
        name: "DOMRefs_Scroll2",
        path: "/dom-refs-scroll-2",
        element: DOMRefs_Scroll2,
      },
      {
        name: "DOMRefs_RefForwardingDeepDive",
        path: "/dom-refs-ref-forwarding-deep-dive",
        element: DOMRefs_RefForwardingDeepDive,
      },
      {
        name: "DOMRefsRef_ModifyDOMBreak",
        path: "/dom-refs-modify-dom-break",
        element: DOMRefs_ModifyDOMBreak,
      },
      {
        name: "DOMRefsRef_Challenge1",
        path: "/dom-refs-challenge1",
        element: DOMRefs_Challenge1,
      },
      {
        name: "DOMRefsRef_Challenge2",
        path: "/dom-refs-challenge2",
        element: DOMRefs_Challenge2,
      },
      {
        name: "DOMRefsRef_Challenge3",
        path: "/dom-refs-challenge3",
        element: DOMRefs_Challenge3,
      },
      {
        name: "DOMRefsRef_Challenge4",
        path: "/dom-refs-challenge4",
        element: DOMRefs_Challenge4,
      },
    ],
  },
  {
    title: "Synchronizing with Effects",
    components: [
      {
        name: "SyncEffects_VideoPlayer",
        path: "/sync-effects-video-player",
        element: SyncEffects_VideoPlayer,
      },
      {
        name: "SyncEffects_InfiniteLoop",
        path: "/sync-effects-infinite-loop",
        element: SyncEffects_InfiniteLoop,
      },
      {
        name: "SyncEffects_InfiniteLoopFix",
        path: "/sync-effects-infinite-loop-fix",
        element: SyncEffects_InfiniteLoopFix,
      },
      {
        name: "SyncEffects_VideoPlayerTooManyRenders",
        path: "/sync-effects-video-player-too-many-renders",
        element: SyncEffects_VideoPlayerTooManyRenders,
      },
      {
        name: "SyncEffects_VideoPlayerTooManyRendersFix",
        path: "/sync-effects-video-player-too-many-renders-fix",
        element: SyncEffects_VideoPlayerTooManyRendersFix,
      },
      {
        name: "SyncEffects_ChatRoom",
        path: "/sync-effects-chat-room",
        element: SyncEffects_ChatRoom,
      },
      {
        name: "SyncEffects_Playground",
        path: "/sync-effects-playground",
        element: SyncEffects_Playground,
      },
      {
        name: "SyncEffects_Challenge1",
        path: "/sync-effects-challenge1-effects",
        element: SyncEffects_Challenge1,
      },
      {
        name: "SyncEffects_Challenge2",
        path: "/sync-effects-challenge2-effects",
        element: SyncEffects_Challenge2,
      },
      {
        name: "SyncEffects_Challenge3",
        path: "/sync-effects-challenge3-effects",
        element: SyncEffects_Challenge3,
      },
      {
        name: "SyncEffects_Challenge4",
        path: "/sync-effects-challenge4-effects",
        element: SyncEffects_Challenge4,
      },
    ],
  },
  {
    title: "TODO: You Might Not Need an Effect",
    components: [],
  },
  {
    title: "Lifecycle of Reactive Effects",
    components: [
      {
        name: "ReactiveEffects_Challenge1",
        path: "/reactive-effects-challenge1",
        element: ReactiveEffects_Challenge1,
      },
      {
        name: "ReactiveEffects_Challenge2",
        path: "/reactive-effects-challenge2",
        element: ReactiveEffects_Challenge2,
      },
      {
        name: "ReactiveEffects_Challenge3",
        path: "/reactive-effects-challenge3",
        element: ReactiveEffects_Challenge3,
      },
      {
        name: "ReactiveEffects_Challenge4",
        path: "/reactive-effects-challenge4",
        element: ReactiveEffects_Challenge4,
      },
      {
        name: "ReactiveEffects_Challenge5",
        path: "/reactive-effects-challenge5",
        element: ReactiveEffects_Challenge5,
      },
    ],
  },
  { title: "TODO: Seperating Events from Effects", components: [] },
  {
    title: "TODO: Removing Effect Dependencies",
    components: [
      {
        name: "RemovingDependencies_Challenge1",
        path: "/removing-dependencies-challenge1",
        element: RemovingDependencies_Challenge1,
      },
      {
        name: "RemovingDependencies_Challenge3",
        path: "/removing-dependencies-challenge3",
        element: RemovingDependencies_Challenge3,
      },
    ],
  },
  {
    title: "TODO: Reusing Logic with Custom Hooks",
    components: [
      {
        name: "CustomHooks_IsOnline",
        path: "/custom-hooks-is-online",
        element: CustomHooks_IsOnline,
      },
      {
        name: "CustomHooks_FormInput",
        path: "/custom-hooks-form-input",
        element: CustomHooks_FormInput,
      },
      {
        name: "CustomHooks_Chat",
        path: "/custom-hooks-chat",
        element: CustomHooks_Chat,
      },
      {
        name: "CustomHooks_Challenge1",
        path: "/custom-hooks-challenge1",
        element: CustomHooks_Challenge1,
      },
      {
        name: "CustomHooks_Challenge2",
        path: "/custom-hooks-challenge2",
        element: CustomHooks_Challenge2,
      },
    ],
  },
  {
    title: "Others",
    components: [
      {
        name: "Others_BuggyTimer",
        path: "/others-buggy-timer",
        element: Others_BuggyTimer,
      },
      {
        name: "Others_BuggyTimerFixed",
        path: "/others-buggy-timer-fixed",
        element: Others_BuggyTimerFixed,
      },
      {
        name: "Others_BuggyTimerFixed2",
        path: "/others-buggy-timer-fixed2",
        element: Others_BuggyTimerFixed2,
      },
      {
        name: "Others_Stopwatch",
        path: "/stopwatch",
        element: Others_Stopwatch,
      },
      {
        name: "Others_RefNotUpdating",
        path: "/others-ref-not-updating",
        element: Others_RefNotUpdating,
      },
      {
        name: "Others_RefUpdating",
        path: "/others-ref-updating",
        element: Others_RefUpdating,
      },
      {
        name: "Others_RefUpdating2",
        path: "/others-ref-updating-2",
        element: Others_RefUpdating2,
      },
      {
        name: "Others_VariableNotUpdating",
        path: "/others-variable-not-updating",
        element: Others_VariableNotUpdating,
      },
    ],
  },
];

// HomePage component that lists all components in cards
function HomePage() {
  return (
    <div>
      <h1>Component List</h1>
      {sections.map((section) => (
        <div>
          <h2>{section.title}</h2>
          <div className="card-container">
            {section.components.map((component) => (
              <div key={component.name} className="card">
                <h3>{component.name}</h3>
                <Link to={component.path}>Go to {component.name}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// App component with routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {sections.map((section) => (
          <>
            {section.components.map((component) => (
              <Route path={component.path} element={<component.element />} />
            ))}
          </>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
