# Code Blue
## Privacy Policy
### What information does Code Blue access?
In order to render code blocks in a tweet, the extension needs to read all the content of the page when you open x.com - it does not have access to any other domains. You can see the code responsible for that here: [src/highlightCodeBlocks.js](https://github.com/PactInteractive/code-blue/blob/master/src/highlightCodeBlocks.js)

### How does Code Blue use that information?
Code Blue only uses the extracted information to process code blocks starting with ``` in tweets, then replaces the original tweet HTML with the processed HTML, providing syntax highlighting for code and rendering math formulae using LaTeX.

### Does Code Blue share any information?
The extension does not store, send, or sell your data in any way! No data leaves your computer!
