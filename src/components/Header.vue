<template>
  <div class="header">
      <div class="p-2 px-md-3 d-flex justify-content-center align-items-center">
        <div class="flex-shrink-1">
            <a href="https://etu.ru/" target="_blank"
              ><img src="@/assets/image/logo-fin.svg" alt="" style="height: 50px;"
            /></a>
        </div>
        <div class="px-2 me-auto">
            <h1 class="p-0 m-0">Интерфейс списков</h1>
        </div>
        <div class="ms-auto ">
            <div class="dropdown">
              <button type="button" class="btn p-0 border-0 text-nowrap" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <h2 class="p-0 m-0">
                  <i class="bi bi-person-circle"></i>&nbsp;Тест Тестович Тестов
                </h2>
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                <li><button class="dropdown-item" type="button"><i class="bi bi-box-arrow-right"></i>&nbsp;Выйти</button></li>
              </ul>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #02346f;
  
  width: 100%;
}

h1,
h2 {
  font-family: Roboto-Black;
  color: white;
}
h1 {
  font-size: calc(0.8rem + 1.25vw);
}
h2 {
  text-align: right;
  font-size: calc(0.65rem + 1vw);
}

.container {
  margin-left: 5px;
  margin-right: 5px;
  width: 100%;
}
</style>
