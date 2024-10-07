/**
 * 生成范围内的随机整数
 * @param {number} [min=0] 最小值
 * @param {number} [max=10] 最大值
 * @returns {number} 返回生成的数字
 */
export function getRandomInt(min = 0, max = 10) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
