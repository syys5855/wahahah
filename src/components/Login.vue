<template>
  <div class="container">
    <div class="form-horizontal form-login">
      <h3 class="text-center">登录</h3>
      <div class="form-group">
        <label class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control">
        </div>

      </div>

      <div class="form-group">
        <label for="" class="control-label col-sm-2">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
          <button class="btn btn-primary form-control">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
<style lang="scss" scoped>
$width:500px;
$height:250px;



@function border($size:1px, $color:#ccc) {
  @return #{$size} solid #{$color};
}

%center-block {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
}

.form-login {
  @extend %center-block;
  height: $height;
  width: $width;
  padding: 10px;
  border: border();
  border-radius: 10px;
}
</style>
