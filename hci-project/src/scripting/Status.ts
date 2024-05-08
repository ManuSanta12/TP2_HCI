// Definir una interfaz para el objeto de estado
export interface IStatus {
    device_name: string;
    toggle_status: boolean;
    pump_status: string;
}

// Definir la clase constructora que implementa la interfaz
export class Status implements IStatus {
    device_name: string;
    toggle_status: boolean;
    pump_status: string;

    constructor({ device_name = "NO DATA", toggle_status = false, pump_status = "NO DATA" }: IStatus) {
        this.device_name = device_name;
        this.toggle_status = toggle_status;
        this.pump_status = pump_status;
    }
}

export default Status;