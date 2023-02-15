import React from 'react'

export const Login = () => {
  return (
//     <style>
//   p {
//     text-align: center;
//     font-size: 1rem;
//     font-weight: bold;
//     color: red;
//   }
// </style>

<section class="section-bg services">
    <div class="form-section">
        <div class="section-title">
            <h2>Login(For Admin only)</h2>
        </div>
        <form action="" method="post">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" class="form-control" id="password" minlength="6" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
    </div>
</section>
  )
}
