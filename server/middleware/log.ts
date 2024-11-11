export default defineEventHandler((event) => {
    //check what the page is
    const req = event.node.req ?? {};
    const res = event.node.res ?? {};
    //call api ghi log
    console.log("log")
})