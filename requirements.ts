export type RequirementType = 'functional' | 'non-functional';

export interface Requirement {
  id: string;
  title: string;
  description: string;
  type: RequirementType;
  mandatory: boolean;
}

export const initialRequirements: Requirement[] = [
  {
    id: 'RF-01',
    title: 'Registrar requisito',
    description: 'El sistema debe permitir cargar un requisito con título y descripción.',
    type: 'functional',
    mandatory: true,
  },
  {
    id: 'RF-02',
    title: 'Listar requisitos',
    description: 'El sistema debe mostrar todos los requisitos registrados en una tabla.',
    type: 'functional',
    mandatory: true,
  },
  {
    id: 'RF-03',
    title: 'Clasificar requisito',
    description: 'El usuario debe poder indicar si un requisito es funcional o no funcional.',
    type: 'functional',
    mandatory: false,
  },
];

export function nextId(type: RequirementType, requirements: Requirement[]): string {
  const prefix = type === 'functional' ? 'RF' : 'RNF';
  const count = requirements.filter((r) => r.type === type).length + 1;
  return `${prefix}-${String(count).padStart(2, '0')}`;
}
