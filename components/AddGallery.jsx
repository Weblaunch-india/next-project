import React from 'react'

export const AddGallery = () => {
  return (
//     <style>
//     p {
//       text-align: center;
//       font-size: 1rem;
//       font-weight: bold;
//       color: #009970;
//     }
//   </style>
  
  <section class="section-bg services">
      <div class="form-section">
          <div class="section-title">
              <h2>Image details</h2>
          </div>
          <form action="{{ url_for('add_gallery_image') }}" method="post" enctype="multipart/form-data">
              <div class="form-group">
                <label for="image">Image</label>
                <input type="file" class="form-control" id="image" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg,image/png" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      </div>
  </section>
  )
}
