export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        alert("TESTING");
    }
});