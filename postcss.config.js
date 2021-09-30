// // var px2rem = require('postcss-px2rem');
// module.exports = {
//   module: {
//     rules: [{
//       loader: 'px2rem-loader',
//         // options here
//         options: {
//           remUni: 75,
//           remPrecision: 8
//         }
//     }]
//   },
//   plugins: [
//     require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']}),// 自动添加css前缀

//   ],
//   // postcss: function() {
//   //   return [px2rem({remUnit: 75})];
//   // }
// }
// module.exports = {
//   css: {
//     loaderOptions: {
//       css: {},
//       postcss: {
//         plugins: [
//           require('postcss-px2rem')({
//             remUnit: 37.5
//           })
//         ]
//       }
//     }
//   },
// }

module.exports = {
  plugins: {
    "postcss-px2rem": {
      remUnit: 64,
      remPrecision: 2
    }
  }
}