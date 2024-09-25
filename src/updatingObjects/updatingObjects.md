<ul>
  <li>Treat all state in React as immutable.</li>
  <li>
    When you store objects in state, mutating them will not trigger renders and
    will change the state in previous render “snapshots”.
  </li>
  <li>
    Instead of mutating an object, create a <em>new</em> version of it, and
    trigger a re-render by setting state to it.
  </li>
  <li>
    You can use the
    <code>{...obj, something: 'newValue'}</code>
    object spread syntax to create copies of objects.
  </li>
  <li>Spread syntax is shallow: it only copies one level deep.</li>
  <li>
    To update a nested object, you need to create copies all the way up from the
    place you’re updating.
  </li>
  <li>To reduce repetitive copying code, use Immer.</li>
</ul>
