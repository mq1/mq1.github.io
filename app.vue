<template>
  <Html lang="en">
    <Head>
      <Title>Manuel Quarneti</Title>
      <Meta name="description" content="Manuel Quarneti's personal website" />
    </Head>
  </Html>

  <div h-screen flex flex-col items-center justify-between p-4>
    <div></div>
    <div>
      <div flex flex-col gap-y-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 m-4 rounded-3xl shadow-xl>
        <h1 text-5xl font-bold>Hi, I'm Manuel Quarneti</h1>
        <div flex gap-x-2>
          <a href="https://github.com/mq1" i-feather-github></a>
          <a href="https://linkedin.com/in/mq1/" i-feather-linkedin></a>
          <a href="mailto:manuelquarneti@gmail.com" i-feather-mail></a>
        </div>
      </div>
      <div flex flex-col sm:flex-row justify-between gap-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white p-8 m-4 rounded-3xl shadow-xl>
        <a underline underline-3 underline-white-500 href="https://mq1.github.io/mq1/en.pdf">Download my CV in English</a>
        <a underline underline-3 underline-white-500 href="https://mq1.github.io/mq1/it.pdf">Scarica il mio CV in Italiano</a>
      </div>
    </div>
    <div>© 2021 Manuel Quarneti</div>
  </div>
</template>
