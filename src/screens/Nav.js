import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
          <ul class="nav nav-pills mb-3 nav-fill"  role="tablist">
  {/* <li class="nav-item">
    <Link class="nav-link active" to="/a" role="tab" aria-controls="pills-home" >add</Link>
  </li> */}
  <li class="nav-item ">
    <Link class="nav-link" to="/v" role="tab" aria-controls="pills-profile" >view</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/" role="tab" aria-controls="pills-contact" >add</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/s" role="tab" aria-controls="pills-contact" >search</Link>
  </li>
</ul>

    </div>
  )
}

export default Nav