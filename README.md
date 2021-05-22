<h1><img src="resources/icon.png"/>U(nicode-E)moji</h1>

<a href="https://umoji.eladkarako.com/">https://umoji.eladkarako.com/</a>, <a href="https://eladkarako.github.io/umoji/index.html">https://eladkarako.github.io/umoji/index.html</a>.

<hr/>

<h3>Quick copy emoji characters</h3>

For developers: th!s website holds a lot of HTML elements, but still renders quite fast, using some tricks. see source. :]

<hr/>

older versions also available under resources.

<hr/>

<pre>
╔════════════╤══════════════════════════════════╗
║ JavaScript │
╟︎────────────┘
║ ☆ event-listeners are passive.
║ ☆ functions are async (mostly).
║ ☆ no use of await.
║ ☆ stuff runs after window.onload (mostly).
║ ☆ no logic in BODY, just presentation nodes.
╠═════════════════════╤═════════════════════════╣
║ CSS instead-of HTML │
╟︎─────────────────────┘
║ ☆ buttons' "textual-content" is CSS-rendered.
╠═════╤═════════════════════════════════════════╣
║ CSS │
╟︎─────┘
║ ☆ not using font resources.
║ ☆ hand-picked font-family list for optimized glyth-coverage.
║ ☆ normalized elements-flow (reduces lags).
║ ☆ disabling smooth-scroll (reduces lags).
║ ☆ disabling double-click-to-zoom gesture (clicks are 300ms faster).
║ ☆ favoring speed over quality (faster rendering).
║ ☆ HTML gets style, other nodes inherit from it (mostly).
╠═══════════════════════════════════════════════════════════╤═════════════╣
║ known issues points-of-interest in current implementation │
╟︎───────────────────────────────────────────────────────────┘
║ ★ long time until actually "showing stuff".
║ ★ needs "loading" progress indication.
║ ★ everything is JavaScript based (needs NOSCRIPT).
║ ★ unsearchable text due to CSS-rendering.
║ ★ files' EOL-changes prevent using "integrity=sha256-" (fixable..)
║ ★ external resource loading (characters.json).
║ ★ external resource effects DOM (needs content validation).
╚═════════════════════════════════════════════════════════════════════════╝
</pre>