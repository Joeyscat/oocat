#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const images = require('images')

// process是一个node环境下的全局变量，不需要引用，直接使用即可。
// process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。
// 第一个元素为process.execPath。第二个元素为当前执行的JavaScript文件路径。
// 剩余的元素为其他命令行参数。

const argv = process.argv

// console.log('process.execPath :>> ', process.execPath)
// console.log('argv[0] :>> ', argv[0])
// console.log('argv[1] :>> ', argv[1])
// console.log('argv[2] :>> ', argv[2])

if (argv.length <= 2) {
  console.log('请指定要处理的文件')
  return
}
const filename = argv[2]

const fileToProcess = path.join(__dirname, filename)
fs.exists(fileToProcess, (exists) => {
  if (exists) {
    zipImage(fileToProcess)
  } else {
    console.error('找不到文件 :>> ', fileToProcess)
  }
})

const zipImage = (image) => {
  console.log('压缩图片 :>> ', image)
}
