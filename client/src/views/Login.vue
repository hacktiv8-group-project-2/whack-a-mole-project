<template lang="html">
<div style="
  width: 100%;
  height: 100vh;
  background: rgba(163,213,176);
  overflow: hidden;">
  <h1
    style="font-family: 'Indie Flower', cursive;
      font-size: 100px;
      white-space: nowrap;
      letter-spacing: 20px;
      position: absolute;
      top: 15%;
      left: 50%;
      transform:translate(-50%,0);"
  >Whack a mole</h1>
  <div
    style="
      width: 400px;
      padding: 40px;
      background: rgba(0,0,0,.3);
      position: absolute;
      top: 55%;
      left: 30%;
      transform: translate(-50%,-50%);
      border-radius: 5px;
      z-index:2;">
    <sui-form>
    <sui-form-field>
        <!-- <label style="font-size: 24px;margin-bottom:10px;">Enter your name</label> -->
        <sui-input size="massive" placeholder="Enter Your Name" />
    </sui-form-field>
    <!-- <sui-form-field>
        <sui-checkbox label="I agree to the Terms and Conditions" />
    </sui-form-field> -->
    <sui-button size="big" type="submit">Enter</sui-button>
    </sui-form>
  </div>
  <div style="
    width: 550px;
    height: 300px;
    position:absolute;
    top: 60%;
    left: 75%;
    transform: translate(-50%,-50%);
    overflow: hidden;
  ">
    <img
      style="
        width: 555px;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);"
      src="https://cdn.dribbble.com/users/224485/screenshots/1985081/fun.gif">
  </div>
</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
