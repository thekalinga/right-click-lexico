const googleUrl = 'https://www.lexico.com/';
const developersUrl = 'https://github.com/thekalinga/right-click-lexico';

const googleMenu = document.getElementById('google') as HTMLAnchorElement;
const devMenu = document.getElementById('developers') as HTMLAnchorElement;
const issueMenu = document.getElementById('issues') as HTMLAnchorElement;

googleMenu.addEventListener('click', () =>
  chrome.tabs.create({ url: googleUrl })
);
devMenu.addEventListener('click', () =>
  chrome.tabs.create({ url: developersUrl })
);
issueMenu.addEventListener('click', () =>
  chrome.tabs.create({ url: `${developersUrl}/issues` })
);
