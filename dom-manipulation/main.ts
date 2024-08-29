const $hotButton = document.querySelector('.hot-button');
console.log('value of $hotButton: ', $hotButton);
console.dir($hotButton);
if (!$hotButton) {
  throw new Error('The $hotButton query failed');
}
const $clickCount = document.querySelector('.click-count');
console.log('value of $clickCount: ', $clickCount);
console.dir($clickCount);
if (!$clickCount) {
  throw new Error('The $clickCount query failed');
}

let buttonClickedCount: number = 0;
const handleClick = (): void => {
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  buttonClickedCount++;
  console.log('value of buttonClickedCount: ', buttonClickedCount);
  $clickCount.textContent = 'Clicks: ' + buttonClickedCount;
  const clickThreshold =
    buttonClickedCount < 4
      ? 'cold'
      : buttonClickedCount < 7
      ? 'cool'
      : buttonClickedCount < 10
      ? 'tepid'
      : buttonClickedCount < 13
      ? 'warm'
      : buttonClickedCount < 16
      ? 'hot'
      : 'nuclear';
  $hotButton.className = 'hot-button ' + clickThreshold;
};

$hotButton.addEventListener('click', handleClick);
