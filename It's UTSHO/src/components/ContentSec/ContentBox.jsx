

export default function ContentBox(ContentBox) {
  return (
    <>
        <section className='d-flex my-5 py-5 animation justidy-content-center'>
            <div className='col-5 p-4'>
                <img src="" alt="" />
            </div>
            <div className='col-6 animation'>
                <h2 className='text-light'>{ContentBox.tittle}</h2>
                <p className='text-info'>{ContentBox.des}.</p>
                <a className='text-dark rounded bg-info text-decoration-none px-4 py-2 d-inline-block' href="/">{ContentBox.clickcont}</a>
            </div>
        </section>
    </>
  )
}
