import React from 'react'
import { Rating } from 'react-simple-star-rating'

function RatingComponent({proficiency}) {
  return (
    <div><Rating
    fillColor="var(--raw-seinna)"
    readonly="true"
    initialValue={
      proficiency == null ? null : proficiency
    }
    size={15}
  /></div>
  )
}

export default RatingComponent