<div class="relative">
  <div class="py-2">
    <p class="whitespace-pre-wrap my-4">
      Functions passed to event handlers must be passed, not called. For
      example:
    </p>
    <table>
      <thead>
        <tr>
          <th>passing a function (correct)</th>
          <th>calling a function (incorrect)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code
              dir="ltr"
              class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >&lt;button onClick={handleClick}&gt;</code
            >
          </td>
          <td>
            <code
              dir="ltr"
              class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >&lt;button onClick={handleClick()}&gt;</code
            >
          </td>
        </tr>
      </tbody>
    </table>
    <p class="whitespace-pre-wrap my-4">
      The difference is subtle. In the first example, the
      <code
        dir="ltr"
        class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
        >handleClick</code
      >
      function is passed as an
      <code
        dir="ltr"
        class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
        >onClick</code
      >
      event handler. This tells React to remember it and only call your function
      when the user clicks the button.
    </p>
    <p class="whitespace-pre-wrap my-4">
      In the second example, the
      <code
        dir="ltr"
        class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
        >()</code
      >
      at the end of
      <code
        dir="ltr"
        class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
        >handleClick()</code
      >
      fires the function <em>immediately</em> during
      <a
        class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
        href="/learn/render-and-commit"
        >rendering</a
      >, without any clicks. This is because JavaScript inside the
      <a
        class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
        href="/learn/javascript-in-jsx-with-curly-braces"
        >JSX
        <code
          dir="ltr"
          class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
          >{</code
        >
        and
        <code
          dir="ltr"
          class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
          >}</code
        ></a
      >
      executes right away.
    </p>
    <p class="whitespace-pre-wrap my-4">
      When you write code inline, the same pitfall presents itself in a
      different way:
    </p>
    <table>
      <thead>
        <tr>
          <th>passing a function (correct)</th>
          <th>calling a function (incorrect)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code
              dir="ltr"
              class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >&lt;button onClick={() =&gt; alert('...')}&gt;</code
            >
          </td>
          <td>
            <code
              dir="ltr"
              class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
              >&lt;button onClick={alert('...')}&gt;</code
            >
          </td>
        </tr>
      </tbody>
    </table>
    <p class="whitespace-pre-wrap my-4">
      Passing inline code like this won’t fire on click—it fires every time the
      component renders:
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
            ><code class="sp-pre-placeholder grow-[2]"><div class="cm-line "><span class="sp-syntax-comment">// This alert fires when the component renders, not when clicked!</span><br></div><div class="cm-line "><span class="sp-syntax-punctuation">&lt;</span><span class="sp-syntax-tag">button</span> <span class="sp-syntax-property">onClick</span>=<span class="sp-syntax-punctuation">{</span><span class="sp-syntax-definition">alert</span><span class="sp-syntax-punctuation">(</span><span class="sp-syntax-string">'You clicked me!'</span><span class="sp-syntax-punctuation">)</span><span class="sp-syntax-punctuation">}</span><span class="sp-syntax-punctuation">&gt;</span></div></code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="whitespace-pre-wrap my-4">
      If you want to define your event handler inline, wrap it in an anonymous
      function like so:
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
            ><code class="sp-pre-placeholder grow-[2]"><div class="cm-line "><span class="sp-syntax-punctuation">&lt;</span><span class="sp-syntax-tag">button</span> <span class="sp-syntax-property">onClick</span>=<span class="sp-syntax-punctuation">{</span><span class="sp-syntax-punctuation">(</span><span class="sp-syntax-punctuation">)</span> <span class="sp-syntax-punctuation">=&gt;</span> <span class="sp-syntax-definition">alert</span><span class="sp-syntax-punctuation">(</span><span class="sp-syntax-string">'You clicked me!'</span><span class="sp-syntax-punctuation">)</span><span class="sp-syntax-punctuation">}</span><span class="sp-syntax-punctuation">&gt;</span></div></code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="whitespace-pre-wrap my-4">
      Rather than executing the code inside with every render, this creates a
      function to be called later.
    </p>
    <p class="whitespace-pre-wrap my-4">
      In both cases, what you want to pass is a function:
    </p>
    <ul class="ms-6 my-3 list-disc">
      <li class="leading-relaxed mb-1">
        <code
          dir="ltr"
          class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
          >&lt;button onClick={handleClick}&gt;</code
        >
        passes the
        <code
          dir="ltr"
          class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
          >handleClick</code
        >
        function.
      </li>
      <li class="leading-relaxed mb-1">
        <code
          dir="ltr"
          class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
          >&lt;button onClick={() =&gt; alert('...')}&gt;</code
        >
        passes the
        <code
          dir="ltr"
          class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
          >() =&gt; alert('...')</code
        >
        function.
      </li>
    </ul>
    <p class="whitespace-pre-wrap my-4">
      <a
        href="https://javascript.info/arrow-functions-basics"
        target="_blank"
        rel="nofollow noopener noreferrer"
        class="inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal"
        >Read more about arrow functions.</a
      >
    </p>
  </div>
</div>
<div>
  <h3>Event propagation</h3>
  <div>
    Event handlers will also catch events from any children your component might
    have. We say that an event “bubbles” or “propagates” up the tree: it starts
    with where the event happened, and then goes up the tree.
  </div>
  <p class="whitespace-pre-wrap my-4">
    This
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >&lt;div&gt;</code
    >
    contains two buttons. Both the
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >&lt;div&gt;</code
    >
    <em>and</em> each button have their own
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >onClick</code
    >
    handlers. Which handlers do you think will fire when you click a button?
  </p>
  <div>
    All events propagate in React except onScroll, which only works on the JSX
    tag you attach it to.
  </div>
</div>
<div>
  <h3>Stopping Event Propagation</h3>
  <p class="whitespace-pre-wrap my-4">
    That event object also lets you stop the propagation. If you want to prevent
    an event from reaching parent components, you need to call
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >e.stopPropagation()</code
    >
    like this
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >Button</code
    >
    component does:
  </p>
  <p class="whitespace-pre-wrap my-4">
    Event handlers receive an <strong class="font-bold">event object</strong> as
    their only argument. By convention, it’s usually called
    <code
      dir="ltr"
      class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px"
      >e</code
    >, which stands for “event”. You can use this object to read information
    about the event.
  </p>
</div>
<div>
  <div>
    In rare cases, you might need to catch all events on child elements,
    <em>even if they stopped propagation</em>. For example, maybe you want to
    log every click to analytics, regardless of the propagation logic. You can
    do this by adding <code>Capture</code> at the end of the event name:
  </div>
  <pre>
  <code>&lt;div onClickCapture={() =&gt; { /* this runs first */ }}&gt;
      &lt;button onClick={e =&gt; e.stopPropagation()} /&gt;
      &lt;button onClick={e =&gt; e.stopPropagation()} /&gt;
  &lt;/div&gt;</pre></code>
    <div>Each event propagates in three phases:</div>
    <ul>
      <li>
        It travels down, calling all onClickCapture handlers.
      </li>
      <li>It runs the clicked element’s onClick handler.</li>
      <li>It travels upwards, calling all onClick handlers.</li>
    </ul>
    <div>Capture events are useful for code like routers or analytics, but you probably won’t use them in app code.P</div>
</div>
<div>
<h3>
Preventing default behavior
</h3>
<div>
Some browser events have default behavior associated with them. For example, a <form> submit event, which happens when a button inside of it is clicked, will reload the whole page by default.
You can call e.preventDefault() on the event object to stop this from happening.
</div>
</div>
<div>
<ul>
<li>You can handle events by passing a function as a prop to an element like &lt;button&gt.</li>
<li>Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.</li>
<li>You can define an event handler function separately or inline.</li>
<li>Event handlers are defined inside a component, so they can access props.</li>
<li>You can declare an event handler in a parent and pass it as a prop to a child.</li>
<li>You can define your own event handler props with application-specific names.</li>
<li>Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.</li>
<li>Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.</li>
<li>Explicitly calling an event handler prop from a child handler is a good alternative to propagation.</li>

</ul>
</div>