export default {
  async fetch(request, env) {
    let PROXY_HOST = env.PROXY_HOST
    if (PROXY_HOST) {
      const url = new URL(request.url)
      return fetch(PROXY_HOST + url.pathname + url.search, request)
    } else {
      return new Response('PROXY_HOST的环境变量未设置！', { status: 500 })
    }
  }
}
