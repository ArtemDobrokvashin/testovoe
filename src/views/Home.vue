<template>
  <div class="home">
    <div class="home__container">
      <h1 class="home__title">
        Узнать задолженность у судебных приставов онлайн
      </h1>
      <p class="home__text">
        Проверка долгов по фамилии у приставов по базе ФССП. Укажите фамилию,
        имя и отчество и нажмите проверить долги. <br />
        В режиме онлайн будет проведена проверка задолженностей по фамилии.
        Проверьте долги, чтобы узнать о своих задолженностях.
      </p>
      <div class="container">
        <div class="request__container">
          <div class="request__container-left">
            <request />
          </div>
          <div class="request__container-right">
            <img src="@/assets/gerb.png" alt="" />
            <p class="request__container-right-text">
              Вся информация предоставляется из базы данных Федеральной службы
              судебных приставов
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container__upp">
      <div class="container__upp__item">
        <div class="container__upp-block">
          <img src="@/assets/cash.png" alt="" />
          <div class="container__upp-block-content">
            <h4>Подтверждение оплаты</h4>
            <p>
              Информация о переводе денежных средств фиксируется в личном
              кабинете и отправляется на почту
            </p>
          </div>
        </div>
        <div class="container__upp-block">
          <img src="@/assets/procent.png" alt="" />
          <div class="container__upp-block-content">
            <h4>Минимальная комиссия</h4>
            <p>Комиссия при оплате банковской карты всего 2,2%</p>
          </div>
        </div>
        <div class="container__upp-block">
          <img src="@/assets/aproof.png" alt="" />
          <div class="container__upp-block-content">
            <h4>Защита информации pci dss</h4>
            <p>
              Стандарт защиты информации, разработанный международными
              платёжными системами Visa и MasterCard
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container__info">
      <div class="row">
        <div class="container__info-left">
          <h2 class="container__info-left-title">
            Судебные приставы по задолженности не выпускают за границу
          </h2>
          <p class="container__info-left-text">
            По новому законодательству, вас могут не выпустить за рубеж страны,
            если у вас висят долги по судебным делам. Рекомендуется, регулярно
            узнавать свою задолженность, чтобы не попасть в сложную ситуацию.
            Приставы арестовывают банковские счета и накладывают ограничения на
            выезд за пределы родины. Обратите внимание, что по решению суда, у
            вас может возникнуть долг перед судебными приставами, если:
          </p>
          <ul class="container__info-left-list">
            <li>Вовремя не оплатили штраф ГИБДД</li>
            <li>Не платили кредит, ипотеку и т.д.</li>
            <li>Исковое заявление (физ/юр лица) против вас</li>
            <li>Неуплата налогов</li>
            <li>Невыполнение иных долговых обязательств</li>
          </ul>
          <h2 class="container__info-left-title">
            Какие возникают ограничения у должников?
          </h2>
          <p class="container__info-left-text">
            Главное это запрет на любые путешествия вне страны на 3 года.
            Наложение ареста на все банковские счета и карты. Должник будет
            обязан погасит задолженность в указанный срок, в ином положении,
            судебные приставы начнут процедуру конфискации имущества. Для того,
            чтобы граждане могли самостоятельно узнавать свои задолженности по
            судебным приставам и в положенный срок их погашать, был создан сайт
            по проверке долгов онлайн.
          </p>
        </div>
        <div class="container__info-right">
          <img src="@/assets/map.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">

.home {
  background: #e5e5e5;
}

.home__container {
  max-width: 1170px;
  margin: 0 auto;
}
.home__title {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 42px;
  color: #1f2429;
  text-align: left;
  padding-top: 80px;
  margin-bottom: 25px;
  font-weight: bold;
}
.home__text {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  color: #1f2429;
  text-align: left;
  margin: 0;
  padding-bottom: 30px;
}
.container {
  background: #fff;
  padding-top: 60px;
  padding-left: 50px;
  padding-bottom: 51px;
  margin-bottom: 71px;
}

.request__container {
  display: flex;
}

.request__title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  color: #1f2429;
  text-align: left;
  margin-top: 0;
      margin-bottom: 35px;
}
.request__container-left {
  flex: 3;
}

.request__container-right {
  flex: 1;
  padding-top: 30px;
}

.request__container-right-text {
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #a0a4a7;
  padding-left: 26px;
  padding-right: 26px;
  margin-top: 24px;
}

.container__upp {
  background: #fff;
}

.container__upp__item {
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  padding-top: 15px;
  align-items: start;
}
.container__upp-block {
  display: inline-flex;
  text-align: left;
  align-items: center;
  flex: 1;
}
.container__upp-block img {
  width: 64px;
  height: 64px;
}
.container__upp-block h4 {
  font-size: 19px;
  line-height: 17px;
  color: #1f2429;
  font-family: 'Source Sans Pro';
}
.container__upp-block p {
  font-size: 13px;
  line-height: 20px;
  color: #53585c;
}

.container__upp-block-content {
  padding-left: 30px;
  padding-right: 25px;
}

.container__info {
  background: #fff;
}
.container__info-left {
  flex: 2;
}
.container__info-right {
  flex: 1;
}

.container__info-left-title {
  font-weight: 600;
  font-size: 25px;
  line-height: 17px;
  color: #1f2429;
  text-align: left;
  font-family: "Source Sans Pro";
  padding-top: 15px;
}

.container__info-left-text {
  font-size: 15px;
  line-height: 22px;
  color: #53585c;
  text-align: left;
  font-family: "Source Sans Pro";
  padding-top: 15px;
}

.container__info-left-list {
  list-style-image: url(../assets/check.png);
  text-align: left;
      padding-top: 15px;
    font-family: 'Source Sans Pro';
        padding-left: 20px;
}

.container__info-left-list li {
  padding-top: 7px;
}
.row {
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  padding-top: 51px;
  padding-bottom: 122px;
}
</style>