import {
    htmlReport
} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {
    textSummary
} from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import {
    group,
    sleep
} from 'k6';

import CadastrarUmaAtivade from "./src/specs/Activities/CadastrarUmaAtividade.js";
import DeletarUmaAtividade from "./src/specs/Activities/DeletarUmaAtividade.js";
import EditarUmaAtividade from "./src/specs/Activities/EditarUmaAtividade.js";
import RequisitarTodasAtividades from "./src/specs/Activities/RequisitarTodasAtividades.js";
import RequisitarUmaUnicaAtivdades from "./src/specs/Activities/RequisitarUmaUnicaAtividade.js";


export default () => {
    group('Endpoint Activities', () => {
        CadastrarUmaAtivade();
        DeletarUmaAtividade();
        EditarUmaAtividade();
        RequisitarTodasAtividades();
        RequisitarUmaUnicaAtivdades();
    });



    sleep(1);
}


export function handleSummary(data) {
    return {
        "result.html": htmlReport(data),
        stdout: textSummary(data, {
            indent: " ",
            enableColors: true
        }),
    };
}

export let options = {
    ext: {
        loadimpact: {
            projectID: 3599451,
            name: "Tests API"
        }
    }
}