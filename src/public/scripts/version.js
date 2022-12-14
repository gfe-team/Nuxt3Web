;(function () {
  try {
    const version = document
      .getElementById('vscp')
      .src.split('?')[1]
      .split('=')[1]
    console.log(
      `%c version %c v${version} `,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#007aff ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;'
    )
  } catch (e) {}
})()
