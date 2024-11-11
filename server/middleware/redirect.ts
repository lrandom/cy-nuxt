    export default defineEventHandler((event) => {
        //check what the page is
        const req = event.node.req ?? {};
        const res = event.node.res ?? {};
        if(req.url?.includes("/product")) {
            //redirect to the product page
            res.writeHead(301, {Location: "/san-pham"});
            res.end();
        }
    })