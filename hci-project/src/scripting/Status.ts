// Definir una interfaz para el objeto de estado
export interface IStatus {
    device_name: string;
    toggle_status: boolean;
    show_in_home: boolean;
}

// Definir la clase constructora que implementa la interfaz
export class Status implements IStatus {
    device_name: string;
    toggle_status: boolean;
    show_in_home: boolean;

    constructor({ device_name = "NO DATA", toggle_status = false, show_in_home = false }: IStatus) {
        this.device_name = device_name;
        this.toggle_status = toggle_status;
        this.show_in_home = show_in_home;
    }
}

export default Status;