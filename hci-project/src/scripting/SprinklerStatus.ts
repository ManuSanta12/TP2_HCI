import {Status, IStatus} from "./Status"; 

// Definir una interfaz para el objeto de estado
export interface ISprinklerStatus extends IStatus {
    pump_status: string;
};

// Definir la clase constructora que implementa la interfaz
export class SprinklerStatus extends Status {
    pump_status: string;

    constructor({ device_name = "NO DATA", toggle_status = false, show_in_home = false, pump_status = "NO DATA" }: ISprinklerStatus)
    {
        super({ device_name, toggle_status, show_in_home });
        pump_status = pump_status;
    };
};

export default Status;