export default defineNuxtRouteMiddleware((to
                                          ,from) => {
    const exceptionPage = [
        "/login",
        "/signup",
        "/forgot-password",
    ]
    if (process.client && !localStorage.getItem("token")) {
        if(exceptionPage.includes(to.path)) return
        return window.location.href = "/login"
    }
})