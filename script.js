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
      ...section.rules
    ].join(" "));

    return searchable.includes(query);
  });

  rulesGrid.innerHTML = filteredSections.map((section, index) => `
    <article class="rule-card">
      <div class="rule-card-header">
        <span class="rule-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${section.title}</h3>
          <span class="rule-tag">${section.tag}</span>
        </div>
      </div>
      <ol class="rule-list">
        ${section.rules.map((rule) => `<li>${rule}</li>`).join("")}
      </ol>
    </article>
  `).join("");

  emptyState.hidden = filteredSections.length !== 0;
}

searchInput.addEventListener("input", (event) => {
  renderRules(event.target.value);
});

renderRules();
