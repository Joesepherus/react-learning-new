<ul>
  <li>
    Setting state does not change the variable in the existing render, but it
    requests a new render.
  </li>
  <li>
    React processes state updates after event handlers have finished running.
    This is called batching.
  </li>
  <li>
    To update some state multiple times in one event, you can use setNumber(n =>
    n + 1) updater function.
  </li>
</ul>
