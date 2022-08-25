import React from 'react'

function Footer() {
  return (
    <div class="container align-items-center">
<footer class="page-footer font-small blue pt-4">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h5 >The Talk</h5>
        <p>This website is built as a journal and record of the experiences of the authors.</p>

      </div>

      <hr class="clearfix w-100 d-md-none pb-3"/>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 >Social Media</h5>

        <ul class="list-unstyled">
          <li>
            <a href="https://instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/">Twitter</a>
          </li>
          <li>
            <a href="https://medium.com/">Medium</a>
          </li>
        </ul>

      </div>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 >Other Actions</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Join our team of authors</a>
          </li>
          <li>
            <a href="#!">Partner with us</a>
          </li>
          {/* <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li> */}
        </ul>

      </div>

    </div>

  </div>

  <div class="footer-copyright text-center py-3">©The Talk 2022 Copyright. All rights reserved.  <hr/>  <a href="/" class="text-uppercase text-darken">TEZI</a>
  </div>

</footer>
\</div>
  )
}

export default Footer