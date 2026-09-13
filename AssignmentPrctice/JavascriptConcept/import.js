//import {classname} from "path of the import class" > import exporting class to importing file
//../ > to call class files inside the same folder
//../../ > to call files in the parent folder structure

import { Export } from "../../Export.js"

const exportClassObject = new Export();

exportClassObject.exportMethod();