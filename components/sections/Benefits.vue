<script setup lang="ts">
import Gradient from '~/assets/svg/benefits-section-gradient.svg'
</script>

<template>
  <section id="benefits" class="benefits">
    <Gradient filled/>
    <div class="benefits__container">
      <div style="position: relative; z-index: 3">
        <h2>
          <span>Преимущества</span>
          <span>SoftBrigada</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div class="benefits__wrapper">
          <div class="benefits__benefit">
            <div>7</div>
            <div>лет опыта</div>
          </div>
          <div class="benefits__benefit">
            <div>12</div>
            <div>специалистов</div>
          </div>
          <div class="benefits__benefit">
            <div>25</div>
            <div>индивидуальных проектов</div>
          </div>
          <div class="benefits__benefit">
            <div>> 10</div>
            <div>млн. пользователей проектов</div>
          </div>
        </div>
        <div class="benefits__team">
          <div>
            Выстраиваем работу прозрачно: открываем Figma, включаемся в общие чаты с заказчиком и можем присылать отчеты о результатах каждый день
          </div>
          <img src="/images/team/1.png" alt="team" />
        </div>
        <div class="benefits__team-2">
          <img src="/images/team/2.png" alt="team-2" />
          <h3>
            <span>SoftBrigada - это люди,</span>
            <span>с которыми вы работаете</span>
            <span>каждый день</span>
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>