import { exampleAction, exampleSelector } from '.'
import { asyncAction } from '../'

/**
 * 生成一个随机数（0~9）
 */
const getNum = () =>
  new Promise((resolve) => setTimeout(() => resolve(Math.round(Math.random() * 10)), 3000))

/**
 * 从服务器获取一个随机数
 */
export const random = asyncAction(() => (dispatch) => {
  getNum().then((res) => dispatch(exampleAction.replace(res)))
})

/**
 * 保存一个数字
 */
const saveNum = (num) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(num)
      resolve()
    }, 3000)
  )

/**
 * 往服务器储存一个数字
 */
export const save = asyncAction(() => (_, selector) => {
  saveNum(selector(exampleSelector.countGetter())).then(() => alert('OK'))
})
