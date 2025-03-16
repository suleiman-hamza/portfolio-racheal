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
            <!-- <img src="../assets/images/phone-icon.png" alt="phone-icon"> -->
            <span>
              <h5>Number</h5>
              <h5>+2349165486229</h5>
            </span>
          </span>
          <span class="email">
            <!-- <img src="../assets/images/message-icon.png" alt="messge-icon"> -->
            <span>
              <h5>Email</h5>
              <h5>alogberacheal@gmail.com</h5>
            </span>
          </span>
          <span class="location">
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
  border: 1px solid red;
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
    border: 1px solid blue;
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
    padding: 1rem;
    .form-inner {
      border: 1px solid blue;
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
      border: 1px solid red;
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