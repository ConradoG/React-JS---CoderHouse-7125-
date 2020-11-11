import React from 'react'

export default function Button ({suma, onClick, counter}) {

    let sign = suma ? '+' : '-'

    let amount = suma ? (counter + 1) : (counter - 1)

    return(<button className="btn btn-lg btn-outline-info font-weight-bold" onClick = {onClick(amount)}> { sign } </button>)
    }
