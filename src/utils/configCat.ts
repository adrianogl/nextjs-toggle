import * as configcat from "configcat-js";

const configCatClient = configcat.createClient(process.env.NEXT_PUBLIC_CONFIG_CAT_KEY || '', {
    pollIntervalSeconds: 2,
});

export default configCatClient;