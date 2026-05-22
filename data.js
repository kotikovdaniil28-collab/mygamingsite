const WIKI_SECTIONS = [
  {
    id: 'start', icon: '✦', title: 'Быстрый старт',
    html: `
      <h3>Путь новичка: от входа до первого города</h3>
      <p>TerraPolis — политический survival, где игроки строят города, создают провинции, выбирают законы, судят нарушителей, ведут дипломатические войны и развивают экономику. Сервер не проходится одной командой: почти всё завязано на территории, казне и роли игрока в городе.</p>
      <ol class="deep-list">
        <li><b>Зайди на сервер:</b> <code>c7.play2go.cloud:20048</code>. Сразу прими ресурспак: без него не будет красивых иконок в TAB/scoreboard, 3D-оружия, бейджей и предметов напитков.</li>
        <li><b>Открой понятный гайд:</b> <code>/guide</code>. Для конкретных тем есть <code>/guide town</code>, <code>/guide war</code>, <code>/guide admin</code>.</li>
        <li><b>Открой главное меню:</b> <code>/pol menu</code>. Оттуда доступны города, экономика, законы, война, напитки, оружие, нации и помощь.</li>
        <li><b>Выбери материк/национальность:</b> <code>/pol nationality</code>. После этого используй <code>/pol rtp</code>, чтобы попасть в дикие земли.</li>
        <li><b>Проверь место:</b> <code>/pol whereami</code>. Если сверху BossBar пишет “Дикие земли”, здесь можно основать город. Если написан город — территория уже принадлежит кому-то.</li>
        <li><b>Создай город:</b> <code>/pol town create Название</code>. Потом поставь мэрию: <code>/pol town hall</code>. Без мэрии город не должен превращаться в бесплатный генератор экономики.</li>
        <li><b>Развивайся:</b> сдавай ресурсы через <code>/pol town depositall</code>, покупай чанки через <code>/pol town claim</code>, улучшай город через <code>/pol town upgrades</code>.</li>
      </ol>
      <div class="notice">Главная логика: город — это не просто название над ником. Это территория, казна, жители, законы, роли, суд, провинции и дипломатия.</div>
    `
  },
  {
    id: 'towns', icon: '◆', title: 'Города, мэрия и жители',
    html: `
      <h3>Город — центр всей политики</h3>
      <p>Город хранит жителей, роли, спавн, мэрию, казну, ресурсы, законы, улучшения, здания, доверие мэра, территорию на Dynmap и связи с другими городами. Игрок может жить в чужом городе или создать свой.</p>
      <h4>Создать город</h4>
      <pre><code>/pol town create Kaluga
/pol town hall
/pol town setspawn
/pol town claim</code></pre>
      <p><code>/pol town create</code> создаёт город в текущем месте. <code>/pol town hall</code> ставит стартовую мэрию. <code>/pol town setspawn</code> задаёт точку возвращения. <code>/pol town claim</code> покупает текущий чанк.</p>
      <h4>Своя мэрия без автопостройки</h4>
      <p>Если хочешь построить красивое здание вручную, поставь табличку на постройку: первая строка <code>[tp]</code>, вторая строка <code>мэрия</code> или <code>town_hall</code>. Так постройка станет городской мэрией.</p>
      <h4>Вступление и управление жителями</h4>
      <pre><code>/pol town invite Ник
/pol town accept Kaluga
/pol town leave
/pol town kick Ник</code></pre>
      <p>Мэр приглашает игроков, жители принимают приглашение. Если игрок вышел из города, он теряет городские права и доступ к части функций города.</p>
      <h4>Роли</h4>
      <ul class="deep-list">
        <li><b>Мэр</b> — управление городом, законами, ролями, налогами, территориями.</li>
        <li><b>Вице-мэр</b> — заместитель, может управлять важными городскими системами.</li>
        <li><b>Банкир</b> — казна, налоги, деньги, экономика.</li>
        <li><b>Воевода</b> — войны, захват, оборона, мобилизация.</li>
        <li><b>Дипломат</b> — союзы, договоры, нации, мирные соглашения.</li>
        <li><b>Строитель</b> — строительство и работа с городской территорией.</li>
      </ul>
      <pre><code>/pol town role Ник banker
/pol town roles
/pol town transfer Ник confirm</code></pre>
    `
  },
  {
    id: 'claims', icon: '▣', title: 'Территории, claim и Dynmap',
    html: `
      <h3>Как работает территория</h3>
      <p>Мир делится на чанки 16×16. Claim означает, что текущий чанк переходит городу. На территории города могут действовать правила, защита, налоги, доступ к зданиям и отображение на Dynmap.</p>
      <pre><code>/pol whereami
/pol town claim
/pol town unclaim
/pol map reload</code></pre>
      <p><code>/pol whereami</code> показывает, стоишь ты в городе или в диких землях. <code>/pol town claim</code> покупает текущий чанк. <code>/pol town unclaim</code> освобождает его. <code>/pol map reload</code> перерисовывает слой городов на Dynmap.</p>
      <h4>Почему claim может не работать</h4>
      <ul class="deep-list">
        <li>у города не хватает ресурсов или монет;</li>
        <li>чужой город уже владеет чанком;</li>
        <li>нужно расширяться от существующей территории;</li>
        <li>для удалённой точки надо создать провинцию/удалённую ратушу.</li>
      </ul>
      <h4>Карта мира</h4>
      <p>Dynmap показывает города, мэрии, территории и провинции. Ссылка: <a href="http://c7.play2go.cloud:20332" target="_blank" rel="noreferrer">http://c7.play2go.cloud:20332</a>.</p>
      <pre><code>/pol map status
/pol map url
/pol map reload</code></pre>
    `
  },
  {
    id: 'economy', icon: '₮', title: 'Казна, ресурсы, налоги',
    html: `
      <h3>Экономика города</h3>
      <p>Казна нужна для claim, улучшений, зданий, дорог, провинций, войн, судов и содержания города. Деньги не должны копиться из воздуха: город развивается через активность игроков, ресурсы, налоги, торговлю и заказы.</p>
      <h4>Сдать ресурсы и монеты</h4>
      <pre><code>/pol town depositall
/pol town deposit STONE 64
/pol town depositcoins 100
/pol town withdrawcoins 50
/pol coins info</code></pre>
      <p><code>/pol town depositall</code> сдаёт подходящие ресурсы из инвентаря в город. <code>/pol town depositcoins</code> кладёт монеты в казну. Выводить казну должны только игроки с правами управления экономикой.</p>
      <h4>Налоги</h4>
      <pre><code>/pol tax info
/pol tax set 5
/pol laws</code></pre>
      <p>Налог даёт деньги городу, но снижает доверие мэра, если слишком высокий. Низкий налог стабильнее, высокий налог быстрее наполняет казну, но может провоцировать недовольство.</p>
      <h4>Аукцион и торговля</h4>
      <pre><code>/pol auction list
/pol auction sell 100
/pol auction buy 12
/pol auction cancel 12</code></pre>
      <p>VIP-привилегии увеличивают количество лотов и снижают комиссию. Это удобство, а не ломание политической экономики.</p>
    `
  },
  {
    id: 'upgrades', icon: '⬆', title: 'Улучшения и здания',
    html: `
      <h3>Развитие города</h3>
      <p>Улучшения открывают новые возможности: больше территории, сильнее экономика, доступ к оружию, торговле, напиткам, провинциям и военным системам. Здания — физическая часть города, которую можно привязать табличками.</p>
      <h4>Улучшения</h4>
      <pre><code>/pol town upgrades
/pol town upgrade city
/pol town upgrade economy
/pol town upgrade military
/pol town upgrade logistics</code></pre>
      <p>В меню улучшений показывается реальная цена ветки. Если ресурсов не хватает, плагин пишет, чего именно не хватает. Улучшение города влияет на лимиты, доход и доступные механики.</p>
      <h4>Здания</h4>
      <pre><code>/pol town buildings
/pol town build warehouse
/pol town build bank
/pol town build barracks
/pol town build market
/pol town sign</code></pre>
      <p>Обычные здания сначала покупаются, потом строятся руками. Для привязки ставится табличка: первая строка <code>[tp]</code>, вторая строка — тип здания, например <code>bank</code>, <code>warehouse</code>, <code>barracks</code>, <code>market</code>.</p>
      <div class="notice">Мэрия — особое базовое здание. Её можно создать командой <code>/pol town hall</code> или привязать собственной постройкой.</div>
    `
  },
  {
    id: 'provinces', icon: '⬡', title: 'Провинции, районы и дороги',
    html: `
      <h3>Провинция — удалённая ратуша города</h3>
      <p>Провинции позволяют строить город не сплошной массой, а отдельными районами: порт у моря, шахта в горах, форт на границе, торговая колония у ресурса. Это нормальный способ расширяться далеко от столицы.</p>
      <h4>Создать провинцию</h4>
      <pre><code>/pol town outpost create Северная_Шахта mine
/pol town outpost create Южный_Порт port
/pol town outpost create Восточный_Форт fort
/pol town outpost list
/pol town outpost status Северная_Шахта</code></pre>
      <h4>Типы провинций</h4>
      <div class="mini-grid">
        <span>mine — шахтёрский район</span><span>port — порт</span><span>fort — пограничный форт</span><span>colony — колония</span><span>trade_colony — торговая колония</span><span>industrial — промышленный район</span><span>military — военный район</span><span>agrarian — аграрный район</span><span>science — научный район</span><span>religious — религиозный район</span>
      </div>
      <h4>Дороги и управитель</h4>
      <pre><code>/pol town outpost road Северная_Шахта
/pol town outpost governor Северная_Шахта Ник
/pol town outpost tp Северная_Шахта</code></pre>
      <p>Дорога снижает содержание дальней земли и делает район стабильнее. Управитель может заниматься развитием района, а мэр контролирует город в целом.</p>
      <h4>Доход и склад района</h4>
      <pre><code>/pol town outpost deposit Северная_Шахта 50
/pol town outpost collect Северная_Шахта
/pol town outpost collect all</code></pre>
    `
  },
  {
    id: 'province-gameplay', icon: '⇄', title: 'Караваны, блокады, мятежи',
    html: `
      <h3>Провинции — это не просто точки на карте</h3>
      <p>У провинций есть доход, содержание, дороги, здания, управители, караваны, блокада и риск мятежа. Если дальняя провинция не снабжается, она становится проблемой.</p>
      <h4>Развитие провинции</h4>
      <pre><code>/pol town outpost develop Северная_Шахта mine
/pol town outpost develop Южный_Порт dock
/pol town outpost develop Восточный_Форт barracks</code></pre>
      <p>Доступные постройки: <code>mine</code>, <code>dock</code>, <code>lighthouse</code>, <code>customs</code>, <code>caravanserai</code>, <code>barracks</code>, <code>warehouse</code>, <code>watchtower</code>, <code>laboratory</code>, <code>temple</code>.</p>
      <h4>Караваны</h4>
      <pre><code>/pol town outpost caravan send Северная_Шахта Южный_Порт IRON_INGOT 16 25
/pol town outpost caravan list
/pol town outpost caravan intercept Kaluga car-xxxxx</code></pre>
      <p>Караваны перевозят ресурсы и монеты между районами. Во время войны враг может перехватывать караваны рядом с районом отправления или получения.</p>
      <h4>Блокада и мятеж</h4>
      <pre><code>/pol town outpost blockade Kaluga Южный_Порт
/pol town outpost lift Южный_Порт
/pol town outpost pacify Дальняя_Колония</code></pre>
      <p>Блокада временно отключает доход района. Мятеж возникает из-за плохого управления, высокого налога, слабого снабжения или пустой казны.</p>
    `
  },
  {
    id: 'politics', icon: '⚖', title: 'Законы, доверие мэра, суд',
    html: `
      <h3>Политика влияет на город</h3>
      <p>Законы, налоги, суд и доверие мэра — это не декор. Они меняют стабильность города, настроение жителей и поведение провинций.</p>
      <h4>Меню законов</h4>
      <pre><code>/pol laws
/pol law list
/pol menu laws
/pol law toggle closed_borders</code></pre>
      <p>В меню законов можно менять правила города и налог. Роли с доступом: мэр, вице-мэр, дипломат для законов; мэр, вице-мэр и банкир для налогов.</p>
      <h4>Доверие мэра</h4>
      <pre><code>/pol trust
/pol trust Kaluga
/pol admin trust set Kaluga 75
/pol admin trust add Kaluga -10</code></pre>
      <p>Доверие отображается в scoreboard/TAB отдельным значком ресурспака. Оно растёт от стабильной экономики и сильного суда, падает от высоких налогов, пустой казны, войн, мятежей и слабого управления.</p>
      <h4>Суд</h4>
      <pre><code>/pol court accuse Игрок 50 украл ресурсы
/pol court list
/pol court vote case-id guilty
/pol court vote case-id innocent
/pol court end case-id</code></pre>
      <p>Суд позволяет открыть дело против игрока, назначить штраф и провести голосование. В зависимости от режима голосуют только жители или весь сервер.</p>
    `
  },
  {
    id: 'nations', icon: '✉', title: 'Нации и дипломатия',
    html: `
      <h3>Города могут не только воевать</h3>
      <p>Дипломатия нужна, чтобы создавать нации, договариваться о торговле, заключать ненападение, вступать в союзы, мириться после войны или подчинять города через вассалитет.</p>
      <h4>Нации</h4>
      <pre><code>/pol nation create Империя
/pol nation invite Kaluga
/pol nation accept Империя
/pol nation info
/pol nation list
/pol nation leave</code></pre>
      <p>Нация — политический союз городов. У неё может быть столица, общая дипломатия и общий смысл для больших войн.</p>
      <h4>Союзы и договоры</h4>
      <pre><code>/pol treaty offer ZoV trade
/pol treaty offer ZoV nonaggression
/pol treaty accept ZoV trade
/pol treaty break ZoV trade
/pol alliance invite ZoV
/pol alliance accept ZoV</code></pre>
      <p>Типы договоров: <code>trade</code>, <code>nonaggression</code>, <code>military</code>, <code>embargo</code>, <code>guarantee</code>. Торговые договоры дают экономический смысл миру, военные — поддержку в конфликтах.</p>
      <h4>Мир и вассалитет</h4>
      <pre><code>/pol peace offer ZoV
/pol peace accept ZoV
/pol vassal info</code></pre>
    `
  },
  {
    id: 'war', icon: '⚔', title: 'Войны и захват чанков',
    html: `
      <h3>Война должна иметь понятную цель</h3>
      <p>Война — это конфликт между городами с атакующим, защитником, целью и длительностью. Для обычных игроков могут быть требования: жители, сила, онлайн, кулдауны. Админ может запускать войну без ограничений для ивентов.</p>
      <h4>Обычная война</h4>
      <pre><code>/pol war help
/pol war goals
/pol war declare ZoV conquest
/pol war status
/pol war list</code></pre>
      <h4>Война за чанк</h4>
      <pre><code>/pol admin war chunk Kaluga ZoV 60
/pol war capture</code></pre>
      <p>Админ запускает войну за территорию. Затем игрок атакующего города стоит в чужом чанке и пишет <code>/pol war capture</code>. Если условия подходят, чанк переходит атакующему городу.</p>
      <h4>Админские команды войны</h4>
      <pre><code>/pol admin war start Kaluga ZoV conquest 60
/pol admin war score Kaluga ZoV attacker 100
/pol admin war finish Kaluga ZoV
/pol admin war stop Kaluga ZoV
/pol admin chunk give Kaluga
/pol admin chunk transfer ZoV Kaluga</code></pre>
      <h4>Цели войны</h4>
      <div class="mini-grid"><span>rivalry — престиж</span><span>conquest/chunk — территория</span><span>reparations — выплаты</span><span>vassalize — вассалитет</span><span>regime — смена режима</span><span>break_alliance — разрыв союза</span><span>liberation — освобождение</span></div>
    `
  },
  {
    id: 'brewing', icon: '☕', title: 'Напитки, зельеварки и бочки',
    html: `
      <h3>Напитки готовятся физически</h3>
      <p>Меню <code>/pol brew</code> — справочник. Основное приготовление идёт через игровые блоки: зельеварки и бочки в погребах. Это игровые рецепты сервера, не реальные инструкции.</p>
      <h4>Зельеварка</h4>
      <pre><code>1. Поставь Brewing Stand
2. В нижние слоты положи бутылки или воду
3. В верхний слот положи ингредиент
4. Присядь и нажми ПКМ по зельеварке</code></pre>
      <p>Примеры: кофейные ингредиенты дают кофе, чайные листья — чай, какао — шоколадные напитки, ягоды — ягодные напитки.</p>
      <h4>Бочка в погребе</h4>
      <pre><code>1. Поставь Barrel ниже Y=55
2. Лучше рядом с камнем/льдом
3. Не ставь рядом лаву, огонь, костры, магму
4. Положи ингредиенты
5. Shift + ПКМ запускает выдержку
6. После созревания снова Shift + ПКМ</code></pre>
      <h4>Ингредиенты</h4>
      <p>Есть кофейные, чайные, фруктовые, пряные, молочные и погребные ингредиенты: <code>coffee_beans</code>, <code>roasted_coffee_beans</code>, <code>coffee_powder</code>, <code>black_tea_leaves</code>, <code>mint_leaves</code>, <code>chamomile_flowers</code>, <code>lemon_slice</code>, <code>cinnamon_stick</code>, <code>cream_pitcher</code>, <code>rye_malt</code>, <code>grape_must</code> и другие.</p>
      <pre><code>/pol brew guide
/pol brew recipes
/pol crafts list
/pol crafts give coffee_powder</code></pre>
    `
  },
  {
    id: 'weapons', icon: '⌖', title: 'Оружие и прицеливание',
    html: `
      <h3>Оружие работает через ресурспак</h3>
      <p>Огнестрельное оружие имеет CustomModelData, 3D-модели и отдельные aim-модели. Если ресурспак не принят, оружие будет выглядеть неправильно.</p>
      <h4>Команды</h4>
      <pre><code>/pol weapon menu
/pol weapon list
/pol weapon buy pistol
/pol weapon ammo 32
/pol weapon give rifle</code></pre>
      <h4>Управление</h4>
      <ul class="deep-list">
        <li><b>ПКМ</b> — выстрел.</li>
        <li><b>Shift</b> — прицеливание, меньше разброс и другая модель в руке.</li>
        <li><b>Патроны</b> покупаются отдельно через <code>/pol weapon ammo</code>.</li>
      </ul>
      <p>Типы оружия: <code>pistol</code>, <code>revolver</code>, <code>smg</code>, <code>rifle</code>, <code>assault_rifle</code>, <code>shotgun</code>, <code>sniper_rifle</code>. Ближний бой: <code>sword</code>, <code>dagger</code>, <code>battle_axe</code>, <code>war_hammer</code>, <code>spear</code>.</p>
    `
  },
  {
    id: 'decor', icon: '✧', title: 'NPC и голограммы',
    html: `
      <h3>Декорации встроены в PolityMinePolitical</h3>
      <p>В плагине есть свои NPC и голограммы. Они нужны для спавна, подсказок, меню, картографа, регистратора городов и красивых точек взаимодействия. Данные сохраняются в <code>decorations.yml</code>.</p>
      <h4>Голограммы</h4>
      <pre><code>/pol holo create spawn_main &amp;bTerraPolis | &amp;7/pol menu
/pol holo add spawn_main &amp;eСоздай город через /pol town create
/pol holo movehere spawn_main
/pol holo delete spawn_main</code></pre>
      <p>Символ <code>|</code> делит текст на строки. Можно делать красивые заголовки, подсказки, указатели NPC и ссылки.</p>
      <h4>NPC</h4>
      <pre><code>/pol npc create guide villager &amp;bГид TerraPolis
/pol npc command guide set player:pol menu
/pol npc message guide &amp;7Открыл главное меню.
/pol npc movehere guide</code></pre>
      <p>Команда <code>player:</code> выполняется от имени игрока. Так можно открывать меню законов, городов, карты, паспорта и т.д.</p>
    `
  },
  {
    id: 'socials', icon: '☄', title: 'Соцсети и реклама',
    html: `
      <h3>Соцсети TerraPolis</h3>
      <p>В плагине есть команда <code>/pol socials</code>, а также авто-реклама в чат и footer TAB. Ссылки можно менять в конфиге без перекомпиляции.</p>
      <div class="mini-grid">
        <span>Discord — https://discord.gg/EGhcbRDzG</span>
        <span>VK — https://vk.ru/club238922711</span>
        <span>YouTube — https://youtube.com/@terrapolis-y3s?si=M6hd04EfkU4soa9d</span>
        <span>TikTok — https://www.tiktok.com/@terrapolis1</span>
        <span>Почта — terrapolis1@gmail.com</span>
      </div>
      <pre><code>/pol socials</code></pre>
    `
  },
  {
    id: 'admin', icon: '⌘', title: 'Админ-команды',
    html: `
      <h3>Для ивентов, тестов и исправлений</h3>
      <p>Админские команды нужны, чтобы запускать войны без ограничений, чинить чанки, создавать провинции, менять казну, доверие, суды и обновлять карту. Большинство требует <code>politymine.admin</code> или OP.</p>
      <h4>Войны и чанки</h4>
      <pre><code>/pol admin war chunk Kaluga ZoV 60
/pol admin war start Kaluga ZoV conquest 60
/pol admin war finish Kaluga ZoV
/pol admin war stop Kaluga ZoV
/pol admin chunk give Kaluga
/pol admin chunk transfer ZoV Kaluga</code></pre>
      <h4>Провинции</h4>
      <pre><code>/pol admin outpost create Kaluga Северный_Форт fort here
/pol admin outpost blockade Kaluga Порт 45
/pol admin outpost revolt Kaluga Колония 90
/pol admin outpost clear Kaluga Колония
/pol admin outpost capture ZoV Порт Kaluga</code></pre>
      <h4>Экономика, суд, доверие</h4>
      <pre><code>/pol admin coins add Kaluga 1000
/pol admin trust set Kaluga 75
/pol admin court start Kaluga Player citizens 10 50 причина
/pol admin income
/pol map reload</code></pre>
      <div class="notice">Для игроков показывай <code>/guide</code>. Для администрации — <code>/guide admin</code> и <code>/pol admin help</code>.</div>
    `
  }
];

const DONATIONS = [
  { name: 'Terra', publicName: 'Гражданин', badge: 'E03A', color: '#2BF0C8', price: 'уточнить', summary: 'Стартовая поддержка проекта: красивый бейдж, косметика и базовый комфорт.', perks: ['Префикс/бейдж Гражданин в чате и TAB', '5 слотов аукциона', 'RTP cooldown -10%', 'BattlePass опыт +5%', '/hat', '/workbench', 'homes: terra'] },
  { name: 'Polis', publicName: 'Депутат', badge: 'E03B', color: '#18A8FF', price: 'уточнить', summary: 'Для активных игроков экономики: больше аукциона и меньше комиссия.', perks: ['Всё из Terra', '8 слотов аукциона', 'Комиссия аукциона -5%', 'BattlePass опыт +8%', '/enderchest', '/anvil', 'homes: polis'] },
  { name: 'Senator', publicName: 'Сенатор', badge: 'E03C', color: '#FF8FAB', price: 'уточнить', summary: 'Комфортный ранг для торговцев, политиков и строителей.', perks: ['Всё из Polis', '12 слотов аукциона', 'Комиссия аукциона -8%', 'BattlePass опыт +12%', '/repair', '/feed', '/nick', 'homes: senator'] },
  { name: 'Consul', publicName: 'Консул', badge: 'E03D', color: '#C77DFF', price: 'уточнить', summary: 'Высокий ранг с сильным набором удобств и красивым статусом.', perks: ['Всё из Senator', '16 слотов аукциона', 'Комиссия аукциона -10%', 'BattlePass опыт +15%', '/heal', '/ptime', '/pweather', 'homes: consul'] },
  { name: 'Imperator', publicName: 'Канцлер', badge: 'E03E', color: '#FFCF6A', price: 'уточнить', summary: 'Максимальная поддержка проекта: топовый бейдж, максимум аукциона и бонусов.', perks: ['Всё из Consul', '24 слота аукциона', 'Комиссия аукциона -15%', 'BattlePass опыт +20%', '/heal', '/feed', '/repair', 'homes: imperator'] }
];

const COMMAND_GROUPS = [
  { title: 'Главное меню и старт', items: [
    ['/pol', 'Открыть главное меню PolityMinePolitical. Алиасы: /pm, /politics, /city, /town, /t.'],
    ['/pol menu', 'Главное GUI сервера.'],
    ['/pol menu town', 'Раздел города.'],
    ['/pol menu nation', 'Раздел наций.'],
    ['/pol menu laws', 'Красивое меню законов и налогов.'],
    ['/pol menu war', 'Раздел войн.'],
    ['/pol menu economy', 'Экономика и банк.'],
    ['/pol menu weapons', 'Оружейная мастерская.'],
    ['/guide', 'Понятный гайд для новичка.'],
    ['/guide war', 'Как работают войны и захват чанков.'],
    ['/guide town', 'Как создать и развивать город.'],
    ['/guide admin', 'Подсказки для администрации.'],
    ['/pol socials', 'Discord, VK, YouTube, TikTok, почта.'],
    ['/pol whereami', 'Показать текущую территорию: город или дикие земли.']
  ]},
  { title: 'Национальность и RTP', items: [
    ['/pol nationality', 'Открыть выбор материка/национальности. Алиас: /nationality, /continent.'],
    ['/pol nationality <материк>', 'Выбрать материк вручную.'],
    ['/pol rtp', 'Телепортироваться на выбранный материк. VIP Terra даёт RTP -10% cooldown.']
  ]},
  { title: 'Город', items: [
    ['/pol town create <название>', 'Создать город в текущем месте.'],
    ['/pol town hall', 'Создать стартовую мэрию или привязать мэрию к городу. Алиасы: townhall, meria, мэрия.'],
    ['/pol town list', 'Список городов.'],
    ['/pol town info [город]', 'Информация о городе.'],
    ['/pol town invite <ник>', 'Пригласить игрока в город.'],
    ['/pol town accept <город>', 'Принять приглашение.'],
    ['/pol town leave', 'Покинуть город.'],
    ['/pol town kick <ник>', 'Выгнать игрока из города.'],
    ['/pol town role <ник> <роль>', 'Выдать роль: banker, warlord, diplomat, builder, vice_mayor и т.д.'],
    ['/pol town roles', 'Показать роли и их смысл.'],
    ['/pol town announce <текст>', 'Городское объявление.'],
    ['/pol town transfer <ник>', 'Передать мэрию другому игроку.'],
    ['/pol town claim', 'Захватить текущий чанк в город.'],
    ['/pol town unclaim', 'Освободить текущий чанк.'],
    ['/pol town setspawn', 'Установить спавн города.'],
    ['/pol town spawn [город]', 'Телепорт на спавн города.'],
    ['/pol town disband confirm', 'Удалить свой город. Опасная команда.']
  ]},
  { title: 'Казна и развитие города', items: [
    ['/pol town deposit <материал> <кол-во>', 'Положить ресурсы в городское хранилище.'],
    ['/pol town depositall', 'Положить подходящие ресурсы из инвентаря в город.'],
    ['/pol town depositcoins <кол-во>', 'Положить физические монеты в казну.'],
    ['/pol town withdrawcoins <кол-во>', 'Вывести монеты из казны.'],
    ['/pol town bank', 'Открыть банк/экономику города.'],
    ['/pol town upgrade <ветка>', 'Улучшить ветку развития города.'],
    ['/pol town upgrades', 'Открыть меню улучшений.'],
    ['/pol town buildings', 'Список доступных зданий.'],
    ['/pol town build <здание>', 'Купить/построить здание города.'],
    ['/pol town rebuild <здание>', 'Обновить/перепривязать здание.'],
    ['/pol town sign', 'Подсказка по табличкам зданий.']
  ]},
  { title: 'Провинции и удалённые ратуши', items: [
    ['/pol town outpost create <id> [тип]', 'Создать удалённую ратушу: colony, port, mine, fort, trade_colony и другие.'],
    ['/pol town outpost list', 'Список провинций города.'],
    ['/pol town outpost status <id>', 'Подробный статус провинции.'],
    ['/pol town outpost tp <id>', 'Телепорт к провинции.'],
    ['/pol town outpost delete <id>', 'Удалить провинцию.'],
    ['/pol town outpost road <id>', 'Построить дорогу к провинции.'],
    ['/pol town outpost governor <id> <ник>', 'Назначить управителя.'],
    ['/pol town outpost deposit <id> [монеты]', 'Положить монеты в казну провинции.'],
    ['/pol town outpost collect <id|all>', 'Собрать доход провинции.'],
    ['/pol town outpost develop <id> <здание>', 'Развить здание провинции: mine, dock, lighthouse, customs, caravanserai, barracks, warehouse, watchtower, laboratory, temple.'],
    ['/pol town outpost caravan send <откуда> <куда> <ресурс|none> <кол-во> <монеты>', 'Отправить караван между провинциями.'],
    ['/pol town outpost caravan list', 'Список караванов.'],
    ['/pol town outpost blockade <город> <район>', 'Заблокировать район врага во время войны.'],
    ['/pol town outpost lift <район>', 'Снять блокаду со своей провинции.'],
    ['/pol town outpost pacify <район>', 'Усмирить мятежный район.'],
    ['/pol town outpost contract create <район> <материал> <кол-во> <награда>', 'Создать контракт провинции.'],
    ['/pol town outpost contract deliver <id>', 'Сдать контракт.'],
    ['/pol town outpost capture <город> <район>', 'Захватить провинцию во время войны.']
  ]},
  { title: 'Политика города', items: [
    ['/pol law list', 'Открыть красивое меню законов.'],
    ['/pol law toggle <закон>', 'Включить/выключить закон.'],
    ['/pol tax info', 'Показать налог города.'],
    ['/pol tax set <0-25>', 'Установить налог.'],
    ['/pol town religion <тип>', 'Выбрать религию города.'],
    ['/pol town government <тип>', 'Выбрать форму правления.'],
    ['/pol stability', 'Показать стабильность города.'],
    ['/pol trust', 'Показать доверие мэра своего города.'],
    ['/pol trust <город>', 'Показать доверие мэра выбранного города.']
  ]},
  { title: 'Суд', items: [
    ['/pol court help', 'Помощь по суду.'],
    ['/pol court accuse <игрок> <штраф> <причина>', 'Открыть дело против игрока в своём городе.'],
    ['/pol court start <город> <игрок> <citizens|server> <минуты> <штраф> <причина>', 'Запустить дело с режимом голосования.'],
    ['/pol court list [город]', 'Список дел.'],
    ['/pol court status <id>', 'Статус конкретного дела.'],
    ['/pol court vote <id> guilty', 'Голосовать за виновен.'],
    ['/pol court vote <id> innocent', 'Голосовать за невиновен.'],
    ['/pol court end <id>', 'Закрыть дело.'],
    ['/pol court cancel <id>', 'Отменить дело.']
  ]},
  { title: 'Нации и дипломатия', items: [
    ['/pol nation create <название>', 'Создать нацию.'],
    ['/pol nation info [нация]', 'Информация о нации.'],
    ['/pol nation invite <город>', 'Пригласить город в нацию.'],
    ['/pol nation accept <нация>', 'Принять приглашение в нацию.'],
    ['/pol nation leave', 'Покинуть нацию.'],
    ['/pol nation list', 'Список наций.'],
    ['/pol treaty offer <город> <тип>', 'Предложить договор: trade, nonaggression, military, embargo, guarantee.'],
    ['/pol treaty accept <город> <тип>', 'Принять договор.'],
    ['/pol treaty break <город> <тип>', 'Разорвать договор.'],
    ['/pol alliance invite <город>', 'Предложить союз.'],
    ['/pol alliance accept <город>', 'Принять союз.'],
    ['/pol alliance remove <город>', 'Разорвать союз.'],
    ['/pol peace offer <город>', 'Предложить мир.'],
    ['/pol peace accept <город>', 'Принять мир.'],
    ['/pol vassal info', 'Информация по вассалитету.']
  ]},
  { title: 'Война', items: [
    ['/pol war help', 'Понятный гайд по войнам.'],
    ['/pol war goals', 'Список целей войны.'],
    ['/pol war declare <город> [цель]', 'Объявить войну. Цели: rivalry, conquest/chunk, reparations, vassalize, regime, break_alliance, liberation.'],
    ['/pol war status', 'Статус войны твоего города.'],
    ['/pol war list', 'Список активных войн.'],
    ['/pol war capture', 'Захватить текущий чужой чанк при активной войне за территорию.'],
    ['/pol war causes <город>', 'Показать причины/поводы к войне.']
  ]},
  { title: 'Оружие', items: [
    ['/pol weapon menu', 'Открыть меню оружия.'],
    ['/pol weapon list', 'Список оружия и требований.'],
    ['/pol weapon buy <тип>', 'Купить оружие: pistol, revolver, smg, rifle, assault_rifle, shotgun, sniper_rifle.'],
    ['/pol weapon ammo [кол-во]', 'Купить патроны.'],
    ['/pol weapon give <тип|ammo>', 'Админ-выдача оружия. Нужно politymine.admin.weapon.']
  ]},
  { title: 'Напитки и кастомные предметы', items: [
    ['/pol brew guide', 'Подробно: зельеварка, бочка, погреб.'],
    ['/pol brew recipes', 'Список напитков и требований.'],
    ['/pol brew make <напиток>', 'Старый автокрафт, если разрешён в конфиге.'],
    ['/pol brew give <напиток>', 'Админ-выдача напитка.'],
    ['/pol crafts menu', 'Меню кастомных предметов.'],
    ['/pol crafts list', 'Список кастомных ингредиентов и предметов.'],
    ['/pol crafts give <id>', 'Выдать предмет: coffee_beans, tea_leaves, mint_leaves, coffee_powder и др.']
  ]},
  { title: 'Аукцион, магазины, монеты', items: [
    ['/pol auction list', 'Открыть аукцион. Алиасы: /pol auc, /pol ah.'],
    ['/pol auction sell <цена>', 'Выставить предмет из руки на аукцион.'],
    ['/pol auction buy <id>', 'Купить лот.'],
    ['/pol auction cancel <id>', 'Снять свой лот.'],
    ['/pol shop', 'Команды сундук-магазинов TerraPolis.'],
    ['/pol warp', 'Команды варпов магазинов.'],
    ['/pol coins info', 'Информация о монетах.'],
    ['/pol coins deposit <кол-во>', 'Положить монеты.'],
    ['/pol coins withdraw <кол-во>', 'Вывести монеты.']
  ]},
  { title: 'Технологии, заказы, прогресс', items: [
    ['/pol progress', 'Закрытые крафты и требования развития.'],
    ['/pol tech list', 'Список технологий.'],
    ['/pol tech info <технология>', 'Описание технологии.'],
    ['/pol tech research <технология>', 'Исследовать технологию.'],
    ['/pol province list', 'Список провинций/проектов.'],
    ['/pol order list', 'Список заказов.'],
    ['/pol order create <материал> <кол-во> <награда>', 'Создать городской заказ.'],
    ['/pol order deliver <id>', 'Сдать заказ.'],
    ['/pol order cancel <id>', 'Отменить заказ.'],
    ['/pol top power|coins|citizens|territory|season', 'Рейтинги городов.'],
    ['/pol season', 'Сезонная сводка.'],
    ['/pol newspaper', 'Газета/новости сервера.']
  ]},
  { title: 'Шпионаж', items: [
    ['/pol spy help', 'Справка по разведке.'],
    ['/pol spy info <город>', 'Сведения о цели.'],
    ['/pol spy infiltrate <город>', 'Отправить агента.'],
    ['/pol spy report <город>', 'Получить отчёт.'],
    ['/pol spy leak <город>', 'Слить досье.'],
    ['/pol spy agitate <город>', 'Агитация и давление.'],
    ['/pol spy sabotage <город>', 'Диверсия.'],
    ['/pol spy steal <город>', 'Кража/рейд по логике плагина.'],
    ['/pol spy counter', 'Контрразведка.'],
    ['/pol spy log', 'Журнал разведки.']
  ]},
  { title: 'Голограммы и NPC PolityMinePolitical', items: [
    ['/pol holo help', 'Помощь по своим голограммам.'],
    ['/pol holo create <id> <текст>', 'Создать голограмму. Символ | делит строки.'],
    ['/pol holo add <id> <строка>', 'Добавить строку.'],
    ['/pol holo set <id> <номер> <текст>', 'Изменить строку.'],
    ['/pol holo remove <id> <номер>', 'Удалить строку.'],
    ['/pol holo movehere <id>', 'Переместить голограмму к себе.'],
    ['/pol holo tp <id>', 'Телепорт к голограмме.'],
    ['/pol holo delete <id>', 'Удалить голограмму.'],
    ['/pol holo demo', 'Создать демо-голограммы.'],
    ['/pol npc create <id> <villager|guard|armorstand> <имя>', 'Создать NPC PolityMinePolitical.'],
    ['/pol npc command <id> set <команда>', 'Повесить команду на NPC.'],
    ['/pol npc message <id> <текст>', 'Сообщение при клике.'],
    ['/pol npc movehere <id>', 'Переместить NPC к себе.'],
    ['/pol npc delete <id>', 'Удалить NPC.']
  ]},
  { title: 'Карта Dynmap', items: [
    ['/pol map status', 'Статус Dynmap-интеграции.'],
    ['/pol map url', 'Показать ссылку на карту.'],
    ['/pol map reload', 'Перерисовать города, провинции и территории на Dynmap. Нужно право reload/admin.']
  ]},
  { title: 'Админ-команды', items: [
    ['/pol admin help', 'Полный список админ-команд.'],
    ['/pol reload', 'Перезагрузка конфига/данных/карты. Нужно politymine.admin.reload.'],
    ['/pol admin war chunk <атака> <защита> [мин]', 'Начать войну за чанк без лимитов.'],
    ['/pol admin war start <атака> <защита> [цель] [мин]', 'Начать любую войну без требований.'],
    ['/pol admin war finish <город1> <город2>', 'Завершить войну по счёту.'],
    ['/pol admin war stop <город1> <город2>', 'Остановить войну без победителя.'],
    ['/pol admin war score <город1> <город2> <attacker|defender> <очки>', 'Выставить счёт войны.'],
    ['/pol admin chunk give <город>', 'Отдать текущий чанк городу.'],
    ['/pol admin chunk transfer <откуда> <куда>', 'Передать текущий чанк между городами.'],
    ['/pol admin outpost create <город> <id> <тип> here', 'Создать провинцию там, где стоишь.'],
    ['/pol admin outpost blockade <город> <район> <мин>', 'Выставить блокаду.'],
    ['/pol admin outpost revolt <город> <район> <мин>', 'Запустить мятеж провинции.'],
    ['/pol admin outpost clear <город> <район>', 'Снять блокаду и мятеж.'],
    ['/pol admin outpost capture <откуда> <район> <куда>', 'Передать провинцию другому городу.'],
    ['/pol admin outpost tick', 'Вручную обработать провинциальные системы.'],
    ['/pol admin election start <город> <citizens|server> <мин> <кандидаты...>', 'Запустить выборы мэра.'],
    ['/pol admin court start <город> <игрок> <citizens|server> <мин> <штраф> <причина>', 'Запустить суд.'],
    ['/pol admin trust set/add <город> <число>', 'Изменить доверие мэра.'],
    ['/pol admin deltown <город> confirm', 'Удалить город.'],
    ['/pol admin resettown <город> confirm', 'Обнулить город.'],
    ['/pol admin wipe confirm', 'Удалить все города/нации/войны. Очень опасно.'],
    ['/pol admin coins set/add <город> <кол-во>', 'Изменить казну.'],
    ['/pol admin upgrade set <город> <улучшение> <уровень>', 'Выставить уровень улучшения.'],
    ['/pol admin freeupgrade <город> <улучшение> [уровень|max]', 'Бесплатно вкачать ветку. OP.'],
    ['/pol admin maxupgrades <город>', 'Вкачать все ветки. OP.'],
    ['/pol admin freebuild <город> <здание> [уровень|max]', 'Бесплатно построить здание. OP.'],
    ['/pol admin maxbuildings <город>', 'Построить все здания. OP.'],
    ['/pol admin income', 'Вручную начислить доход городов.'],
    ['/pol admin workers spawn <город>', 'Заспавнить рабочих NPC.'],
    ['/pol admin givecoin <ник> <кол-во>', 'Выдать физические монеты.']
  ]}
];

const INGREDIENTS = [
  'coffee_beans','tea_leaves','mint_leaves','barrel_culture','roasted_coffee_beans','coffee_powder','black_tea_leaves','chamomile_flowers','lemon_slice','orange_peel','cinnamon_stick','vanilla_pod','ginger_root','dried_berries','caramel_syrup','cream_pitcher','ice_chips','salt_crystals','spice_mix','cocoa_mass','rye_malt','grape_must','cocoa beans','sweet berries','apple','honey bottle','prismarine crystals','yellow dye'
];
