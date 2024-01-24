export async function onRequest(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data // arbitrary space for passing data between middlewares
  } = context
  let PROXY_HOST = context.env.PROXY_HOST
  
    return new Response('PROXY_HOST的环境变量未设置！'+ PROXY_HOST,{ status: 500 })
  
  if (PROXY_HOST) {
    const url = new URL(request.url)
    const response = fetch(
      PROXY_HOST + url.pathname + url.search,
      {
        method: request.method,
        headers: request.headers,
        body: request.body
      }
    )
    return response
  } else {
    return new Response('PROXY_HOST的环境变量未设置！', { status: 500 })
  }
}
