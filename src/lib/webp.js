/**
 * Created by zhaoyue on 2017/5/2.
 */

// some small (2x1 px) test images for each feature
/* eslint-disable */
const images = {
  basic: 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==',
  lossless: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA='
}

export default function isSupportWebp (feature) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      if (this.width === 2 && this.height === 1) {
        resolve(true)
      } else {
        reject(false)
      }
    }
    img.onerror = function () {
      reject(false)
    }
    img.src = images[feature || "basic"]
  })
}
