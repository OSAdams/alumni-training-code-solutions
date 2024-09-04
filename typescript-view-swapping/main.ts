const $tabContainer = document.querySelector('.tab-container') as HTMLElement;
if (!$tabContainer) {
  throw new Error('Query for $tabContainer failed');
}
const $tabs = document.querySelectorAll('.tab') as NodeListOf<HTMLElement>;
if (!$tabs) {
  throw new Error('Query for $tabs failed');
}
const $views = document.querySelectorAll('.view') as NodeListOf<HTMLElement>;
if (!$views) {
  throw new Error('Query for $views failed');
}

$tabContainer.addEventListener('click', (e: Event): void => {
  const $eventTarget = e.target as HTMLDivElement;
  const $dataView: string | null = $eventTarget.getAttribute('data-view');
  if ($eventTarget.matches('.tab')) {
    for (const tab of $tabs) {
      if (tab === $eventTarget) {
        tab.setAttribute('class', 'tab active');
      } else {
        tab.setAttribute('class', 'tab');
      }
    }
    for (const view of $views) {
      if (view.getAttribute('data-view') === $dataView) {
        view.setAttribute('class', 'view');
      } else {
        view.setAttribute('class', 'view hidden');
      }
    }
  }
});
