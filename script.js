const sections = [
  {
    title: "Fluxo e objetivo da tela",
    description:
      "Revise se a solução está organizada para a tarefa que a pessoa precisa realizar no mobile.",
    items: [
      [
        "A principal tarefa da tela está clara?",
        "A pessoa deve entender por onde começar e o que pode fazer nesta etapa do fluxo.",
      ],
      [
        "A ação principal está fácil de identificar?",
        "Evite que várias ações tenham o mesmo peso visual sem necessidade.",
      ],
      [
        "Está definido como a pessoa chega à tela e para onde pode seguir?",
        "Considere entrada no fluxo, continuidade, retorno e saída.",
      ],
      [
        "A hierarquia das informações ajuda a entender o que precisa ser feito primeiro?",
        "Tamanho, posição, tipografia, agrupamento e espaço devem ajudar a orientar a próxima ação.",
      ],
      [
        "Existe algo herdado do painel web que precisa ser repensado para o contexto mobile?",
        "Não transporte automaticamente padrões, densidade ou interações do desktop para o app.",
      ],
    ],
  },
  {
    title: "Layout e áreas do sistema",
    description:
      "Revise a composição da tela em relação ao espaço disponível e às áreas controladas pelo Android.",
    items: [
      [
        "O conteúdo funciona nas larguras e alturas previstas para o app?",
        "Considere telas menores, pouca altura disponível e mudanças no espaço disponível.",
      ],
      [
        "O layout consegue se reorganizar quando há menos espaço?",
        "A solução não deve depender apenas de apertar ou reduzir elementos.",
      ],
      [
        "Conteúdos e ações importantes continuam acessíveis próximos às barras do sistema?",
        "Evite posicionar controles críticos em áreas que podem ser ocupadas pela status bar, navigation bar ou recortes da tela.",
      ],
      [
        "Elementos fixos no topo ou na base continuam utilizáveis em diferentes alturas de tela?",
        "Revise principalmente ações próximas ao topo e à base quando a altura disponível diminuir.",
      ],
      [
        "Conteúdos que podem crescer têm espaço para isso?",
        "Textos, listas, cards e mensagens devem conseguir aumentar sem sobreposição ou corte indevido.",
      ],
      [
        "Gestos ou interações próximas às bordas não competem com os gestos do Android?",
        "Dê atenção a swipe, drag, sliders e carrosséis iniciados junto às bordas.",
      ],
    ],
  },
  {
    title: "Navegação e comportamento",
    description:
      "Defina como a pessoa avança, volta, fecha superfícies e retoma o contexto.",
    items: [
      [
        "Está claro o que acontece ao usar Back nesta etapa do fluxo?",
        "Back deve levar ao destino anterior esperado e manter a continuidade do fluxo.",
      ],
      [
        "Quando existe Up na App Bar, o destino está coerente com a hierarquia do app?",
        "Up volta pela hierarquia do app; diferente de Back, não deve sair do aplicativo.",
      ],
      [
        "Bottom Sheets, Dialogs e outras superfícies têm comportamento de fechamento definido?",
        "Considere Back, gesto de fechar, toque fora e ação explícita, quando aplicável.",
      ],
      [
        "Se houver dados não salvos, está definido o que acontece ao tentar sair?",
        "Defina quando preservar, descartar ou pedir confirmação.",
      ],
      [
        "Ao voltar de um detalhe ou fluxo secundário, a pessoa retorna ao contexto esperado?",
        "A pessoa deve conseguir retomar a tarefa sem perder a referência de onde estava.",
      ],
      [
        "Existe algum estado da tela que precisa ser preservado ao sair e retornar ao app?",
        "Considere o conteúdo aberto e o progresso que precisam ser mantidos ao retornar.",
      ],
    ],
  },
  {
    title: "Componentes e padrões",
    description:
      "O objetivo aqui é identificar exceções e necessidades novas — não auditar cada componente usado na tela.",
    items: [
      [
        "O projeto utiliza os componentes mobile disponíveis no Design System sempre que aplicável?",
        "Evite criar uma solução específica quando já existe um componente adequado no DS.",
      ],
      [
        "Há algum componente sendo utilizado de forma diferente do padrão definido no Design System?",
        "Se houver, registre a exceção e o motivo para revisão.",
      ],
      [
        "A demanda criou alguma solução ou variação que ainda não existe no Design System?",
        "Sinalize para avaliar se é uma necessidade específica ou uma evolução do DS.",
      ],
      [
        "Quando necessário, ações secundárias foram organizadas sem competir com a ação principal?",
        "Quando fizer sentido, considere Menu/Overflow ou outra forma de reduzir competição visual.",
      ],
      [
        "Algum recurso nativo do Android resolveria melhor uma interação que está sendo customizada?",
        "Considere, por exemplo, seleção de data, horário, arquivos, mídia e compartilhamento.",
      ],
    ],
  },
  {
    title: "Estados da experiência",
    description:
      "Revise quais estados realmente podem acontecer nesta demanda. Não é necessário desenhar todos se eles não se aplicarem.",
    items: [
      [
        "Foram considerados os estados necessários além do fluxo ideal?",
        "Marque OK quando todos os estados aplicáveis estiverem definidos. Use a observação para registrar quais faltam.",
        [
          "Loading",
          "Empty state inicial",
          "Nenhum resultado de busca ou filtro",
          "Cenários de erro",
          "Permissão negada",
          "Sucesso ou confirmação, quando necessário",
          "Estado desabilitado ou indisponível, quando necessário",
        ],
      ],
    ],
  },
  {
    title: "Formulários e teclado",
    description:
      "Revise esta seção quando a demanda possuir campos de entrada.",
    optional: true,
    items: [
      [
        "O tipo de teclado corresponde ao dado solicitado?",
        "Ex.: numérico, e-mail, telefone ou texto.",
      ],
      [
        "O campo em foco continua visível quando o teclado está aberto?",
        "A pessoa deve conseguir ver e entender o que está preenchendo.",
      ],
      [
        "A pessoa consegue continuar a tarefa sem precisar fechar o teclado manualmente?",
        "O próximo campo ou ação necessária deve continuar acessível com o teclado aberto.",
      ],
      [
        "O layout continua funcionando com a redução de altura causada pelo teclado?",
        "Evite sobreposição, corte de conteúdo ou CTA inacessível.",
      ],
      [
        "Validação, mensagens de erro e próximo passo continuam fáceis de localizar?",
        "A mensagem deve aparecer próxima ao campo ou contexto que precisa de correção.",
      ],
    ],
  },
  {
    title: "Acessibilidade da experiência",
    description:
      "Revise decisões que dependem do contexto da tela e não são resolvidas automaticamente pelos componentes do DS.",
    items: [
      [
        "Nenhuma informação importante depende apenas de cor, posição ou ícone?",
        "Use texto, rótulo, forma ou outro sinal complementar quando necessário.",
      ],
      [
        "Ícones sem texto possuem um nome acessível que descreve a ação?",
        "Descreva o que o controle faz, não apenas a aparência do ícone.",
      ],
      [
        "Imagens informativas e decorativas estão identificadas corretamente?",
        "Imagem informativa precisa de descrição; imagem puramente decorativa pode ser ignorada pelo leitor de tela.",
      ],
      [
        "A ordem de leitura da tela faz sentido?",
        "Títulos, conteúdos e ações devem formar uma sequência compreensível quando lidos sem apoio visual.",
      ],
      [
        "Textos importantes podem quebrar linha antes de serem cortados?",
        "Evite truncar informações necessárias para compreender ou concluir a tarefa.",
      ],
      [
        "A tela continua utilizável com texto ampliado?",
        "Verifique crescimento de containers, empilhamento, rolagem e acesso às ações.",
      ],
    ],
  },
  {
    title: "Recursos do Android",
    description:
      "Revise apenas quando a demanda utilizar permissões, arquivos, fotos, compartilhamento, notificações ou outras interfaces do sistema.",
    optional: true,
    items: [
      [
        "A permissão é solicitada no momento em que a funcionalidade realmente precisa dela?",
        "Peça a permissão no contexto da ação que depende dela.",
      ],
      [
        "Existe comportamento definido caso a permissão seja negada?",
        "Considere alternativa, orientação ou limitação da funcionalidade.",
      ],
      [
        "Para selecionar documentos, foi considerado o seletor de arquivos do sistema?",
        "Evite recriar um fluxo que o Android já oferece quando o padrão nativo atende à necessidade.",
      ],
      [
        "Para selecionar fotos ou vídeos, foi considerado o Photo Picker?",
        "Avalie antes de solicitar acesso amplo à biblioteca.",
      ],
      [
        "Para compartilhar conteúdo, foi considerado o compartilhamento do Android?",
        "Considere a Sharesheet para compartilhar conteúdo com outros aplicativos.",
      ],
      [
        "Notificações seguem os padrões do Android?",
        "A notificação deve levar a pessoa ao contexto correto dentro do app.",
      ],
      [
        "Alguma interface do sistema está sendo customizada sem necessidade?",
        "Antes de criar uma solução própria, verifique se o Android já oferece essa interface.",
      ],
    ],
  },
  // {
  //   title: "Handoff",
  //   description:
  //     "Garanta que desenvolvimento consiga entender as decisões que não vêm automaticamente do Design System.",
  //   items: [
  //     [
  //       "Todos os estados necessários estão representados ou especificados?",
  //       "Inclua apenas os estados que realmente podem acontecer no fluxo.",
  //     ],
  //     [
  //       "Comportamentos que não são padrão dos componentes estão anotados?",
  //       "Exceções precisam estar visíveis no handoff.",
  //     ],
  //     [
  //       "Back, fechamento de superfícies e saída com dados não salvos estão especificados quando necessário?",
  //       "Evite deixar decisões de navegação implícitas.",
  //     ],
  //     [
  //       "Comportamentos com teclado, permissões ou recursos do sistema estão descritos quando fazem parte da demanda?",
  //       "Registre o que precisa acontecer, não apenas como a tela deve parecer.",
  //     ],
  //     [
  //       "Está claro o que vem do Design System e o que é uma exceção ou nova necessidade?",
  //       "Isso ajuda a evitar soluções duplicadas e facilita a evolução do DS.",
  //     ],
  //     [
  //       "Mudanças de layout conforme o espaço disponível estão documentadas quando necessárias?",
  //       "Indique reorganização, empilhamento, rolagem ou mudança de posição das ações.",
  //     ],
  //     [
  //       "O protótipo representa as transições importantes para entender o fluxo?",
  //       "Não é necessário prototipar tudo, apenas interações cujo comportamento não fique claro em telas estáticas.",
  //     ],
  //   ],
  // },
];

const checklistRoot = document.getElementById("checklist");
const resetButton = document.getElementById("resetBtn");
const savePdfButton = document.getElementById("savePdfBtn");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const demandNameInput = document.getElementById("demandName");
const figmaLinkInput = document.getElementById("figmaLink");

const storageKey = "frenet-android-checklist-v3";

let itemIndex = 0;

function createSlug(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createRadioOption({ id, name, value, label }) {
  return `
    <label class="ds-radio" for="${id}">
      <input
        class="ds-radio__input"
        type="radio"
        name="${name}"
        id="${id}"
        value="${value}"
      />

      <span class="ds-radio__control" aria-hidden="true"></span>
      <span class="ds-radio__label">${label}</span>
    </label>
  `;
}

function createSublist(items) {
  if (!items) {
    return "";
  }

  return `
    <ul class="sublist">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function createChecklistItem(item) {
  itemIndex += 1;

  const [criterion, helper, subitems] = item;
  const itemId = `item-${itemIndex}-${createSlug(criterion).slice(0, 36)}`;

  const element = document.createElement("div");

  element.className = "check-item";
  element.dataset.item = itemId;

  element.innerHTML = `
    <div class="check-item__content">
      <p class="criterion">${criterion}</p>
      <p class="helper">${helper}</p>
      ${createSublist(subitems)}
    </div>

    <fieldset class="status-fieldset">
      <legend class="visually-hidden">
        Status de ${criterion}
      </legend>

      <div class="status-panel">
        ${createRadioOption({
          id: `${itemId}-ok`,
          name: itemId,
          value: "ok",
          label: "OK",
        })}

        ${createRadioOption({
          id: `${itemId}-pending`,
          name: itemId,
          value: "pending",
          label: "Pendente",
        })}

        ${createRadioOption({
          id: `${itemId}-na`,
          name: itemId,
          value: "na",
          label: "N/A",
        })}
      </div>

      <span
        class="status-print"
        aria-hidden="true"
      ></span>
    </fieldset>

    <div class="note">
      <div class="note__header">
        <button
          class="note__toggle"
          type="button"
          aria-expanded="false"
          aria-controls="${itemId}-note-body"
        >
          <span>Observação</span>

          <span class="note__chevron" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>

        <button
          class="note__remove"
          type="button"
          hidden
        >
          Remover
        </button>
      </div>

      <div
        class="note__body"
        id="${itemId}-note-body"
        hidden
      >
        <textarea
          aria-label="Observação sobre ${criterion}"
          placeholder="Ex.: alinhar com Produto; revisar comportamento do Back; nova variação do DS..."
        ></textarea>
      </div>

      <p class="note__print-value"></p>
    </div>
  `;

  return element;
}

function createSection(section) {
  const element = document.createElement("section");

  element.className = "section";

  element.innerHTML = `
    <header class="section-header">
      <h2 class="section-title">
        ${section.title}
      </h2>
    </header>

    <div class="items"></div>
  `;

  const itemsContainer = element.querySelector(".items");

  section.items.forEach((item) => {
    itemsContainer.appendChild(createChecklistItem(item));
  });

  return element;
}

function clearDemandNameError() {
  const field = demandNameInput.closest(".ds-text-field");
  const errorMessage = document.getElementById("demandNameError");

  field.classList.remove("ds-text-field--error");
  errorMessage.hidden = true;
  demandNameInput.removeAttribute("aria-invalid");
}

function validateDemandName() {
  if (demandNameInput.value.trim()) {
    clearDemandNameError();
    return true;
  }

  const field = demandNameInput.closest(".ds-text-field");
  const errorMessage = document.getElementById("demandNameError");

  field.classList.add("ds-text-field--error");
  errorMessage.hidden = false;
  demandNameInput.setAttribute("aria-invalid", "true");
  demandNameInput.focus();

  return false;
}

function clearFigmaLinkError() {
  const field = figmaLinkInput.closest(".ds-text-field");
  const errorMessage = document.getElementById("figmaLinkError");

  field.classList.remove("ds-text-field--error");
  errorMessage.hidden = true;
  figmaLinkInput.removeAttribute("aria-invalid");
}

function validateFigmaLink() {
  const value = figmaLinkInput.value.trim();

  // O campo é opcional. Vazio é um estado válido.
  if (!value) {
    clearFigmaLinkError();
    return true;
  }

  try {
    const url = new URL(value);

    const isValidProtocol =
      url.protocol === "http:" ||
      url.protocol === "https:";

    const hostname = url.hostname.toLowerCase();

    const isFigmaDomain =
      hostname === "figma.com" ||
      hostname.endsWith(".figma.com");

    if (!isValidProtocol || !isFigmaDomain) {
      throw new Error("Invalid Figma URL");
    }

    clearFigmaLinkError();
    return true;
  } catch {
    const field = figmaLinkInput.closest(".ds-text-field");
    const errorMessage = document.getElementById("figmaLinkError");

    field.classList.add("ds-text-field--error");
    errorMessage.hidden = false;
    figmaLinkInput.setAttribute("aria-invalid", "true");

    return false;
  }
}

function preparePrint() {
  const demandName = demandNameInput.value.trim();
  const figmaLink = figmaLinkInput.value.trim();

  const printDemandName =
    document.getElementById("printDemandName");
  const printFigmaLink =
    document.getElementById("printFigmaLink");
  const figmaField =
    document.getElementById("figmaField");

  printDemandName.textContent = demandName;

  if (figmaLink) {
    figmaField.classList.remove(
      "ds-text-field--print-hidden",
    );

    printFigmaLink.textContent = figmaLink;
    printFigmaLink.setAttribute("href", figmaLink);
    printFigmaLink.setAttribute(
      "aria-label",
      "Abrir design no Figma",
    );
  } else {
    figmaField.classList.add(
      "ds-text-field--print-hidden",
    );

    printFigmaLink.textContent = "";
    printFigmaLink.removeAttribute("href");
    printFigmaLink.removeAttribute("aria-label");
  }

  document
    .querySelectorAll(".check-item")
    .forEach((item) => {
      const selectedStatus = item.querySelector(
        'input[type="radio"]:checked',
      );
      const statusPrint =
        item.querySelector(".status-print");

      const note = item.querySelector(".note");
      const textarea =
        note.querySelector("textarea");
      const notePrint =
        note.querySelector(".note__print-value");

      statusPrint.className = "status-print";

      if (!selectedStatus) {
        statusPrint.textContent = "Não revisado";
        statusPrint.classList.add(
          "status-print--unreviewed",
        );
      } else if (selectedStatus.value === "ok") {
        statusPrint.textContent = "OK";
        statusPrint.classList.add(
          "status-print--ok",
        );
      } else if (
        selectedStatus.value === "pending"
      ) {
        statusPrint.textContent = "Pendente";
        statusPrint.classList.add(
          "status-print--pending",
        );
      } else {
        statusPrint.textContent = "N/A";
        statusPrint.classList.add(
          "status-print--na",
        );
      }

      const observation =
        textarea.value.trim();

      if (observation) {
        note.classList.remove(
          "note--print-empty",
        );
        notePrint.textContent = observation;
      } else {
        note.classList.add(
          "note--print-empty",
        );
        notePrint.textContent = "";
      }
    });
}

function renderChecklist() {
  sections.forEach((section) => {
    checklistRoot.appendChild(createSection(section));
  });
}

function collectState() {
  const items = {};

  document.querySelectorAll(".check-item").forEach((row) => {
    const checkedRadio = row.querySelector(
      'input[type="radio"]:checked',
    );
    const textarea = row.querySelector("textarea");
    const noteToggle = row.querySelector(".note__toggle");

    items[row.dataset.item] = {
      status: checkedRadio ? checkedRadio.value : null,
      note: textarea.value,
      noteExpanded:
        noteToggle.getAttribute("aria-expanded") === "true",
    };
  });

  return {
    demandName: demandNameInput.value,
    figmaLink: figmaLinkInput.value,
    items,
  };
}

function updateSummary() {
  const checkedRadios = [
    ...document.querySelectorAll(
      '.check-item input[type="radio"]:checked',
    ),
  ];

  const total = document.querySelectorAll(".check-item").length;
  const completed = checkedRadios.length;
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  progressText.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;
  progress.setAttribute("aria-valuenow", String(percentage));

  document.querySelectorAll(".check-item").forEach((row) => {
    const isPending = Boolean(
      row.querySelector('input[value="pending"]:checked'),
    );

    row.classList.toggle("check-item--pending", isPending);
  });
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(collectState()));
  updateSummary();
}

function loadState() {
  try {
    const savedState = JSON.parse(
      localStorage.getItem(storageKey) || "{}",
    );

    demandNameInput.value = savedState.demandName || "";
    figmaLinkInput.value = savedState.figmaLink || "";

    const savedItems = savedState.items || {};

    document.querySelectorAll(".check-item").forEach((row) => {
      const itemState = savedItems[row.dataset.item];

      if (!itemState) {
        return;
      }

      if (itemState.status) {
        const radio = row.querySelector(
          `input[value="${itemState.status}"]`,
        );

        if (radio) {
          radio.checked = true;
        }
      }

      const note = row.querySelector(".note");
      const noteToggle = row.querySelector(".note__toggle");
      const noteBody = row.querySelector(".note__body");
      const noteRemove = row.querySelector(".note__remove");
      const textarea = row.querySelector("textarea");

      textarea.value = itemState.note || "";

      const hasContent = textarea.value.trim().length > 0;
      const shouldExpand = Boolean(itemState.noteExpanded);

      note.classList.toggle("note--has-content", hasContent);
      noteRemove.hidden = !hasContent || !shouldExpand;
      noteBody.hidden = !shouldExpand;
      noteToggle.setAttribute(
        "aria-expanded",
        String(shouldExpand),
      );
    });
  } catch (error) {
    console.error("Não foi possível carregar o checklist salvo.", error);
  }

  updateSummary();
}

function resetChecklist() {
  const shouldReset = window.confirm(
    "Limpar todas as respostas e observações deste checklist?",
  );

  if (!shouldReset) {
    return;
  }

  localStorage.removeItem(storageKey);

  demandNameInput.value = "";
  figmaLinkInput.value = "";

  document
    .querySelectorAll('input[type="radio"]')
    .forEach((input) => {
      input.checked = false;
    });

  document.querySelectorAll("textarea").forEach((textarea) => {
    textarea.value = "";
  });

  document.querySelectorAll(".note").forEach((note) => {
    const noteToggle = note.querySelector(".note__toggle");
    const noteBody = note.querySelector(".note__body");
    const noteRemove = note.querySelector(".note__remove");

    note.classList.remove("note--has-content");
    noteToggle.setAttribute("aria-expanded", "false");
    noteBody.hidden = true;
    noteRemove.hidden = true;
  });

  clearDemandNameError();
  clearFigmaLinkError();
  updateSummary();
}

renderChecklist();
loadState();

document.addEventListener("change", (event) => {
  if (event.target.matches('input[type="radio"]')) {
    saveState();
  }
});

demandNameInput.addEventListener("input", () => {
  if (demandNameInput.value.trim()) {
    clearDemandNameError();
  }

  saveState();
});

figmaLinkInput.addEventListener("input", () => {
  const value = figmaLinkInput.value.trim();

  if (!value) {
    clearFigmaLinkError();
  } else if (figmaLinkInput.getAttribute("aria-invalid") === "true") {
    validateFigmaLink();
  }

  saveState();
});

document.addEventListener("input", (event) => {
  if (!event.target.matches("textarea")) {
    return;
  }

  const note = event.target.closest(".note");
  const noteRemove = note.querySelector(".note__remove");
  const hasContent = event.target.value.trim().length > 0;
  const isExpanded =
    note
      .querySelector(".note__toggle")
      .getAttribute("aria-expanded") === "true";

  note.classList.toggle("note--has-content", hasContent);
  noteRemove.hidden = !hasContent || !isExpanded;

  saveState();
});

document.addEventListener("click", (event) => {
  const toggleButton = event.target.closest(".note__toggle");

  if (toggleButton) {
    const note = toggleButton.closest(".note");
    const noteBody = note.querySelector(".note__body");
    const noteRemove = note.querySelector(".note__remove");
    const textarea = note.querySelector("textarea");
    const isExpanded =
      toggleButton.getAttribute("aria-expanded") === "true";
    const nextExpanded = !isExpanded;
    const hasContent = textarea.value.trim().length > 0;

    toggleButton.setAttribute(
      "aria-expanded",
      String(nextExpanded),
    );

    noteBody.hidden = !nextExpanded;
    noteRemove.hidden = !nextExpanded || !hasContent;

    saveState();

    return;
  }

  const removeButton = event.target.closest(".note__remove");

  if (removeButton) {
    const note = removeButton.closest(".note");
    const noteToggle = note.querySelector(".note__toggle");
    const noteBody = note.querySelector(".note__body");
    const textarea = note.querySelector("textarea");

    textarea.value = "";
    note.classList.remove("note--has-content");
    noteToggle.setAttribute("aria-expanded", "false");
    noteBody.hidden = true;
    removeButton.hidden = true;

    saveState();
  }
});

resetButton.addEventListener("click", resetChecklist);

savePdfButton.addEventListener("click", () => {
  const isDemandNameValid = validateDemandName();
  const isFigmaLinkValid = validateFigmaLink();

  if (!isDemandNameValid || !isFigmaLinkValid) {
    if (!isDemandNameValid) {
      demandNameInput.focus();
    } else {
      figmaLinkInput.focus();
    }

    return;
  }

  preparePrint();
  window.print();
});

window.addEventListener(
  "beforeprint",
  preparePrint,
);

window.addEventListener("beforeprint", () => {
  preparePrint();
});
