export type Panel = {
  name: string;
  health: number;
  currentEnergy: number;
  storedEnergy?: number;
  operatingPeriod: string;
  brand?: string;
  model?: string;
  status?: "Funcionando" | "Alerta" | "Problema" | "Desligado"; 
};

