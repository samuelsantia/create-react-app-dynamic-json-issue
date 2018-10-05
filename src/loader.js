export default async () => {
  const data = await import('./data.json')

  console.log(data)

  return data
}
