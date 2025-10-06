<script setup lang="ts">
import Gradient from '~/assets/svg/offer-section-gradient.svg'
import Button from '~/components/shared/form/Button.vue'
</script>

<template>
  <section id="offer" class="offer">
    <div class="offer__wrapper">
      <h2>Как предприниматель рассмотрите все варианты</h2>
      <div class="offer__solutions">
        <div class="offer__solution">
          <div class="offer__tag">Вариант 1</div>
          <h3>
            <span>Заплатить несколько</span>
            <span>миллионов рублей</span>
            <span>раскрученной студии</span>
          </h3>
          <ul>
            <li>Да, вы с большой вероятностью получите качественный продукт с полным функционалом</li>
            <li>Необязательно он будет с «ВАУ» — эффектом</li>
            <li>И не факт, что вам предоставят «индивидуальный подход» к вашему проекту</li>
          </ul>
          <div class="offer__question">
            Готовы ли вы вложить эти средства именно в сайт/сервис?
            <svg>
              <use href="/sprite.svg#question-comma"/>
            </svg>
          </div>
        </div>
        <div class="offer__solution">
          <div class="offer__tag">Вариант 2</div>
          <h3>Нанять фрилансеров по отдельности</h3>
          <ul>
            <li>Классный вариант сэкономить. Но это дополнительная головная боль</li>
          </ul>
          <div class="offer__clouds">
            <div>А что с сайтом?</div>
            <div>А как внедрить сервис?</div>
            <div>А как грамотно наполнить сайт?</div>
          </div>
          <div class="offer__question">
            Готовы ли вы так экономить, рискуя деньгами и временем?
            <svg>
              <use href="/sprite.svg#question-comma"/>
            </svg>
          </div>
        </div>
        <div class="offer__solution --best-mobile">
          <div class="offer__gradient">
            <Gradient />
          </div>
          <div>
            <div class="offer__tag">Вариант 3</div>
            <h3>Мы работаем под ключ комплексно</h3>
            <div class="offer__points">
              <div class="offer__point-wrapper">
                <div class="offer__point">
                  <svg>
                    <use href="/sprite.svg#cursor"/>
                  </svg>
                </div>
                <div class="offer__point-content">Погрузимся в ваши бизнес-процессы, спроектируем и создадим ваш проект
                </div>
              </div>
              <div class="offer__point-wrapper">
                <div class="offer__point">
                  <svg>
                    <use href="/sprite.svg#code"/>
                  </svg>
                </div>
                <div class="offer__point-content">Разработаем, внедрим и обучим персонал использовать новую систему</div>
              </div>
              <div class="offer__point-wrapper">
                <div class="offer__point">
                  <svg>
                    <use href="/sprite.svg#handshake"/>
                  </svg>
                </div>
                <div class="offer__point-content">У вас будет один подрядчик для всех вопросов и вам не придется искать</div>
              </div>
            </div>
            <div class="offer__point-enum">
              <div><div />Копирайтеров для наполнения</div>
              <div><div />Дизайнеров и программистов</div>
            </div>
            <Button class="offer__button --white" icon="lightning">Получить решение</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="offer__solution --best">
      <div class="offer__gradient">
        <Gradient />
      </div>
      <div class="offer__wrapper --best">
        <div>
          <div class="offer__tag">Вариант 3</div>
          <h2>Мы работаем под ключ комплексно</h2>
          <Button class="offer__button --white" icon="lightning">Получить решение</Button>
        </div>
        <div>
          <div class="offer__point-wrapper">
            <div class="offer__point">
              <svg>
                <use href="/sprite.svg#bracket"/>
              </svg>
              <div>01</div>
              <svg>
                <use href="/sprite.svg#cursor"/>
              </svg>
              <svg>
                <use href="/sprite.svg#bracket"/>
              </svg>
            </div>
            <div class="offer__point-content">Погрузимся в ваши бизнес-процессы, спроектируем и создадим ваш проект
            </div>
          </div>
          <div class="offer__point-wrapper">
            <div class="offer__point">
              <svg>
                <use href="/sprite.svg#bracket"/>
              </svg>
              <div>02</div>
              <svg>
                <use href="/sprite.svg#code"/>
              </svg>
              <svg>
                <use href="/sprite.svg#bracket"/>
              </svg>
            </div>
            <div class="offer__point-content">Разработаем, внедрим и обучим персонал использовать новую систему</div>
          </div>
          <div class="offer__point-wrapper">
            <div class="offer__point">
              <svg>
                <use href="/sprite.svg#bracket"/>
              </svg>
              <div>03</div>
              <svg>
                <use href="/sprite.svg#handshake"/>
              </svg>
              <svg>
                <use href="/sprite.svg#bracket"/>
              </svg>
            </div>
            <div class="offer__point-content">
              <div>У вас будет один подрядчик для всех вопросов и вам не придется искать</div>
              <svg>
                <use href="/sprite.svg#branches"/>
              </svg>
              <div>
                <div>Копирайтеров для наполнения</div>
                <div>Дизайнеров и программистов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>