
type ProductProps = {
    children: React.ReactNode
}

export default function RootProducts({children}: ProductProps){

    return (
        <div>
            <h1>teste</h1>
            {children}
        </div>
    )

}

