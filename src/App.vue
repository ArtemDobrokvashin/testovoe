<template>
  <div id="app">
    <div id="nav">
      <div class="nav__left">
        <img src="@/assets/logo.png" alt="" />
        <span class="nav__left-title">РусДолги</span>
        <p class="nav__left-text">
          Онлайн-сервис проверки задолженности по судебным приставам
        </p>
      </div>
      <div class="nav__right">
        <router-link to="/">Узнать задолженность</router-link>
        <router-link to="/bancheck">Проверить запрет на выезд</router-link>
        <router-link to="/contacts">Контакты</router-link>
      </div>
    </div>
    <div>
      <router-view />
    </div>
    <div class="footer">
      <div class="footer__container">
        <div class="footer__container__top">
          <div class="footer__top__left">
            <div class="top__left__logo">
              <img src="@/assets/logo.png" alt="" />
              <span class="top__left__title">РусДолги</span>
            </div>
            <p class="top__left__text">
              Онлайн-сервис проверки задолженности по судебным приставам
            </p>
          </div>
          <div class="footer__top__center">
            <h3 class="top__center__title">
              Сервис проверки судебных задолженностей rosdolgi.ru 2020
            </h3>
            <p class="top__center__text">
              Информация по задолженности от судебных приставов формируются
              автоматически на основе запроса по данным пользователя в
              официальную базу ФССП. Проверка долгов граждан осуществляется
              бесплатно. Интернет-портал позволяет узнать задолженности в режиме
              онлайн. Копирование любой информации о долгах запрещено.
              Цитирование с сайта разрешается при наличии активной ссылки.
            </p>
          </div>
          <div class="footer__top__right">
            <div class="top__right__mail">
              <img src="@/assets/mail.png" alt="" />
              <a href="mailto:info@rudolgi.com">info@rudolgi.com</a>
            </div>
            <nav class="top__right__nav">
              <router-link to="/">Узнать задолженность</router-link>
              <router-link to="/bancheck"
                >Проверить запрет на выезд</router-link
              >
              <router-link to="/contacts">Контакты</router-link>
            </nav>
          </div>
        </div>
        <div class="line"></div>
        <div class="copy">
          <div class="copy__left">
            <p class="copyright">dolgi.net.© 2016-2020</p>
          </div>
          <div class="copy__center">
            <img class="copy__center-lock" src="@/assets/lock.png" alt="" />
            <img class="copy__center-mir" src="@/assets/mir.png" alt="" />
            <img class="copy__center-master" src="@/assets/master.png" alt="" />
            <img class="copy__center-visa" src="@/assets/visa.png" alt="" />
          </div>
          <div class="copy__right">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Overpass+Mono&family=Source+Sans+Pro:wght@400;600&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 0px;
  display: flex;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;

  a {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #03a06c;
    padding-left: 46px;

    &.router-link-exact-active {
      color: #42b983;
      text-decoration: none;
    }
  }
}

.nav__left {
  display: inline-flex;
  flex: 1;
}

.nav__left img {
  width: 47px;
  height: 47px;
}
.nav__rigth {
  display: inline-flex;
}
.nav__left-title {
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #1f2429;
  align-self: center;
  padding-left: 20px;
      font-family: 'Source Sans Pro';
}
.nav__left-text {
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: #a0a4aa;
  width: 194px;
  padding-left: 37px;
  text-align: left;
}

.footer {
  background: #e6ebec;
}
.footer__container {
  max-width: 1170px;
  margin: 0 auto;
  padding-top: 51px;
}

.footer__container__top {
  display: flex;
  text-align: left;
}

.footer__top__left {
  flex: 1;
}

.footer__top__center {
  flex: 2;
}

.footer__top__right {
  padding-left: 96px;
  flex: 1;
}
.top__left__logo {
  display: inline-flex;
}

.top__left__title {
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #1f2429;
  align-self: center;
  padding-left: 20px;
}
.top__left__text {
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: #a0a4aa;
  text-align: left;
}

.top__center__title {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #1f2429;
  margin-top: 0;
}

.top__center__text {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  color: #53585c;
}

.top__right__mail a {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  color: #1f2429;
  padding-left: 14px;
  text-decoration: none;
}

.top__right__mail img {
  width: 20px;
  height: 16px;
}

.top__right__nav {
  display: grid;
}
.top__right__nav a {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #03a06c;
  padding-top: 18px;

  &.router-link-exact-active {
    color: #42b983;
    text-decoration: none;
  }
}

.top__right__nav router-link {
  padding-bottom: 16px;
}

.line {
  border: 1px solid #ededed;
  padding-top: 50px;
}

.copy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
}

.copyright {
  font-size: 12px;
  line-height: 12px;
  color: #53585c;
}

.copy__right a {
  font-family: 'Source Sans Pro';

  font-size: 12px;
  line-height: 12px;
  color: #53585c;
  padding-right: 15px;
}

.copy__center img{
  padding-right: 12px;
}
.copy__center-lock {
  padding-right: 35px !important;
}
</style>