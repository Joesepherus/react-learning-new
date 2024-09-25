<ul>
  <li>
    Use a state variable when a component needs to “remember” some information
    between renders.
  </li>
  <li>State variables are declared by calling the useState Hook.</li>
  <li>
    Hooks are special functions that start with use. They let you “hook into”
    React features like state.
  </li>
  <li>
    Hooks might remind you of imports: they need to be called unconditionally.
    Calling Hooks, including useState, is only valid at the top level of a
    component or another Hook.
  </li>
  <li>
    The useState Hook returns a pair of values: the current state and the
    function to update it.
  </li>
  <li>
    You can have more than one state variable. Internally, React matches them up
    by their order.
  </li>
  <li>
    State is private to the component. If you render it in two places, each copy
    gets its own state.
  </li>
</ul>
