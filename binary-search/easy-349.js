/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let intersection

// Brute Force
intersection = function (nums1, nums2) {
  const answer = new Set()
  nums1.forEach(num1 => {
    nums2.forEach(num2 => {
      if (num1 === num2) {
        answer.add(num1)
      }
    })
  })

  return [...answer]
}

//
intersection = function (nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  const answer = new Set([...set1].filter(num1 => set2.has(num1)))

  return [...answer]
}
