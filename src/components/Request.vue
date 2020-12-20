<template>
  <div class="request">
    <form
      id="requestblock"
      @submit="checkForm"
      action="/"
      method="post"
      novalidate="true"
    >
            <h3 class="request__title">Бесплатная проверка долгов</h3>

      <div class="request__input">
        <label for="region" class="request__input-region"
          >Регион
          <region-select
            v-model="region"
            :country="country"
            :region="region"
            :countryName="true"
            :regionName="true"
          />
        </label>
        <label for="name" class="request__input-name"
          >ФИО
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            placeholder="Например Сергей Сергеевич Сергеев"
          />
        </label>
        <label for="date" class="request__input-date"
          >Дата рождения <input type="date" v-model="date" id="date"
        /></label>
      </div>
      <div class="request__checkbox">
        <input
          class="checkbox__check"
          type="checkbox"
          id="checkbox"
          v-model="checked"
        />
        <label for="checkbox">{{ checked }}</label>
        <p class="checkbox__text">
          Нажимая на кнопку, вы соглашаетесь с правилами пользования сайта и
          правилами обработки персональных данных
        </p>
        <p>
          <input
            class="btn__check__button"
            type="submit"
            value="Проверить задолженность"
          />
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "request",
  components: {
    RegionSelect,
  },
  data: () => ({
    country: "Russian Federation",
    region: "Altai Krai",
  }),
   methods: {
            checkForm: function(e) {
                if (this.name && this.date) {
                    return true;
                }
                this.errors = [];
                if (!this.name) {
                    this.errors.push('Требуется указать имя.');
                }
                if (!this.date) {
                    this.errors.push('Требуется указать возраст.');
                }
                e.preventDefault();
            }
        }
};
import RegionSelect from "@/components/region-select";
</script>

<style lang="scss">
.request {
  border-right: 1px solid #e6e6e6;
  padding-right: 56px;
}

.request__input {
  display: flex;
  text-align: left;
}

.request__input-region {
  display: grid;
}
.request__input-name {
  display: grid;
  padding-left: 20px;
}
.request__input-date {
  display: grid;
  padding-left: 20px;
}

#name {
  width: 350px;
  height: 48px;
}

#date {
  width: 180px;
  height: 48px;
}

.checkbox__check {
  transform: scale(2);
}

.checkbox__check [type="checkbox"]:checked {
  background: #03a06c;
}

.checkbox__text {
  font-size: 13px;
  line-height: 15px;
  color: #a0a4a7;
  text-align: left;
  margin-left: 15px;
}

.btn__check__button {
  width: 360px;
  height: 48px;
  background: #03a06c;
  border-radius: 2px;
  border: 1px solid #03a06c;
  color: #fff;
  font-size: 17px;
  line-height: 17px;
    margin-right: 10px;
    margin-left: 40px;
    }

.request__checkbox {
  display: inline-flex;
  align-items: center;
  padding-top: 5px;
}
</style>