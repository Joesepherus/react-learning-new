<div class="p-8 border-t dark:border-purple-60 border-purple-10">
  <h3>Objects are not really nested</h3>
  <p class="whitespace-pre-wrap my-4">
    An object like this appears “nested” in code:
  </p>
  <div
    dir="ltr"
    class="sandpack sandpack--codeblock rounded-2xl h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg my-8"
    style="contain: content"
  >
    <div class="sp-wrapper">
      <div class="sp-stack">
        <div class="sp-code-editor">
          <pre
            class="sp-cm sp-pristine sp-javascript flex align-start"
          ><code class="sp-pre-placeholder grow-[2]"><div class="cm-line "><span class="sp-syntax-keyword">let</span> <span class="sp-syntax-plain">obj</span> = <span class="sp-syntax-punctuation">{</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">name</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Niki de Saint Phalle'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">artwork</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-punctuation">{</span><br></div><div class="cm-line ">    <span class="sp-syntax-property">title</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Blue Nana'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">    <span class="sp-syntax-property">city</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Hamburg'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">    <span class="sp-syntax-property">image</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'https://i.imgur.com/Sd1AgUOm.jpg'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-punctuation">}</span><br></div><div class="cm-line "><span class="sp-syntax-punctuation">}</span><span class="sp-syntax-punctuation">;</span></div></code></pre>
        </div>
      </div>
    </div>
  </div>
  <p class="whitespace-pre-wrap my-4">
    However, “nesting” is an inaccurate way to think about how objects behave.
    When the code executes, there is no such thing as a “nested” object. You are
    really looking at two different objects:
  </p>
  <div
    dir="ltr"
    class="sandpack sandpack--codeblock rounded-2xl h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg my-8"
    style="contain: content"
  >
    <div class="sp-wrapper">
      <div class="sp-stack">
        <div class="sp-code-editor">
          <pre
            class="sp-cm sp-pristine sp-javascript flex align-start"
          ><code class="sp-pre-placeholder grow-[2]"><div class="cm-line "><span class="sp-syntax-keyword">let</span> <span class="sp-syntax-plain">obj1</span> = <span class="sp-syntax-punctuation">{</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">title</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Blue Nana'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">city</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Hamburg'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">image</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'https://i.imgur.com/Sd1AgUOm.jpg'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line "><span class="sp-syntax-punctuation">}</span><span class="sp-syntax-punctuation">;</span><br></div><div class="cm-line "><br></div><div class="cm-line "><span class="sp-syntax-keyword">let</span> <span class="sp-syntax-plain">obj2</span> = <span class="sp-syntax-punctuation">{</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">name</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Niki de Saint Phalle'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">artwork</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-plain">obj1</span><br></div><div class="cm-line "><span class="sp-syntax-punctuation">}</span><span class="sp-syntax-punctuation">;</span></div></code></pre>
        </div>
      </div>
    </div>
  </div>
  <p class="whitespace-pre-wrap my-4">
    The
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj1</code
    >
    object is not “inside”
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj2</code
    >. For example,
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj3</code
    >
    could “point” at
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj1</code
    >
    too:
  </p>
  <div
    dir="ltr"
    class="sandpack sandpack--codeblock rounded-2xl h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg my-8"
    style="contain: content"
  >
    <div class="sp-wrapper">
      <div class="sp-stack">
        <div class="sp-code-editor">
          <pre
            class="sp-cm sp-pristine sp-javascript flex align-start"
          ><code class="sp-pre-placeholder grow-[2]"><div class="cm-line "><span class="sp-syntax-keyword">let</span> <span class="sp-syntax-plain">obj1</span> = <span class="sp-syntax-punctuation">{</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">title</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Blue Nana'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">city</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Hamburg'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">image</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'https://i.imgur.com/Sd1AgUOm.jpg'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line "><span class="sp-syntax-punctuation">}</span><span class="sp-syntax-punctuation">;</span><br></div><div class="cm-line "><br></div><div class="cm-line "><span class="sp-syntax-keyword">let</span> <span class="sp-syntax-plain">obj2</span> = <span class="sp-syntax-punctuation">{</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">name</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Niki de Saint Phalle'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">artwork</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-plain">obj1</span><br></div><div class="cm-line "><span class="sp-syntax-punctuation">}</span><span class="sp-syntax-punctuation">;</span><br></div><div class="cm-line "><br></div><div class="cm-line "><span class="sp-syntax-keyword">let</span> <span class="sp-syntax-plain">obj3</span> = <span class="sp-syntax-punctuation">{</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">name</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-string">'Copycat'</span><span class="sp-syntax-punctuation">,</span><br></div><div class="cm-line ">  <span class="sp-syntax-property">artwork</span><span class="sp-syntax-punctuation">:</span> <span class="sp-syntax-plain">obj1</span><br></div><div class="cm-line "><span class="sp-syntax-punctuation">}</span><span class="sp-syntax-punctuation">;</span></div></code></pre>
        </div>
      </div>
    </div>
  </div>
  <p class="whitespace-pre-wrap my-4">
    If you were to mutate
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj3.artwork.city</code
    >, it would affect both
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj2.artwork.city</code
    >
    and
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj1.city</code
    >. This is because
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj3.artwork</code
    >,
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj2.artwork</code
    >, and
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >obj1</code
    >
    are the same object. This is difficult to see when you think of objects as
    “nested”. Instead, they are separate objects “pointing” at each other with
    properties.
  </p>
</div>
