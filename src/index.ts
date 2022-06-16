// Prepare NodeApi Access
import {JsonRpc} from "eosjs";
import * as fetch from "node-fetch";

const token = "YOUR_TOKEN_HERE"

/**
 * Create rpc with Bearer token
 */
const rpc = new JsonRpc("https://pro.wax.oneapi.dev", {
    fetch: ((input, init) =>
            fetch(input, {...init, headers: {
                    "Authorization": "Bearer " + token
                }})
    ),
});

/**
 * Will log /v1/chain/get_info request if authentication is working
 * Will log "invalid json response body at ... " if authentication failed
 */
rpc.get_info().then(result => console.log(result))
