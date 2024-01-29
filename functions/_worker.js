export default {
  async fetch(request, env) {
    let PROXY_HOST = env.PROXY_HOST
    if (PROXY_HOST) {
      const url = new URL(request.url)
      const response = fetch(PROXY_HOST + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        body: request.body,
        redirect: 'follow'
      })
      return response
    } else {
      return new Response('PROXY_HOST的环境变量未设置！', { status: 500 })
    }
  }
}
