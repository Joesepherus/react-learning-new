<ul>
<li>React keeps state for as long as the same component is rendered at the same position.</li>
<li>State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.</li>
<li>You can force a subtree to reset its state by giving it a different key.</li>
<li>Don’t nest component definitions, or you’ll reset state by accident.</li>
</ul>