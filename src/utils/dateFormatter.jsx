export const dateFormatter = (releaseDate) => {
  const d = new Date(releaseDate).toDateString()
  const splittedDate = d.split(' ')
  const formattedDate = `${splittedDate[1]} ${splittedDate[2]}, ${splittedDate[3]}`
  return formattedDate
}