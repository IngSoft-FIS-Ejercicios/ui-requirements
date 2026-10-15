import './style.css';
import { initialRequirements, nextId, type Requirement, type RequirementType } from '../domain/requirements';

const requirements: Requirement[] = [...initialRequirements];

const tbody = document.querySelector<HTMLTableSectionElement>('#requirements-body')!;
const form = document.querySelector<HTMLFormElement>('#requirement-form')!;
const status = document.querySelector<HTMLParagraphElement>('#status')!;

const countTotal = document.querySelector<HTMLSpanElement>('#count-total')!;
const countFunctional = document.querySelector<HTMLSpanElement>('#count-functional')!;
const countNonFunctional = document.querySelector<HTMLSpanElement>('#count-non-functional')!;
const nfrWarning = document.querySelector<HTMLParagraphElement>('#nfr-warning')!;

function typeLabel(type: RequirementType): string {
  return type === 'functional' ? 'Funcional' : 'No funcional';
}

function renderTable(): void {
  tbody.replaceChildren();
  for (const requirement of requirements) {
    const row = document.createElement('tr');

    const id = document.createElement('th');
    id.scope = 'row';
    id.textContent = requirement.id;

    const title = document.createElement('td');
    title.textContent = requirement.title;
    title.title = requirement.description;

    const type = document.createElement('td');
    const badge = document.createElement('span');
    badge.className = `badge-type badge-${requirement.type}`;
    badge.textContent = typeLabel(requirement.type);
    type.append(badge);

    const mandatory = document.createElement('td');
    mandatory.textContent = requirement.mandatory ? 'Sí' : 'No';

    row.append(id, title, type, mandatory);
    tbody.append(row);
  }
}

// TODO (desafío): completar updateCounters.
// Recibe la lista de requisitos y debe:
//   1. Mostrar el total en #count-total (countTotal).
//   2. Mostrar la cantidad de funcionales en #count-functional (countFunctional).
//   3. Mostrar la cantidad de no funcionales en #count-non-functional (countNonFunctional).
//   4. Mostrar el aviso #nfr-warning (nfrWarning) únicamente si no hay ningún requisito no funcional.
function updateCounters(requirements: Requirement[]): void {
  // Escribir la implementación acá.
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);

  const type = data.get('type') as RequirementType;
  const requirement: Requirement = {
    id: nextId(type, requirements),
    title: String(data.get('title')).trim(),
    description: String(data.get('description')).trim(),
    type,
    mandatory: data.get('mandatory') === 'on',
  };

  requirements.push(requirement);
  renderTable();
  updateCounters(requirements);

  status.textContent = `Requisito ${requirement.id} agregado.`;
  form.reset();
});

renderTable();
updateCounters(requirements);
