const fetch = require('node-fetch')

exports.handler = async(event, context) => {
  const target = event.queryStringParameters.target
  const currentVersion = event.queryStringParameters.current_version

  const res = await fetch('https://api.github.com/repos/mq1/runmc/releases/latest')
  const json = await res.json()
  const latestVersion = json.name
  const pubDate = json.published_at

  // return 204 No Content if using latest version
  if (currentVersion === latestVersion) {
    return {
      statusCode: 204,
      body: '',
    }
  }

  let fileName

  switch (target) {
    case 'darwin':
      fileName = 'runmc.app.tar.gz'
      break
    case 'linux':
      fileName = `runmc_${latestVersion}_amd64.AppImage.tar.gz`
      break
    case 'win64':
      fileName = `runmc_${latestVersion}_x64.msi.zip`
      break

    default:
      break
  }

  const sigRes = await fetch(`https://github.com/mq1/runmc/releases/download/${latestVersion}/${fileName}.sig`)
  const sig = await sigRes.text()

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: `https://github.com/mq1/runmc/releases/download/${latestVersion}/${fileName}`,
      version: latestVersion,
      pub_date: pubDate,
      signature: sig,
    }),
  }
}
