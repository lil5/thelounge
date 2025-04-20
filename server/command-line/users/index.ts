import Config from "../../config";
let add, reset;
import Add from "./add"
import Reset from "./reset"

if (!Config.values.ldap.enable) {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	add =Add;
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	reset =Reset;
}

import list from "./list";
import remove from "./remove";
import edit from "./edit";

export default [list, remove, edit, add, reset];
