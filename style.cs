/* Error: expected "}".
 *     ,
 * 247 | }
 *     |  ^
 *     '
 *   style.scss 247:2  root stylesheet */

body::before {
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
      "Droid Sans Mono", monospace, monospace;
  white-space: pre;
  display: block;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  content: 'Error: expected "}".\a     \2577 \a 247 \2502  }\d\a     \2502   ^\a     \2575 \a   style.scss 247:2  root stylesheet';
}
