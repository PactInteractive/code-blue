// Trigger highlighting manually after tweets render
window.Prism = window.Prism || {};
window.Prism.manual = true;

const codeTicks = '```';
const codeLanguage = '\\w+';
const newlinesAfterCodeBlockOpen = '\\n*';
const tweetSelector = '[data-testid="tweetText"]';

function highlightCodeBlocks(/** @type {Element} */ tweet) {
  const codeBlocks = tweet.textContent.match(
    new RegExp(codeTicks + codeLanguage, 'g')
  );
  codeBlocks.forEach((codeBlock) => {
    const language = codeBlock.replace(codeTicks, '');
    tweet.innerHTML = tweet.innerHTML
      .replace(
        new RegExp(codeBlock + newlinesAfterCodeBlockOpen),
        `<pre><code class="language-${language}">`
      )
      .replace(codeTicks, `</code></pre>`);
  });
}

const observer = new MutationObserver((mutations) => {
  let anyCodeBlocksFound = false;

  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const tweets = node.querySelectorAll(tweetSelector);
        tweets.forEach((tweet) => {
          if (tweet.textContent.includes(codeTicks)) {
            highlightCodeBlocks(tweet);
            anyCodeBlocksFound = true;
          }
        });
      }
    });
  });

  if (anyCodeBlocksFound) {
    Prism.highlightAll();
  }
});

observer.observe(document.body, {
  attributeFilter: ['data-testid'],
  childList: true,
  subtree: true,
});
