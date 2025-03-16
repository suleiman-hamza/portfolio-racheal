<template>
    <section class="contact">
      <div class="contact-top">
        <div class="hr-line">
          <hr class="line">
          <h5>Contact</h5>
        </div>
        <h3>Ready to bring your ideas to life? <span>Contact Me</span></h3>
      </div>
      <div class="contact-form">
        <div class="left-contact">
          <span class="phone">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>

            <!-- <img src="../assets/images/phone-icon.png" alt="phone-icon"> -->
            <span>
              <h5>Number</h5>
              <h5>+2349165486229</h5>
            </span>
          </span>
          <span class="email">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

            <!-- <img src="../assets/images/message-icon.png" alt="messge-icon"> -->
            <span>
              <h5>Email</h5>
              <h5>alogberacheal@gmail.com</h5>
            </span>
          </span>
          <span class="location">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

            <!-- <img src="../assets/images/location-icon.png" alt="location-icon"> -->
            <span>
              <h5>Location</h5>
              <h5>14 Gynoscope Drive, New Layout Rukpakulusi.</h5>
            </span>
          </span>
        </div>
        <form class="form">
          <div class="form-inner">
            <h4>Send Me A Message</h4>
            <div class="input-flex">
              <label for="name">
                <span>Name</span>
                <input type="text" id="name">
              </label>
              <label for="email">
                <span>Email</span>
                <input type="email" id="email">
              </label>
            </div>
            <div class="msg">
              <label for="message">Message</label>
              <textarea name="message" id="message" height="70px"></textarea>
            </div>
            <button class="contact-btn">Contact Me</button>
          </div>
        </form>
      </div>
    </section>
</template>

<style lang="css" scoped>
.contact {
  background-color: #fff;
  padding: 1rem;
  /* border: 1px solid red; */
  max-width: 840px;
  margin-inline: auto;
}
.contact-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
    max-width: 200px;
    text-align: center;
    color: #3a3a3a;

    > span {
      color: #D3382F;
    }
  }
}
.hr-line {
    display: flex;
    align-items: center;
    gap: 1rem;

    .line {
      width: 147px;
      height: 2px;
      background-color: #D3382F;
      border: none;
    }
    h5 {
      color: #3a3a3a;
      font-family: "Source Sans Pro";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      /* line-height: 154.2%; 27.756px */
      letter-spacing: 0.63px;
      margin-bottom: 8px;
    }
  }

  .contact-form {
    border: 1px solid red;
  }
  .left-contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* border: 1px solid blue; */
    padding: 1rem;

    .phone, .email, .location {
      display: flex;
      align-items: center;
      justify-content: left;

      > span {
        color: #3a3a3a;
        font-size: 1.2rem;
      }
    }
  }
  .form {
    background-color: #fbe1df;
    padding: 1rem;
    .form-inner {
      /* border: 1px solid blue; */
      background-color: #fff;
      padding: 1rem;

      > h4 {
        color: #191919;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 1rem;
      }
    }
  }

  .input-flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;

    > label {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      /* border: 1px solid red; */
      width: min-content;

      > span {
        color: #3a3a3a;
        font-size: 16px;
      }

      input {
        padding: 0.5rem;
        border: 2px solid #bbbaba;
      }
    }
  }

  .msg {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      color: #3a3a3a;
    }

    textarea {
      height: 70px;
    }
  }

  .contact-btn {
    background-color: #c41a26;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 15px 30px;
  }


  @media (min-width: 788px) {
    .contact-form {
      display: flex;
      flex-direction: row;
    }
    .form {
      flex: 1;

      .input-flex {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
</style>