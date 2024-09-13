<div>
  <h2>Reducers</h2>
  <div>
    Reducers must be pure. They should not send requests, schedule timeouts, or
    perform any side effects (operations that impact things outside the
    component). They should update objects and arrays without mutations.
  </div>
  <div>
    Each action describes a single user interaction, even if that leads to
    multiple changes in the data.
  </div>
  <div>
    To convert from useState to useReducer:
    <ul>
      <li>Dispatch actions from event handlers.</li>
      <li>
        Write a reducer function that returns the next state for a given state
        and action.
      </li>
      <li>Replace useState with useReducer.</li>
    </ul>
  </div>
</div>
