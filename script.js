const button=document.getElementById('button')

import {criartarefa} from "./criartarefa.js"
import { display } from "./criartarefa.js"
import {Btndelete} from "./criartarefa.js"
import {qtdTarefa} from "./criartarefa.js"

display()
Btndelete()
qtdTarefa()
button.addEventListener('click',criartarefa)