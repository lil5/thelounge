// This creates a version of `require()` in the context of the current
// directory, so we iterate over its content, which is a map statically built by
// Webpack.
// Second argument says it's recursive, third makes sure we only load templates.


import away from "./away.vue"
 import mode_user from "./mode_user.vue"
 import topic from "./topic.vue"
import back from "./back.vue"
    import invite from "./invite.vue"
  import monospace_block from "./monospace_block.vue"
  import topic_set_by from "./topic_set_by.vue"
import chghost from "./chghost.vue"
 import join from "./join.vue"
    import nick from "./nick.vue"
    import whois from "./whois.vue"
import ctcp from "./ctcp.vue"
    import kick from "./kick.vue"
    import part from "./part.vue"
import ctcp_request from "./ctcp_request.vue"
 import mode from "./mode.vue"
    import quit from "./quit.vue"
import error from "./error.vue"
   import mode_channel from "./mode_channel.vue"
     import raw from "./raw.vue"


	 const requireViews = {
		away, mode_user, topic, back, invite, monospace_block, topic_set_by, chghost, join, nick, whois, ctcp, kick, part, ctcp_request, mode, quit, error, mode_channel, raw}


export default Object.keys(requireViews).reduce((acc: Record<string, any>, path) => {
	acc["message-" + path.substring(2, path.length - 4)] = requireViews;

	return acc;
}, {});
