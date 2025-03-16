<template>
    <section class="contact">
      <div class="contact-top">
        <div class="hr-line">
          <hr>
          <h5>Contact</h5>
        </div>
        <h3>Ready to bring your ideas to life? <span>Contact Me</span></h3>
      </div>
      <div class="contact-form">
        <div class="left-contact">
          <span class="phone">
            <img src="" alt="">
            <span>
              <h5>Number</h5>
              <h5>+2349165486229</h5>
            </span>
          </span>
          <span class="email">
            <img src="" alt="">
            <span>
              <h5>Email</h5>
              <h5>alogberacheal@gmail.com</h5>
            </span>
          </span>
          <span class="location">
            <img src="" alt="">
            <span>
              <h5>Location</h5>
              <h5>14 Gynoscope Drive, New Layout Rukpakulusi.</h5>
            </span>
          </span>
        </div>
        <form>
          <div>
            <h4>Send Me A Message</h4>
            <div>
              <label for="name">
                <span>Name</span>
                <input type="text" id="name">
              </label>
              <label for="email">
                <span>Email</span>
                <input type="email" id="email">
              </label>
            </div>
            <div>
              <label for="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button>Contact Me</button>
          </div>
        </form>
      </div>
    </section>
</template>

<style lang="css" scoped>
.contact {
  background-color: #fff;
  padding: 1rem;
  border: 1px solid red;
}
</style>