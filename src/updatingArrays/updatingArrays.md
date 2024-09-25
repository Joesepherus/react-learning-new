<div>
  Here, you use the [...list] spread syntax to create a copy of the original
  array first. Now that you have a copy, you can use mutating methods like
  nextList.reverse() or nextList.sort(), or even assign individual items with
  nextList[0] = "something".
</div>

<div>
  However,
  <b
    >even if you copy an array, you can’t mutate existing items inside of it
    directly.</b
  >
  This is because copying is shallow—the new array will contain the same items
  as the original one. So if you modify an object inside the copied array, you
  are mutating the existing state. For example, code like this is a problem.
</div>

<div>
  <pre><code ><div ><span class="sp-syntax-keyword">const</span> <span class="sp-syntax-plain">nextList</span> = <span class="sp-syntax-punctuation">[</span><span class="sp-syntax-punctuation">...</span><span class="sp-syntax-plain">list</span><span class="sp-syntax-punctuation">]</span><span class="sp-syntax-punctuation">;</span><br></div><div class="cm-line "><span class="sp-syntax-plain">nextList</span><span class="sp-syntax-punctuation">[</span><span class="sp-syntax-static">0</span><span class="sp-syntax-punctuation">]</span>.<span class="sp-syntax-property">seen</span> = <span class="sp-syntax-static">true</span><span class="sp-syntax-punctuation">;</span> <span class="sp-syntax-comment">// Problem: mutates list[0]</span><br></div><div class="cm-line "><span class="sp-syntax-definition">setList</span><span class="sp-syntax-punctuation">(</span><span class="sp-syntax-plain">nextList</span><span class="sp-syntax-punctuation">)</span><span class="sp-syntax-punctuation">;</span></div></code></pre>
</div>

<div>
  Although nextList and list are two different arrays, nextList[0] and list[0]
  point to the same object. So by changing nextList[0].seen, you are also
  changing list[0].seen. This is a state mutation, which you should avoid! You
  can solve this issue in a similar way to updating nested JavaScript objects—by
  copying individual items you want to change instead of mutating them.
</div>
</br>
<div>
  <ul>
    <li>You can put arrays into state, but you can’t change them.</li>
    <li>
      Instead of mutating an array, create a new version of it, and update the
      state to it.
    </li>
    <li>
      You can use the [...arr, newItem] array spread syntax to create arrays
      with new items.
    </li>
    <li>
      You can use filter() and map() to create new arrays with filtered or
      transformed items.
    </li>
    <li>You can use Immer to keep your code concise.</li>
  </ul>
</div>
