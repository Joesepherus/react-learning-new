<div>
  <h2>Context</h2>
  <div>
    <ul>
      <li>
        Context lets a component provide some information to the entire tree
        below it.
      </li>
      <li>
        To pass context:
        <ol>
          <li>
            Create and export it with <code>export const MyContext = createContext(defaultValue)</code>.
          </li>
          <li>
            Pass it to the <code>useContext(MyContext)</code> Hook to read it in any child
            component, no matter how deep.
          </li>
          <li>
            Wrap children into <code>&lt;MyContext.Provider value={...}&gt;</code> to provide it from a parent.
          </li>
        </ol>
      </li>
      <li>Context passes through any components in the middle.</li>
      <li>
        Context lets you write components that “adapt to their surroundings”.
      </li>
      <li>
        Before you use context, try passing props or passing JSX as children.
      </li>
    </ul>
  </div>
</div>
