const dummy = (blogs) => {
    return 1
}
  
const totalLikes = (blogs) => {
    const initialValue = 0
    const sum = blogs.reduce(
        (accumulator, currentValue) => accumulator + currentValue.likes
        , initialValue
    )
  
    return blogs.length === 0
        ? 0 :
        sum
}

module.exports = {
    dummy,
    totalLikes
}