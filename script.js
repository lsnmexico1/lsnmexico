const rulesGrid = document.querySelector("#rulesGrid");
const searchInput = document.querySelector("#ruleSearch");
const emptyState = document.querySelector("#emptyState");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

function normalizeText(text) {
  return text
    .toString()
    .toLocaleLowerCase("hu-HU")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderRules(filter = "") {
  const query = normalizeText(filter.trim());

  const filteredSections = RULE_SECTIONS.filter((section) => {
    const searchable = normalizeText([
      section.title,
      section.tag,
      ...section.rules,
    ].join(" "));

    return searchable.includes(query);
  });

  rulesGrid.innerHTML = filteredSections
    .map(
      (section, index) => `
      <details class="rule-card" ${query ? "open" : index === 0 ? "open" : ""}>
        <summary class="rule-summary">
          <div class="rule-summary-left">
            <span class="rule-number">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>${section.title}</h3>
              <div class="rule-meta">
                <span class="rule-tag">${section.tag}</span>
                <span class="rule-count">${section.rules.length} szabály</span>
              </div>
            </div>
          </div>
          <span class="rule-chevron">⌄</span>
        </summary>
        <div class="rule-body">
          <ol class="rule-list">
            ${section.rules.map((rule) => `<li>${rule}</li>`).join("")}
          </ol>
        </div>
      </details>
    `
    )
    .join("");

  emptyState.hidden = filteredSections.length !== 0;
}

searchInput.addEventListener("input", (event) => {
  renderRules(event.target.value);
});

renderRules();
