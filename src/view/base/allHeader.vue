<template>
  <div id="Header">
    <div class="headerMain">
      <div class="icon"><a href="#/"><img src="@/assets/id.jpg" alt=""></a></div>
      <div class="contant">
        <div class="ul">
          <div class="li"><a href="#/resume/create">create</a></div>
          <div class="li">2</div>
          <div class="li">3</div>
          <div class="li">4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  *{padding: 0;margin: 0}
  li,ul{text-decoration: none;list-style-type: none;display: inline-block;}
  a{text-decoration: none;}
  /*html{font-size: 62.5%}*/
  #Header{
    z-index: 9999;
    width: 100%;
    position: fixed;
    top: 0;
    height: 5rem;
    background: rgba(0,0,0,0);
    text-align: center;
  }
  #Header p{
    opacity: 1;
  }
  #Header:hover{
    opacity: 1;
  }
  .headerMain{
    display: flex;
    width: 100%;
    margin: 0 auto;
  }
  .icon{
    margin: 2.2rem 0 0 2.3rem;
  }
  .icon img{
    width: 2.125rem;
    height: 2.125rem;
  }
  .contant{
    display: block;
    width: 108rem;
    height: 1.6rem;
    margin-top: 3rem;
  }.contant .ul{
    width: 36rem;
    height: 1.6rem;
    display: flex;
    margin: 0 auto;
  }
  .contant .ul .li{
    width: 9rem;
  }
</style>
