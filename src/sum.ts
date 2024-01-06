export default function sum(
    ...numbers: number[]
) {
    return numbers.reduce((acc, item) => acc + item, 0)
}
