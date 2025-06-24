import Configuration from "openai";
export const openaiconfig = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_APIKEY,
        organization: process.env.OPENAI_ORGANIZATION_ID
    });
    return config;
};
//# sourceMappingURL=openAi-config.js.map