

export default async function Posts() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()


    return (
        <>
            <h1>Prodtucos</h1>
        </>
    )

}