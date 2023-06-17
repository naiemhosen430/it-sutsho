import React from 'react'
import ServiceBox from './ServiceBox/ServiceBox'

export default function ServiceArea() {
  return (
    <>
        <section className='bg-dark'>
        <h1 className='text-center py-2 mt-5 text-dark'>My service</h1>
        <div className='d-flex justify-content-center'>
            <ServiceBox head="Service name one" Des="Here will be your service's description" btntext="Click here"/>
            <ServiceBox head="Service name one" Des="Here will be your service's description" btntext="Click here"/>
            <ServiceBox head="Service name one" Des="Here will be your service's description" btntext="Click here"/>
        </div>
        </section>
    </>
  )
}
