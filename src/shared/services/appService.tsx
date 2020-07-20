const URL = 'https://front-exercise.z1.digital/evaluations'

const PostHeaders = (body: any) => ({
  method: 'POST',
  body
})

export const postImage = (body: any) => fetch(URL, PostHeaders(body)).then(res => res.json()).then(res => res)