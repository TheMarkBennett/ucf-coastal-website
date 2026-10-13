const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
const siteHeader = document.querySelector('.site-header');

document.documentElement.classList.add('js-enabled');

function setMenuOpen(open) {
  menuButton?.setAttribute('aria-expanded', String(open));
  menuButton?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation?.classList.toggle('is-open', open);
  siteHeader?.classList.toggle('menu-open', open);
}

function closeMenu() {
  setMenuOpen(false);
}

function toggleMenu() {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!open);
}

menuButton?.addEventListener('click', toggleMenu);

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

// Generic directory filter + search: supports any element with [data-directory]
// containing a search input [data-directory-search], filter checkboxes
// [data-filter-group][data-filter-value] or select dropdowns [data-filter-group], and cards [data-directory-item]
// carrying data-category (space-separated) and data-search-text.
document.querySelectorAll('[data-directory]').forEach((directory) => {
  const items = [...directory.querySelectorAll('[data-directory-item]')];
  const searchField = directory.querySelector('[data-directory-search]');
  const filterInputs = [...directory.querySelectorAll('[data-filter-value], select[data-filter-group]')];
  const countEl = directory.querySelector('[data-directory-count]');
  const emptyEl = directory.querySelector('[data-directory-empty]');
  const clearBtn = directory.querySelector('[data-directory-clear]');

  function activeFiltersByGroup() {
    const groups = {};
    filterInputs.forEach((input) => {
      const group = input.dataset.filterGroup || 'default';
      const value = input.matches('select') ? input.value : (input.checked ? input.dataset.filterValue : '');
      if (!value) return;
      (groups[group] ||= []).push(value.toLowerCase());
    });
    return groups;
  }

  function applyFilters() {
    const query = (searchField?.value ?? '').trim().toLocaleLowerCase();
    const groups = activeFiltersByGroup();
    let visible = 0;

    items.forEach((item) => {
      const text = `${item.dataset.searchText ?? ''} ${item.textContent ?? ''}`.toLocaleLowerCase();
      const matchesQuery = !query || text.includes(query);
      const categories = (item.dataset.category ?? '').toLowerCase().split(/\s+/).filter(Boolean);
      const matchesFilters = Object.values(groups).every((values) =>
        values.length === 0 || values.some((value) => categories.includes(value))
      );
      const match = matchesQuery && matchesFilters;
      item.hidden = !match;
      if (match) visible += 1;
    });

    if (emptyEl) emptyEl.hidden = visible > 0;
    if (countEl) {
      countEl.innerHTML = `Showing <strong>${visible}</strong> of <strong>${items.length}</strong> ${items.length === 1 ? 'result' : 'results'}`;
    }
  }

  searchField?.addEventListener('input', applyFilters);
  filterInputs.forEach((input) => input.addEventListener('change', applyFilters));
  clearBtn?.addEventListener('click', () => {
    if (searchField) searchField.value = '';
    filterInputs.forEach((input) => {
      if (input.matches('select')) input.selectedIndex = 0;
      else input.checked = false;
    });
    applyFilters();
    searchField?.focus();
  });

  if (items.length) applyFilters();
});
