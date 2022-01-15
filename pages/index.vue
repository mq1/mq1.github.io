<template>
  <div flex flex-col gap-y-8>
    <div flex flex-col gap-y-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-3xl shadow-xl>
      <h1 text-5xl font-bold>Hi, I'm Manuel Quarneti</h1>
      <div flex gap-x-2>
        <a href="https://github.com/mq1" i-feather-github></a>
        <a href="https://linkedin.com/in/mq1/" i-feather-linkedin></a>
        <a href="mailto:manuelquarneti@gmail.com" i-feather-mail></a>
      </div>
    </div>
    <div flex flex-col sm:flex-row justify-between gap-8>
      <button bg-gradient-to-r from-red-500 to-yellow-500 text-white p-8 rounded-3xl shadow-xl underline href="https://mq1.github.io/mq1/en.pdf">Download my CV in English</button>
      <button bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-3xl shadow-xl underline href="https://mq1.github.io/mq1/it.pdf">Scarica il mio CV in Italiano</button>
    </div>
  </div>
</template>
