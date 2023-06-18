

function ServiceBox (servicebox) {
    return(
        <>
            <div className="border animationtwo text-center m-4 p-4 bg-none">
                <h2 className="text-light">{servicebox.head}</h2>
                <p className="text-info">{servicebox.Des}!</p>
                <a className="text-light bg-dark px-2 py-1 text-decoration-none" href="/">{servicebox.btntext}</a>
            </div>
        </>
    )
}

export default ServiceBox